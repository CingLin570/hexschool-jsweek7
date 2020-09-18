<template>
  <div class="home position-relative" id="home">
    <div class="aside position-fixed bg-primary">
      <table class="table">
        <thead>
          <tr>
            <th scope="col" class="d-flex justify-content-between align-items-center">
              <span>主選單</span>
              <button type="button" class="asideClose btn">
                <i class="fas fa-times"></i>
              </button>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">
              <router-link to="/" class="asideClose text-light m-0">首頁</router-link>
            </th>
          </tr>
          <tr>
            <th scope="row">
              <router-link to="/about" class="asideClose text-light m-0">關於我們</router-link>
            </th>
          </tr>
          <tr>
            <th scope="row">
              <router-link to="/products" class="asideClose text-light m-0">產品列表</router-link>
            </th>
          </tr>
          <tr>
            <th scope="row">
              <router-link to="/cart" class="asideClose text-light m-0">購物車</router-link>
            </th>
          </tr>
          <tr>
            <th scope="row">
              <router-link to="/Login" class="asideClose text-light m-0">後台產品頁面</router-link>
            </th>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="homeNavbar p-0 position-fixed w-100 z-index">
      <nav id="navbar" class="navbarAnimate bg-transparent px-3">
        <div class="d-flex flex-grow-1 justify-content-center align-items-center">
          <a
            class="shadow-none bg-transparent mr-3 p-0 font-style font-xs text-dark"
            id="logo"
            href
          >S Protein</a>
          <ul class="d-none d-md-flex justify-content-around list-unstyled m-0">
            <li class="px-2 py-3">
              <router-link to="/" class="homeLink text-dark h5 m-0">首頁</router-link>
            </li>
            <li class="px-2 py-3">
              <router-link to="/about" class="homeLink text-dark h5 m-0">關於我們</router-link>
            </li>
            <li class="px-2 py-3">
              <router-link to="/products" class="homeLink text-dark h5 m-0">產品列表</router-link>
            </li>
            <li class="px-2 py-3">
              <router-link to="/cart" class="homeLink text-dark h5 m-0">購物車</router-link>
            </li>
            <li class="px-2 py-3">
              <router-link to="/Login" class="homeLink text-dark h5 m-0">後台產品頁面</router-link>
            </li>
          </ul>
          <ul class="d-flex justify-content-center align-items-center ml-auto mb-0 list-unstyled">
            <li class="mr-3 d-md-none">
              <a href="#" id="aside">
                <i class="fas fa-align-justify fa-2x text-dark border border-dark p-2"></i>
              </a>
            </li>
            <li>
              <a class="position-relative" href="#" id="cart">
                <i class="fas fa-shopping-cart fa-2x text-dark"></i>
                <span class="badge badge-danger cartAmount" v-if="cartQuantity">{{ cartQuantity }}</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <div class="cart" id="cartList">
        <div>
          <div class="card card-body rounded-0 px-0 pt-3 pb-0 border" v-if="cartQuantity">
            <span class="h5 mb-0 text-center">已選擇商品</span>
            <div class="cartList">
              <div class="container-fluid">
                <div class="cartItem pt-2" v-for="item in cart" :key="item.product.id">
                  <div class="row mb-3">
                    <div class="col-5">
                      <img :src="item.product.imageUrl" st class="img-fluid" alt />
                    </div>
                    <div class="col-7">
                      <div class="text-left d-flex flex-column justify-content-between h-100">
                        <span class="d-block">{{ item.product.title }}</span>
                        <div class="d-flex justify-content-between align-items-center">
                          <span>{{ item.quantity }} x {{ item.product.price | total }}</span>
                          <a href="#" @click.prevent="removeCartItem(item.product.id)">
                            <i class="fas fa-trash-alt text-primary"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button type="button" class="btn btn-primary rounded-0" @click="goCart">前去購買</button>
          </div>
          <div class="card card-body rounded-0 py-5 border-0" v-else>
            <span class="h5 text-center">您未選擇商品</span>
          </div>
        </div>
      </div>
    </div>
    <back-to-top text="Back to top" visibleoffset="50">
      <i class="far fa-arrow-alt-circle-up fa-4x text-primary"></i>
    </back-to-top>
    <router-view />
  </div>
</template>

<script type="module">
import $ from 'jquery'
$(document).ready(function () {
  $(window).scroll(function () {
    var scrollPos = $(window).scrollTop()
    $('#navbar').each(function () {
      if (scrollPos > 20) {
        $('#navbar').removeClass('bg-transparent')
        $('#navbar').addClass('bg-light')
      } else {
        $('#navbar').removeClass('bg-light')
        $('#navbar').addClass('bg-transparent')
      }
    })
  })
})
export default {
  name: 'Home',
  data () {
    return {
      cart: [],
      cartTotal: 0,
      cartQuantity: 0
    }
  },
  updated () {
    window.scroll(0, 0)
  },
  created () {
    this.$bus.$on('updateCart', () => {
      this.getCart()
      $('#cartList').addClass('cartList')
    })
    this.getCart()
  },
  mounted () {
    $('.asideClose').click(function (event) {
      event.preventDefault()
      $('#home').removeClass('open')
    })
    $('#aside').click(function (event) {
      event.preventDefault()
      $('#home').toggleClass('open')
    })
    $('#cart').click(function (event) {
      event.preventDefault()
      $('#cartList').toggleClass('cartList')
    })
    this.$http.get(`${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/ec/products`)
      .then((response) => {
        this.isLoading = false
      })
  },
  methods: {
    goCart () {
      this.$router.push('/cart')
      $('#cartList').removeClass('cartList')
    },
    getCart () {
      this.cartTotal = 0
      this.cartQuantity = 0
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/ec/shopping`
      this.$http.get(url)
        .then((response) => {
          this.cart = response.data.data
          this.cart.forEach((item) => {
            this.cartTotal += (item.product.price * item.quantity)
            this.cartQuantity += item.quantity
          })
        })
    },
    removeCartItem (id) {
      const loader = this.$loading.show()
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/ec/shopping/${id}`
      this.$http.delete(url).then(() => {
        loader.hide()
        this.cartTotal = 0
        this.cartQuantity = 0
        this.getCart()
        $('#cartList').removeClass('cartList')
        if (this.$route.name === '前台購物車') {
          this.$bus.$emit('delete')
        }
      }).catch((err) => {
        console.log(err.data)
      })
    }
  }
}
</script>

<style lang="scss">
  .aside{
    z-index: 10000;
    top: 0;
    bottom: 0;
    width: 250px;
    overflow: hidden;
    transform: translateX(-300px);
    transition: all 0.3s;
  }
  .open .aside{
    transform: translateX(0px);
  }
  .home{
    .cart{
    z-index: 1;
    position: absolute;
    height: 0;
    right: 0;
    width: 280px;
    transition: all 0.5s;
    transform: translateX(300px);
  }
    .homeLink{
      font-size: 24px;
    }
    .cartList{
    transform: translateX(0px);
    right: 30px;
  }
    .cartAmount{
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    top: -16px;
    right: -9px;
    width: 20px;
    height: 20px;
    font-size: 12px;
    border-radius: 50%;
  }
    .margin-auto{
    margin: 0 auto;
  }
    .cartList .container-fluid > .cartItem:not(:first-child){
    border-top:1px solid #adb5bd;
  }
    .goTop{
    opacity: 0;
    z-index: 10000;
    position: fixed;
    right: 20px;
    bottom: 100px;
    transition: opacity 0.7s;
  }
    .topAnimate{
    opacity: 1;
  }
    .navbarAnimate{
    transition: all 0.5s;
  }
  }
</style>
