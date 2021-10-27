
import SvgIconsPlugin from 'vite-plugin-svg-icons'
import path from 'path'

export function configSvgIconsPlugin() {
  const svgIconsPlugin = SvgIconsPlugin({
    iconDirs: [path.resolve(process.cwd(), 'src/icons/svg')],
    symbolId: 'icon-[dir]-[name]',
  })
  return svgIconsPlugin
}
