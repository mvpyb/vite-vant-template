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
  import * as toast from 'vant';
  import { Toast } from 'vant'
  import { onMounted, computed, reactive, toRefs, ref } from 'vue'
  import { useRoute } from 'vue-router'
  import { useStore } from 'vuex'
  // import { getLocal } from '@/common/js/utils'
  
  const route = useRoute()
  const store = useStore()
  const onClickLeft = () => Toast('返回');
  const onClickRight = () => Toast('按钮');
  
  
  const emit = defineEmits(['change', 'delete'])
  
  onMounted(() => {
  
  })
  const count = computed(() => {
  
  })
</script>

<style lang="scss" scoped>


</style>
