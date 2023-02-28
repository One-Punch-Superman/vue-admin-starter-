import Layout from '@/layout/index.vue';

export default [
  {
    path: '/list',
    component: Layout,
    redirect: '/list/base',
    meta: { title: '列表页' },
    children: [
      {
        path: 'base',
        name: 'ListBase',
        component: () => import('@/views/list/base/index.vue'),
        meta: { title: '基础列表页' }
      },
      {
        path: 'card',
        name: 'ListCard',
        component: () => import('@/views/list/card/index.vue'),
        meta: { title: '卡片列表页' }
      },
      {
        path: 'filter',
        name: 'ListFilter',
        component: () => import('@/views/list/filter/index.vue'),
        meta: { title: '筛选列表页' }
      }
    ]
  },
  {
    path: '/form',
    name: 'form',
    component: Layout,
    redirect: '/form/base',
    meta: { title: '表单页' },
    children: [
      {
        path: 'base',
        name: 'FormBase',
        component: () => import('@/views/form/base/index.vue'),
        meta: { title: '基础表单页' }
      },
      {
        path: 'step',
        name: 'FormStep',
        component: () => import('@/views/form/step/index.vue'),
        meta: { title: '分步表单页' }
      }
    ]
  }
];
