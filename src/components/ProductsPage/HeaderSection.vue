<template>
    <div dir="rtl" class="">
      <h1 class="text-right mb-10 text-2xl font-bold text-blue-500 ">المنتجات</h1>
  
      <div class="grid lg:grid-cols-3 grid-cols-1  items-center w-full mb-20">
        <div class="stats  ml-4 bg-blue-100 shadow-lg mb-4 ">
          <div dir="ltr" class="stat px-16  py-6 ">
            <div class="stat-value">{{ totalProducts }}</div>
            <div class="stat-title">المنتجات</div>
            <div class="stat-figure text-secondary">
              <div class="avatar">
                <div class="w-16 bg-blue-300 rounded-full ml-4">
                  <i class="fa-solid fa-boxes-stacked text-4xl absolute top-3 left-7 text-white"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="stats  ml-4 bg-yellow-100 shadow-lg mb-4 ">
          <div dir="ltr" class="stat px-16 py-6 ">
            <div class="stat-value">{{ totalProducts }}</div>
            <div class="stat-title">المنتج القادم</div>
            <div class="stat-figure text-secondary">
              <div class="avatar">
                <div class="w-16 bg-yellow-300 rounded-full ml-4">
                  <i class="fa-solid fa-dolly text-4xl absolute top-3 left-7 text-white"></i>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="stats  ml-4 bg-green-100 shadow-lg mb-4 ">
          <div dir="ltr" class="stat px-16 py-6 ">
            <div class="stat-value">{{ totalProducts }}</div>
            <div class="stat-title">المنتج الجاري</div>
            <div class="stat-figure text-secondary">
              <div class="avatar">
                <div class="w-16 bg-green-300 rounded-full ml-4">
                  <i class="fa-solid fa-truck-ramp-box text-4xl absolute top-3 left-6 text-white"></i>
                  
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        totalProducts: 150, 
      };
    },
  };
  </script>