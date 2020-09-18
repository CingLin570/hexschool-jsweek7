<template>
  <div class="pt-7">
    <div class="mb-5">
      <Progress :steps="currentStep"/>
    </div>
    <div class="container mb-4">
      <div class="row">
        <div class="col">
          <div class="card">
            <div class="card-body pt-0 px-0">
              <table class="table">
                <thead class="thead-dark">
                  <tr>
                    <th scope="col">購買品項</th>
                    <th scope="col">購買數量</th>
                    <th scope="col">購買總價</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="ordercontent" v-for="(item, i) in order.products" :key="i">
                    <th class="px-0 ordercontent-item">
                      <img :src="item.product.imageUrl" height="70px" alt />
                      <p class="m-0">{{ item.product.title }}</p>
                    </th>
                    <td
                      class="px-0 align-middle ordercontent-item"
                    >{{ item.quantity }}{{ item.product.unit }}</td>
                    <td class="px-0 align-middle ordercontent-item">{{ originPrice | total }}</td>
                  </tr>
                  <tr v-if="!order.coupon">
                    <td></td>
                    <th scope="row">折扣</th>
                    <td>0</td>
                  </tr>
                  <tr v-else>
                    <td></td>
                    <th scope="row">折扣</th>
                    <td>{{ discountPrice | total }}</td>
                  </tr>
                  <tr>
                    <td></td>
                    <th scope="row">總計</th>
                    <td>{{ totalPrice | total }}</td>
                  </tr>
                  <tr>
                    <th scope="row">訂購人姓名</th>
                    <td></td>
                    <td>{{ order.user.name }}</td>
                  </tr>
                  <tr>
                    <th scope="row">訂購人電子信箱</th>
                    <td></td>
                    <td>{{ order.user.email }}</td>
                  </tr>
                  <tr>
                    <th scope="row">訂購人電話</th>
                    <td></td>
                    <td>{{ order.user.tel }}</td>
                  </tr>
                  <tr>
                    <th scope="row">訂購人地址</th>
                    <td></td>
                    <td>{{ order.user.address }}</td>
                  </tr>
                </tbody>
              </table>
              <div>
                <button type="button" class="btn btn-primary" @click="payingOrder">確認付款</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
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
      currentStep: 2,
      order: {
        products: [],
        coupon: null,
        amount: 0,
        user: {
          name: '',
          address: '',
          tel: '',
          email: ''
        }
      },
      pageId: ''
    }
  },
  created () {
    this.pageId = this.$route.params.orderid
    this.getOrder()
  },
  computed: {
    originPrice () {
      return this.order.products.reduce((pre, item) => {
        return pre + item.product.price * item.quantity
      }, 0)
    },
    discountPrice () {
      return Math.round(this.originPrice * ((100 - this.order.coupon.percent) / 100))
    },
    totalPrice () {
      return Math.round(this.order.amount)
    }
  },
  methods: {
    getOrder () {
      const loader = this.$loading.show()
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/ec/orders/${this.pageId}`
      this.$http.get(url).then((response) => {
        loader.hide()
        console.log(response.data.data)
        this.order = response.data.data
      })
    },
    payingOrder () {
      const loader = this.$loading.show()
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/ec/orders/${this.pageId}/paying`
      this.$http.post(url).then(() => {
        loader.hide()
        this.$bus.$emit('message:push',
          '訂單建立成功',
          'success')
        this.$router.push('/ordersuccess')
      }).catch(() => {
        loader.hide()
        this.$bus.$emit('message:push',
          '訂單建立失敗',
          'danger')
      })
    }
  }
}
</script>

<style>
.inputCheckbox{
  width: 20px;
  height: 20px;
}
</style>
