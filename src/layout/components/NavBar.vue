<template>
  <van-nav-bar
    title="标题"
    left-text="返回"
    right-text="按钮"
    left-arrow
    @click-left="onClickLeft"
    @click-right="onClickRight"
  />
</template>

<script setup lang="ts">
import { showToast } from 'vant'
// import { onMounted, computed } from 'vue'

const onClickLeft = () => showToast( '返回' )
const onClickRight = () => showToast( '按钮' )

// const emit = defineEmits( ['change', 'delete'] )
// onMounted( () => {} )
// const count = computed( () => {} )
</script>

<style lang="scss" scoped></style>
