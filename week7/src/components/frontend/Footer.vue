<template>
  <div class="footer">
          <div class="bg-light py-4">
      <div class="container">
        <div class="d-flex flex-column flex-md-row justify-content-between align-items-md-center align-items-start">
          <p class="footerTitle mb-0">歡迎訂閱獲得更多搶先優惠資訊以及折扣碼</p>
          <validation-observer v-slot="{ invalid }">
          <form action="">
            <validation-provider v-slot="{ errors, classes }" rules="required|email" class="d-flex">
          <div class="input-group mt-md-0 mt-3">
            <input type="email"
            class="form-control rounded-0"
            placeholder="請輸入電子信箱"
            v-model="email"
            :class="classes"/>
            <div class="input-group-append">
              <button class="btn btn-primary rounded-0"
              type="button" id="search"
              @click.prevent="searchCoupon" :disabled="invalid">
                訂閱
              </button>
            </div>
            <span
            v-if="errors[0]"
            class="d-flex align-items-center text-danger"
            >{{ `信箱${errors[0].slice(8,errors[0].length)}` }}</span>
          </div>
          </validation-provider>
          </form>
          </validation-observer>
        </div>
      </div>
    </div>
      <div class="bg-white py-5">
      <div class="container">
        <div class="d-flex align-items-center justify-content-between text-primary mb-md-7 mb-4">
          <a class="footerLogo font-style text-primary" href="./index.html">S Protein</a>
          <ul class="d-flex list-unstyled mb-0 h4">
            <li><a href="https://www.facebook.com/profile.php?id=100002626446604" class="text-primary mx-2 mx-md-3"><i class="fab fa-facebook"></i></a></li>
            <li><a href="https://www.instagram.com/" class="text-primary mx-2 mx-md-3"><i class="fab fa-instagram"></i></a></li>
            <li><a href="https://github.com/" class="text-primary ml-2 ml-md-3"><i class="fab fa-github"></i></a></li>
          </ul>
        </div>
        <div class="d-flex flex-column flex-md-row justify-content-between align-items-md-end align-items-start text-primary">
          <div class="mb-md-0 mb-1">
            <p class="mb-0">
              所有圖片為練習使用，無商業用途。
            </p>
          </div>
          <p class="mb-0">© 2020 LOGO All Rights Reserved.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      coupon: {},
      couponCode: '',
      email: ''
    }
  },
  methods: {
    searchCoupon () {
      if (this.email) {
        this.$bus.$emit('message:push',
          '優惠碼:cinglin570',
          'success')
      } else {
        this.$bus.$emit('message:push',
          '信箱格式錯誤',
          'danger')
      }
    }
  }
}
</script>

<style lang="scss">
.footer{
  .footerLogo{
    font-size: 24px;
  }
  .footerTitle{
    font-size: 16px;
  }
  @media (min-width: 768px) {
    .footerLogo{
      font-size: 32px;
  }
  }
}
</style>
