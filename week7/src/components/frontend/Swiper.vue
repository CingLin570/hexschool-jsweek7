<template>
  <swiper id="swiper" class="swiper w-100 mb-3" :options="swiperOption">
    <swiper-slide v-for="item in banners" :key="item.id">
      <img :src="item.url" class="img-fluid w-100 vh homeNew" alt="">
      <p class="homeNew-title swiper-title text-white" data-aos="animate__slideInDown"><span>{{ item.title }}</span></p>
    </swiper-slide>
    <div class="swiper-button-prev text-light" slot="button-prev"></div>
    <div class="swiper-button-next text-light" slot="button-next"></div>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
import $ from 'jquery'
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
export default {
  components: {
    Swiper,
    SwiperSlide
  },
  data () {
    return {
      banners: [
        {
          id: 0,
          url: 'https://hexschool-api.s3.us-west-2.amazonaws.com/custom/GZYCUgAdeCFg8PvhNf5tweKe17C0aJlDod5dWITZpj7e0q6GoGQJS1chLRHYff24IdC55hJd2xh6OT5P0T0xHCmwTPh2gUHYqsccWdZZyRd5esKQti8Fly2RXL9T0NCn.jpg',
          title: '沒有痛苦，沒有收穫'
        },
        {
          id: 1,
          url: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
          title: '2020全新器材 #用心製造'
        },
        {
          id: 2,
          url: 'https://images.unsplash.com/photo-1582910184841-2135ce4421bb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
          title: 'IPF與IWF官方認證，最強健身器材'
        },
        {
          id: 3,
          url: 'https://images.unsplash.com/photo-1585892478726-d26363dbf9e8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
          title: '訓練&比賽，專用器材'
        }
      ],
      swiperOption: {
        slidesPerView: 1,
        spaceBetween: 0,
        slidesPerGroup: 1,
        loop: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false
        },
        autoplayDisableOnInteraction: false,
        loopFillGroupWithBlank: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        on: {
          slideChangeTransitionStart () {
            $('.homeNew-title').hide(0)
            $('.homeNew-title').removeClass('animate__animated').removeClass('animate__slideInDown')
          },
          slideChangeTransitionEnd () {
            $('.homeNew-title').show(0)
            $('.homeNew-title').addClass('animate__animated').addClass('animate__slideInDown')
          }
        }
      }
    }
  }
}
</script>

<style>
.vh{
  height: 100vh;
}
.swiper-title{
  position: absolute;
  top: 30%;
  left: 5%;
  z-index: 10;
  font-size: 20px;
}
.swiper-container {
  position: relative;
  height: 100vh;
}
.swiper-slide:before{
    content: '';
    position: absolute;
    top:0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(66, 66, 66, 0.3);
}
.swiper-pagination-bullet{
  background-color: #fff;
  opacity: 1;
}
.swiper-pagination .swiper-pagination-bullet.swiper-pagination-bullet-active {
  background-color:#5CA8CA;
}
.swiper-container-horizontal > .swiper-pagination-bullets .swiper-pagination-bullet{
  margin: 0 10px;
}
.swiper-pagination-bullet{
  height: 15px;
  width: 15px;
}
.swiper-button-prev:after,.swiper-button-next:after{
  font-size: 20px;
}
.swiper-button-next{
  right: 0px;
}
.swiper-button-prev{
  left:auto;
  right:40px;
}
.swiper-button-next,.swiper-button-prev{
  padding: 20px 20px 20px 20px;
  background-color: rgba(0,0,0,0.5);
  top:97%;
}
.swiper-button-next:hover,.swiper-button-prev:hover{
  background-color: rgba(0,0,0,0.7);
}
/* @media (min-width: 992px) {
  .swiper-container {
    height: 100vh;
}
} */
.homeNew{
  object-fit: cover;
}
@media (min-width: 768px) {
  .swiper-button-next,.swiper-button-prev{
  padding: 30px 20px 30px 20px;
  top:95%;
}
.swiper-title{
  font-size: 64px;
}
}
</style>
