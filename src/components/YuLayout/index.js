import YuLoginLayout from './src/login.vue'
export const LoginLayout = Object.assign( YuLoginLayout, {
  install( app ) {
    app.component( YuLoginLayout.name, YuLoginLayout )
  }
} )
