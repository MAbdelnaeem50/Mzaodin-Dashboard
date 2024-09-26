<template>
    <div dir="rtl" class="">
      <h1 class="text-right mb-10 text-2xl font-bold text-blue-500">الفواتير</h1>
  
      <div class="grid lg:grid-cols-4 grid-cols-1 items-center w-full mb-20">
        <div class="stats ml-4 bg-blue-100 shadow-lg mb-4">
          <div dir="ltr" class="stat px-16 py-6">
            <div class="stat-value text-right mr-2">500</div>
            <div class="stat-title text-right mr-2">الفواتير </div>
            <div class="stat-figure text-secondary">
              <div class="avatar">
                <div class="w-16 bg-blue-300 rounded-full ml-4">
                  <i class="fa-solid fa-file-invoice text-4xl absolute top-3 left-9 text-white"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="stats ml-4 bg-yellow-100 shadow-lg mb-4">
          <div dir="ltr" class="stat px-16 py-6">
            <div class="stat-value text-right mr-2">10000</div>
            <div class="stat-title text-right mr-2">في الانتظار </div>
            <div class="stat-figure text-secondary">
              <div class="avatar">
                <div class="w-16 bg-yellow-300 rounded-full ml-4">
                  <i class="fa-solid fa-hourglass-start text-4xl absolute top-3 left-9 text-white"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="stats ml-4 bg-green-100 shadow-lg mb-4">
          <div dir="ltr" class="stat px-16 py-6">
            <div class="stat-value text-right mr-2">10000 </div>
            <div class="stat-title text-right mr-2">مدفوع </div>
            <div class="stat-figure text-secondary">
              <div class="avatar">
                <div class="w-16 bg-green-300 rounded-full ml-4">
                  <i class="fa-solid fa-money-bill-wave text-4xl absolute top-3 left-7 text-white"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="stats ml-4 bg-red-100 shadow-lg mb-4">
          <div dir="ltr" class="stat px-16 py-6">
            <div class="stat-value text-right mr-2">10000 </div>
            <div class="stat-title text-right mr-2">غير مدفوع </div>
            <div class="stat-figure text-secondary">
              <div class="avatar">
                <div class="w-16 bg-red-300 rounded-full ml-4">
                  <i class="fa-solid fa-magnifying-glass-dollar text-4xl absolute top-3 left-7 text-white"></i>
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
    name: "HeaderSection",
  };
  </script>