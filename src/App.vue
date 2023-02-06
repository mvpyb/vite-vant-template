<template>
  <!--  <p class="test">{{ $t('header.home') }}</p>-->
  <van-config-provider :theme="theme">
    <router-view />
  </van-config-provider>
</template>

<script>
import { defineComponent, ref } from 'vue'
import { ConfigProvider } from 'vant'
// import { useI18n } from 'vue-i18n'
// import { useAppStore } from '@/store'

export default defineComponent( {
  name : 'App',
  components : {
    [ConfigProvider.name] : ConfigProvider
  },
  setup() {
    const theme = ref( 'light' )
    return {
      theme
    }
  }
} )
</script>
