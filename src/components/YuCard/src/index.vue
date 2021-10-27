<template>
  <div class="yu-card">
    <div class="card-head-wrapper">
      <slot name="head"></slot>
    </div>
    <div class="card-body-wrapper">
      <slot name="body"></slot>
    </div>
    <div class="card-foot-wrapper">
      <slot name="foot"></slot>
    </div>
  </div>
</template>


<style lang="scss" scoped>
  .yu-card {
    line-height: 20px;
    border-radius: 6px;
    background-color: var( --yu-white-color );
    text-align: center;
    box-shadow: var( --yu-border-shadow--light );
    position: relative;
    padding: 20px;
  }
</style>
