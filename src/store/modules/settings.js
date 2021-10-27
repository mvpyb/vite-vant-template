// import variables from '/@/styles/element-variables.scss'
import defaultSettings from '/@/settings'

const { showSettings, tagsView, fixedHeader, sidebarLogo } = defaultSettings

const state = {
  title: defaultSettings.title,
  fixedHeader : fixedHeader,
  // theme : variables.theme,
  showSettings : showSettings,
  tagsView : tagsView,
  sidebarLogo : sidebarLogo
}

const mutations = {
  CHANGE_SETTING : ( state, { key, value } ) => {
    if ( state.hasOwnProperty( key ) ) {
      state[key] = value
    }
  }
}

const actions = {
  changeSetting( { commit }, data ) {
    commit( 'CHANGE_SETTING', data )
  }
}

export default {
  namespaced : true,
  state,
  mutations,
  actions
}

