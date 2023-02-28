export default [
  {
    icon: 'message-box',
    title: '仪表盘',
    path: '/dashboard',
    children: [
      {
        path: '/dashboard/base',
        title: '概览仪表盘'
      },
      {
        path: '/dashboard/detail',
        title: '统计报表'
      }
    ]
  },
  {
    icon: 'data-analysis',
    title: '列表页',
    path: '/list',
    children: [
      {
        path: '/list/base',
        title: '基础列表页'
      },
      {
        path: '/list/card',
        title: '卡片列表页'
      },
      {
        path: '/list/filter',
        title: '筛选列表页'
      }
    ]
  },
  {
    icon: 'data-analysis',
    title: '表单页',
    path: '/form',
    children: [
      {
        path: '/form/base',
        title: '基础表单页'
      },
      {
        path: '/form/step',
        title: '分步表单页'
      }
    ]
  }
];
