import { createStore } from "vuex"
import getters from './getters'

let modules = {}
const modulesFiles = import.meta.globEager('./modules/*.js')
for (const path in modulesFiles) {
  const moduleName = path.replace(/(.*\/)*([^.]+).*/gi, '$2')
  modules = {
    ...modules,
    [moduleName]:modulesFiles[path].default
  }
}

// const isDev = import.meta.env.VITE_USER_NODE_ENV !== 'production'
const isDev = import.meta.env.MODE !== 'production'
const store = createStore({
  modules,
  getters,
  strict: isDev, // 严格模式下，无论何时发生了状态变更且不是由 mutation 函数引起的，将会抛出错误。这能保证所有的状态变更都能被调试工具跟踪到
})

export function setupStore(app) {
  app.use(store)
}

export default store
