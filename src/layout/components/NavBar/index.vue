<template>
  <div class="nav-bar">
    <div class="nav-bar-bg">
      <img class="img1" :src="bg1" alt="">
      <img class="img2" :src="bg2" alt="">
    </div>
    
    <div class="nav-bar-handle">
      <h1> 社区 </h1>
      <div class="search">
       
        <div class="search-info" v-if="!focusSearch" @click="showSearch" :class="[ search ? 'algin-left' : 'algin-center' ]">
          <svg-icon icon-class="search" v-if="!search"></svg-icon>
          <span v-if="!search">请输入搜索内容</span>
          <span class="search-txt" v-else>{{search}}</span>
        </div>
        
        <van-field
            ref="searchInp"
            v-else-if="focusSearch"
            class="search-inp"
            v-model="search"
            label=""
            label-width="0"
            @blur="searchBlur"
        />
      </div>
    </div>
    
    <div class="nav-bar-foot"></div>
  </div>
</template>

<script setup>
  import bg1 from '/@/assets/imgs/bg-img1.png'
  import bg2 from '/@/assets/imgs/bg-img2.png'
  import { ref, nextTick } from 'vue'
  
  const searchInp = ref()
  const search = ref( '' )
  const focusSearch = ref( false )
  
  function searchBlur() {
    focusSearch.value = false
    // 搜索请求 TODO
  }
  function showSearch() {
    focusSearch.value = true
    nextTick( () => {
      searchInp.value && searchInp.value.focus()
    } )
  }
</script>

<style lang="scss" scoped>
  .algin-left {
    text-align: left;
  }
  .algin-left {
    text-align: left;
  }
  .nav-bar {
    height: 170px;
    position: relative;
    .nav-bar-bg {
      position: absolute;
      overflow: hidden;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      z-index: 1;
      background: var( --yu-linear-bg-color );
     
      img {
        display: inline-block;
        position: absolute;
        width: 80px;
        height: auto;
        opacity: 0.2;
        &.img1 {
          top: 0;
          right: 0;
        }
        &.img2 {
          bottom: 0;
          left: 0;
        }
      }
    }
    
    .nav-bar-handle {
      position: absolute;
      width: 100%;
      height: 40px;
      left: 0;
      bottom: 30px;
      padding-left: 10px;
      padding-right: 10px;
      text-align: center;
      z-index: 2;
      h1 {
        font-size: 30px;
        line-height: 40px;
        display: inline-block;
        color : var( --yu-font-color--dark );
        vertical-align: middle;
        margin-right: 20px;
      }
      
      .search {
        text-align: center;
        width: 75%;
        vertical-align: middle;
        display: inline-block;
        background: var(--yu-white-color);
        height: 40px;
        border-radius: 40px;
        position: relative;
        .search-info {
          display: inline-block;
          width: 100%;
          height: 100%;
          border-radius: 40px;
          background: var(--yu-white-color);
          position: relative;
          text-indent: 20px;
          font-size: 12px;
        }
        .svg-icon {
          width: 20px;
          height: 20px;
          color : var( --yu-font-color--dark );
          margin-top: 10px;
        }
        span {
          display: inline-block;
          line-height: 40px;
          font-size: 16px;
          color : var( --yu-gray-color );
          &.search-txt{
            color : var( --yu-font-color--dark );
            text-align: left;
          }
        }
        :deep(.search-inp) {
          position: absolute;
          width: calc( 100% - 40px );
          height: 100%;
          top: 0;
          left: 20px;
          font-size: 16px;
          padding-top: 0;
          padding-bottom: 0;
          .van-field__control {
            height: 40px;
            line-height: 40px;
          }
        }
      }
    }
  }
  
  .nav-bar-foot {
    height: 16px;
    border-radius: 40px 40px 0 0;
    background: var( --yu-white-color );
  
    position: absolute;
    overflow: hidden;
    width: 100%;
    bottom: -1px;
    left: 0;
    z-index: 3;
  }
</style>
