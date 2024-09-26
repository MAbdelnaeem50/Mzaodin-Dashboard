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
            <input type="checkbox" class="rounded" v-model="selectAll" @change="toggleAll" />
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
            <input type="checkbox" class="rounded" v-model="product.selected" @change="updateSelectAll" />
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
      products: [
        {
          id: 1,
          name: "منتج 1",
          creationDate: "2023-05-01",
          category: "فئة 1",
          price: "100 ريال",
          stock: 50,
          sku: "SKU001",
          selected: false
        },
        {
          id: 2,
          name: "منتج 2",
          creationDate: "2023-05-02",
          category: "فئة 2",
          price: "150 ريال",
          stock: 30,
          sku: "SKU002",
          selected: false
        },
        {
          id: 3,
          name: "منتج 3",
          creationDate: "2023-05-03",
          category: "فئة 1",
          price: "200 ريال",
          stock: 20,
          sku: "SKU003",
          selected: false
        }
      ]
    };
  },
  methods: {
    toggleAll() {
      this.products.forEach(product => product.selected = this.selectAll);
    },
    updateSelectAll() {
      this.selectAll = this.products.every(product => product.selected);
    },
    openEditModal(product) {
      // Implement logic to open edit modal
    },
    openDeleteModal(product) {
      // Implement logic to open delete modal
    }
  }
};
</script>
