<template>
  <div class="section find-section">
    <!--搜索-->
    <div class="block">
      <div class="find-container">
        <div class="search-box">
          <svg-icon icon-class="search" />
          <van-field v-model="value" label="" placeholder="请输入您想要搜索的内容" :label-width="0" />
        </div>
        <van-button plain class="txt-btn no-border gray-btn">取消</van-button>
      </div>
    </div>

    <yu-app-card class="app-card-list trend">
      <template #title>
        <span>
          <svg-icon icon-class="remark" />
          潮流话题
        </span>
      </template>
      <template #description>更多</template>
      <template #body>
        <van-row>
          <van-col span="12" v-for="(item, index) in trendList" :key="item.id" class="trend-list">
            <span class="index" :class="'index' + (index + 1)">{{ index + 1 }}</span>
            <span class="title ellipsis">{{ item.title }}</span>
          </van-col>
        </van-row>
      </template>
    </yu-app-card>

    <yu-app-card class="app-card-list active">
      <template #title>
        <span>
          <svg-icon icon-class="active-user" />
          活跃用户
        </span>
      </template>
      <template #description>更多</template>
      <template #body>
        <div class="active-user-container">
          <div class="inline-block1 active-user-list" v-for="item in 15" :key="item">
            <div class="avatar">
              <img
                :src="item % 5 == 1 ? zcAvatar : item % 5 == 2 ? jbAvatar : item % 5 == 3 ? ttAvatar : dsAvatar"
                alt=""
              />
            </div>
            <div class="user-name ellipsis">我是招财</div>
          </div>
        </div>
      </template>
    </yu-app-card>

    <yu-app-card class="app-card-list hot">
      <template #title>
        <span>
          <svg-icon icon-class="hot2" />
          热门内容
        </span>
      </template>
      <template #description>更多</template>
      <template #body>
        <div class="nothing">
          <svg-icon icon-class="empty"></svg-icon>
          <p>暂无数据</p>
        </div>
      </template>
    </yu-app-card>
  </div>
</template>

<script setup>
// import { ref, reactive } from 'vue'
import YuAppCard from '@/components/YuAppCard'
import zcAvatar from '@/assets/imgs/zc-avatar.jpg'
import jbAvatar from '@/assets/imgs/jb-avatar.jpg'
import ttAvatar from '@/assets/imgs/tt-avatar.jpg'
import dsAvatar from '@/assets/imgs/ds-avatar.jpg'

const trendList = [
  {
    id : 1,
    title : '今天鲜花献给英烈'
  },
  {
    id : 2,
    title : '今年国庆去哪儿浪~'
  },
  {
    id : 3,
    title : '三亚市委原书记童道驰被公诉'
  },
  {
    id : 4,
    title : '台湾医院为25人打150人份剂量疫苗'
  },
  {
    id : 5,
    title : '深度调查:拉闸限电缘何突袭'
  },
  {
    id : 6,
    title : '举报威震天?央视网犀利发声'
  },
  {
    id : 7,
    title : '中疾控:旅行归来应自我观察14天'
  },
  {
    id : 8,
    title : '演出活动不得组织演员假唱'
  },
  {
    id : 9,
    title : '央行辟谣排查个人储蓄用户'
  },
  {
    id : 10,
    title : '十一出行问一问'
  }
]
</script>

<style lang="scss" scoped>
.find-section {
  padding: 16px;
  background-color: var(--yu-white-color);
  /*搜索*/
  .find-container {
    display: flex;
    flex-direction: row;
    -webkit-box-align: center;
    align-items: center;
    background-color: var(--yu-white-color);
  }
  .search-box {
    display: flex;
    flex-direction: row;
    -webkit-box-align: center;
    align-items: center;
    padding-left: 16px;
    width: 100%;
    height: 36px;
    border-radius: 5px;
    background-color: var(--yu-background-color-text2);
    box-sizing: border-box;
    .van-field {
      flex: 1;
      background-color: transparent;
      width: inherit;
    }
    .svg-icon {
      width: 16px;
      height: 16px;
    }
  }
  .txt-btn {
    margin-left: 16px;
    font-size: 14px;
    line-height: 24px;
    word-break: keep-all;
  }

  /*模块*/
  .app-card-list {
    .svg-icon {
      width: 20px;
      height: 20px;
      margin-right: 5px;
    }
    :deep(.app-card-head) {
      border-bottom: 1px solid var(--yu-gray-color--light);
      margin-bottom: 20px;
    }
  }

  /*话题*/
  .trend {
    .svg-icon {
      color: var(--yu-color-success);
    }
    .trend-list {
      width: 50%;
      font-size: 14px;
      margin-bottom: 15px;
      padding-right: 10px;
      span {
        display: inline-block;
        vertical-align: middle;
      }
      .index {
        width: 20px;
        color: var(--yu-color-error);
        &.index1 {
        }
        &.index2 {
          opacity: 0.8;
        }
        &.index3 {
          opacity: 0.6;
        }
        &.index4 {
          opacity: 0.4;
        }
        &.index5 {
          color: var(--yu-color-warn);
        }
        &.index6 {
          color: var(--yu-color-warn);
          opacity: 0.8;
        }
        &.index7 {
          color: var(--yu-color-warn);
          opacity: 0.6;
        }
        &.index8 {
          color: var(--yu-color-warn);
          opacity: 0.5;
        }
        &.index9 {
          color: var(--yu-color-warn);
          opacity: 0.4;
        }
        &.index10 {
          color: var(--yu-color-warn);
          opacity: 0.3;
        }
      }
      .title {
        width: calc(100% - 30px);
      }
    }
  }

  /*用户*/
  .active {
    .svg-icon {
      color: var(--yu-color-warn);
    }
    .active-user-container {
      margin-bottom: 24px;
      width: 100%;
      .active-user-list {
        width: 20%;
        text-align: center;
        margin-bottom: 20px;
        display: inline-block;
        .avatar {
          display: inline-block;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          overflow: hidden;
          img {
            width: 40px;
            height: 40px;
          }
        }
        .user-name {
          width: 100%;
          text-align: center;
          margin-top: 12px;
          font-size: 14px;
          line-height: 18px;
          color: var(--color-text-primary);
        }
      }
    }
  }
  /*热门*/
  .hot {
    span .svg-icon {
      color: var(--yu-color-error);
    }

    .nothing {
      min-height: 400px;
      text-align: center;
      padding: 30px 0;
      .svg-icon {
        width: 200px;
        height: 200px;
      }
      p {
        font-size: 16px;
        line-height: 30px;
        color: var(--yu-gray-color);
      }
    }
  }
}
</style>
