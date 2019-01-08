
const routes = [
  {
    path: '/',
    component: () => import('layouts/Main.vue'),
    children: [
      { path: '', redirect: { name: 'home'} },
      { name: 'home', path: 'home', component: () => import('pages/Home.vue') },
      { name: 'search', path: 'search', component: () => import('pages/Search.vue') },
      { name: 'notifications', path: 'notifications', component: () => import('pages/Notifications.vue') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
