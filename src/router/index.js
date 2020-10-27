import Vue from 'vue'
import VueRouter from 'vue-router'
import Accueil from "../views/Accueil.vue";
import AccueilUser from "../views/AccueilUser.vue";
import Register from "../views/Register.vue";
import Register2 from "../views/Register2.vue";
import Register3 from "../views/Register3.vue";
import Login from "../views/Login.vue";
import Mdp from "../views/Mdp.vue";
import Reinitialiser from "../views/Reinitialiser.vue";
import MesRecette from "../views/MesRecette.vue";
import AdminRecette from "../views/AdminRecette.vue";

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Accueil',
        component: Accueil
    },

    {
        path: '/myaccueilUser',
        name: 'accueilUser',
        component: AccueilUser
    },

    {
        path: '/myregister',
        name: 'register',
        component: Register
    },

    {
        path: '/myregister2/:email',
        name: 'register2',
        component: Register2
    },

    {
        path: '/myregister3/:email',
        name: 'register3',
        component: Register3
    },

    {
        path: '/mylogin',
        name: 'login',
        component: Login
    },

    {
        path: '/mymdp',
        name: 'mdp',
        component: Mdp
    },

    {
        path: '/myreinitialiser/:token',
        name: 'reinitialiser',
        component: Reinitialiser
    },
    {
        path: '/MesRecette',
        name: 'mesRecette',
        component: MesRecette
    },

    {
        path: '/myadminRecette',
        name: 'adminRecette',
        component: AdminRecette
    },

]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router