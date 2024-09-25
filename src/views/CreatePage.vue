<template>
  <div class="bg-white min-h-screen">
    <div dir="rtl" >
        <AsideBar/>
        <NavBar/>

        <div class="p-6  lg:w-3/4 w-full  px-4 lg:px-40 absolute lg:left-20">
          <h1 class="text-right mb-10 text-2xl font-bold text-blue-500">انشاء منتج جديد</h1>

      <!-- Product Title -->
      <div class="mb-4">
        <label class="block text-gray-700 mb-2 px-8">عنوان المنتج</label>
        <input 
          type="text" 
          placeholder="قم بكتابة اسم المنتج" 
          class="w-full px-8 py-2 border border-gray-200  rounded-3xl focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
  
      <!-- Product Details -->
      <div class="mb-4">
        <label class="block text-gray-700 mb-2 px-8">تفاصيل المنتج</label>
        <input 
          type="text" 
          placeholder="قم بكتابة تفاصيل المنتج" 
          class="w-full px-8 py-2 border border-gray-200  rounded-3xl focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
  
      <!-- SKU -->
      <div class="mb-4">
        <label class="block text-gray-700 mb-2 px-8">رمز المنتج SKU</label>
        <input 
          type="text" 
          placeholder="قم بكتابة رمز المنتج" 
          class="w-full px-8 py-2 border border-gray-200  rounded-3xl focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
  
      <!-- Radio Buttons -->
      <ul class="grid w-1/2 gap-6 md:grid-cols-2 mb-4 ">
    <li>
        <input type="radio" id="hosting-small" name="hosting" value="hosting-small" class="hidden peer" required />
        <label for="hosting-small"  class="inline-flex items-center justify-between w-full px-5 py-3 text-gray-500 bg-white border border-gray-200 rounded-3xl cursor-pointer   peer-checked:bg-blue-600 peer-checked:text-gray-100 hover:text-gray-600 hover:bg-gray-100 ">                           
            <div class="block">
                <div class="w-full text-lg font-semibold">يدوي</div>
            </div>

        </label>
    </li>
    <li>
        <input type="radio" id="hosting-big" name="hosting" value="hosting-big" class="hidden peer">
        <label for="hosting-big" class="inline-flex items-center justify-between w-full px-5 py-3 text-gray-500 bg-white border border-gray-200 rounded-3xl cursor-pointer   peer-checked:bg-blue-600 peer-checked:text-gray-100 hover:text-gray-600 hover:bg-gray-100 ">
            <div class="block">
                <div class="w-full text-lg font-semibold">الي</div>
            </div>

        </label>
    </li>
</ul>
  
      <!-- Image Upload -->
      <div class="mb-4">
        <label class="block text-gray-700 mb-2 px-8">رفع الصور</label>
        <input 
          type="file" 
          class="block w-full text-sm text-gray-500 border border-gray-300  cursor-pointer focus:outline-none py-2 rounded-3xl px-8"
        />
      </div>
  
      <!-- Estimated Price -->
      <div class="mb-4">
        <label class="block text-gray-700 mb-2 px-8">سعر المنتج التقديري</label>
        <input 
          type="text" 
          placeholder="قم بكتابة سعر المنتج التقديري" 
          class="w-full px-8 py-2 border border-gray-200  rounded-3xl focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
  
      <!-- Weight -->
      <div class="mb-4">
        <label class="block text-gray-700 mb-2 px-8">الوزن</label>
        <input 
          type="text" 
          placeholder="قم بكتابة الوزن" 
          class="w-full px-8 py-2 border border-gray-200  rounded-3xl focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
  
      <!-- Buttons -->
      <div class="flex justify-between">
        <button 
          class="bg-blue-500 text-white w-3/4 lg:ml-4 px-4 py-3 rounded-3xl focus:outline-none hover:bg-blue-600"
        >
          نشر
        </button>
        <button 
          class="bg-red-500 text-white w-1/4 lg:mr-4 px-4 py-3 rounded-3xl focus:outline-none hover:bg-red-600"
        >
          إلغاء
        </button>
       
      </div>
    </div>
    </div>
  </div>
  

  </template>
  
  <script>
  import AsideBar from '@/components/AsideBar.vue';
  import NavBar from '@/components/NavBar.vue';
  export default {
    components : {
        AsideBar,
        NavBar,
    },
    data() {
      return {
      };
    }
  };
  </script>
  
  <style scoped>
  </style>
  