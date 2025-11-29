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
    path: '/listcard',
    component: () => import("src/components/auth/ListCardForm.vue"),
  },



  
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
]


export default routes
