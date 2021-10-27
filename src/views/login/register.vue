<template>
  <login-layout>
    <template #body>
      <van-form
          label-width="0"
          @submit="onSubmit"
      >
        <van-cell-group inset>
          <van-field
              v-model="formState.phone"
              :rules="rules.phone"
              name="phone"
              label=""
              placeholder="手机号"
              maxlength="11"
              clearable
          />
  
          <yu-password
            :password="formState.password"
            :rules="rules.password"
            placeholder="登录密码"
            label=""
            :maxlength="16"
            :clearable="true"
          />
          
          <van-row gutter="20">
            <van-col span="16">
              <van-field
                  v-model="formState.code"
                  :rules="rules.code"
                  name="code"
                  label=""
                  placeholder="验证码"
                  maxlength="6"
                  clearable
              />
            </van-col>
            <van-col span="8">
              <van-button
                  :disabled="!formState.phone"
                  plain
                  hairline
                  round
                  size="small"
                  @click="getCode"
                  class="code-btn">获取验证码</van-button>
            </van-col>
          </van-row>
         
        </van-cell-group>
        <div class="form-btn">
          <van-button round block type="primary" native-type="submit" class="btn-item h50" :disabled="!canSubmit">
            注册
          </van-button>
        </div>
      </van-form>
    </template>
  
    <template #foot>
      <div>
        <div class="handle">
  
          <van-radio-group v-model="agree">
            <van-radio name="1" checked-color="var( --yu-yellow-color )">
              同意<a href="javascript:;">《用户隐私协议》</a>
            </van-radio>
          </van-radio-group>
         
        </div>
      </div>
    </template>
  </login-layout>
  
</template>

<script setup>
import { ref, reactive, computed } from 'vue'
import toasts from '/@/views/components/toasts'
import { validPhone } from '/@/utils/validate'
// import { register, getSmsCode } from '/@/api/user'
import YuPassword from '/@/components/YuPassword'
import { LoginLayout } from '/@/components/YuLayout'

import { useRouter, useRoute } from "vue-router"
import { useStore } from "vuex"
const store = useStore()

const router = useRouter()

const trigger = 'onBlur' // onChange

const formState = reactive({
  phone: '',
  password: '',
  code: '',
})

const checkPhone = ( value, rule ) => {
  if ( !value ) return '请填写手机号码！'
  if ( !validPhone( value ) ) return '手机号格式不正确！'
  return true
}

const rules = {
  phone: [
    { validator: checkPhone, trigger },
  ],
  password: [
    { required : true, message : '密码不能为空', trigger },
  ],
  code: [
    { pattern : /\d{6}/, message : '验证码格式不正确', trigger}
  ],
}

const canSubmit = computed( () => {
  const { phone, password, code } = formState
  return !!( phone && password && code )
} )

const agree = ref( false ) // 用户隐私协议

async function getCode() {
  try {
    // TODO 获取短信请求
    // const { data } = await getSmsCode( { phone : formState.phone } )
   
    toasts.success( '短信发送成功' )
  } catch ( e ) {
    toasts.fail( '获取短信失败，请稍后再试...' )
   
  }
}

const onSubmit = async(values) => {
  try {
    // TODO 注册请求
    // const { data } = await register( { ...formState } )
    toasts.success( '注册成功' )
  } catch ( e ) {
    toasts.fail( '注册失败，请稍后再试...' )
  }
}

</script>

<style lang="scss" >
  @import "./index.scss";
  
  .handle {
    text-align: center;
    .van-radio-group {
      display: inline-block;
    }
  
    .van-radio__label {
      color: var( --yu-yellow-color );
    }
  }
  
  .code-btn {
    color : var( --yu-yellow-color );
    border-color : var( --yu-yellow-color );
    margin-top: var(--van-cell-vertical-padding);
    margin-bottom: var(--van-cell-vertical-padding);
  }
</style>
