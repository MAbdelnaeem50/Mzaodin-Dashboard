<template>
  <div dir="rtl" class="overflow-x-auto bg-gray-50 border-2 border-gray-200 rounded-2xl py-8 px-2">
    <div class="px-10 mb-4">
      <router-link to="/create-product">
        <button class="btn bg-blue-600 hover:bg-blue-500 text-white py-2 px-12 rounded-3xl">
          انشاء منتج جديد
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
          <th class="border-b px-8 py-2">تاریخ الإضافة</th>
          <th class="border-b px-8 py-2">الفئة</th>
          <th class="border-b px-8 py-2">السعر</th>
          <th class="border-b px-8 py-2">المخزون</th>
          <th class="border-b px-8 py-2">SKU</th>
          <th class="border-b px-8 py-2">الإجراءات</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in products" :key="product.id" class="border-b">
          <td class="px-8 py-2">
            <input type="checkbox" class="rounded" :checked="selectAll" @change="$emit('toggle-product', product.id)" />
          </td>
          <router-link to="/details-product">
            <td class="px-8 py-2 bg-blue-100 rounded-3xl">
              {{ product.name }}
            </td>
          </router-link>
          <td class="px-8 py-2">{{ product.creationDate }}</td>
          <td class="px-8 py-2">{{ product.category }}</td>
          <td class="px-8 py-2">{{ product.price }}</td>
          <td class="px-8 py-2">{{ product.stock }}</td>
          <td class="px-8 py-2">{{ product.sku }}</td>
          <td class="px-8 py-2">
            <button @click="$emit('open-edit-modal', product)"
              class="btn btn-sm bg-white border-none shadow-none text-blue-600 p-1 ml-1">
              <i class="fa-solid fa-pen-to-square"></i>
            </button>
            <button @click="$emit('open-delete-modal', product)"
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
  props: ["products", "selectAll"],
  emits: [
    "toggle-all",
    "toggle-product",
    "open-delete-modal",
    "open-edit-modal",
  ],
};
</script>
