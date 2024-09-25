<template>
    <div dir="rtl" class="flex justify-center items-center h-screen bg-blue-500 px-4">
      <div class="bg-white p-8 rounded-2xl  w-full lg:py-28  lg:w-1/3 lg:px-20 px-10 py-20">
        <img src="../assets/images/logo.png" alt="logo" class="w-20 mx-auto mb-8">
        <h1 class="text-4xl font-bold mb-2">تسجيل الدخول</h1>
        <h1 class="text-sx text-gray-400  mb-8"> قم بتسجيل الدخول للوصول للموقع</h1>
        <form @submit.prevent="login">
          <div class="mb-4">
            <label for="username" class="block text-gray-500 font-bold mb-2 px-4"> البريد الالكتروني</label>
            <input
              id="username"
              v-model="username"
              type="text"
              class="w-full px-4 py-4 border border-gray-200 rounded-2xl text-black font-bold focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="البريد الالكتروني"
              required
            />
          </div>
          <div class="mb-4 relative">
            <label for="password" class="block text-gray-500 font-bold mb-2 px-4">  كلمة السر</label>
            <input
              id="password"
              v-model="password"
              :type="showPassword ? 'text' : 'password'"
              class="w-full px-4 py-4 border border-gray-200 rounded-2xl text-black font-bold focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="كلمة السر"
              required
            />
            <div class="absolute inset-y-0 left-0 top-8 flex items-center pl-3 cursor-pointer" @click="togglePassword">
              <i :class="showPassword ? 'fa-solid fa-eye-slash' : 'fa-solid fa-eye'" class="text-gray-400"></i>
            </div>
           
          </div>
          <router-link to="/users" >
          <button
            type="submit"
            class="w-full bg-blue-500 hover:bg-blue-600 text-xl text-white font-bold py-4 px-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            تسجيل الدخول
          </button>
        </router-link>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'LoginPage',
    data() {
      return {
        username: '',
        password: '',
        showPassword: false

      }
    },
    methods: {
      togglePassword() {
        this.showPassword = !this.showPassword
      },
      login() {
      }
    }
  }
  </script>