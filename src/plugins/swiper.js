

// swiper 额外组件配置
import SwiperCore, { Pagination } from 'swiper'

// import 'swiper/swiper.scss'
// import 'swiper/components/pagination/pagination.scss'

// swiper 必备组件
import { Swiper, SwiperSlide } from 'swiper/vue'

// 使用额外组件
SwiperCore.use([Pagination])

// 全局注册 swiper 必备组件

const plugins = [Swiper, SwiperSlide]

const swiper = {
  install: function (app) {
    plugins.forEach(item => {
      app.component(item.name, item)
    })
  }
}

export default swiper


