<template>
  <div>
    <SwiperModel />
    <section class="hotProduct">
      <div class="container">
        <div>
          <h2 class="mb-2 p-3 border-bottom text-center">熱門商品</h2>
        </div>
      </div>
      <div class="container">
        <div class="row">
          <HotProducts />
        </div>
      </div>
    </section>
    <div class="homeFooter d-none d-sm-block container my-7">
      <div class="row">
        <div class="col-md-6" data-aos="animate__slideInDown">
          <img
            src="https://hexschool-api.s3.us-west-2.amazonaws.com/custom/9PiIxUhyC3Wqi9cQn3cRqQAMABZsJZ9UEHo1bkWfo3DpQuMwcsOpb6IsUsO9WPRhmmRaQ8JY319BUF6ObqpmhPjhrASU2wiqUX9HE2GIaZ2GbQRjvLEMSA5UFOo6oYrF.jpg"
            alt
            class="img-fluid"
          />
        </div>
        <div class="col-md-4 m-auto text-center">
          <h4 class="mt-4 mb-2">什麼是IPF?</h4>
          <p class="text-left text-muted">
            當前世界上最大的健力組織是「國際健力協會 (IPF; International Powerlifting Federation)」
            ,原則上只要想讓紀錄登記在世界紀錄裡，從器材到比賽流程甚至 裝備 都得依照 IPF 的規定來跑。
          </p>
        </div>
      </div>
      <div class="row flex-row-reverse justify-content-between mt-4">
        <div class="col-md-6" data-aos="animate__slideInUp">
          <img
            src="https://hexschool-api.s3.us-west-2.amazonaws.com/custom/JXhaMvdkNu8aPjyptV4YzWhxyxr6fNSf4dkDYJebPmx7zO33LowUC3xUC3EyQ48NNUDfqP0X4vH0S9dgpJxxO0TI97VUcNEFsmfxVFCH0c4S7m1fBNuBDZ0et9t6ucCF.jpg"
            alt
            class="img-fluid"
          />
        </div>
        <div class="col-md-4 m-auto text-center">
          <h4 class="mt-4 mb-2">什麼是IWF?</h4>
          <p class="text-left text-muted">
            國際舉重總會(International Weightlifting Federation，縮寫：IWF)
            ,IWF賽事所使用的槓鈴和槓片也跟IPF所使用的不太一樣，使用的是舉重槓片，這種槓片需要耐撞擊，
            選手挺舉後把槓跟槓片往下丟的動作，這個就是舉重槓片需要耐撞擊的原因，不然這麼重的重量，
            重力加速度之下，如果是金屬材質可能會裂開斷裂，因此一般舉重用槓片使用的材質是橡膠。
          </p>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<style lang="scss">
[data-aos] {
        visibility: hidden;
    }

[data-aos].animate__animated {
        visibility: visible;
    }
:root {
  --animate-duration: 1000ms;
  --animation-delay: 0.5s;
}
.banner{
    background-image: url(https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80);
    background-size: cover;
    background-position: top center;
    height: 100vh;
    background-attachment: fixed;
}
.footerBanner{
    background-image: url(https://hexschool-api.s3.us-west-2.amazonaws.com/custom/Durm2pFX26EH8GALSNr6z9WYPohUW3zf5U08on9IeqCVQ07r2MNqDPxzR34KghlTZ4ZKUipO8gOR7R18AAG2KHNSBH9CKcIbFsU5N0yhBNQV8BGUtAtklyOydO7z0ynR.jpg);
    background-size: cover;
    background-position: top;
    height: 60vh;
}
.footerBanner:after{
  content: '';
  position: absolute;
  top:0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #5CA8CA;
  opacity: 0.5;
}
.homeFooter{
  p{
    font-size: 18px;
    line-height: 24px;
    letter-spacing: 2px;
  }
}
</style>

<script>
import SwiperModel from '@/components/frontend/Swiper.vue'
import Footer from '@/components/frontend/Footer.vue'
import HotProducts from '@/components/frontend/HotProducts.vue'
export default {
  components: {
    SwiperModel,
    Footer,
    HotProducts
  }
}
</script>
