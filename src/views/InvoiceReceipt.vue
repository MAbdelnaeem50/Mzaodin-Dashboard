<template>
  <div dir="rtl" class="bg-white min-h-screen">
    <NavBar/>
    <AsideBar/>
    <div class="p-6   lg:w-3/4 w-full  lg:px-40 px-4 absolute lg:left-20">
      <div class="flex justify-center  ">
        <img src="../assets/images/logo.png" alt="Celebration" class="w-48 h-auto" />
      </div>
      <h2 class="text-2xl font-bold text-center text-blue-600 mb-4 bg-red-100 bg-opacity-60 rounded-xl py-2">تفاصيل الفاتورة</h2>
      
      <p class="text-lg text-center mb-6">تهانينا عزيزي/عزيزتي {{ customerName }}</p>
      
      <div class="flex justify-center mb-6">
        <img src="../assets/invoice.png" alt="Celebration" class="w-90 h-auto" />
      </div>
      
      <p class="text-sm text-center mb-6">
        لقد تم اختيارك للفوز بالمنتج. لتحقيق شروط الفوز، نود تذكيرك بأن لديك فاتورة متأخرة. نرجو منك تسديدها في أقرب وقت ممكن. يرجى استخدام الرابط أدناه لإتمام عملية الدفع
      </p>
      <div class="flex justify-center">
      <button class="w-1/2 bg-blue-500 text-white py-2 rounded-md mb-4">
        دفع الفاتورة
      </button>
    </div>
      
      <div class="text-center mb-4 ">
        <p class="text-sm mb-2">ينتهي العرض خلال</p>
        <div class="flex justify-center">
        <div class="text-2xl max-w-fit px-4 py-1 font-bold border border-blue-600 flex justify-center text-blue-600 rounded-xl ">
          {{ formattedTime }}
        </div>
      </div>
      </div>
      
      <p class="text-xs text-red-500 text-center mb-4">
        تنبيه: عميلنا العزيز في حال عدم السداد قبل انتهاء المدة سيترتب عليه إلغاء استحقاقك للفوز بالمنتج
      </p>
      
      <p class="text-sm text-center">
        نشكرك على اهتمامك السريع بهذا الأمر. إذا كان لديك استفسار أو تحتاج إلى مساعدة لا تتردد في الاتصال بنا
      </p>
    </div>
  </div>
  
  </template>
  
  <script>
  import AsideBar from '@/components/AsideBar.vue';
import NavBar from '@/components/NavBar.vue';
  export default {
    components:{
      NavBar,
      AsideBar,
    },
    data() {
      return {
        customerName: 'خالد محمد',
        timeLeft: 30 * 60, // 30 minutes in seconds
      }
    },
    computed: {
      formattedTime() {
        const minutes = Math.floor(this.timeLeft / 60)
        const seconds = this.timeLeft % 60
        return `${String(minutes).padStart(2, '0')} : ${String(seconds).padStart(2, '0')}`
      }
    },
    mounted() {
      this.startTimer()
    },
    methods: {
      startTimer() {
        const timer = setInterval(() => {
          this.timeLeft--
          if (this.timeLeft <= 0) {
            clearInterval(timer)
          }
        }, 1000)
      }
    }
  }
  </script>