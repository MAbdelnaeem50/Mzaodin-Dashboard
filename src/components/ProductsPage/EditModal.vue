<template>
    <dialog ref="editModal" class="modal w-full max-w-none">
      <div class="modal-box lg:w-1/2 max-w-none">
        <h3 class="font-bold text-lg text-blue-600 py-10">تعديل بيانات المنتج</h3>
        <form @submit.prevent="saveEdit">
          <div class="form-control">
            <div class="grid gap-6 mb-6 md:grid-cols-2">
              <div>
                <input v-model="editedProduct.name" type="text" 
                  class="appearance-none rounded-3xl w-full py-3 pl-3 pr-10 border-2 border-gray-200 text-gray-700 leading-tight text-right focus:outline-none focus:shadow-outline"
                  placeholder="اسم المنتج" required />
              </div>
              <div>
                <input v-model="editedProduct.category" type="text"
                  class="appearance-none rounded-3xl w-full py-3 pl-3 pr-10 border-2 border-gray-200 text-gray-700 leading-tight text-right focus:outline-none focus:shadow-outline"
                  placeholder="الفئة" required />
              </div>
              <div>
                <input v-model="editedProduct.price" type="number" 
                  class="appearance-none rounded-3xl w-full py-3 pl-3 pr-10 border-2 border-gray-200 text-gray-700 leading-tight text-right focus:outline-none focus:shadow-outline"
                  placeholder="السعر" required />
              </div>
              <div>
                <input v-model="editedProduct.stock" type="number" 
                  class="appearance-none rounded-3xl w-full py-3 pl-3 pr-10 border-2 border-gray-200 text-gray-700 leading-tight text-right focus:outline-none focus:shadow-outline"
                  placeholder="المخزون" required />
              </div>
              <div>
                <input v-model="editedProduct.sku" type="text"  
                  class="appearance-none rounded-3xl w-full py-3 pl-3 pr-10 border-2 border-gray-200 text-gray-700 leading-tight text-right focus:outline-none focus:shadow-outline"
                  placeholder="SKU" required />
              </div>
            </div>
          </div>
          <div class="modal-action">
            <button type="submit" class="btn bg-blue-600 hover:bg-blue-500 text-white rounded-3xl w-1/2 ml-2">حفظ التغييرات</button>
            <button type="button" @click="$emit('close-modal')" class="btn rounded-3xl w-1/2 mr-2">إلغاء</button>
          </div>
        </form>
      </div>
    </dialog>
  </template>
  
  <script>
  export default {
    props: ['productToEdit'],
    emits: ['save-edit', 'close-modal'],
    data() {
      return {
        editedProduct: { ...this.productToEdit }
      };
    },
    methods: {
      saveEdit() {
        this.$emit('save-edit', this.editedProduct);
      },
      showModal() {
        this.$refs.editModal.showModal();
      },
      close() {
        this.$refs.editModal.close();
      }
    },
    watch: {
      productToEdit(newProduct) {
        this.editedProduct = { ...newProduct };
      }
    }
  }
  </script>