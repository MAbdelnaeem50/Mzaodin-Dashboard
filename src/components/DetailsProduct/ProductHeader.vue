<template>
    <div class="flex justify-between items-center mb-4">
      <h1 class="text-2xl font-bold">{{ product.name }}</h1>
      <div class="">
        <button class="text-blue-500 ml-4"><i class="fas fa-copy"></i><span class="block">نسخ</span></button>
        <button class="text-green-500 ml-4"><i class="fas fa-edit"></i><span class="block">تعديل</span></button>
        <button class="text-red-500 ml-4"><i class="fas fa-trash"></i><span class="block">مسح</span></button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      product: {
        type: Object,
        required: true
      }
    }
  }
  </script>