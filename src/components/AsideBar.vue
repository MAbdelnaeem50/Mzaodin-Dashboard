<template>
  <div dir="rtl" class="">
    <button 
      @click="toggleAside" 
      class="fixed top-4 right-4 z-50   text-white p-2 rounded-full lg:hidden"
      aria-label="Toggle sidebar"
    >
    <i v-if="!isOpen"   class="fa-solid fa-bars  text-2xl py-2 px-4 rounded-lg bg-gray-200 text-blue-600"></i>
    <i v-else class="fa-solid fa-xmark text-2xl py-2 px-4 rounded-lg bg-gray-200 text-blue-600"></i>
    </button>
    <aside :class="[
      'fixed top-0 right-0 h-full w-64 bg-white border-2  border-gray-100 shadow-lg rounded-l-3xl transition-transform duration-300 ease-in-out p-5 z-40',
      isOpen ? 'translate-x-0' : 'translate-x-full'
    ]">
      <div class="mt-12  lg:mt-0 flex flex-col items-center py-20">
        <img src="../assets/images/logo.png" class="w-20 mb-6">
        <nav class="w-full mt-10">
          <ul class="space-y-2">
            <li v-for="item in menuItems" :key="item.path">
              <router-link :to="item.path" custom v-slot="{ href, navigate, isActive }">
                <a :href="href" @click="navigate" :class="[
                  'flex items-center px-8 py-3 mb-4 rounded-3xl transition-colors',
                  isMenuItemActive(item.path, isActive)
                    ? 'text-white bg-blue-500' 
                    : 'text-blue-500 hover:bg-blue-500 hover:text-white'
                ]">
                  <i :class="['ml-3', item.icon]"></i>
                  <span>{{ item.label }}</span>
                </a>
              </router-link>
            </li>
          </ul>
          <ul class="space-y-2 absolute bottom-10 left-0 right-0 px-4">
            <router-link to="/settings">
              <li>
              <a href="#" class="flex items-center px-8 py-3 mb-4 text-gray-500    rounded-3xl hover:bg-blue-500 hover:text-white transition-colors">
                <i class="fa-solid fa-gear ml-3"></i>
                <span> الاعدادات</span>
              </a>
            </li>
            </router-link>
  
            <router-link to="/" >
              <li >
              <a href="#" class="flex items-center px-8 py-3 mb-4 text-white bg-red-500  rounded-3xl hover:bg-red-400 hover:text-white transition-colors">
                <i class="fa-solid fa-sign-out-alt ml-3"></i>
                <span>تسجيل الخروج</span>
              </a>
            </li>
            </router-link>

          </ul>
        </nav>
      </div>
    </aside>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
      screenWidth: window.innerWidth,
      menuItems: [
        { path: '/users', label: 'الاعضاء', icon: 'fa-solid fa-user' },
        { path: '/products', label: 'المنتجات', icon: 'fa-solid fa-boxes-stacked' },
        { path: '/auctions', label: 'المزادات', icon: 'fa-solid fa-gavel' },
        { path: '/wallet', label: 'المحفظة', icon: 'fa-solid fa-wallet' },
        { path: '/invoices', label: 'الفواتير', icon: 'fa-solid fa-receipt' },
      ],
    };
  },
  methods: {
    toggleAside() {
      this.isOpen = !this.isOpen;
    },
    handleResize() {
      this.screenWidth = window.innerWidth;
      this.isOpen = this.screenWidth >= 1024;
    },
    isMenuItemActive(path, isActive) {
      if (path === '/products') {
        return isActive || 
        this.$route.path === '/create-product' || 
        this.$route.path === '/details-product';
      }
      if (path === '/auctions') {
        return isActive || 
               this.$route.path === '/create-auction' || 
               this.$route.path === '/ending-auction' || 
               this.$route.path === '/current-auction'|| 
               this.$route.path === '/incoming-auction';
      }
      return isActive;
    },
  },
  mounted() {
    this.handleResize();
    window.addEventListener('resize', this.handleResize);
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.handleResize);
  },
};
</script>
