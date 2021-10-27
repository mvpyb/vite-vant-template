<template>
  <div class="section dashboard-section">
    
    <div class="dashboard-content">
      
      <van-row justify="space-around" gutter="10">
        <van-col span="12">
          <yu-card class="card-list">
            <template #body>
              <div class="card-body clearfix">
                <div class="info fl">
                  <div class="title ellipsis">交友</div>
                  <div class="description ellipsis">动态、纸飞机</div>
                </div>
                <div class="icon fr">
                  <svg-icon icon-class="color-weChat" ></svg-icon>
                </div>
          
              </div>
            </template>
          </yu-card>
        </van-col>
    
        <van-col span="12">
          <yu-card class="card-list">
            <template #body>
              <div class="card-body clearfix">
                <div class="info fl">
                  <div class="title ellipsis">找资源</div>
                  <div class="description ellipsis">头像、表情包</div>
                </div>
                <div class="icon fr">
                  <svg-icon icon-class="color-find" ></svg-icon>
                </div>
          
              </div>
            </template>
          </yu-card>
        </van-col>
    
        <van-col span="12">
          <yu-card class="card-list">
            <template #body>
              <div class="card-body clearfix">
                <div class="info fl">
                  <div class="title ellipsis">树洞</div>
                  <div class="description ellipsis">暖心秘密空间</div>
                </div>
                <div class="icon fr">
                  <svg-icon icon-class="color-friend" ></svg-icon>
                </div>
          
              </div>
            </template>
          </yu-card>
        </van-col>
    
        <van-col span="12">
          <yu-card class="card-list">
            <template #body>
              <div class="card-body clearfix">
                <div class="info fl">
                  <div class="title ellipsis">种草</div>
                  <div class="description ellipsis">多收经验交流</div>
                </div>
                <div class="icon fr">
                  <svg-icon icon-class="color-bao" ></svg-icon>
                </div>
          
              </div>
            </template>
          </yu-card>
        </van-col>
  
      </van-row>
  
      <yu-app-card class="app-card-list">
        <template #title>我的话题</template>
        <template #description>话题管理</template>
        <template #body>
          <swiper
              :slides-per-view="1"
              :space-between="50"
              :loop="true"
          >
            <swiper-slide class="app-card-slide" v-for="i in 4" :key="i">
              <van-row gutter="20">
                <van-col span="6" v-for="item in list" :key="item.id">
                  <div class="conversation-list">
                    <div class="conversation-preview">
                      <div class="conversation-preview-img"><img :src="item.img" :alt="item.title"></div>
                      <div class="mask"></div>
                    </div>
                    <div class="conversation-info">
                      <h4>{{item.title}}</h4>
                    </div>
                  </div>
                </van-col>
              </van-row>
            </swiper-slide>
          </swiper>
        </template>
      </yu-app-card>
  
      <yu-app-card class="app-card-list">
        <template #title>热门话题</template>
        <template #description>话题广场</template>
        <template #body>
          <div class="hot-news-list clearfix">
            <div class="left fl">
              <div class="title">
                <div class="list-icon">#</div>
                <h3>万万没想到</h3>
                <svg-icon icon-class="hot" class-name="hot-icon" ></svg-icon>
              </div>
              <div class="sub-title">
                相机还可以这样玩! ?
              </div>
              <div class="description">
                9527个还有在这里浪
              </div>
            </div>
            <div class="right fr">
              <img :src="img1" alt="">
            </div>
          </div>
  
          <div class="hot-news-list clearfix">
            <div class="left fl">
              <div class="title">
                <div class="list-icon">#</div>
                <h3>一起去旅游吧</h3>
                <svg-icon icon-class="hot" class-name="hot-icon" ></svg-icon>
              </div>
              <div class="sub-title">
                来呀！快活呀~
              </div>
              <div class="description">
                9527个驴友也在这里~
              </div>
            </div>
            <div class="right fr">
              <img :src="img2"  alt="">
            </div>
          </div>
  
          <div class="hot-news-list clearfix">
            <div class="left fl">
              <div class="title">
                <div class="list-icon">#</div>
                <h3>美食分享</h3>
                <svg-icon icon-class="hot" class-name="hot-icon" ></svg-icon>
              </div>
              <div class="sub-title">
                辣子鸡真香!
              </div>
              <div class="description">
                9527个美食博主分享了美食~~
              </div>
            </div>
            <div class="right fr">
              <img :src="img3" alt="">
            </div>
          </div>
        </template>
      </yu-app-card>
      
    </div>
    
  </div>
</template>

<script setup>
import { ref, reactive, onBeforeMount } from 'vue'
import YuCard from '/@/components/YuCard'
import YuAppCard from '/@/components/YuAppCard'
import listImg from '/@/assets/imgs/list.jpg'
import img1 from '/@/assets/imgs/img1.jpg'
import img2 from '/@/assets/imgs/img2.jpg'
import img3 from '/@/assets/imgs/img3.jpg'

import animal0 from '/@/assets/imgs/zc-avatar.jpg'
import animal1 from '/@/assets/imgs/jb-avatar.jpg'
import animal2 from '/@/assets/imgs/tt-avatar.jpg'
import animal3 from '/@/assets/imgs/ds-avatar.jpg'

const imgs = {
  animal0, animal1, animal2, animal3
}


import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css/bundle'

const list = ref( [] )

function getList() {
  for( var i = 0; i < 4; i++ ) {
    list.value.push( {
      id : i,
      img : imgs['animal' + i],
      title : '动物世界'
    } )
  }
}
getList()

</script>

<style lang="scss" scoped>
  .dashboard-section {
    padding: 10px;
    background: var( --yu-white-color );
    min-height: 100vh;
  
    .card-list {
      margin-bottom: 10px;
      background: var( --yu-linear-bg-color-light );
      .info {
        text-align: left;
      }
      .title {
        font-weight: 600;
        color: var( --yu-font-color--dark );
        font-size: 16px;
        line-height: 20px;
        margin-bottom: 5px;
      
      }
      .description {
        color: var( --yu-font-color--dark );
        font-size: 12px;
        line-height: 16px;
      }
      .svg-icon {
        width: 38px;
        height: 38px;
      
      }
    }
  
    .app-card-list {
      margin-bottom: 30px;
    }
  
    .conversation-list {
      .conversation-preview {
        position: relative;
        width: 50px;
        height: 50px;
        .conversation-preview-img {
          border-radius: 50%;
          overflow: hidden;
          width: 100%;
          height: 100%;
          position: absolute;
          top: 0;
          left: 0;
          z-index: 3;
        }
        img{
          width: 100%;
          height: 100%;
        }
        .mask {
          /*position: absolute;
          background: radial-gradient(#fff 0%, rgba(243, 206, 205, 0.4) 35%, rgba(88, 88, 88, 0.3) 60%, rgba(0, 0, 0, 0) 70%);
          border-radius: 50%;
          
          width: 80px;
          height: 80px;
          margin-top: -40px;
          margin-left: -40px;
          top: 50%;
          left: 50%;
          z-index: 2;*/
        }
      }
      .conversation-info {
        margin-top: 10px;
        h4 {
          font-size : 14px;
          line-height: 20px;
        
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
      }
    }
  
    .hot-news-list {
      margin-bottom: 40px;
      .left {
        color: var( --yu-font-color--dark );
        text-align: left;
        .title {
          font-size: 14px;
          line-height: 30px;
          margin-bottom: 5px;
          .list-icon {
            width: 16px;
            height: 16px;
            border-radius: 50%;
            background: var( --yu-yellow-color--high );
            color: var( --yu-font-color--dark );
            text-align: center;
            line-height: 16px;
            font-size : 12px;
            display: inline-block;
          }
          .hot-icon {
            display: inline-block;
            color: var( --yu-danger-color );
          }
          h3 {
            display: inline-block;
            margin: 0 8px;
            font-weight: 600;
          }
        }
        .sub-title {
          font-size: 13px;
          line-height: 16px;
          margin-bottom: 8px;
        }
        .description {
          font-size: 12px;
          line-height: 24px;
        
          color: var( --yu-gray-color );
        }
      }
      .right {
        width: 103px;
        height: 80px;
        border-radius: 10px;
        overflow: hidden;
        img{
          width: 100%;
          height: 100%;
        }
      }
    }
    
  }
</style>
