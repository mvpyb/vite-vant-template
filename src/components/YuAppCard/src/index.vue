<template>
  <div class="app-card">
    <div class="app-card-head clearfix">
      <h4 class="fl">
        <slot name="title"></slot>
      </h4>
      <div class="fr">
        <span>
           <slot name="description"></slot>
        </span>
        <van-icon name="arrow" />
      </div>
    </div>
    <div class="app-card-body">
      <slot name="body"></slot>
    </div>
  </div>
</template>


<style lang="scss" scoped>
  .app-card {
    position: relative;
    padding: 5px;
    
    .app-card-head {
      padding: 15px 0;
      h4 {
        font-size: 18px;
        line-height: 26px;
        color: var( --yu-font-color--dark );
        font-weight: 600;
      }
      span {
        display: inline-block;
        font-size: 12px;
        line-height: 26px;
        color: var( --yu-gray-color );
        margin-right: 3px;
      }
      .van-icon {
        color: var( --yu-gray-color );
      }
    }
  }
</style>
