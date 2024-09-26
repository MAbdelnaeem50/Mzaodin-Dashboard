<template>
    <div class="mb-4 relative">
      <div class="relative lg:w-1/4 mx-auto mb-4">
        <img 
          :src="currentImageUrl"
          :alt="`Product Image ${currentImageIndex + 1}`"
          class="w-full h-auto rounded-lg"
        />
        <button @click="prevImage" class="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white p-1 rounded-full shadow-md">
          <chevron-left-icon class="w-6 h-6" />
        </button>
        <button @click="nextImage" class="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white p-1 rounded-full shadow-md">
          <chevron-right-icon class="w-6 h-6" />
        </button>
      </div>
      
      <div class="flex justify-center mt-2 space-x-2 rtl:space-x-reverse">
        <span 
          v-for="(_, index) in images" 
          :key="index"
          :class="[
            'h-2 w-2 rounded-full', 
            index === currentImageIndex ? 'bg-blue-500' : 'bg-gray-300'
          ]"
        ></span>
      </div>
    </div>
  </template>
  
  <script>
  import { ChevronLeft, ChevronRight } from 'lucide-vue-next';
  
  export default {
    components: {
      ChevronLeftIcon: ChevronLeft,
      ChevronRightIcon: ChevronRight,
    },
    props: {
      images: {
        type: Array,
        required: true
      }
    },
    data() {
      return {
        currentImageIndex: 0
      }
    },
    computed: {
      currentImageUrl() {
        return this.images[this.currentImageIndex];
      }
    },
    methods: {
      nextImage() {
        this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
      },
      prevImage() {
        this.currentImageIndex = (this.currentImageIndex - 1 + this.images.length) % this.images.length;
      }
    }
  }
  </script>