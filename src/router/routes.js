const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
  ],
},


  {
    path: '/login',
    component: () => import("src/components/auth/LoginForm.vue"),
  },

 {
    path: '/register',
    component: () => import("src/components/auth/RegisterForm.vue"),
  },



  
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
]


export default routes
