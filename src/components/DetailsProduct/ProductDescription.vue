<template>
    <div class="text-xl bg-gray-50 px-8 py-8 rounded-3xl mt-10">
      <h2 class="text-xl font-bold mb-2">وصف المنتج</h2>
      <p class="text-gray-700">{{ description }}</p>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      description: {
        type: String,
        required: true
      }
    }
  }
  </script>