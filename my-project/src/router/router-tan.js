export default [
  {path: '*', redirect: '/zh/home'},
  {
    path: '/:lang/home',
    name: 'home',
    component: () => import('@/views/home'),
    meta: {
      title: '首页',
      index:'0'
    }
  },
  {
    path:'/:lang/document',
    name:'document',
    component:()=>import('@/views/document'),
    meta:{
      title:'document',
      index:'1'
    }
  },
  {
    path:'/:lang/about',
    name:'about',
    beforeEnter(to,from,next){   //单个路由设置是否登录
      console.log("berforeEnter");
      next();
      },
    component:()=>import('@/views/about'),
    meta:{
      title:'about',
      index:'2'
    }
  },
  {
    path:'/:lang/user/:tip?/:userId?',
    name:'user',
    component:()=>import('@/views/user'),
    meta:{
      title:'user',
      index:'3'
    },
  },
  {
    path:'/:lang/doc',
    name:'doc',
    component:()=>import('@/views/doc'),
    meta:{
      title:'left'
    }
  },
  {
    path:'/:lang/doc-view',
    name:'doc-view',
    component:()=>import('@/views/doc-view'),
    meta:{
      title:'right'
    }
  },
  {
    path:'/:lang/test',
    name:'test',
    component:()=>import('@/views/test'),
    meta:{
      title:'right'
    }
  },
  {
    path:'/:lang/search',
    name:'search',
    component:()=>import('@/components/search'),
    meta:{
      title:'right'
    }
  },
  {
    path:'/:lang/select',
    name:'select',
    component:()=>import('@/components/select'),
    meta:{
      title:'select'
    }
  },
  {
    path:'/:lang/login',
    name:'login',
    component:()=>import('@/views/login'),
    meta:{
       title:'login'
    }
  },
  {
    path:'/:lang/increment',
    name:'increment',
    component:()=>import('@/components/increment'),
    meta:{
      title:'increment'
    }
  },
  {
    path:'/:lang/increment2',
    name:'increment2',
    component:()=>import('@/components/increment2'),
    meta:{
      title:'increment2'
    }
  },
  {
    path:'/:lang/axiosTest',
    name:'axiosTest',
    component:()=>import('@/components/axiosTest'),
    meta:{
      title:'axiosTest'
    }
  }

]
