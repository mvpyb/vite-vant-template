
import YuCardCom from "./src/index.vue"
export const YuCard = Object.assign(YuCardCom, {
  install(app) {
    app.component(YuCardCom.name, YuCardCom);
  }
})

export default YuCard
