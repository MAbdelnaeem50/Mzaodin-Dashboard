<template>
  <div dir="rtl" class="overflow-x-auto bg-gray-50 border-2 border-gray-200 rounded-2xl py-8 px-2">
    <!-- Profile section -->
    <div class="flex items-center justify-between ">
      <div class="flex items-center mx-auto justify-center space-x-4">
        <!-- Profile Image -->
        <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" alt="User Image" class="w-24 h-24 rounded-full ml-4" />
        <div>
          <h1 class="text-xl font-bold">اسم العميل</h1>
          <p class="text-gray-500">اسم المستخدم</p>
        </div>
      </div>
    </div>

    <!-- Contact Info -->
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-6">
      <div class="bg-white p-4 rounded-3xl border-2 border-gray-200 flex items-center justify-between">
        <div>
          <p class="text-gray-700">+96612585224</p>
          <p class="text-gray-400">رقم الهاتف</p>
        </div>
     
        <i class="fa-solid fa-phone bg-green-50 p-4 text-green-400 rounded-full"></i>
   
      </div>
      <div class="bg-white p-4 rounded-3xl border-2 border-gray-200 flex items-center justify-between">
        <div>
          <p class="text-gray-700">Khaled@gmail.com</p>
          <p class="text-gray-400">البريد الإلكتروني</p>
        </div>
        <i class="fa-solid fa-envelope bg-yellow-50 p-4 text-yellow-400 rounded-full"></i>

      </div>
    
      <div class="bg-white p-4 rounded-3xl border-2 border-gray-200 flex items-center justify-between">
        <div>
          <p class="text-gray-700">السعودية</p>
          <p class="text-gray-400">البلد</p>
        </div>
        <i class="fa-solid fa-location-dot bg-blue-50 p-4 text-blue-400 rounded-full"></i>

      </div>
    </div>

    <!-- Address and Order Info -->
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-6">
      <div class="bg-white p-4 rounded-3xl border-2 border-gray-200 flex items-center justify-between">
        <div>
          <p class="text-gray-700">السعودية</p>
          <p class="text-gray-400">المدينة</p>
        </div>

      </div>
      <div class="bg-white p-4 rounded-3xl border-2 border-gray-200 flex items-center justify-between">
        <div>
          <p class="text-gray-700">السعودية</p>
          <p class="text-gray-400">الشارع</p>
        </div>

      </div>
      <div class="bg-white p-4 rounded-3xl border-2 border-gray-200 flex items-center justify-between">
        <div>
          <p class="text-gray-700">السعودية</p>
          <p class="text-gray-400">الحي</p>
        </div>

      </div>
    </div>

    <!-- Order Details -->
    <div class="mt-6">
      <table class="table-auto w-full text-center border-collapse text-sm bg-white border-t border-gray-300">
      <thead>
        <tr>
          <th class="border-b px-8 py-2">
            <input type="checkbox" class="rounded" v-model="selectAll" @change="toggleAll" />
          </th>
          <th class="border-b px-8 py-2">اسم المنتج</th>
          <th class="border-b px-8 py-2">تاریخ الإضافة</th>
          <th class="border-b px-8 py-2">الفئة</th>
          <th class="border-b px-8 py-2">السعر</th>
          <th class="border-b px-8 py-2">SKU</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in products" :key="product.id" class="border-b">
          <td class="px-8 py-2">
            <input type="checkbox" class="rounded" v-model="product.selected" @change="updateSelectAll" />
          </td>
          <router-link to="/details-product">
            <td class="px-8 py-2 bg-blue-100 rounded-3xl">
              ايفون
            </td>
          </router-link>
          <td class="px-8 py-2">موبايل</td>
          <td class="px-8 py-2">هواتف</td>
          <td class="px-8 py-2">500</td>
          <td class="px-8 py-2">6004</td>

        </tr>
      </tbody>
    </table>
    </div>
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
}
</script>
