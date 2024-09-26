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
  import HeaderSection from "@/components/InvoicePage/HeaderSection.vue";
  import TableSection from "@/components/InvoicePage/TableSection.vue";
  
  export default {
    name: "InvoicePage",
    components: {
      AsideBar,
      NavBar,
      HeaderSection,
      TableSection,
    },
  };
  </script>