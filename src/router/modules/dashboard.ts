import Layout from '@/layout/index.vue';

export default [
  {
    path: '/dashboard',
    component: Layout,
    redirect: '/dashboard/base',
    meta: { title: '仪表盘' },
    children: [
      {
        path: 'base',
        name: 'DashboardBase',
        component: () => import('@/views/dashboard/base/index.vue'),
        meta: { title: '概览仪表盘' }
      },
      {
        path: 'detail',
        name: 'DashboardDetail',
        component: () => import('@/views/dashboard/detail/index.vue'),
        meta: { title: '统计报表' }
      }
    ]
  }
];
