<template>
  <div class="error">
    <div class="container-floud">
      <div class="col-xs-12 ground-color text-center">
        <div class="container-error-404">
          <div class="clip">
            <div class="shadow">
              <span class="digit">{{thirdDigit}}</span>
            </div>
          </div>
          <div class="clip">
            <div class="shadow">
              <span class="digit">{{secondDigit}}</span>
            </div>
          </div>
          <div class="clip">
            <div class="shadow">
              <span class="digit">{{firstDigit}}</span>
            </div>
          </div>
          <div class="msg">OH!
            <span class="triangle"></span>
          </div>
        </div>
        <h2 class="h1">很抱歉，您还没有权限访问该页面</h2>
        <van-button plain class="txt-btn no-border yellow-btn" @click="router.push( '/' ) ">返回首页</van-button>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { ref } from "vue"
  import {useRouter} from "vue-router"
  const router = useRouter()
  
  function randomNum() {
    return Math.floor(Math.random() * 9) + 1
  }
  
  const thirdDigit = ref(0)
  const secondDigit = ref(0)
  const firstDigit = ref(0)
  
  const time = 30
  let i = 0
  
  const loop3 = setInterval(function () {
    if (i > 40) {
      clearInterval(loop3)
      thirdDigit.value = 4
    } else {
      thirdDigit.value = randomNum()
      i++
    }
  }, time)
  
  const loop2 = setInterval(function () {
    if (i > 80) {
      clearInterval(loop2)
      secondDigit.value = 0
    } else {
      secondDigit.value = randomNum()
      i++
    }
  }, time)
  const loop1 = setInterval(function () {
    if (i > 100) {
      clearInterval(loop1)
      firstDigit.value = 4
    } else {
      firstDigit.value = randomNum()
      i++
    }
  }, time)

</script>

<style lang="scss" scoped>
  @import "./error.scss";
</style>
