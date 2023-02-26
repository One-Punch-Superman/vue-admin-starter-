import Layout from '@/layout/index.vue';

export default [
  {
    path: '/user',
    name: 'user',
    component: Layout,
    meta: { title: '个人页' },
    children: [
      {
        path: '',
        name: 'userBase',
        component: () => import('@/views/user/index.vue'),
        meta: { title: '个人中心' }
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/index.vue'),
    meta: { title: '登录页' }
  }
];
