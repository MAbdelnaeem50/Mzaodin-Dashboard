<template>
    <div dir="rtl" class="overflow-x-auto bg-gray-50 border-2 border-gray-200 rounded-2xl py-8 px-2">
      <div class="px-10 mb-4">
        <router-link to="/create-auction">
          <button class="btn bg-blue-600 hover:bg-blue-500 text-white py-2 px-12 rounded-3xl">
            إنشاء مزاد جديد
          </button>
        </router-link>
      </div>
      <table class="table-auto w-full text-center border-collapse text-sm border-t border-gray-300">
        <thead>
          <tr>
            <th class="border-b px-8 py-2">
              <input type="checkbox" class="rounded" :checked="selectAll" @change="$emit('toggle-all')" />
            </th>
            <th class="border-b px-8 py-2">اسم المنتج</th>
            <th class="border-b px-8 py-2">تاريخ البدء</th>
            <th class="border-b px-8 py-2">تاريخ الانتهاء</th>
            <th class="border-b px-8 py-2">السعر الابتدائي</th>
            <th class="border-b px-8 py-2">أعلى عرض</th>
            <th class="border-b px-8 py-2">الحالة</th>
            <th class="border-b px-8 py-2">الإجراءات</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="auction in auctions" :key="auction.id" class="border-b">
            <td class="px-8 py-2">
              <input type="checkbox" class="rounded" :checked="selectAll" @change="$emit('toggle-auction', auction.id)" />
            </td>
            <router-link to="/details-product">
              <td class="px-8 py-2 bg-blue-100 rounded-3xl">
                {{ auction.name }}
              </td>
            </router-link>
            <td class="px-8 py-2">{{ auction.startDate }}</td>
            <td class="px-8 py-2">{{ auction.endDate }}</td>
            <td class="px-8 py-2">{{ auction.startingPrice }}</td>
            <td class="px-8 py-2">{{ auction.currentBid }}</td>
            <td class="px-8 py-2">
              <span :class="getStatusClass(auction.status)">
                {{ auction.status }}
              </span>
            </td>
            <td class="px-8 py-2">
              <button @click="$emit('open-edit-modal', auction)"
                class="btn btn-sm bg-white border-none shadow-none text-blue-600 p-1 ml-1">
                <i class="fa-solid fa-pen-to-square"></i>
              </button>
              <button @click="$emit('open-delete-modal', auction)"
                class="btn btn-sm bg-white border-none shadow-none text-red-600 p-1 mr-1">
                <i class="fa-solid fa-trash"></i>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  export default {
    props: ["auctions", "selectAll"],
    emits: [
      "toggle-all",
      "toggle-auction",
      "open-delete-modal",
      "open-edit-modal",
    ],
    methods: {
      getStatusClass(status) {
        switch (status) {
          case 'قادم':
            return 'bg-green-100 text-green-800 px-6 py-1 rounded-full';
          case 'منتهي':
            return 'bg-red-100 text-red-800 px-6 py-1 rounded-full';
          case 'جاري':
            return 'bg-yellow-100 text-yellow-800 px-6 py-1 rounded-full';
          default:
            return '';
        }
      }
    }
  };
  </script>