import { createRouter,createWebHashHistory } from 'vue-router'
import HomePage from './pages/Homepage.vue'
import LoginPage from './pages/LoginPage.vue'
import RegistrationPage from './pages/RegistrationPage.vue'


export default createRouter({
    history:createWebHashHistory(),
    routes:[
        {path:'/',component:HomePage},
        {path:'/login',component:LoginPage},
        {path:'/registration',component:RegistrationPage}
    ]
})