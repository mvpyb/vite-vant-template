
import { createRouter, createWebHashHistory } from 'vue-router'
import Layout from "/@/layout/index.vue"
import MsgLayout from "/@/layout/msg.vue"
import NormalLayout from "/@/layout/normalLayout.vue"
// import { defineComponent, h, createVNode } from "vue";
// const RouteView = {
//   name: 'RouteView',
//   render: () => h('router-view')
// }

export const constantRoutes = [

  {
    path: "/login",
    name: "Login",
    hidden: true,
    component: () => import("/@/views/login/index.vue"),
    meta: {
      title : '登录',
      noCache : true,
    },
  },
  
  {
    path: "/register",
    name: "Register",
    hidden: true,
    component: () => import("/@/views/login/register.vue"),
    meta: {
      title : '注册',
      noCache : true,
    },
  },
  
  {
    path: "/forgot",
    name: "Forgot",
    hidden: true,
    component: () => import("/@/views/login/forgot.vue"),
    meta: {
      title : '忘记密码',
      noCache : true,
    },
  },
  
  // {
  //   path: "/",
  //   name: "User",
  //   // component: Layout,
  //   component: RouteView,
  //   redirect: "/user",
  //   children: [
  //     {
  //       path: "user",
  //       name: "User",
  //       component: () => import("/@/views/user/index.vue"),
  //       meta: {
  //         title : '首页',
  //         icon: "user",
  //         noCache : true,
  //         roles : ['admin', 'user'],
  //       },
  //     },
  //   ],
  // },
  
  {
    path: '/404',
    component: () => import('/@/views/error-page/404.vue'),
    hidden: true
  },
  {
    path: '/401',
    component: () => import('/@/views/error-page/401.vue'),
    hidden: true,
  },
]
export const asyncRoutes = [
  
  {
    path: "/",
    name: "Dashboard",
    component: Layout,
    redirect: "/dashboard",
    children: [
      {
        path: "dashboard",
        name: "Dashboard",
        component: () => import("/@/views/dashboard/index.vue"),
        meta: {
          title : '首页',
          icon: "dashboard",
          noCache : true,
          roles : ['admin', 'user'],
        },
      },
    ],
  },
  {
    path: "/message",
    name: "Message",
    component: MsgLayout,
    redirect: "/message",
    children: [
      {
        path: "",
        name: "Message",
        component: () => import("/@/views/message/index.vue"),
        meta: {
          title : '消息',
          // icon: "Message",
          noCache : true,
          roles : ['admin', 'user'],
        },
      },
    ],
  },
  
  {
    path: "/find",
    name: "Find",
    component: NormalLayout,
    redirect: "/find",
    children: [
      {
        path: "",
        name: "Find",
        component: () => import("/@/views/find/index.vue"),
        meta: {
          title : '发现',
          // icon: "Find",
          noCache : true,
          roles : ['admin', 'user'],
        },
      },
    ],
  },
  
  
  // {
  //   path: "/",
  //   redirect: "/user",
  // },
  
  {
    path: '/user',
    component: () => import('/@/views/user/index.vue'),
    hidden: true,
    meta: {
      title : '个人中心',
      icon: "user",
      noCache : true,
      roles : ['admin', 'user'],
    },
  },
  
  
  { path : '/:pathMatch(.*)', redirect : '/404', hidden : true }
]

const createRouters = createRouter({
  history: createWebHashHistory( '/' ),
  routes: constantRoutes.concat( asyncRoutes ),
  scrollBehavior : () => ( { left : 0, top : 0 } ),
})

const router = createRouters

export function resetRouter() {
  const WHITE_NAME_LIST = [
    'Login',
  ]
  router.getRoutes().forEach((route) => {
    const { name } = route;
    if (name && !WHITE_NAME_LIST.includes(name)) {
      router.hasRoute(name) && router.removeRoute(name);
    }
  })
}

export default router

