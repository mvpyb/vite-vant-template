<template>
  <login-layout>
    <template #body>
      <van-form
          label-width="0"
          @submit="onSubmit"
      >
        <van-cell-group inset>
          <van-field
              v-model="formState.username"
              :rules="rules.username"
              name="username"
              label=""
              placeholder="用户名"
              maxlength="11"
              clearable
          />
          <van-field
              v-model="formState.password"
              type="password"
              name="password"
              label=""
              placeholder="密码"
              clearable
              :rules="rules.password"
          />
        </van-cell-group>
        <div class="form-btn">
          <van-button round block type="primary" native-type="submit" class="btn-item h50">
            提交
          </van-button>
        </div>
      </van-form>
    </template>
  
    <template #foot>
      <div>
        <div class="handle">
          <van-button plain class="txt-btn no-border yellow-btn" @click="router.push( '/forgot' ) ">忘记密码</van-button>
          <span class="split-line"></span>
          <van-button plain class="txt-btn no-border yellow-btn" @click="router.push( '/register' ) ">注册账号</van-button>
        </div>
    
        <div class="third">
          <van-divider class="line" >其他登录方式</van-divider>
      
          <svg-icon icon-class="wechat" class-name="third-icon wechat" ></svg-icon>
          <svg-icon icon-class="weibo" class-name="third-icon weibo" />
        </div>
      </div>
    </template>
  </login-layout>
  
</template>

<script setup>
import { ref, reactive } from 'vue'
import { validPhone } from '/@/utils/validate'
import { login } from '/@/api/user'
import toasts from '/@/views/components/toasts'
import { LoginLayout } from '/@/components/YuLayout'

import logo from '/@/assets/imgs/logo.png'
import { useRouter, useRoute } from "vue-router"
import { useStore } from "vuex"
const store = useStore()

const router = useRouter()
const route = useRoute()

const trigger = 'onBlur' // onChange

const formState = reactive({
  username: '15911111111',
  password: '123456789',
})

const checkUserName = ( value, rule ) => {
  if ( !value ) return '请填写手机号码！'
  if ( !validPhone( value ) ) return '手机号格式不正确！'
  return true
}

const rules = {
  username: [
    { required: true, message: '请填写用户名', trigger },
    { validator: checkUserName, trigger },
  ],
  password: [
    { required : true, message : '密码不能为空', trigger },
  ],
}


const onSubmit = async(values) => {
  try {
    const { data } = await login( { ...values } )
    const { token } = data
    await store.dispatch( 'user/saveToken', {
      token,
    } )
    router.push( '/user' )
    
  } catch ( e ) {
    toasts.fail( '登录失败，请稍后再试...' )
  } finally {}
}

</script>

<style lang="scss">
  @import "./index.scss";
  .handle {
    text-align: center;
    .txt-btn {
      display: inline-block;
      vertical-align: middle;
      font-size: 14px;
    }
    .split-line {
      vertical-align: middle;
      display: inline-block;
      width: 2px;
      height: 12px;
      background: var( --yu-yellow-color );
    }
  }
  
  .third {
    text-align: center;
    .line {
      width: 200px;
      margin: 80px auto 20px;
    }
    
    .third-icon {
      cursor: pointer;
      width: 40px;
      height: 40px;
      
      
      display: inline-block;
      color: var( --yu-red-color );
      margin: 0 20px;
     &.wechat {
       color : var( --yu-green-color );
     }
    }
  }
</style>
