<template>
  <van-tabbar v-model="active" class="tab-bar" @change="tabChange">
    <van-tabbar-item to="/" name="Dashboard">
      <span class="tab-bar-txt">首页</span>
      <template #icon>
        <svg-icon icon-class="home" class-name="tab-bar-icon" ></svg-icon>
      </template>
    </van-tabbar-item>
  
    <van-tabbar-item to="/find" name="Find">
      <span class="tab-bar-txt">发现</span>
      <template #icon>
        <svg-icon icon-class="find" class-name="tab-bar-icon" ></svg-icon>
      </template>
    </van-tabbar-item>
  
    <van-tabbar-item class="add-item" to="/add">
      <template #icon>
        <div class="add">
          <svg-icon icon-class="add" class-name="tab-bar-icon" ></svg-icon>
        </div>
      </template>
    </van-tabbar-item>
  
    <van-tabbar-item badge="5" to="/message" name="Message">
      <span class="tab-bar-txt">消息</span>
      <template #icon>
        <svg-icon icon-class="msg" class-name="tab-bar-icon" ></svg-icon>
      </template>
    </van-tabbar-item>
  
    <van-tabbar-item to="/user" name="My">
      <span class="tab-bar-txt">我的</span>
      <template #icon>
        <svg-icon icon-class="my" class-name="tab-bar-icon" ></svg-icon>
      </template>
    </van-tabbar-item>
    
  </van-tabbar>
</template>

<script setup>
  import { onMounted, ref } from 'vue'
  import { useRouter, useRoute } from 'vue-router'
  const router = useRouter()
  const route = useRoute()
  
  const active = ref( 0 )

  onMounted( () => {
    active.value = route.name
  } )
  
  async function tabChange( name ) {}
  
</script>

<style lang="scss" scoped>
  .tab-bar {
    height: 60px;
  
    .van-tabbar-item {
      color: var( --yu-gray-color );
      .tab-bar-txt {
        font-size:16px;
      }
      .tab-bar-icon {
        width: 28px;
        height: 28px;
      }
      &.van-tabbar-item--active {
        color: var( --yu-dark-color );
      }
      &.add-item {
        .add {
          border-radius: 50%;
          overflow: hidden;
          width: 40px;
          height: 40px;
          text-align: center;
          background: var( --yu-linear-bg-color-light );
          .tab-bar-icon {
            color: var( --yu-white-color );
            margin-top: 6px;
          }
        }
      }
    }
    
  }
  
</style>
