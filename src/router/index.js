import { createRouter, createWebHistory } from "vue-router";
import LoginPage from "@/views/LoginPage.vue";
import UsersPage from "@/views/UsersPage.vue";
import ProductsPage from "@/views/ProductsPage.vue";
import CreatePage from "@/views/CreatePage.vue";
import DetailsPage from "@/views/DetailsPage.vue";


const routes = [
  {
    name: "login",
    path: "/",
    component: LoginPage,
  },
  {
    name: "users",
    path: "/users",
    component: UsersPage,
  },
  {
    name: "products",
    path: "/products",
    component: ProductsPage,
  },
  {
    name: "create",
    path: "/create-product",
    component: CreatePage,
  },
  {
    name: "details",
    path: "/details-product",
    component: DetailsPage,
  },

];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
