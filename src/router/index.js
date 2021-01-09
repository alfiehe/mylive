/*
 * @Author: alfiehe
 * @Date: 2021-01-09 09:58:26
 * @LastEditors: alfiehe
 * @LastEditTime: 2021-01-09 21:18:09
 * @Description: null
 * @FilePath: /mylive/src/router/index.js
 */
import Vue from 'vue'
import Router from 'vue-router'
import baseEnv from "@/assets/js/config.js"
Vue.use(Router)

export default new Router({
    // 路由hash 
    mode:baseEnv.mode==="electron"?"hash":"history",
    routes: [
        {
            path: '/',
            redirect: {
                name: 'index'
            }
        },
        {
            path: '/index',
            name:"index",
            meta:{
                noHeader:false
            },
            component: () => import("@/views/home/roomList.vue"),
        },
        {
            path: "/room",
            name:"room",
            meta:{
                noHeader:false
            },
            component: () => import("@/views/live/room.vue")
        }
    ]
})
