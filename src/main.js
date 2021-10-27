import { createApp } from 'vue'
import 'normalize.css/normalize.css'
import '/@/assets/iconfont/iconfont.css'

import Vant from 'vant'
import 'lib-flexible/flexible'
import 'vant/lib/index.css'

import './styles/index.scss'
import "./assets/iconfont/iconfont.js"
import "./assets/iconfont/iconfont.css"

import App from './App.vue'
import router from "./router"
import store from "./store"

import './permission'
import "./utils/rem"

// import swiper from '/@/plugins/swiper'
// import 'swiper/swiper.scss'

const app = createApp(App)

import { useSvgIcon } from "./icons"
useSvgIcon( app )

const getServerConfig = async() => {
  app
      .use(router)
      .use(store)
      .use(Vant)
      // .use(swiper)
  await router.isReady()
  app.mount('#root', false)
}
getServerConfig()
