<template>
  <div class="about">
    <div class="aboutBanner mb-5 position-relative d-flex justify-content-center align-items-center">
      <div class="aboutTitle">
        <h2 class="text-white h1 text-center">關於我們</h2>
        <span class="text-white h2">一路走來強大的秘訣</span>
      </div>
    </div>
    <section class="aboutBrand container">
      <div class="row">
        <div class="col-12 col-md-7">
          <div class="mb-5 d-flex flex-column">
            <h3 class="aboutBrand-title text-md-left text-center mb-4">我們的堅持</h3>
            <p class="aboutBrand-text text-left h4 line-height-lg">
              選用最好的品質，帶給所有健身愛好者與選手更好的訓練品質，產品使用IPF與IWF標準來製造器材
              比賽專用品牌，好的品質帶給所有使用者更安全的保護，這也是我們的堅持，希望帶給健身界更多
              高品質器材，讓使用者更安全更強壯。</p>
          </div>
        </div>
      </div>
    </section>
    <section class="ourPresist position-relative d-flex">
      <div class="ourPresist-content d-flex flex-column w-100 align-items-center justify-content-center">
        <div class="container">
          <h3 class="text-center h2 mb-4 text-white">品牌理念</h3>
          <p class="ourPresist-text h4 line-height-lg text-white">一路走來，帶來各式各樣的運動器材，
          想要的就是掀起健身的風潮，讓更多的人加入我們健身的行列，
          我們不但一直透過研發帶來更好的健身器材，讓更多的人體驗到我們器材的品質，
          我們不但要讓更多人了解我們器材的不同，也要帶來更多關於健身的知識。</p>
        </div>
      </div>
    </section>
    <Footer/>
  </div>
</template>

<script>
import Footer from '@/components/frontend/Footer.vue'
export default {
  components: {
    Footer
  }
}
</script>

<style lang="scss">
.about{
  .aboutBanner{
    z-index: 0;
    background-image: url(https://hexschool-api.s3.us-west-2.amazonaws.com/custom/u1OvgJ9wiD79xkSNy52vzRLrqsVXIaxoRv1H5ZsPmDEQxcoCgeC0uoMaeDnx1kaHdPZFGRRRlpFCwf7xM5xO4Z1JL5lzMJYGWXm1dwxlzHcvSzFb5R7rDIbhFlmNdO7V.jpg);
    background-position: top;
    background-repeat: no-repeat;
    background-size: cover;
    height: 100vh;
  }
  .aboutBanner:after{
    content: '';
    position: absolute;
    top:0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #5CA8CA;
    opacity: 0.5;
  }
  .aboutTitle{
    z-index: 100;
  }
  .aboutBrand-title{
    font-size: 24px;
  }
  .aboutBrand-text{
    font-size: 16px;
  }
  .ourPresist-text{
    font-size: 16px;
  }
  @media (min-width: 768px) {
  .aboutBrand-title{
    font-size: 32px;
  }
  .aboutBrand-text{
    font-size: 24px;
  }
  .ourPresist-text{
    font-size: 24px;
  }
  }
  .ourPresist{
    background-image: url(https://hexschool-api.s3.us-west-2.amazonaws.com/custom/zzllnHTw8tBCKmQw0kuRNYX02vQaJU6BqD1xL4HWSN5lnW79LLxFnJSvHhRSXH5DIWeuSdt4CQHnPFnrb1FAWrceFg5tyfBPZAy0t6GFYmmWi5afjQL9H7pgVBSYVGbe.jpg);
    background-position: top;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    height: 500px;
  }
  .ourPresist:after{
    content: '';
    position: absolute;
    top:0;
    bottom: 0;
    left: 0;
    right: 0;
    background: linear-gradient(-35deg,#5CA8CA, #a09e9f);
    opacity: 0.8;
  }
  .ourPresist-content{
    z-index: 1;
  }
}
</style>
