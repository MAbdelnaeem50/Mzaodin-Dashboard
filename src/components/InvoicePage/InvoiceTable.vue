<template>
    <div dir="rtl" class="overflow-x-auto bg-gray-50 border-2 border-gray-200 rounded-2xl py-8 px-2">
      <div class="px-10 mb-4">
      </div>
      <table class="table-auto w-full text-center border-collapse text-sm border-t border-gray-300">
        <thead>
          <tr>
            <th class="border-b px-8 py-2">
              <input type="checkbox" class="rounded" :checked="selectAll" @change="$emit('toggle-all')" />
            </th>
            <th class="border-b px-8 py-2">رقم الفاتورة</th>
            <th class="border-b px-8 py-2">اسم العميل</th>
            <th class="border-b px-8 py-2">تاريخ الفاتورة</th>
            <th class="border-b px-8 py-2">المبلغ</th>
            <th class="border-b px-8 py-2">الحالة</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="invoice in invoices" :key="invoice.id" class="border-b">
            <td class="px-8 py-2">
              <input type="checkbox" class="rounded" :checked="selectAll" @change="$emit('toggle-invoice', invoice.id)" />
            </td>
            <router-link :to="`/invoice-details`">
              <td class="px-8 py-2 bg-blue-100 rounded-3xl">
                {{ invoice.invoiceNumber }}
              </td>
            </router-link>
            <td class="px-8 py-2">{{ invoice.customerName }}</td>
            <td class="px-8 py-2">{{ invoice.date }}</td>
            <td class="px-8 py-2">{{ invoice.amount }}</td>
            <td class="px-8 py-2">{{ invoice.status }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  export default {
    props: ["invoices", "selectAll"],
    emits: [
      "toggle-all",
      "toggle-invoice",
      "open-delete-modal",
      "open-edit-modal",
    ],
  };
  </script>