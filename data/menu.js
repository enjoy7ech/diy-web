let menus = [
  {
    name: '首页',
    path: '/home',
    icon: 'fa fa-home'
  },
  {
    name: 'UI测试',
    path: 'example',
    icon: 'fa fa-area-chart',
    children: [
      {
        name: 'button',
        path: '/example/button'
      },
      {
        name: 'radio',
        path: '/example/radio'
      }
    ]
  },
  {
    name: 'ajax测试',
    path: '/example/request',
    icon: 'fa fa-home'
  }
]

export default menus
