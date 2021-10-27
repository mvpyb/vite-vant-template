<template>
  <div class="app-wrapper">
    <default-nav-bar />
    <app-main />
    <foot-bar />
  </div>
</template>

<script setup>
  import { AppMain, DefaultNavBar, FootBar } from "./components"
  import {
    ref,
    unref,
    reactive,
    computed,
    toRefs,
    watchEffect,
    onMounted,
    onBeforeMount,
  } from "vue";
  import { useRouter, useRoute } from "vue-router"
  import { useStore } from "vuex"
  const store = useStore()
  const router = useRouter()
  const route = useRoute()
  
  
</script>

<style lang="scss" scoped>


</style>
