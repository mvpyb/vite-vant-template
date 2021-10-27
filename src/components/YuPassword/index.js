
import YuPasswordCom from "./src/index.vue"
export const YuPassword = Object.assign(YuPasswordCom, {
  install(app) {
    app.component(YuPasswordCom.name, YuPasswordCom);
  }
})

export default YuPassword
