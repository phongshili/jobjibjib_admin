import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const router = new VueRouter ({
  mode: 'history',
  base: process.env.BASE_URL,
  routes:[
    {
      path: "/",
      name: "Login",
      component: () => import(/* webpackChunkName: "home" */ "../views/Login.vue"),
      // meta: {
      //   requiresVisitor: true
      // }
    },
    {
      path: '/employer',
      name: 'Employer',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../views/Employer/Employer.vue')
    },
    {
      path: '/addemployer',
      name: 'Add_Employer',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../views/Employer/Add_Employer.vue')
    },
    {
      path: '/editemployer/:id',
      name: 'Edit_Employer',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../views/Employer/Edit_Employer.vue')
    },
    {
      path: '/personal',
      name: 'Personal',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../views/Employer/Personal.vue')
    },
    {
      path: '/addepersonal',
      name: 'Add_Personal',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../views/Employer/Add_Personal.vue')
    },
    {
      path: '/editepersonal/:id',
      name: 'Edit_Personal',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../views/Employer/Edit_Personal.vue')
    },
    {
      path: '/jobseeker',
      name: 'Jobseeker',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../views/JobSeeker/Jobseeker.vue')
    },
    {
      path: '/addjobseeker',
      name: 'Add_Jobseeker',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../views/JobSeeker/Add_JobSeeker.vue')
    },
    {
      path: '/skill',
      name: 'Skill',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../views/Skill/MainSkill.vue')
    },
    {
      path: '/test',
      name: 'Test',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../views/test.vue')
    },
    // {
    //   path: '/subskill/id',
    //   name: 'SubSkill',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ '../views/Skill/SubSkill.vue')
    // },
    {
      path: '/news',
      name: 'News',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../views/News/News.vue')
    },
    {
      path: '/categorynews',
      name: 'Category_News',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../views/News/Category_News.vue')
    },
    {
      path: '/admin',
      name: 'Admin',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../views/Admin/Admin.vue')
    },
    {
      path: '/banner',
      name: 'Banner',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../views/Banner/Banner.vue')
    },
    {
      path: '/managebanner/id',
      name: 'Manage_Banner',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../views/Banner/Manage_Banner.vue')
    },
    {
      path: '/postjob',
      name: 'Post_Job',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../views/PostJob/Post_Job.vue')
    },
    {
      path: '/managepostjop/id',
      name: 'Manage_Post_Job',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../views/PostJob/Manage_Post_Job.vue')
    },
  ]
})




export default router
