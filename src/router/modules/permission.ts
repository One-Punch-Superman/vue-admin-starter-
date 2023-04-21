import Layout from '@/layout/index.vue';

export default [
  {
    path: '/permission',
    component: Layout,
    redirect: '/permission/menu',
    meta: { title: '权限管理' },
    children: [
      {
        path: '/permission/menu',
        name: 'permissionMenu',
        component: () => import('@/views/permission/menu/index.vue'),
        meta: { title: '菜单权限' }
      },
      {
        path: '/permission/button',
        name: 'permissionButton',
        component: () => import('@/views/permission/button/index.vue'),
        meta: { title: '按钮权限' }
      }
    ]
  }
];
