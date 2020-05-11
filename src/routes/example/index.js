import defaultLayout from '../../layouts/eleLayout'
export default {
  path: '/',
  component: defaultLayout,
  meta: { pageTitle: '使用例子', pageSubTitle: '' },
  children: [
    {
      name: 'button',
      path: 'button',
      component: () => import('./button'),
      meta: { pageTitle: 'button', pageSubTitle: '' }
    },
    {
      name: 'radio',
      path: 'radio',
      component: () => import('./radio'),
      meta: { pageTitle: 'radio', pageSubTitle: '' }
    },
    {
      name: 'webscoket',
      path: 'webscoket',
      component: () => import('./webscoket'),
      meta: { pageTitle: 'webscoket', pageSubTitle: '' }
    },
    {
      name: 'request',
      path: 'request',
      component: () => import('./request'),
      meta: { pageTitle: 'request', pageSubTitle: '' }
    }
  ]
}
