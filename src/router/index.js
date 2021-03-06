import Vue from 'vue'
import VueRouter from 'vue-router'
import Accueil from "../views/Accueil.vue";
import AccueilUser from "../views/AccueilUser.vue";
import Register from "../views/Register.vue";
import Register3 from "../views/Register3.vue";
import Login from "../views/Login.vue";
import Mdp from "../views/Mdp.vue";
import Reinitialiser from "../views/Reinitialiser.vue";
import AdminRecette from "../views/AdminRecette.vue";
import ParametreUser from "../views/ParametreUser.vue";
import UpdateUser from "../views/UpdateUser.vue";
import Recette_nouveautee from "../views/Recette_nouveautee.vue";
import All_Recette from "../views/All_Recette.vue";
import Light from "../views/Light.vue";
import Express from "../views/Express.vue";
import Vege from "../views/Vege.vue";
import Familial from "../views/Familial.vue";
import Fiche_recette from "../views/Fiche_recette.vue";
import Nousdecouvrir from "../views/Nousdecouvrir.vue";


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
        path: '/myparametreUser',
        name: 'parametreUser',
        component: ParametreUser
    },

    {
        path: '/myregister',
        name: 'register',
        component: Register
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
        path: '/myadminRecette',
        name: 'adminRecette',
        component: AdminRecette
    },
    {
        path: '/myupdateUser/:email',
        name: 'updateUser',
        component: UpdateUser
    },
    {
        path: '/myrecetteNouveautee/:email',
        name: 'recette_nouveautee',
        component: Recette_nouveautee
    },
    {
        path: '/myallrecette',
        name: 'all_recette',
        component: All_Recette
    },
    {
        path: '/mylight/:id',
        name: 'light',
        component: Light
    },
    {
        path: '/myexpress/:id',
        name: 'express',
        component: Express
    },
    {
        path: '/myvege/:id',
        name: 'vege',
        component: Vege
    },
    {
        path: '/myfamilial/:id',
        name: 'familial',
        component: Familial
    },
    {
        path: '/myficheRecette/:id',
        name: 'fiche_recette',
        component: Fiche_recette
    },
    {
        path: '/mydecouvrir',
        name: 'nousdecouvrir',
        component: Nousdecouvrir
    },

]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router