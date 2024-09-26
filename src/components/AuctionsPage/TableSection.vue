<template>
    <div dir="rtl" class="">
      <SearchBar v-model="searchQuery" />
      <FilterSection v-model="sortOrder" />
      <AuctionTable 
        :auctions="paginatedAuctions" 
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
        :auctionToDelete="auctionToDelete"
        @confirm-delete="confirmDelete"
        @close-modal="closeDeleteModal"
      />
      <EditModal 
        ref="editModal"
        :auctionToEdit="auctionToEdit"
        @save-edit="saveEdit"
        @close-modal="closeEditModal"
      />
    </div>
  </template>
  
  <script>
  import SearchBar from './SearchBar.vue';
  import FilterSection from './FilterSection.vue';
  import AuctionTable from './AuctionTable.vue';
  import PaginationSection from './PaginationSection.vue';
  import DeleteModal from './DeleteModal.vue';
  import EditModal from './EditModal.vue';
  
  export default {
    components: {
      SearchBar,
      FilterSection,
      AuctionTable,
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
        auctionToDelete: null,
        auctionToEdit: null,
        auctions: [
          {
            id: 1,
            name: " ايفون  16 برو",
            startDate: "2024-03-01",
            endDate: "2024-03-15",
            startingPrice: 50000,
            currentBid: 55000,
            status: "قادم",
          },
          {
            id: 2,
            name: "  ايفون 16 برو ماكس",
            startDate: "2024-03-05",
            endDate: "2024-03-20",
            category: "فن",
            startingPrice: 10000,
            currentBid: 12500,
            status: "جاري",
          },
          {
            id: 3,
            name: "  ايفون 15",
            startDate: "2024-02-28",
            endDate: "2024-03-10",
            category: "مجوهرات",
            startingPrice: 5000,
            currentBid: 6200,
            status: "منتهي",
          },
        ]
      };
    },
    computed: {
      filteredAuctions() {
        return this.auctions.filter(auction => 
          auction.name.includes(this.searchQuery) ||
          auction.category.includes(this.searchQuery) ||
          auction.status.includes(this.searchQuery)
        );
      },
      sortedAuctions() {
        return [...this.filteredAuctions].sort((a, b) => {
          if (this.sortOrder === 'newest') {
            return new Date(b.startDate) - new Date(a.startDate);
          } else {
            return new Date(a.startDate) - new Date(b.startDate);
          }
        });
      },
      paginatedAuctions() {
        const start = (this.currentPage - 1) * this.itemsPerPage;
        const end = start + this.itemsPerPage;
        return this.sortedAuctions.slice(start, end);
      },
      totalPages() {
        return Math.ceil(this.sortedAuctions.length / this.itemsPerPage);
      }
    },
    methods: {
      toggleAll() {
        this.selectAll = !this.selectAll;
      },
      openDeleteModal(auction) {
        this.auctionToDelete = auction;
        this.$refs.deleteModal.showModal();
      },
      closeDeleteModal() {
        this.$refs.deleteModal.close();
        this.auctionToDelete = null;
      },
      confirmDelete() {
        this.auctions = this.auctions.filter(auction => auction.id !== this.auctionToDelete.id);
        this.closeDeleteModal();
      },
      openEditModal(auction) {
        this.auctionToEdit = { ...auction };
        this.$refs.editModal.showModal();
      },
      closeEditModal() {
        this.$refs.editModal.close();
        this.auctionToEdit = null;
      },
      saveEdit(editedAuction) {
        const index = this.auctions.findIndex(auction => auction.id === editedAuction.id);
        if (index !== -1) {
          this.auctions[index] = editedAuction;
        }
        this.closeEditModal();
      }
    }
  };
  </script>