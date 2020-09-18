<template>
  <div class="products">
    <div class="position-relative productsHeader"></div>
    <div class="container mt-md-3 mt-3 mb-7">
      <div class="row">
        <div class="col">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb bg-transparent">
              <li class="breadcrumb-item">
                <router-link to="/">首頁</router-link>
              </li>
              <li class="breadcrumb-item">
                <a href="#" @click.prevent="categoryName = ''">全部商品</a>
              </li>
              <li class="breadcrumb-item" aria-current="page" v-if="categoryName">
                <span>{{ categoryName }}</span>
              </li>
            </ol>
          </nav>
        </div>
      </div>
      <div class="row">
        <div class="col-md-2">
          <div
            class="categories accordion border border-bottom border-top-0 border-left-0 border-right-0 mb-3"
            id="accordionExample">
            <div class="productsCategory card border-0">
              <div
                class="card-header px-0 py-4 bg-white border border-bottom-0 border-top border-left-0 border-right-0"
                id="headingOne"
                data-toggle="collapse"
                data-target="#collapseOne">
                <div class="d-flex justify-content-between align-items-center pr-1">
                  <h4 class="productsCategory-title mb-0">產品分類</h4>
                  <i class="fas fa-chevron-down"></i>
                </div>
              </div>
              <div
                id="collapseOne"
                class="productsCategory-content collapse show"
                aria-labelledby="headingOne"
                data-parent="#accordionExample">
                <div class="card-body p-0">
                  <ul class="nav list-group list-unstyled">
                    <li
                      v-for="(item, i) in productsCategories"
                      :key="i"
                      @click.prevent="categoryName = item"
                      class="nav-item border-0">
                      <a
                        href="#"
                        class="nav-link text-center py-2 px-0 d-block"
                        :class="{active : categoryName === item }"
                      >{{ item }}</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-10">
          <div class="row">
            <div
              class="col-12 col-md-6 col-lg-4 col-xl-3"
              v-for="item in filterCategories"
              :key="item.id">
              <div class="card text-left border-0 mb-4">
                <a href="#" class="productSearch bg-primary p-2" @click.prevent="goPage(item.id)">
                  <i class="fas fa-search fa-2x text-white"></i>
                </a>
                <img :src="item.imageUrl" class="productImg card-img-top" alt />
                <div class="card-body transforms position-relative bg-primary">
                  <p class="card-title">{{ item.title }}</p>
                  <p class="card-text d-flex justify-content-between">
                    <span>{{ item.price | total }}</span>
                    <del class="text-danger">{{ item.origin_price | total }}</del>
                  </p>
                </div>
                <div class="card-footer actions">
                  <a href="#" class="btn btn-primary" @click.prevent="goPage(item.id)">詳細產品與購買</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Pagination :pages="pagination" @emitPages="getProduct" />
    </div>
    <Footer />
  </div>
</template>

<script>
import Pagination from '@/components/Pagination.vue'
import Footer from '@/components/frontend/Footer.vue'
export default {
  components: {
    Pagination,
    Footer
  },
  data () {
    return {
      products: [],
      pagination: {},
      productsCategories: ['健身器材', '啞鈴', '槓鈴', '壺鈴'],
      categoryName: ''
    }
  },
  computed: {
    filterCategories () {
      if (this.categoryName) {
        return this.products.filter((item) => {
          const data = item.category.includes(this.categoryName)
          return data
        })
      }
      return this.products
    },
    filterPagination () {
      return this.pagination.filter
    }
  },
  methods: {
    goPage (item) {
      this.$router.push(`/product/${item}`)
    },
    getProduct (page = 1, paged = 25) {
      const loader = this.$loading.show()
      this.$http.get(`${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/ec/products?page=${page}&paged=${paged}`)
        .then((response) => {
          loader.hide()
          this.products = response.data.data
          this.pagination = response.data.meta.pagination
        }).catch((err) => {
          this.$bus.$emit('message:push',
            `${err.response.data.errors}`,
            'danger')
        })
    }
  },
  created () {
    this.getProduct()
  }
}
</script>

<style lang="scss" scoped>
.products{
  .productImg{
    height: 200px;
  }
  .card-text{
    font-size: 14px;
  }
  @media (min-width: 576px) {
    .productImg{
    height: 500px;
  }
  }
  @media (min-width: 768px) {
    .productImg{
      height: 270px;
  }
  }
  @media (min-width: 992px) {
    .productImg{
      height: 200px;
  }
  }
  .transforms{
    transition: all 0.7s;
}
.productsCategory{
  .productsCategory-title{
    font-size: 16px;
  }
  .nav-link{
    font-size: 16px;
  }
  @media (min-width: 768px) {
  .productsCategory-title{
    font-size: 24px;
  }
  .nav-link{
    font-size: 20px;
  }
  }
}
.card:hover .transforms{
  transform: translateY(-64px);
}
.card:hover .actions{
  transform: translateY(0);
}
.card:hover .productSearch{
  transform: translate(-50%, -80%);
  opacity: 1;
}
.card{
  overflow: hidden;
}
.actions{
  transition: all 0.7s;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: auto;
  transform: translateY(99%);
}
  .productSearch{
  opacity: 0;
  transition: transform 0.7s;
  position: absolute;
  top:30%;
  left: 50%;
  transform: translate(-50%, -30%);
}
.hotProduct-title:after{
  content: '';
  width: 30%;
  height: 0;
  position: absolute;
  border-top: #000 2px solid;
  left: 86px;
  top: 20px;
}
.hotProduct-title:before{
  content: '';
  width: 30%;
  height: 0;
  position: absolute;
  border-top: #000 2px solid;
  right: 86px;
  top: 20px;
}
.hotProduct-title{
  width: 280px;
  margin: 0 auto;
}
.categories{
  cursor: pointer;
}
.nav-item .active{
  color: #6c757d;
}
.productsHeader{
  background-image: url(https://hexschool-api.s3.us-west-2.amazonaws.com/custom/Durm2pFX26EH8GALSNr6z9WYPohUW3zf5U08on9IeqCVQ07r2MNqDPxzR34KghlTZ4ZKUipO8gOR7R18AAG2KHNSBH9CKcIbFsU5N0yhBNQV8BGUtAtklyOydO7z0ynR.jpg);
  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;
  height: 60vh;
}
.productsHeader:after{
    content: '';
    position: absolute;
    top:0;
    bottom: 0;
    left: 0;
    right: 0;
    background: linear-gradient(-35deg,#5CA8CA, #0f80b4 , #9b9a9b);
    opacity: 0.6;
  }
}
</style>
