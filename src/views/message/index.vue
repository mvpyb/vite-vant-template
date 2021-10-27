<template>
  <div class="section msg-section">
  
    <!--系统面板-->
    <yu-card class="user-info-card">
      <template #body>
        <list class="user-info-list" v-for="item in notice" :key="item.id">
          <template #left>
            <div class="inline-block">
              <div class="icon-item">
                <svg-icon :icon-class="item.icon" class-name="tab-bar-icon" ></svg-icon>
                <van-badge v-if="item.nums" :content="item.nums" max="99" />
              </div>
              <span>{{item.name}}</span>
            </div>
          </template>
          <template #right>
            <div>
              <van-icon name="arrow" />
            </div>
          </template>
        </list>
      </template>
    </yu-card>
    
    <!--好友消息面板-->
    <yu-card class="user-info-card friend-notice-card">
      <template #body>
         <div class="notice-list" v-for="notice in friendNotice" :key="notice.id">
            <div class="avatar">
              <img :src="notice.avatar" alt="">
            </div>
           
           <div class="notice-info">
             <div class="top">
               <div class="user-name ellipsis">{{notice.username}}</div>
               <div class="time">{{notice.time}}</div>
             </div>
             <div class="bottom">
               <div class="notice-content ellipsis">{{notice.msg}}</div>
             </div>
           </div>
         </div>
      </template>
    </yu-card>
    
  </div>
</template>

<script setup>
  import { ref, reactive } from 'vue'
  import YuCard from '/@/components/YuCard'
  import list from '/@/views/components/list/index.vue'
  import avatar from '/@/assets/imgs/avatar.png'
  import zcAvatar from '/@/assets/imgs/zc-avatar.jpg'
  import jbAvatar from '/@/assets/imgs/jb-avatar.jpg'
  import ttAvatar from '/@/assets/imgs/tt-avatar.jpg'
  import dsAvatar from '/@/assets/imgs/ds-avatar.jpg'
  
  const data = [
    {
      id : 1,
      name : '系统通知',
      icon : 'system-notice',
      nums : 200,
    },
    {
      id : 2,
      name : '账号消息',
      icon : 'notice',
      nums : 0,
    },
    {
      id : 3,
      name : '财务通知',
      icon : 'rmb',
      nums : 1,
    },
    {
      id : 4,
      name : '帖子通知',
      icon : 'msg',
      nums : 8,
    }
  ]
  const msgs = [
    {
      id : 1,
      avatar : zcAvatar,
      username : '招财',
      msg : '招财是一只英短',
      time : '2021-10-04',
    },
    {
      id : 2,
      avatar : jbAvatar,
      username : '进宝',
      msg : '进宝是一只美短',
      time : '2021-10-04',
    },
    {
      id : 3,
      avatar : ttAvatar,
      username : '坨坨',
      msg : '坨坨是一只阿拉斯加',
      time : '2021-10-04',
    },
    {
      id : 4,
      avatar : dsAvatar,
      username : '大帅',
      msg : '大帅是一头哈士奇',
      time : '2021-10-04',
    }
  ]
  
  const notice = ref( data )
  const friendNotice = ref( msgs )

</script>

<style lang="scss" scoped>
  .user-info-card {
    display: block;
    width: 100%;
    padding: 0;
    margin-bottom: 8px;
  }
  
  .user-info-list {
    height: 40px;
    padding: 10px;
    box-sizing: content-box;
    .icon-item {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background: var( --yu-linear-bg-color-light );
      color : var( --yu-white-color );
      flex: 0 0 38px;
      margin-right: 16px;
      position: relative;
      .van-badge {
        position: absolute;
        top: -4px;
        right: -4px;
      }
      .svg-icon {
        width: 26px;
        height: 26px;
        margin-top: 7px;
      }
    }
    span {
      display: inline-block;
      font-size: 16px;
      flex: 1;
    }
    .inline-block {
      display: flex;
      -webkit-box-pack: justify;
      justify-content: space-between;
      -webkit-box-align: center;
      align-items: center;
      margin: 0 16px;
      font-size: 16px;
      line-height: 24px;
    }
  }
  
  .notice-list {
    -webkit-box-flex: 1;
    flex: 1 0 100%;
    width: 100%;
    padding-top: 16px;
    display: -webkit-box;
    display: flex;
    -webkit-box-pack: start;
    justify-content: flex-start;
    -webkit-transition: all 0.5s;
    transition: all 0.5s;
    .avatar {
      -webkit-box-flex: 0;
      flex: 0 0 38px;
      height: 38px;
      width: 38px;
      margin-left: 8px;
      cursor: pointer;
      border-radius: 50%;
      overflow: hidden;
      box-shadow: var(  --yu-border-shadow--light );
      img {
        width: 38px;
        height: 38px;
      }
    }
    .notice-info {
      flex: 1;
      overflow: hidden;
      padding-bottom: 16px;
      margin-right: 16px;
      font-size: 16px;
      border-bottom: 1px solid var( --yu-gray-color--light );
      margin-left: 8px;
      .top{
        display: -webkit-box;
        display: flex;
        -webkit-box-pack: justify;
        justify-content: space-between;
        height: 20px;
        .user-name {
          max-width: 120px;
          font-weight: 600;
          font-size: 14px;
          text-align: left;
          line-height: 20px;
          color: var( --yu-font-color--dark );
          cursor: pointer;
        }
        .time {
          font-weight: normal;
          font-size: 12px;
          line-height: 22px;
          text-align: left;
          color: var( --yu-gray-color );
        }
      }
      .bottom {
        position: relative;
        padding-top: 4px;
        font-size: 14px;
        color: var( --yu-gray-color );
        line-height: 20px;
        cursor: pointer;
        .notice-content{
          overflow: hidden;
          word-break: break-all;
          text-align: left;
          max-width: 320px;
        }
      }
    }
    &:last-child {
      .notice-info {
        border : none;
      }
    }
  }
</style>
