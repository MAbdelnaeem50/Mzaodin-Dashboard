<template>
    <div class="my-6 flex justify-between">
      <div>
        <button class="bg-white border-none py-2 px-2 rounded-3xl">
          <select 
            class="border-2 border-gray-200 rounded-3xl w-full px-10" 
            :value="modelValue"
            @change="$emit('update:modelValue', $event.target.value)"
          >
            <option value="newest">الاحدث</option>
            <option value="oldest">الاقدم</option>
          </select>
        </button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: ['modelValue'],
    emits: ['update:modelValue']
  }
  </script>