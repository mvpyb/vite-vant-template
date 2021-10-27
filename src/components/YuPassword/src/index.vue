<template>
  <div class="password-wrapper">
    <van-field
        class="password-item hide"
        v-show="showPwd"
        v-model="password"
        type="password"
        name="password"
        :label="label"
        :placeholder="placeholder"
        :clearable="clearable"
        :maxlength="maxlength"
        :rules="rules"
    />
    <van-field
        class="password-item show"
        v-show="!showPwd"
        v-model="password"
        type="text"
        name="password"
        :label="label"
        :placeholder="placeholder"
        :clearable="clearable"
        :maxlength="maxlength"
        :rules="rules"
    />
    
    <svg-icon :icon-class=" showPwd ? 'close-eye' : 'open-eye'" class-name="pwd-icon" @click="toggleShowPwd"></svg-icon>
  </div>
</template>

<script setup>
  import {ref} from "vue"
  const props = defineProps( {
    password : {
      type : String,
      default : ''
    },
    maxlength : {
      type : Number,
      default : 16
    },
    placeholder : {
      type : String,
      default : '密码'
    },
    label : {
      type : String,
      default : ''
    },
    clearable : {
      type : Boolean,
      default : true
    },
    rules : {
      type : Array,
      default() {
        return [
          { required : true, message : '密码不能为空', trigger : 'onBlur' },
        ]
      }
    },
  } )
  
  const showPwd = ref( false )

  const emit = defineEmits(['toggleShowPwd'])
  
  function toggleShowPwd( ) {
    showPwd.value = !showPwd.value
    emit( 'toggleShowPwd', showPwd.value )
  }
</script>

<style lang="scss" scoped>
  .password-wrapper {
    position: relative;
    .password-item {
    
    }
    .pwd-icon {
      cursor: pointer;
      position: absolute;
      width: 20px;
      height: 20px;
      display: inline-block;
      color: var( --yu-gray-color );
      z-index: 9;
      top: 18px;
      right: 40px;
    }
  }
</style>
