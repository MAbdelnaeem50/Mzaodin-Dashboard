<template>
    <div class="grid lg:grid-cols-3 grid-cols-1 gap-4 mb-4">
      <div class="text-xl bg-gray-50 px-8 py-8 rounded-3xl">
        <p class="font-bold">{{ product.name }}</p>
        <p class="text-gray-600">اسم المنتج</p>
      </div>
      <div class="text-xl bg-gray-50 px-8 py-8 rounded-3xl">
        <p class="font-bold">{{ product.sku }}</p>
        <p class="text-gray-600">رمز sku</p>
      </div>
      <div class="text-xl bg-gray-50 px-8 py-8 rounded-3xl">
        <p class="font-bold">{{ product.weight }} جرام</p>
        <p class="text-gray-600">الوزن</p>
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