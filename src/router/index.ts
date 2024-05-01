import { createRouter, createWebHistory } from "vue-router"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/HomeView.vue")
    },
    {
      path: "/destination",
      name: "destination",
      component: () => import("../views/DestinationView.vue")
    },
    {
      path: "/crew",
      name: "crew",
      component: () => import("../views/CrewView.vue")
    },
    {
      path: "/technology",
      name: "technology",
      component: () => import("../views/TechnologyView.vue")
    },
    {
      path: "/:pathMatch(.*)*",
      name: "not-found",
      component: () => import("../views/NotFound.vue")
    }
  ]
})

export default router
