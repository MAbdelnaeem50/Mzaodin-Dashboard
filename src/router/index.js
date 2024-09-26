import { createRouter, createWebHistory } from "vue-router";
import LoginPage from "@/views/LoginPage.vue";
import UsersPage from "@/views/UsersPage.vue";
import ProductsPage from "@/views/ProductsPage.vue";
import CreatePage from "@/views/CreatePage.vue";
import DetailsPage from "@/views/DetailsPage.vue";
import AuctionsPage from "@/views/AuctionsPage.vue";
import CreateAuction from "@/views/CreateAuction.vue";
import EndingAuction from "@/views/EndingAuction.vue";
import CurrentAuction from "@/views/CurrentAuction.vue";
import IncomingAuction from "@/views/IncomingAuction.vue";
import WalletPage from "@/views/WalletPage.vue";
import InvoicesPage from "@/views/InvoicesPage.vue";
import InvoiceReceipt from "@/views/InvoiceReceipt.vue";
import SettingsProfile from "@/views/SettingsProfile.vue";



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
  {
    name: "auction",
    path: "/auctions",
    component: AuctionsPage,
  },
  {
    name: "create-auction",
    path: "/create-auction",
    component: CreateAuction,
  },
  {
    name: "ending-auction",
    path: "/ending-auction",
    component: EndingAuction,
  },
  {
    name: "current-auction",
    path: "/current-auction",
    component: CurrentAuction,
  },
  {
    name: "incoming-auction",
    path: "/incoming-auction",
    component: IncomingAuction,
  },
  {
    name: "wallet",
    path: "/wallet",
    component: WalletPage,
  },
  {
    name: "invoices",
    path: "/invoices",
    component: InvoicesPage,
  },
  {
    name: "invoice-details",
    path: "/invoice-details",
    component: InvoiceReceipt,
  },
  {
    name:"SettingsProfile",
    path:"/Settings",
    component : SettingsProfile
  },
  
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
