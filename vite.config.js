
const base = './'
import { resolve } from 'path'
import { loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'

import { viteMockServe } from "vite-plugin-mock"
import vueJsx from "@vitejs/plugin-vue-jsx"
import { configSvgIconsPlugin } from './src/plugins/viteSvgIcons'
// import styleImport from "vite-plugin-style-import"

function pathResolve( dir ) {
  return resolve(process.cwd(), '.', dir)
}

export default ( { command, mode } ) => {
  const root = process.cwd()
  const env = loadEnv(mode, root )
  const port = env.port || 9527
  let prodMock = true
  return {
    root,
    base,
    resolve: {
      alias : {
        '/@' : pathResolve( 'src' ),
      }
    },
    server : {
      host : '0.0.0.0',
      port,
      strictPort : false,
      https : false,
      open : false,
      proxy : {
        '/api' : {
          target : env.VITE_APP_BASE_URL,
          changeOrigin : true,
          rewrite: path => path.replace(/^\/api/, '')
        }
      },
    },
    build: {
      target: 'es2015',
      sourcemap: false,
      brotliSize: false, // 启用/禁用 brotli 压缩大小报告。压缩大型输出文件可能会很慢，因此禁用该功能可能会提高大型项目的构建
      chunkSizeWarningLimit: 2000,  // 消除打包大小超过2000kb警告
      rollupOptions : {
        external: [
          // 'ElMessage',
          // resolve( './src/some-local-file-that-should-not-be-bundled.js' )
        ]
      }
    },

    // 定义全局常量替换方式
    define: {
      __INTLIFY_PROD_DEVTOOLS__: false,
    },

    css: {
      // postcss: {
      //   plugins: [
      //     require('autoprefixer')
      //   ]
      // },
      preprocessorOptions: {
        scss: {
          // 引入 var.scss 这样就可以在全局中使用 var.scss中预定义的变量了
          // 给导入的路径最后加上 ;
          // additionalData: '@import "./src/styles/variables.scss";'
        }
      }
    },

    optimizeDeps : {
      // 在预构建中强制排除的依赖项
      exclude : [],
      // 默认情况下，不在 node_modules 中的，链接的包不会被预构建。使用此选项可强制预构建链接的包。
      include: [],
    },

    plugins: [
      vue(),
      vueJsx( {
        optimize  :false,
        mergeProps  :true,
      } ),
  
      configSvgIconsPlugin(),
      
      // styleImport({
      //   libs: [
      //     {
      //       libraryName: 'vant',
      //       esModule: true,
      //       resolveStyle: (name) => `vant/es/${name}/style`,
      //     }
      //   ]
      // }),
      
      viteMockServe({
        mockPath: "mock",
        watchFiles : true, // 监视文件夹中的文件更改。 并实时同步到请求结果
        supportTs: true,
        localEnabled: command === "serve", // 设置为 false 将禁用 mock 功能
        prodEnabled: command !== "serve" && prodMock, // 设置打包是否启用 mock 功能
        injectCode: `
          import { setupProdMockServer } from './mockProdServer';
          setupProdMockServer();
        `,
        logger: false, // 是否在控制台显示请求日志
      }),
    ],
  }
}
