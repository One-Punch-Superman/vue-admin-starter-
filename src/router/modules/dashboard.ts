import Layout from '@/layout/index.vue';
const DashboardBase = () => import('@/views/dashboard/base/index.vue');
const DashboardDetail = () => import('@/views/dashboard/detail/index.vue');

export default [
  {
    path: '/dashboard',
    component: Layout,
    redirect: '/dashboard/base',
    name: 'dashboard',
    meta: { title: '仪表盘' },
    children: [
      {
        path: 'base',
        name: 'DashboardBase',
        component: DashboardBase,
        meta: { title: '概览仪表盘' }
      },
      {
        path: 'detail',
        name: 'DashboardDetail',
        component: DashboardDetail,
        meta: { title: '统计报表' }
      }
    ]
  }
];
