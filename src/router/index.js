import { createRouter, createWebHistory } from 'vue-router'
import IndexView from "../views/Index.vue"
import ProfileView from "../views/Profile.vue"
import ProjetsView from "../views/Projets.vue"
import ProjetsShow from "../views/Show.vue"

// Routes
const routes = [
    {
        path: "/Portfolio/",  // Ajoutez le chemin de base ici
        name: "accueil",
        component: IndexView
    },
    {
        path: "/Portfolio/profile",  // Ajoutez le chemin de base ici
        name: "profile",
        component: ProfileView
    },
    {
        path: "/Portfolio/projets/:id",  // Ajoutez le chemin de base ici
        name: "projets",
        component: ProjetsView,
    },
    {
        path: "/Portfolio/ptojets/:id",  // Ajoutez le chemin de base ici
        name: "show",
        component: ProjetsShow,
        props: true
    }
]

// Router
const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        }
        if (to.hash) {
            return { el: to.hash }
        }
        return { x: 0, y: 0 }
    }
})

export default router