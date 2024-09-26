<template>
    <div dir="rtl" class="">
      <SearchBar v-model="searchQuery" />
      <FilterSection v-model="sortOrder" />
      <InvoiceTable
        :invoices="paginatedInvoices"
        :selectAll="selectAll"
        @toggle-all="toggleAll"
        @toggle-invoice="toggleInvoice"
        @open-delete-modal="openDeleteModal"
        @open-edit-modal="openEditModal"
      />
      <PaginationSection
        :totalPages="totalPages"
        :currentPage="currentPage"
        @update:currentPage="currentPage = $event"
      />
    </div>
  </template>
  
  <script>
  import SearchBar from '../WalletPage/SearchBar.vue';
  import FilterSection from '../WalletPage/FilterSection.vue';
  import InvoiceTable from './InvoiceTable.vue';
  import PaginationSection from '../WalletPage/PaginationSection.vue';
  
  export default {
    components: {
      SearchBar,
      FilterSection,
      InvoiceTable,
      PaginationSection,
    },
    data() {
      return {
        searchQuery: '',
        sortOrder: 'newest',
        selectAll: false,
        currentPage: 1,
        itemsPerPage: 10,
        invoices: [
          {
            id: 1,
            invoiceNumber: "INV-001",
            customerName: "أحمد محمد",
            date: "2024-09-29",
            amount: "1000 ر.س",
            status: "مدفوعة",
          },
          {
            id: 2,
            invoiceNumber: "INV-002",
            customerName: "فاطمة علي",
            date: "2024-09-28",
            amount: "1500 ر.س",
            status: "معلقة",
          },
        ],
      };
    },
    computed: {
      filteredInvoices() {
        return this.invoices.filter(invoice => 
          invoice.invoiceNumber.includes(this.searchQuery) ||
          invoice.customerName.includes(this.searchQuery) ||
          invoice.amount.includes(this.searchQuery)
        );
      },
      sortedInvoices() {
        return [...this.filteredInvoices].sort((a, b) => {
          if (this.sortOrder === 'newest') {
            return new Date(b.date) - new Date(a.date);
          } else {
            return new Date(a.date) - new Date(b.date);
          }
        });
      },
      paginatedInvoices() {
        const start = (this.currentPage - 1) * this.itemsPerPage;
        const end = start + this.itemsPerPage;
        return this.sortedInvoices.slice(start, end);
      },
      totalPages() {
        return Math.ceil(this.sortedInvoices.length / this.itemsPerPage);
      }
    },
    methods: {
      toggleAll() {
        this.selectAll = !this.selectAll;
      },
      toggleInvoice(id) {
        // Implement toggle logic for individual invoices
      },
      openDeleteModal(invoice) {
        // Implement delete modal logic
      },
      openEditModal(invoice) {
        // Implement edit modal logic
      },
    }
  };
  </script>