<template>
    <div dir="rtl" class="overflow-x-auto bg-gray-50 border-2 border-gray-200 rounded-2xl py-8 px-2">
      <table class="table-auto w-full text-center border-collapse text-sm border-t border-gray-300">
        <thead>
          <tr>
            <th class="border-b px-8 py-2">
              <input type="checkbox" class="rounded" :checked="selectAll" @change="$emit('toggle-all')" />
            </th>
            <th class="border-b px-8 py-2">نوع المعاملة</th>
            <th class="border-b px-8 py-2">المبلغ</th>
            <th class="border-b px-8 py-2">التاريخ</th>
            <th class="border-b px-8 py-2">الحالة</th>
            <th class="border-b px-8 py-2">المستخدم</th>
            <th class="border-b px-8 py-2">الإجراءات</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="transaction in transactions" :key="transaction.id" class="border-b">
            <td class="px-8 py-2">
              <input type="checkbox" class="rounded" :checked="selectAll" @change="$emit('toggle-transaction', transaction.id)" />
            </td>
            <td class="px-8 py-2" :class="{'text-green-600': transaction.type === 'إيداع', 'text-red-600': transaction.type === 'سحب'}">
              {{ transaction.type }}
            </td>
            <td class="px-8 py-2">{{ transaction.amount }}</td>
            <td class="px-8 py-2">{{ transaction.date }}</td>
            <td class="px-8 py-2" :class="{'text-green-600': transaction.status === 'مكتمل', 'text-yellow-600': transaction.status === 'معلق'}">
              {{ transaction.status }}
            </td>
            <td class="px-8 py-2">{{ transaction.user }}</td>
            <td class="px-8 py-2">
              <button @click="$emit('open-details-modal', transaction)"
                class="btn btn-sm bg-white border-none shadow-none text-blue-600 p-1 ml-1">
                <i class="fa-solid fa-eye"></i>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  export default {
    props: ["transactions", "selectAll"],
    emits: [
      "toggle-all",
      "toggle-transaction",
      "open-details-modal",
    ],
  };
  </script>