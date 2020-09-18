<template>
  <div class="container">
    <div class="row">
      <div class="col-12 col-md-6 col-xl-3" v-for="(item, index) in top8" :key="index">
          <div class="card text-left border-0 mb-4">
            <a href="#" class="productSearch bg-primary p-2"><i class="fas fa-search fa-2x text-white"></i></a>
            <img :src="item.imgUrl" class="card-img-top" alt="">
          <div class="card-body p-3 transforms position-relative bg-primary">
            <p class="hotproduct-title card-title">{{ item.title }}</p>
            <p class="card-text d-flex justify-content-between"><span class="text-danger h5">{{ item.price | total }}</span><del>{{ item.origin_price | total }}</del></p>
          </div>
          <div class="card-footer actions">
            <router-link :to="`/product/${item.id}`" class="btn btn-primary">詳細產品與購買</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      top8: [
        {
          id: 'VjPRMc3uHyQYCxVpCY3GoRe2Iktj530goTuCZ1a0gD4E4PbaVJ4EybYcKeG8wjSe',
          title: '組合式啞鈴組40kg(含槓鈴卡扣)',
          imgUrl: 'https://hexschool-api.s3.us-west-2.amazonaws.com/custom/xfqA2t0mvwGBd2fC6FOiQg59yh1JzNqen7NRudROCtu5rB0lIucNI6vVIx5O4uSyDMMAUm80uuDTxWJPr3c5Ja4yD8PxxFd7vBFBWOjg472jhMFJonwG9saxKkh1egq7.jpg',
          price: 4299,
          origin_price: 4500,
          unit: '組'
        },
        {
          id: 'rBuylSKM9OqPsBXxFlv3UR6Iqc2R3Pzsru9VfTxKyJ30mHuLu4lq42QAhv51HH81',
          title: '槓鈴卡扣(一組)',
          imgUrl: 'https://hexschool-api.s3.us-west-2.amazonaws.com/custom/bOFF3opURsWBl9g3yr3roMuMjCYHmyNrDebTTBa33XwFORhamYf4SzmvqvvmYXe7IvN3ChW3uqOweYLt4v2qM51v1SL9bKWeAmtIaIJP3khReKFlcv6ud0pCCvFLctck.jpg',
          price: 199,
          origin_price: 250,
          unit: '組'
        },
        {
          id: 'RYIacgFEb1u7bAkLOuEZXjL29XyUN17QIZ1ZZSMRjcaCKQwLyXVBzMuLE0izl7N0',
          title: '固定式啞鈴10kg',
          imgUrl: 'https://hexschool-api.s3.us-west-2.amazonaws.com/custom/RoMkSqTaf5eI4HsAA2kOuhkdMyjzpxWAErUziormc1awOhMZMef7kqesHLFwyEXTPm6H7qoXcl2VrkRUAfPEd1ml002fPbr9FpRRXpyHlBilhWGafhA4Z3ptqhOm3te4.jpg',
          price: 859,
          origin_price: 899,
          unit: '隻'
        },
        {
          id: 'kIUi5wMQPaxGAjwSrclGge7vnZF7dm8nWNJnsMQimYs8tCwn8O2SpgtUA5efkPe6',
          title: '固定式啞鈴16kg',
          imgUrl: 'https://hexschool-api.s3.us-west-2.amazonaws.com/custom/Qpktq4RJQHAZahITSkpINwhekJ98pWEY5raIcbJza5Lj99L4rxCZroC648IQPTrOVadB5sK562BRK1HxDiVwhAslAhKT0Zun7YFfysD0TGmwtbPpkDhhxBPiMGOvO5uI.jpg',
          price: 999,
          origin_price: 1099,
          unit: '隻'
        },
        {
          id: 'RKvX3S19pSJgBtfT3d8pG9Gqb5oNEuc8JDdoAcEMC4mxELuvWmkgenPS3uAC8onN',
          title: '壺鈴(8kg)',
          imgUrl: 'https://hexschool-api.s3.us-west-2.amazonaws.com/custom/4xeTPmOiXjVr1CmGHJlcJ4VeRi5bwxDzuub6mF7r54p4dr9AbANIQLNEhsiL2JY2wHNrD1E4tWrArIAvx6bWekDLIomSgguQDGPebnVzRLqmMuZzpTN744Lb2RFxcqoV.jpg',
          price: 2599,
          origin_price: 2800,
          unit: '個'
        },
        {
          id: '1rFQ1BvK7hCOnuTS6paN6N8C5PzPP4UoG5fsBpHEG3pUGDPav3CE5pFhyfCWX9yd',
          title: '壺鈴(12kg)',
          imgUrl: 'https://hexschool-api.s3.us-west-2.amazonaws.com/custom/8scG7ugvviW9785zSg0a2259y56FcUNqe4Z7Kec7MNtnrWa6wq4Fz8Ne8uITLMk7U44HGEhqXMg1SKBL3vol29r8k5CXumU9tMVFzNZdiWcKvaQffyrBavOPPRLsMA3z.jpg',
          price: 2899,
          origin_price: 3000,
          unit: '組'
        },
        {
          id: 'O21E40WMqx8XjbbD4YQJhDAgh9mrVqTf5382H9aVjQDOyp0g8szGO3keGSxZvpQM',
          title: 'IPF舉重比賽槓-20公斤',
          imgUrl: 'https://hexschool-api.s3.us-west-2.amazonaws.com/custom/g9TmIDVyO09XPHdjImiAJCt5w71KfC6uZQpgAQHxhaoTOAV0f0t02uT1OBr9hygYRfmy3oqLZvgLFRl2rWoL2VtbNoFpxiCFw2kWrhaSNtR8rUSNzSIoQ9ropt9p5igf.jpg',
          price: 58999,
          origin_price: 60000,
          unit: '隻'
        },
        {
          id: 'QmINYurFL5zaIf8ikcExWeF8QerNMgeqfkkQmDhTlgwxY59aRLjIUUG9G2Ghgs1I',
          title: '壺鈴(16kg)',
          imgUrl: 'https://hexschool-api.s3.us-west-2.amazonaws.com/custom/bOFF3opURsWBl9g3yr3roMuMjCYHmyNrDebTTBa33XwFORhamYf4SzmvqvvmYXe7IvN3ChW3uqOweYLt4v2qM51v1SL9bKWeAmtIaIJP3khReKFlcv6ud0pCCvFLctck.jpg',
          price: 3199,
          origin_price: 3500,
          unit: '個'
        }
      ]
    }
  }
}
</script>

<style>
.transforms{
    transition: all 0.7s;
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
  top:40%;
  left: 50%;
  transform: translate(-50%, -30%);
}
.hotproduct-title{
  font-size: 16px;
}
</style>
