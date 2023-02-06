import { createRouter, createWebHashHistory } from 'vue-router'

import Layout from '@/layout/index.vue'
import MsgLayout from '@/layout/msg.vue'
import NormalLayout from '@/layout/normalLayout.vue'

// 配置路由信息
export const constantRoutes = [
  {
    path : '/redirect',
    name : 'Redirect',
    component : Layout,
    meta : {
      title : 'Redirect',
      hidden : true
    },
    children : [
      {
        path : '/redirect/:path(.*)',
        name : 'Redirect',
        component : () => import( '@/views/redirect/index.vue' ),
        meta : {
          title : 'Redirect',
          hidden : true
        }
      }
    ]
  },
  {
    path : '/login',
    name : 'Login',
    component : () => import( '@/views/login/index.vue' ),
    meta : {
      hidden : true,
      title : '登录'
    }
  },
  {
    path : '/register',
    name : 'Register',
    hidden : true,
    component : () => import( '@/views/login/register.vue' ),
    meta : {
      title : '注册',
      noCache : true
    }
  },
  {
    path : '/forgot',
    name : 'Forgot',
    hidden : true,
    component : () => import( '@/views/login/forgot.vue' ),
    meta : {
      title : '忘记密码',
      noCache : true
    }
  },

  {
    path : '/404',
    name : 'Error404',
    component : () => import( '@/views/error/404.vue' ),
    meta : {
      hidden : true,
      title : '404'
    }
  },
  {
    path : '/401',
    name : 'Error401',
    component : () => import( '@/views/error/401.vue' ),
    meta : {
      hidden : true,
      title : '401'
    }
  }
]

export const asyncRoutes = [
  {
    path : '/',
    name : 'Dashboard',
    component : Layout,
    redirect : '/dashboard',
    meta : {
      title : '主页'
    },
    children : [
      {
        path : 'dashboard',
        name : 'Dashboard',
        component : () => import( '@/views/dashboard/index.vue' ),
        meta : {
          title : '主页',
          icon : 'dashboard',
          noCache : true,
          affix : true
        }
      }
    ]
  },

  {
    path : '/user',
    component : () => import( '@/views/userCenter/index.vue' ),
    hidden : true,
    meta : {
      title : '个人中心',
      icon : 'user',
      noCache : true
      // roles : ['admin', 'user'],
    }
  },

  {
    path : '/message',
    name : 'Message',
    component : MsgLayout,
    redirect : '/message',
    children : [
      {
        path : '',
        name : 'Message',
        component : () => import( '@/views/message/index.vue' ),
        meta : {
          title : '消息',
          // icon: "Message",
          noCache : true,
          roles : ['admin', 'user']
        }
      }
    ]
  },

  {
    path : '/find',
    name : 'Find',
    component : NormalLayout,
    redirect : '/find',
    children : [
      {
        path : '',
        name : 'Find',
        component : () => import( '@/views/find/index.vue' ),
        meta : {
          title : '发现',
          // icon: "Find",
          noCache : true,
          roles : ['admin', 'user']
        }
      }
    ]
  },

  {
    path : '/:pathMatch(.*)',
    redirect : '/404',
    name : 'Redirect404',
    meta : {
      title : '404',
      hidden : true
    }
  }
]

const router = createRouter( {
  history : createWebHashHistory( './' ),
  routes : constantRoutes.concat( asyncRoutes ),
  scrollBehavior : () => ( { left : 0, top : 0 } )
} )

export function resetRouter() {
  const WHITE_NAME_LIST = ['Login']
  router.getRoutes().forEach( route => {
    const { name } = route
    if ( name && !WHITE_NAME_LIST.includes( name ) ) {
      router.hasRoute( name ) && router.removeRoute( name )
    }
  } )
}

export default router
