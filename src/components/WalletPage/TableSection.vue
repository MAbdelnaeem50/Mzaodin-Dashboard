<template>
    <div dir="rtl" class="">
      <SearchBar v-model="searchQuery" />
      <FilterSection v-model="sortOrder" />
        <!-- Tab Section -->
        <div class="mt-10 mb-6">
          <nav class="flex">
            <button
              @click="activeTab = 'SubscriberPayments'"
              :class="{'bg-blue-500 text-white px-4 py-1 rounded-3xl mx-2': activeTab === 'SubscriberPayments'}"
              class="border-2 border-gray-200 text-blue-500 px-4 py-1 rounded-3xl mx-2">مدفوعات الاشتراك </button>
            <button
              @click="activeTab = 'WinnersPayments'"
              :class="{'bg-blue-500 text-white px-4 py-1 rounded-3xl mx-2': activeTab === 'WinnersPayments'}"
              class="border-2 border-gray-200 text-blue-500 px-4 py-1 rounded-3xl mx-2">مدفوعات الفائزين </button>

          </nav>
        </div>

         <!-- Tab Content -->
         <div class="pb-10">
          <component :is="currentTabComponent" />
        </div>
    </div>
  </template>
  
  <script>
  import SearchBar from './SearchBar.vue';
  import FilterSection from './FilterSection.vue';
  import SubscriberPayments from './SubscriberPayments.vue';
  import WinnersPayments from './WinnersPayments.vue';
  import TransactionTable from './TransactionTable.vue';
  import PaginationSection from './PaginationSection.vue';
  import TransactionDetailsModal from './TransactionDetailsModal.vue';
  
  export default {
    components: {
      SearchBar,
      FilterSection,
      SubscriberPayments,
      WinnersPayments,
      TransactionTable,
      PaginationSection,
      TransactionDetailsModal
    },
    data() {
      return {
        searchQuery: '',
        sortOrder: 'newest',
        selectAll: false,
        currentPage: 1,
        itemsPerPage: 10,
        transactionDetails: null,
        transactions: [
          {
            id: 1,
            type: "إيداع",
            amount: "1000 ر.س",
            date: "2024-09-29",
            status: "مكتمل",
            user: "أحمد محمد",
          },
          {
            id: 2,
            type: "سحب",
            amount: "500 ر.س",
            date: "2024-09-28",
            status: "معلق",
            user: "فاطمة علي",
          },
        ],
        activeTab: 'SubscriberPayments' // Add this line
      };
    },
    computed: {
      currentTabComponent() {
        switch (this.activeTab) {
          case 'SubscriberPayments':
            return SubscriberPayments;
          case 'WinnersPayments':
            return WinnersPayments;
          default:
            return SubscriberPayments;
        }
      },
      filteredTransactions() {
        return this.transactions.filter(transaction => 
          transaction.type.includes(this.searchQuery) ||
          transaction.amount.includes(this.searchQuery) ||
          transaction.user.includes(this.searchQuery)
        );
      },
      sortedTransactions() {
        return [...this.filteredTransactions].sort((a, b) => {
          if (this.sortOrder === 'newest') {
            return new Date(b.date) - new Date(a.date);
          } else {
            return new Date(a.date) - new Date(b.date);
          }
        });
      },
      paginatedTransactions() {
        const start = (this.currentPage - 1) * this.itemsPerPage;
        const end = start + this.itemsPerPage;
        return this.sortedTransactions.slice(start, end);
      },
      totalPages() {
        return Math.ceil(this.sortedTransactions.length / this.itemsPerPage);
      }
    },
    methods: {
      toggleAll() {
        this.selectAll = !this.selectAll;
      },
      openDetailsModal(transaction) {
        this.transactionDetails = transaction;
        this.$refs.detailsModal.showModal();
      },
      closeDetailsModal() {
        this.$refs.detailsModal.close();
        this.transactionDetails = null;
      },
    }
  };
  </script>