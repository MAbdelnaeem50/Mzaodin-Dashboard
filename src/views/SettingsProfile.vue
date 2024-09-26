<template>
  <div dir="rtl" class="bg-white min-h-screen">
    <NavBar/>
      <AsideBar/>

      <div class="p-6   lg:w-3/4 w-full   px-4 absolute lg:left-20">
        <h1 class="text-right mb-10 text-2xl font-bold text-blue-500">الاعدادات</h1>

    <!-- Tabs -->
    <div class="flex justify-right w-full  mb-8 mt-10">
      <button v-for="tab in tabs" :key="tab.id" :class="[
        'lg:px-20 px-4 py-2 font-semibold rounded-3xl  bg-blue-100 ml-1',
        selectedTab === tab.id ? 'bg-blue-500 text-white' : ' text-black'
      ]" @click="selectedTab = tab.id">
        {{ tab.label }}
      </button>
    </div>

    <!-- Components -->
    <UserData v-if="selectedTab === 'userData'" />
    <PasswordData v-if="selectedTab === 'passwordData'" />
   
  </div>
</div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import AsideBar from '@/components/AsideBar.vue';
import UserData from '@/components/ProfilePage/UserData.vue';
import PasswordData from '@/components/ProfilePage/PasswordData.vue';
export default {
  components: {
    NavBar,
    AsideBar,
    UserData,
    PasswordData,

  },
  data() {
    return {
      selectedTab: 'userData',
      tabs: [
        { id: 'userData', label: 'بيانات المستخدم' },
        { id: 'passwordData', label: 'كلمة المرور ' },
      ],
    };
  },
};
</script>

<style>
/* Add any additional styles here */
</style>