import Vue from "vue"
import VueRouter from "vue-router"

import Home from "./components/Home"
import Pixabay from "./components/pixabay/Pixabay"
import Documentos from "./components/documentos/Documentos"

Vue.use(VueRouter);

const routes = [
    {
        path:"/",
        name:"home",
        component:Home
    },
    {
        path:"/pixa",
        name:"pixa",
        component:Pixabay
    },
    {
        path:"/docs",
        name:"documentos",
        component:Documentos
    },
    {
        path:"/siscmpfc",
        name:"siscmpfc",
        component: ()=> import('./components/siscmpfc/Principal')
    },
    {
        path:"/login",
        name:"login",
        component: ()=> import('./components/login/Login')
    }
]

const router = new VueRouter({
    mode:"history",
    routes
})

export default router