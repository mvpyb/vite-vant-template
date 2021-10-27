
import { Toast } from 'vant'

const toasts = {
  success( msg ){
    Toast({
      type : 'success',
      message: msg || '成功',
      className: 'custom-toast',
      icon: 'chenggong',
      iconPrefix: 'yu-icon',
    })
  },
  
  fail( msg ){
    Toast({
      type : 'fail',
      message: msg || '失败',
      className: 'custom-toast',
      icon: 'shanchu',
      iconPrefix: 'yu-icon',
    })
  }
}

export default toasts
