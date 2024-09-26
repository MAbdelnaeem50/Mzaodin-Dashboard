<template>
    <div dir="rtl" class="overflow-x-auto bg-gray-50 border-2 border-gray-200 rounded-2xl py-8 px-2">
        <div class="flex justify-end mb-2">
            <button class="btn w-56 rounded-3xl bg-blue-600 hover:bg-blue-500 text-white">تصدير</button>
        </div>
      <table class="table-auto w-full text-center border-collapse text-sm border-t border-gray-300">
        <thead>
          <tr>
            <th class="border-b px-8 py-2">
              <input type="checkbox" class="rounded" v-model="selectAll" @change="toggleAll" />
            </th>
            <th class="border-b px-8 py-2">اسم المنتج</th>
            <th class="border-b px-8 py-2">السعر الابتدائي</th>
            <th class="border-b px-8 py-2">تاريخ بدء المزاد</th>
            <th class="border-b px-8 py-2">مدة المزاد</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in auctionItems" :key="item.id" class="border-b">
            <td class="px-8 py-2">
              <input type="checkbox" class="rounded" v-model="item.selected" @change="updateSelectAll" />
            </td>
            <td class="px-8 py-2">{{ item.name }}</td>
            <td class="px-8 py-2">{{ item.startingPrice }} ريال</td>
            <td class="px-8 py-2">{{ item.startDate }}</td>
            <td class="px-8 py-2">{{ item.duration }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        selectAll: false,
        auctionItems: [
          { id: 1, name: " مصطفي  ", startingPrice: 4000, startDate: "2023-06-01", duration: "3 أيام", selected: false },
          { id: 2, name: "ساعة أبل الجيل 7", startingPrice: 1500, startDate: "2023-06-02", duration: "2 أيام", selected: false },
          { id: 3, name: "ماك بوك برو 2023", startingPrice: 6000, startDate: "2023-06-03", duration: "4 أيام", selected: false },
        ]
      };
    },
    methods: {
      toggleAll() {
        this.auctionItems.forEach(item => item.selected = this.selectAll);
      },
      updateSelectAll() {
        this.selectAll = this.auctionItems.every(item => item.selected);
      }
    }
  };
  </script>