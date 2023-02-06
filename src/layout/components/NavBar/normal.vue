<template>
  <div class="nav-bar">
    <van-nav-bar>
      <template #left>
        <span @click="router.go(-1)">
          <van-icon name="arrow-left" />
          <span>返回</span>
        </span>
      </template>

      <template #right>
        <div class="icon-wrapper inline-block" @click="router.push('/')">
          <svg-icon icon-class="home" class-name="nav-bar-icon" />
        </div>
        <div class="icon-wrapper inline-block" @click="router.push('/message')">
          <van-badge :content="5" max="99" />
          <svg-icon icon-class="msg" class-name="nav-bar-icon" />
        </div>
        <div class="icon-wrapper inline-block" @click="router.push('/user')">
          <svg-icon icon-class="my" class-name="nav-bar-icon" />
        </div>
      </template>
    </van-nav-bar>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
</script>

<style lang="scss" scoped>
.nav-bar {
  .van-icon,
  span {
    color: var(--yu-font-color--dark);
    margin-right: 4px;
    font-size: 16px;
  }
  .icon-wrapper {
    position: relative;
    .van-badge {
      position: absolute;
      //top: -4px;
      //right: -4px;
      top: 4px;
      right: 4px;
    }
  }
  .nav-bar-icon {
    width: 22px;
    height: 22px;
    margin: 0 8px;
    color: var(--yu-gray-color);
    cursor: pointer;
  }
}
</style>
