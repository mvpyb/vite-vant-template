
import YuAppCardCom from "./src/index.vue"
export const YuAppCard = Object.assign(YuAppCardCom, {
  install(app) {
    app.component(YuAppCardCom.name, YuAppCardCom);
  }
})

export default YuAppCard
