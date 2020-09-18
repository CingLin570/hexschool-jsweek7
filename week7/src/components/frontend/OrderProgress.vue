<template>
  <step-progress
  :steps="mySteps"
  :current-step="steps"
  :line-thickness="line"
  icon-class="fa fa-check"
  active-color="#5CA8CA"
  :active-thickness="3"
  ></step-progress>
</template>

<script>
export default {
  props: {
    steps: {
      type: Number,
      default () {
        return {
        }
      }
    }
  },
  data () {
    return {
      mySteps: ['購物車', '填寫訂單', '訂單確認'],
      line: 3
    }
  }
}
</script>

<style>
  .step-progress__wrapper{
  width: 60%;
}
.step-progress__step span{
  font-size: 20px;
}
.step-progress__step:after{
  width: 40px;
  height: 40px;
}
@media (min-width: 768px) {
.ordercontent-item{
  width: 33.3333%;
}
  .step-progress__wrapper{
  width: 50%;
}
.step-progress__step span{
  font-size: 25px;
}
.step-progress__step:after{
  width: 60px;
  height: 60px;
}
}
</style>
