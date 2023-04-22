export default [
  {
    path: '/',
    name: 'list',
    component: '/',
    meta: {
      icon: 'Printer',
      title: '首页'
    }
  },
  {
    path: '/permission',
    name: 'permission',
    redirect: '/permission/menu',
    meta: {
      icon: 'Tickets',
      title: '权限管理'
    },
    children: [
      {
        path: '/permission/menu',
        component: '/permission/menu/index',
        meta: {
          icon: 'Printer',
          title: '菜单权限'
        }
      },
      {
        path: '/permission/button',
        component: '/permission/button/index',
        meta: {
          icon: 'Printer',
          title: '按钮权限'
        }
      }
    ]
  },
  {
    icon: 'Tickets',
    title: '系统管理',
    path: '/system',
    children: [
      {
        path: '/system/user',
        title: '用户管理'
      },
      {
        path: '/system/role',
        title: '角色管理'
      },
      {
        path: '/system/menu',
        title: '菜单管理'
      }
    ]
  },
  {
    icon: 'Memo',
    title: '外部页面',
    path: '/list',
    children: [
      {
        path: '/list/base',
        title: 'Vue3文档'
      },
      {
        path: '/list/card',
        title: 'Vue Router文档'
      },
      {
        path: '/list/filter',
        title: 'Pinia文档'
      },
      {
        path: '/list/filter',
        title: 'Element Plus文档'
      },
      {
        path: '/list/filter',
        title: 'Vite文档'
      },
      {
        path: '/list/filter',
        title: 'VitePress文档'
      }
    ]
  },
  {
    icon: 'Tickets',
    title: '个人中心',
    path: '/user'
  },
  {
    icon: 'Tickets',
    title: '关于项目',
    path: '/about'
  }
];
