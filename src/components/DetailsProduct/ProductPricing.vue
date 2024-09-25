<template>
    <div class="grid lg:grid-cols-4 grid-cols-1 gap-4 mt-10">
      <div v-for="(price, label) in prices" :key="label" class="text-xl bg-gray-50 px-8 py-8 rounded-3xl">
        <p class="font-bold">{{ price }} ر.س</p>
        <p class="text-gray-600">{{ label }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      prices: {
        type: Object,
        required: true
      }
    }
  }
  </script>