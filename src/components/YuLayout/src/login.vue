<template>
  <div class="section yu-login-layout">
    <div class="logo-container">
      <img :src="logo" alt="">
    </div>
    
    <div class="body-container">
      <slot name="body"></slot>
    </div>
    
    <div class="foot-container">
      <slot name="foot"></slot>
    </div>
  </div>
</template>

<script setup>
  import logo from '/@/assets/imgs/logo.png'
</script>

<style lang="scss" scoped>
  
  .logo-container {
    text-align: center;
    width: 82px;
    height: 82px;
    border-radius: 50%;
    margin: 60px auto 40px;
    overflow: hidden;
    img {
      display: inline-block;
      width: 100%;
      height: 100%;
    }
  }
</style>
