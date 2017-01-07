export default [
  {
    name: 'Home',
    path: '/',
    component: require('pages/Home')
  },
  {
    name: 'Account',
    path: '/account',
    component: require('pages/Account')
  },
  {
    path: '*',
    redirect: '/'
  }
]