<template>
    <div class="bg-white min-h-screen">
      <div dir="rtl" >
          <AsideBar/>
          <NavBar/>
  
          <div class="p-6  lg:w-3/4 w-full grid lg:grid-cols-2 col-span-1 gap-2  px-4 lg:px-40 absolute lg:left-20">
            <h1 class="text-right mb-10 text-2xl font-bold text-blue-500">انشاء مزاد جديد</h1>
  
        <div class="mb-4 lg:col-span-2">
          <label class="block text-gray-700 mb-2 px-8"> المنتج</label>
          <input 
            type="text" 
            placeholder="قم بكتابة اسم المنتج" 
            class="w-full px-8 py-2 border border-gray-200 rounded-3xl focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-300"
          />
        </div>
    
        <div class="mb-4">
          <label class="block text-gray-700 mb-2 px-8"> عدد المشتركين</label>
          <input 
            type="text" 
            placeholder="قم بكتابة عدد المشتركين" 
            class="w-full px-8 py-2 border border-gray-200  rounded-3xl focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-300"
          />
        </div>
    
        <div class="mb-4">
          <label class="block text-gray-700 mb-2 px-8">سغر تكلفة المنتج </label>
          <input 
            type="text" 
            placeholder="  قم بكتابة سعر تكلفة المنتج" 
            class="w-full px-8 py-2 border border-gray-200  rounded-3xl focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-300"
          />
        </div>
    
    
        <div class="mb-4">
          <label class="block text-gray-700 mb-2 px-8">مبلغ التسجيل المطلوب  </label>
          <input 
            type="text" 
            placeholder="قم بكتابة مبلغ التسجيل المطلوب" 
            class="w-full px-8 py-2 border border-gray-200  rounded-3xl focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-300"
          />
        </div>
    
        <div class="mb-4">
          <label class="block text-gray-700 mb-2 px-8">سغر فتح المزاد</label>
          <input 
            type="text" 
            placeholder="قم بكتابة سغر فتح المزاد"
            class="w-full px-8 py-2 border border-gray-200  rounded-3xl focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-300"
          />
        </div>

        <div class="mb-4">
          <label class="block text-gray-700 mb-2 px-8">  مؤقت دفع الفاتورة</label>
          <input 
            type="text" 
            placeholder="قم بكتابة مؤقت دفع الفاتورة"
            class="w-full px-8 py-2 border border-gray-200  rounded-3xl focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-300"
          />
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 mb-2 px-8">   غدد الايام </label>
          <input 
            type="text" 
            placeholder="قم بكتابة   عدد الايام"
            class="w-full px-8 py-2 border border-gray-200  rounded-3xl focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-300"
          />
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 mb-2 px-8">   غدد الساعات </label>
          <input 
            type="text" 
            placeholder="قم بكتابة   عدد الساعات"
            class="w-full px-8 py-2 border border-gray-200  rounded-3xl focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-300"
          />
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 mb-2 px-8">   غدد الدقائق </label>
          <input 
            type="text" 
            placeholder="قم بكتابة   عدد الدقائق"
            class="w-full px-8 py-2 border border-gray-200  rounded-3xl focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-200 "
          />
        </div>
    
        <!-- Buttons -->
        <div class="flex justify-between">
          <button 
            class="bg-blue-500 text-white w-3/4 cml-4 px-4 py-3 rounded-3xl focus:outline-none hover:bg-blue-600"
          >
            نشر
          </button>
          <button 
            class="bg-red-500 text-white w-1/4 mr-4 px-4 py-3 rounded-3xl focus:outline-none hover:bg-red-600"
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
