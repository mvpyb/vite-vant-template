<template>
  <div class="section user-section">
    <div class="head">
      <van-nav-bar class="nav-bar">
        <template #left>
          <van-icon name="arrow-left" @click="router.push( '/' ) " />
        </template>
  
        <template #title>
          <div class="title">用户中心</div>
        </template>
      </van-nav-bar>
      
      <div class="head-bg">
        <img class="img1" :src="bg1" alt="">
        <img class="img2" :src="bg2" alt="">
      </div>
      
      <yu-card class="user-info">
        <template #body>
          <div class="card-body clearfix">
            <div class="avatar fl">
              <img src="https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif" alt="">
            </div>
            <div class="info fl">
              <div class="user-name ellipsis">Hi,小灰灰</div>
              <div class="phone ellipsis">123****8911</div>
            </div>
          </div>
        </template>
      </yu-card>
     
    </div>
    
    <div class="body">
  
      <yu-card class="user-info-card">
        <template #body>
          <list class="user-info-list">
            <template #left>个人信息</template>
            <template #right>
              <div>
                修改资料 <van-icon name="arrow" />
              </div>
            </template>
          </list>
      
          <list class="user-info-list">
            <template #left>修改密码</template>
            <template #right>
              <div>
                <van-icon name="arrow" />
              </div>
            </template>
          </list>
      
          <list class="user-info-list">
            <template #left>绑定信息</template>
            <template #right>
              <div>
                <van-icon name="arrow" />
              </div>
            </template>
          </list>
        </template>
      </yu-card>
  
      <yu-card class="user-info-card">
        <template #body>
          <list class="user-info-list">
            <template #left>登录历史</template>
            <template #right>
              <div>
                10:04 13:08 <van-icon name="arrow" />
              </div>
            </template>
          </list>
      
          <list class="user-info-list">
            <template #left>意见反馈</template>
            <template #right>
              <div>
                <van-icon name="arrow" />
              </div>
            </template>
          </list>
      
        </template>
      </yu-card>
  
      <yu-card class="user-info-card">
        <template #body>
          <list class="user-info-list">
            <template #left>个人信息</template>
            <template #right>
              <div>
                修改资料 <van-icon name="arrow" />
              </div>
            </template>
          </list>
      
          <list class="user-info-list">
            <template #left>修改密码</template>
            <template #right>
              <div>
                <van-icon name="arrow" />
              </div>
            </template>
          </list>
      
          <list class="user-info-list">
            <template #left>绑定信息</template>
            <template #right>
              <div>
                <van-icon name="arrow" />
              </div>
            </template>
          </list>
        </template>
      </yu-card>
  
      <yu-card class="user-info-card">
        <template #body>
          <list class="user-info-list">
            <template #center>
              <div @click="loginOut">
                退出登录
              </div>
            </template>
          </list>
        </template>
      </yu-card>
      
    </div>
    
    <div class="foot">
    
    </div>
    
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import toasts from '/@/views/components/toasts'
import { Dialog } from 'vant'
import YuCard from '/@/components/YuCard'
import list from '/@/views/components/list/index.vue'
import bg1 from '/@/assets/imgs/bg-img1.png'
import bg2 from '/@/assets/imgs/bg-img2.png'

import { useRouter } from "vue-router"
const router = useRouter()
import { useStore } from "vuex"
const store = useStore()

  async function loginOut() {
    try {
      await Dialog.confirm({
        title: '消息',
        message: '是否确认退出'
      })
      await store.dispatch( 'user/logout' )
      await router.push(`/login`)
      window && window.location.reload()
    } catch (e) {}
  }

</script>

<style lang="scss" scoped>
  .user-section {
    background: var( --yu-gray-color--light );
    min-height: 100vh;
  }
  
  .head {
    height: 170px;
    position: relative;
    .nav-bar {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      background: transparent;
      border: none;
      .van-icon {
        color: var( --yu-white-color );
      }
      .title {
        color: var( --yu-white-color );
      }
      &:after {
        border:none;
      }
    }
    .head-bg {
      height: 150px;
      background: var( --yu-linear-bg-color );
      position: relative;
      overflow: hidden;
      width: 100%;
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
  }
  
  .user-info {
    position: absolute;
    top: 66px;
    left: 13px;
    width: calc(100% - 26px);
    z-index: 9;
    .card-head-wrapper {
    
    }
    .card-body-wrapper {
      .avatar {
        width: 60px;
        height: 60px;
        overflow: hidden;
        border-radius: 50%;
        margin-right: 16px;
        box-shadow: var( --yu-border-shadow--light );
        img {
          width: 100%;
          height: 100%;
        }
      }
      .info {
        color: rgba(36, 45, 61, 1);
        font-size: 12px;
        line-height: 18px;
        padding-top: 10px;
        text-align: left;
        width: calc( 100% - 60px - 16px );
        .user-name {
          margin-bottom: 4px;
          font-weight:600;
        }
        .phone {
        
        }
      }
    }
    .card-foot-wrapper {
    
    }
  }
  
  .body {
    padding: 0 13px;
    margin-top: 10px;
  }
  .user-info-card {
    display: block;
    width: 100%;
    padding: 0;
    margin-bottom: 8px;
  }
  .user-info-list {
  
  }
</style>
