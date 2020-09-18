<template>
  <div class="cartOrder pt-7">
<div class="container mb-4">
      <div class="mt-3" v-if="this.cartTotal !== 0">
        <div>
          <Progress :steps="currentStep"/>
        </div>
        <div class="row">
          <div class="col-lg-7">
            <table class="table">
              <thead>
                <tr class="text-center">
                  <th scope="col" class="border-0 pl-0">產品</th>
                  <th scope="col" class="border-0">產品數量</th>
                  <th scope="col" class="border-0">價格</th>
                  <th scope="col" class="border-0">刪除</th>
                </tr>
              </thead>
              <tbody>
                <tr class="cartOrderItem border-bottom border-top text-center" v-for="item in cart" :key="item.product.id">
                  <th scope="row" class="border-0 px-0 font-weight-normal py-4 d-sm-flex justify-content-sm-center align-items-sm-center">
                    <img :src="item.product.imageUrl" alt="" class="cartOrderItem-img d-block d-md-inline">
                    <p class="cartOrderItem-title mb-0 ml-md-3 font-weight-bold d-inline-block">{{item.product.title}}</p>
                  </th>
                  <td class="border-0 align-middle" style="max-width: 160px;">
                    <div class="input-group d-flex justify-content-center flex-column flex-xl-row">
                      <div class="input-group-prepend justify-content-center">
                        <button class="btn btn-outline-dark border-0 p-1"
                        type="button" id="button-addon1"
                        @click="quantityUpdata(item.product.id, item.quantity - 1)" :disabled="item.quantity === 1">
                          <i class="fas fa-minus"></i>
                        </button>
                      </div>
                      <span class=" border-0 text-center d-block my-auto shadow-none px-0 px-sm-3">{{item.quantity}}</span>
                      <div class="input-group-append justify-content-center">
                        <button class="btn btn-outline-dark border-0 p-1"
                        type="button" id="button-addon2"
                        @click="quantityUpdata(item.product.id, item.quantity + 1)">
                          <i class="fas fa-plus"></i>
                        </button>
                      </div>
                    </div>
                  </td>
                  <td class="border-0 align-middle"><p class="mb-0 ml-auto">{{ item.product.price | total }}</p></td>
                  <td class="border-0 align-middle"><button type="button" class="btn border-0 btn-sm" @click.prevent=" removeCartItem(item.product.id)"><i class="fas fa-times fa-lg"></i></button></td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="col-lg-5">
            <div class="border p-4 mb-4">
              <h4 class="font-weight-bold mb-4">詳細訂單內容</h4>
              <table class="table text-muted border-bottom">
                <tbody>
                  <tr v-for="item in cart" :key="item.product.id">
                    <th scope="row" class="border-0 px-2 font-weight-normal text-left">{{ item.product.title }}</th>
                    <td class="border-0 px-2  text-center">{{ item.quantity }}{{item.product.unit}}</td>
                    <td class="text-right pl-2 pr-0 border-0 ">{{ item.product.price | total }}</td>
                  </tr>
                </tbody>
              </table>
              <div class="d-flex justify-content-between mt-4">
                <p class="mb-0 h4 font-weight-bold">總共</p>
                <p class="mb-0 h4 font-weight-bold">{{ cartTotal | total }}</p>
              </div>
              <router-link to="/checkoutorder" class="btn btn-primary btn-block mt-4">結帳去</router-link>
            </div>
          </div>
        </div>
      </div>
      <div class="my-200 text-center" v-else>
        <h2>您的購物車沒有商品喔~</h2>
        <router-link to="/products" class="h5 m-0"><i class="far fa-arrow-alt-circle-left mr-1"></i>繼續購物</router-link>
      </div>
    </div>
    <Footer/>
    </div>
</template>

<script>
import Footer from '@/components/frontend/Footer.vue'
import Progress from '@/components/frontend/OrderProgress'
export default {
  components: {
    Footer,
    Progress
  },
  data () {
    return {
      currentStep: 0,
      cart: [],
      cartTotal: 0,
      cartQuantity: 0,
      isLoading: false,
      mySteps: ['購物車', '填寫訂單', '訂單確認'],
      line: 5,
      coupon: {},
      couponCode: ''
    }
  },
  created () {
    const vm = this
    vm.$bus.$on('delete', () => {
      this.getCart()
      this.cartTotal = 0
    })
    this.getCart()
  },
  methods: {
    getCart () {
      const loader = this.$loading.show()
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/ec/shopping`
      this.$http.get(url).then((response) => {
        loader.hide()
        this.cart = response.data.data
        this.cart.forEach((item) => {
          this.cartTotal += (item.product.price * item.quantity)
          this.cartQuantity += item.quantity
        })
        this.isLoading = false
      })
    },
    quantityUpdata (id, num) {
      this.isLoading = true
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/ec/shopping`
      const data = {
        product: id,
        quantity: num
      }
      this.$http.patch(url, data).then((response) => {
        this.cartTotal = 0
        this.cartQuantity = 0
        this.getCart()
      })
    },
    removeCartItem (id) {
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/ec/shopping/${id}`
      this.isLoading = true
      this.$http.delete(url).then(() => {
        this.cartTotal = 0
        this.cartQuantity = 0
        this.getCart()
      }).catch((err) => {
        console.log(err.data)
      })
    }
  }
}
</script>

<style lang="scss">
.cartOrder{
  .cartOrderItem-title{
    font-size: 16px;
  }
  .cartOrderItem-img{
    width: 72px;
    height: 72px;
    object-fit: cover;
  }
}
</style>
