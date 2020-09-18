<template>
    <div class="pt-7">
<div class="container">
      <div class="mt-3">
        <div>
          <Progress :steps="currentStep"/>
        </div>
        <div class="row">
          <div class="col-md-7 mb-3 order-1 order-md-0">
        <validation-observer v-slot="{ invalid }">
          <h2 class="text-left mb-4">訂單個人資料</h2>
          <form class="text-left" @submit.prevent="createOrder">
            <div class="form-group">
              <validation-provider v-slot="{ errors, classes }" rules="required">
                <label for="username">收件人姓名</label>
                <input
                  id="username"
                  v-model="form.name"
                  type="text"
                  class="form-control"
                  :class="classes"
                />
                <span
                  v-if="errors[0]"
                  class="text-danger"
                >{{ `收件人姓名${errors[0].slice(9, errors[0].length)}` }}</span>
              </validation-provider>
            </div>
            <div class="form-group">
              <validation-provider v-slot="{ errors, classes }" rules="required|email">
                <label for="email">Email</label>
                <input
                  id="email"
                  v-model="form.email"
                  type="email"
                  class="form-control"
                  :class="classes"
                />
                <span
                  v-if="errors[0]"
                  class="text-danger"
                >{{ `信箱${errors[0].slice(6,errors[0].length)}` }}</span>
              </validation-provider>
            </div>
            <div class="form-group">
              <validation-provider v-slot="{ errors, classes }" rules="required|min:8|numeric">
                <label for="tel">電話</label>
                <input id="tel" v-model="form.tel" type="tel" class="form-control" :class="classes" />
                <span
                  v-if="errors[0]"
                  class="text-danger"
                >{{ `電話${errors[0].slice(4, errors[0].length)}`}}</span>
              </validation-provider>
            </div>
            <div class="form-group">
              <validation-provider v-slot="{ errors, classes }" rules="required">
                <label for="address">地址</label>
                <input
                  id="address"
                  v-model="form.address"
                  type="text"
                  class="form-control"
                  :class="classes"
                />
                <span
                  v-if="errors[0]"
                  class="text-danger"
                >{{ `地址${errors[0].slice(8, errors[0].length)}` }}</span>
              </validation-provider>
            </div>
            <div class="form-group">
              <label for="message">購買方式</label>
              <select v-model="form.payment" class="form-control" required>
                <option value disabled>請選擇付款方式</option>
                <option value="WebATM">WebATM</option>
                <option value="ATM">ATM</option>
                <option value="CVS">CVS</option>
                <option value="Barcode">Barcode</option>
                <option value="Credit">Credit</option>
                <option value="ApplePay">ApplePay</option>
                <option value="GooglePay">GooglePay</option>
              </select>
            </div>
            <div class="form-group">
              <label for="message">留言</label>
              <textarea
                id="message"
                class="form-control"
                v-model="form.message"
                cols="30"
                rows="3"
                style="resize : none;"
              ></textarea>
            </div>
            <div class="d-flex justify-content-between">
              <router-link to="/cart" class="btn btn-outline-dark"><i class="fas fa-angle-left mr-2"></i>回購物車</router-link>
              <button type="submit" class="btn btn-dark px-3" :disabled="invalid">送出表單</button>
            </div>
          </form>
        </validation-observer>
          </div>
          <div class="col-md-5 order-0 order-md-1">
            <div class="border p-4 mb-4">
              <h4 class="font-weight-bold mb-4">詳細訂單內容</h4>
              <table class="table text-muted border-bottom">
                <tbody>
                  <tr v-for="item in cart" :key="item.product.id">
                    <th scope="row" class="border-0 px-2 font-weight-normal text-left">{{ item.product.title }}</th>
                    <td class="border-0 px-2 text-center">{{ item.quantity }}{{item.product.unit}}</td>
                    <td class="text-right border-0 pl-2 pr-0">{{ (item.product.price * item.quantity) | total }}</td>
                  </tr>
                </tbody>
                <tr v-if="discountTotal" class="text-success">
                  <td colspan="2" class="text-left px-0">折扣金額</td>
                  <td class="px-0 text-right">-{{ discountTotal | total }}</td>
                </tr>
              </table>
              <div class="input-group d-flex align-items-center">
              <p class="mb-0 mr-3">促銷代碼</p>
              <input type="text" class="form-control rounded-0 border shadow-none mr-3"
              aria-label="Recipient's username"
              aria-describedby="button-addon2"
              v-model="couponCode">
              <div class="input-group-append">
                <button class="btn btn-outline-primary rounded-0"
                type="button" id="button-addon2" @click.prevent="searchCoupon">
                套用
                </button>
              </div>
            </div>
            <p class="text-left text-success" v-if="coupon.title"><span class="mr-2">使用折扣碼:</span>{{ coupon.title }}</p>
              <div class="d-flex justify-content-between mt-4" v-if="discountTotal">
                <p class="mb-0 h4 font-weight-bold">總共</p>
                <p class="mb-0 h4 font-weight-bold">{{ (cartTotal - discountTotal) | total }}</p>
              </div>
              <div class="d-flex justify-content-between mt-4" v-else>
                <p class="mb-0 h4 font-weight-bold">總共</p>
                <p class="mb-0 h4 font-weight-bold">{{ cartTotal | total }}</p>
              </div>
            </div>
          </div>
        </div>
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
      form: {
        name: '',
        email: '',
        tel: '',
        address: '',
        payment: '',
        message: ''
      },
      coupon: {},
      couponCode: '',
      cart: [],
      cartTotal: 0,
      cartQuantity: 0,
      currentStep: 1
    }
  },
  created () {
    this.getCart()
  },
  computed: {
    discountTotal () {
      return Math.round(this.cartTotal * this.coupon.percent / 100)
    }
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
    // 查詢優惠卷
    searchCoupon () {
      const loader = this.$loading.show()
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/ec/coupon/search`
      this.$http.post(url, { code: this.couponCode }).then((response) => {
        loader.hide()
        this.$bus.$emit('message:push',
          '優惠卷新增成功',
          'success')
        this.coupon = response.data.data
      }).catch((error) => {
        loader.hide()
        const errorData = error.response.data.errors
        console.log(error.response)
        if (errorData) {
          errorData.code.forEach((err) => {
            this.$bus.$emit('message:push',
            `優惠碼錯誤 ${err}`, 'danger')
          })
        } else {
          this.isLoading = false
          const { message } = error.response.data
          this.$bus.$emit('message:push',
            `優惠碼錯誤 ${message}`, 'danger')
        }
      })
    },
    // 建立訂單
    createOrder () {
      const loader = this.$loading.show()
      const order = { ...this.form }
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/ec/orders`
      // 如果有優惠卷就加入，請注意該 coupon 必須先執行過 this.addCoupon()
      // 主要會使用 enabled 屬性判斷該 coupon 是否可以使用
      // 如果沒有執行 this.addCoupon() 那麼 enabled 就會是 undefined，因此還是不會執行
      if (this.coupon.enabled) {
        order.coupon = this.coupon.code
      }
      this.$http.post(url, order).then((response) => {
        if (response.data.data.id) {
          loader.hide()
          this.$bus.$emit('updateCart')
          this.$bus.$emit('message:push', '訂單建立成功囉~',
            'success')
          this.$router.push(`/orderfinish/${response.data.data.id}`)
        }
      }).catch((error) => {
        const errorData = error.response.data.errors
        errorData.forEach((err) => {
          this.$bus.$emit('message:push',
            `建立訂單失敗惹，好糗Σ( ° △ °|||)︴
          ${err}`,
            'danger')
        })
        this.isLoading = false
      })
    }
  }
}
</script>

<style>
</style>
