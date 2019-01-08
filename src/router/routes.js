
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
  },
  {
    path: '/tweets/:id',
    component: () => import('layouts/Tweet.vue'),
    children: [
      { name: 'thread', path: 'thread', component: () => import('pages/Thread.vue') },
      { name: 'error', path: 'error', component: () => import('pages/Error.vue') },
      { name: 'debug', path: 'debug', component: () => import('pages/Debug.vue') }
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
