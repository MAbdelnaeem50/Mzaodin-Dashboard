<template>
    <div dir="rtl" class="overflow-x-auto bg-gray-50 border-2 border-gray-200 rounded-2xl py-8 px-2">
      <table class="table-auto w-full text-center border-collapse text-sm border-t border-gray-300">
        <thead>
          <tr>
            <th class="border-b px-8 py-2">
              <input type="checkbox" class="rounded" v-model="selectAll" @change="toggleAll" />
            </th>
            <th class="border-b px-8 py-2">المزايد</th>
            <th class="border-b px-8 py-2">قيمة المزايدة</th>
            <th class="border-b px-8 py-2">وقت المزايدة</th>
            <th class="border-b px-8 py-2">نوع المزايدة</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="bid in biddingHistory" :key="bid.id" class="border-b">
            <td class="px-8 py-2">
              <input type="checkbox" class="rounded" v-model="bid.selected" @change="updateSelectAll" />
            </td>
            <td class="px-8 py-2">{{ bid.bidder }}</td>
            <td class="px-8 py-2">{{ bid.amount }} ريال</td>
            <td class="px-8 py-2">{{ bid.time }}</td>
            <td class="px-8 py-2">{{ bid.type }}</td>
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
        biddingHistory: [
          { id: 1, bidder: "أحمد محمد", amount: 5000, time: "12:30:45", type: "يدوي", selected: false },
          { id: 2, bidder: "سارة علي", amount: 4800, time: "12:29:30", type: "تلقائي", selected: false },
          { id: 3, bidder: "خالد عمر", amount: 4600, time: "12:28:15", type: "يدوي", selected: false },
        ]
      };
    },
    methods: {
      toggleAll() {
        this.biddingHistory.forEach(bid => bid.selected = this.selectAll);
      },
      updateSelectAll() {
        this.selectAll = this.biddingHistory.every(bid => bid.selected);
      }
    }
  };
  </script>