<template>
    <div dir="rtl" class="">
      <SearchBar v-model="searchQuery" />
      <FilterSection v-model="sortOrder" />
      <ProductTable 
        :products="paginatedProducts" 
        :selectAll="selectAll" 
        @toggle-all="toggleAll"
        @open-delete-modal="openDeleteModal"
        @open-edit-modal="openEditModal"
      />
      <PaginationSection 
        :totalPages="totalPages" 
        v-model:currentPage="currentPage" 
      />
      <DeleteModal 
        ref="deleteModal"
        :productToDelete="productToDelete"
        @confirm-delete="confirmDelete"
        @close-modal="closeDeleteModal"
      />
      <EditModal 
        ref="editModal"
        :productToEdit="productToEdit"
        @save-edit="saveEdit"
        @close-modal="closeEditModal"
      />
    </div>
  </template>
  
  <script>
  import SearchBar from './SearchBar.vue';
  import FilterSection from './FilterSection.vue';
  import ProductTable from './ProductTable.vue';
  import PaginationSection from './PaginationSection.vue';
  import DeleteModal from './DeleteModal.vue';
  import EditModal from './EditModal.vue';
  
  export default {
    components: {
      SearchBar,
      FilterSection,
      ProductTable,
      PaginationSection,
      DeleteModal,
      EditModal
    },
    data() {
      return {
        searchQuery: '',
        sortOrder: 'newest',
        selectAll: false,
        currentPage: 1,
        itemsPerPage: 10,
        productToDelete: null,
        productToEdit: null,
        products: [
          {
            id: 1,
            name: "منتج 1",
            creationDate: "2024-09-29",
            category: "فئة 1",
            price: 100,
            stock: 50,
            sku: "SKU001",
          },
          {
            id: 2,
            name: "منتج 2",
            creationDate: "2024-09-28",
            category: "فئة 2",
            price: 150,
            stock: 30,
            sku: "SKU002",
          },
        ]
      };
    },
    computed: {
      filteredProducts() {
        return this.products.filter(product => 
          product.name.includes(this.searchQuery) ||
          product.category.includes(this.searchQuery) ||
          product.sku.includes(this.searchQuery)
        );
      },
      sortedProducts() {
        return [...this.filteredProducts].sort((a, b) => {
          if (this.sortOrder === 'newest') {
            return new Date(b.creationDate) - new Date(a.creationDate);
          } else {
            return new Date(a.creationDate) - new Date(b.creationDate);
          }
        });
      },
      paginatedProducts() {
        const start = (this.currentPage - 1) * this.itemsPerPage;
        const end = start + this.itemsPerPage;
        return this.sortedProducts.slice(start, end);
      },
      totalPages() {
        return Math.ceil(this.sortedProducts.length / this.itemsPerPage);
      }
    },
    methods: {
      toggleAll() {
        this.selectAll = !this.selectAll;
      },
      openDeleteModal(product) {
        this.productToDelete = product;
        this.$refs.deleteModal.showModal();
      },
      closeDeleteModal() {
        this.$refs.deleteModal.close();
        this.productToDelete = null;
      },
      confirmDelete() {
        this.products = this.products.filter(product => product.id !== this.productToDelete.id);
        this.closeDeleteModal();
      },
      openEditModal(product) {
        this.productToEdit = { ...product };
        this.$refs.editModal.showModal();
      },
      closeEditModal() {
        this.$refs.editModal.close();
        this.productToEdit = null;
      },
      saveEdit(editedProduct) {
        const index = this.products.findIndex(product => product.id === editedProduct.id);
        if (index !== -1) {
          this.products[index] = editedProduct;
        }
        this.closeEditModal();
      }
    }
  };
  </script> 