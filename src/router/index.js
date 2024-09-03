import {createRouter,createWebHashHistory} from 'vue-router'


//指定路由规则

const routes = [
  {
    path: '/',
      name: 'main',
      component: () => import('@/views/Main.vue'),
      //添加重定向
      redirect: '/home',
        //添加子路由
      children:[
        {
        path: 'home',
        name: 'home',
        component: () => import('@/views/Home.vue')
        }
       
      ]
  }
]


const router = createRouter({
  //设置路由的模式
  history: createWebHashHistory(),
  routes,
});


export default router;