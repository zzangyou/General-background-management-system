// 使用按需映入的方式 第二个参数是使用路由的方式
import {createRouter,createWebHashHistory} from 'vue-router'
const routes=[
    {
        path:'/',
        component:()=>import('../views/Main.vue'),
        // 动态路由的实现
        name:'home1',
        redirect:'/home',
/*         children:[
            {
                path:'/',
                name:'home',
                component:()=>import('../views/home/Home.vue')
            },
            {
                path:'/user',
                name:'user',
                component:()=>import('../views/User/User.vue')
            },
            {
                path:'/mall',
                name:'mall',
                component:()=>import('../views/mall/Mall.vue')
            },
            {
                path:'/page1',
                name:'page1',
                component:()=>import('../views/Page1.vue')
            },
            {
                path:'/page2',
                name:'page2',
                component:()=>import('../views/Page2.vue')
            }
        ] */
        children:[]
    },
    {
        path:'/login',
        name:'login',
        component:()=>import('../views/Login.vue')
    }
]
const router= createRouter({
    history:createWebHashHistory(),
    routes
})

export default router