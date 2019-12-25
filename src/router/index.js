import Vue from 'vue'
import VueRouter from 'vue-router'
const Box=()=>import('../../src/components/plblic/box.vue')
Vue.use(VueRouter)

const routes = [

  {
    path: '/',
    redirect:'/box'
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   component: () => import('../views/About.vue')
  // }
  {
    // props:true,
    path:'/box',
    component:Box,
    name:'box',
    meta:{
        name:'name'
    }
},
{
    // props:true,
    path:'/background',
    component:require('../../src/components/background/background.vue').default,
    name:'background',
    children:[{
            path:"user",
            component:require('../../src/components/background/children/user.vue').default,
            name:'user'
        },
        {
            path:"article",
            component:require('../../src/components/background/children/article.vue').default,
            name:'article',
        },
        {
            path:"article/setarticle",
            component:require('../../src/components/background/children/setarticle.vue').default,
            name:'setarticle'
        },
        {
            path:"tag",
            component:require('../../src/components/background/children/tag.vue').default,
            name:'tag'
        },
        {
            path:"discuss",
            component:require('../../src/components/background/children/discuss.vue').default,
            name:'discuss'
        },
        {
            path:"message",
            component:require('../../src/components/background/children/message.vue').default,
            name:'message'
        },
        {
            path:"setdata",
            component:require('../../src/components/background/children/setdata.vue').default,
            name:'setdata'
        },
        {
            path:"setpas",
            component:require('../../src/components/background/children/setpas.vue').default,
            name:'setpas'
        },
        {
            path:"bbs",
            component:require('../../src/components/background/children/bbs.vue').default,
            name:'bbs'
        },
        {
            path:"advertising",
            component:require('../../src/components/background/children/advertising.vue').default,
            name:'advertising'
        },
    ]
}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
