<template>
  <div class="singleProduct">
    <div class="container pt-8">
      <nav aria-label="breadcrumb" class="d-flex d-md-none">
        <ol class="singleProduct-category breadcrumb bg-white px-0 mb-3">
          <li class="breadcrumb-item"><a class="text-muted" href="./index.html">首頁</a></li>
          <li class="breadcrumb-item"><a class="text-muted" href="./product.html">{{ product.category }}</a></li>
          <li class="breadcrumb-item active" aria-current="page">{{ product.title }}</li>
        </ol>
      </nav>
      <div class="row align-items-center">
        <div class="col-md-7">
          <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
            <div>
              <div>
                <img :src="product.imageUrl" class="singleProduct-img d-block w-100" alt="">
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-5">
          <nav aria-label="breadcrumb" class="d-none d-md-flex">
            <ol class="singleProduct-category breadcrumb bg-white px-0 mb-3">
              <li class="breadcrumb-item"><a class="text-muted" href="./index.html">首頁</a></li>
              <li class="breadcrumb-item"><a class="text-muted" href="./product.html">{{ product.category }}</a></li>
              <li class="breadcrumb-item active" aria-current="page">{{ product.title }}</li>
            </ol>
          </nav>
          <h2 class="singleProduct-title font-weight-bold text-left mb-1">{{ product.title }}</h2>
          <p class="mb-0 text-muted text-right"><del>{{ product.origin_price | total }}</del></p>
          <p class="h4 font-weight-bold text-right">{{ product.price | total }}</p>
          <div class="d-flex align-items-center">
            <div class="input-group my-3 mr-2 bg-light rounded">
              <div class="input-group-prepend">
                <button class="btn btn-outline-dark border-0 py-2" type="button" id="button-addon1" @click="productNum --" :disabled="productNum <= 1">
                  <i class="fas fa-minus"></i>
                </button>
              </div>
              <input type="number"
              class="form-control border-0 text-center my-auto shadow-none bg-light"
              placeholder="" aria-label="Example text with button addon"
              aria-describedby="button-addon1"
              v-model="productNum"
              min="1"
              @keyup.enter="keyupNum">
              <div class="input-group-append">
                <button class="btn btn-outline-dark border-0 py-2" type="button" id="button-addon2" @click="productNum ++">
                  <i class="fas fa-plus"></i>
                </button>
              </div>
            </div>
            <button type="button" class="btn btn-primary btn-block py-2" @click="addCart">加入購物車</button>
          </div>
        </div>
      </div>
      <div class="productContent row mt-3 mb-3 mb-md-5">
        <div class="col-md-7">
          <p class="text-muted text-center">{{ product.description }}</p>
        </div>
        <div class="col-md-5">
          <p v-html="product.content"></p>
        </div>
      </div>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Footer from '@/components/frontend/Footer.vue'
export default {
  components: {
    Footer
  },
  data () {
    return {
      product: {
        origin_price: 0,
        price: 0,
        imageUrl: []
      },
      productNum: 1
    }
  },
  computed: {
  },
  created () {
    this.getProduct()
  },
  methods: {
    keyupNum () {
      if (this.productNum < 0 || !this.productNum) {
        this.productNum = 1
      }
    },
    getProduct () {
      const loader = this.$loading.show()
      const id = this.$route.params.id
      this.$http.get(`${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/ec/product/${id}`)
        .then((response) => {
          loader.hide()
          this.product = response.data.data
        })
    },
    addCart () {
      const loader = this.$loading.show()
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/ec/shopping`
      const cart = {
        product: this.product.id,
        quantity: this.productNum
      }
      this.$http.post(url, cart)
        .then(() => {
          loader.hide()
          this.$bus.$emit('updateCart')
        }).catch((err) => {
          loader.hide()
          this.$bus.$emit('message:push',
            `${err.response.data.errors}`,
            'danger')
        })
    }
  }
}
</script>

<style lang="scss">
  input::-webkit-outer-spin-button,input::-webkit-inner-spin-button{
    appearance: none;
  }
  .productContent{
    p{
      font-size: 16px;
      line-height: 24px;
    }
  }
  .singleProduct-category{
    font-size: 16px;
  }
  .singleProduct-img{
    height: 200px;
  }
  .singleProduct-title{
    font-size: 24px;
  }
  @media (min-width: 768px) {
    .singleProduct-category{
    font-size: 20px;
  }
    .singleProduct-img{
      height: 443px;
  }
    .singleProduct-title{
    font-size: 32px;
  }
  }
</style>
