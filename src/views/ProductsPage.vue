<template>
    <div class="bg-white min-h-screen">
      <NavBar />
      <AsideBar />
      <div class="p-6 lg:w-3/4 w-full px-4 absolute lg:left-20">
        <HeaderSection />
        <TableSection />
      </div>
    </div>
  </template>
  
  <script>
  import NavBar from "@/components/NavBar.vue";
  import AsideBar from "@/components/AsideBar.vue";
  import HeaderSection from "@/components/ProductsPage/HeaderSection.vue";
  import TableSection from "@/components/ProductsPage/TableSection.vue";
  
  export default {
    name: "ProductsPage",
    components: {
      AsideBar,
      NavBar,
      HeaderSection,
      TableSection,
    },
  };
  </script>