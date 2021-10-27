
// https://segmentfault.com/a/1190000039255368
// 改用此方法了 https://www.npmjs.com/package/vite-plugin-svg-icons?activeTab=versions
import SvgIcon from '/@/components/YuSvgIcon'
import 'virtual:svg-icons-register'

export function useSvgIcon(app) {
  app.component( 'svg-icon', SvgIcon )
}
