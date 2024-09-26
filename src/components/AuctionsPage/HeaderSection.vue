<template>
    <div dir="rtl" class="">
      <h1 class="text-right mb-10 text-2xl font-bold text-blue-500">المزادات</h1>
  
      <div class="grid lg:grid-cols-4 grid-cols-1 items-center w-full mb-20">
        <div class="stats ml-4 bg-blue-100 shadow-lg mb-4">
          <div dir="ltr" class="stat px-16 py-6">
            <div class="stat-value">{{ totalAuctions }}</div>
            <div class="stat-title"> المزادات</div>
            <div class="stat-figure text-secondary">
              <div class="avatar">
                <div class="w-16 bg-blue-300 rounded-full ml-4">
                  <i class="fa-solid fa-gavel text-4xl absolute top-3 left-7 text-white"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="stats ml-4 bg-red-100 shadow-lg mb-4">
          <div dir="ltr" class="stat px-16 py-6">
            <div class="stat-value">{{ activeAuctions }}</div>
            <div class="stat-title"> المنتهية</div>
            <div class="stat-figure text-secondary">
              <div class="avatar">
                <div class="w-16 bg-red-300 rounded-full ml-4">
                  <i class="fa-solid fa-flag-checkered text-4xl absolute top-3 left-8 text-white"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="stats ml-4 bg-yellow-100 shadow-lg mb-4">
          <div dir="ltr" class="stat px-16 py-6">
            <div class="stat-value">{{ endedAuctions }}</div>
            <div class="stat-title"> الجارية</div>
            <div class="stat-figure text-secondary">
              <div class="avatar">
                <div class="w-16 bg-yellow-300 rounded-full ml-4">
                  <i class="fa-solid fa-cubes text-4xl absolute top-3 left-7 text-white"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="stats ml-4 bg-green-100 shadow-lg mb-4">
          <div dir="ltr" class="stat px-16 py-6">
            <div class="stat-value">{{ comingAuctions }}</div>
            <div class="stat-title"> القادمة</div>
            <div class="stat-figure text-secondary">
              <div class="avatar">
                <div class="w-16 bg-green-300 rounded-full ml-4">
                  <i class="fa-solid fa-truck text-4xl absolute top-3 left-7 text-white"></i>
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
        totalAuctions: 150,
        activeAuctions: 45,
        endedAuctions: 40,
        comingAuctions : 55,
      };
    },
  };
  </script>