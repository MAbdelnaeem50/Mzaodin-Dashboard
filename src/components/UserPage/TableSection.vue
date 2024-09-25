<template>
    <div dir="rtl" class="">
        <SearchBar v-model="searchQuery" />
        <FilterSection v-model="sortOrder" />
        <UserTable 
            :users="paginatedUsers" 
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
            :userToDelete="userToDelete"
            @confirm-delete="confirmDelete"
            @close-modal="closeDeleteModal"
        />
        <EditModal 
            ref="editModal"
            :userToEdit="userToEdit"
            @save-edit="saveEdit"
            @close-modal="closeEditModal"
        />
    </div>
</template>

<script>
import SearchBar from './SearchBar.vue';
import FilterSection from './FilterSection.vue';
import UserTable from './UserTable.vue';
import PaginationSection from './PaginationSection.vue';
import DeleteModal from './DeleteModal.vue';
import EditModal from './EditModal.vue';

export default {
    components: {
        SearchBar,
        FilterSection,
        UserTable,
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
            userToDelete: null,
            userToEdit: null,
            users: [
                {
                    id: 1,
                    name: "خالد محمد",
                    creationDate: "2024-09-29",
                    street: "الرياض",
                    district: "الراشدي",
                    city: "السعودية",
                    email: "khaledmohamed@gmail.com",
                    phone: "966625151484",
                    customer: "khalud",
                },
                {
                    id: 1,
                    name: "مصطفي محمد",
                    creationDate: "2024-09-29",
                    street: "الرياض",
                    district: "الراشدي",
                    city: "السعودية",
                    email: "khaledmohamed@gmail.com",
                    phone: "966625151484",
                    customer: "khalud",
                },
            ]
        };
    },
    computed: {
        filteredUsers() {
            return this.users.filter(user => 
                user.name.includes(this.searchQuery) ||
                user.email.includes(this.searchQuery) ||
                user.phone.includes(this.searchQuery)
            );
        },
        sortedUsers() {
            return [...this.filteredUsers].sort((a, b) => {
                if (this.sortOrder === 'newest') {
                    return new Date(b.creationDate) - new Date(a.creationDate);
                } else {
                    return new Date(a.creationDate) - new Date(b.creationDate);
                }
            });
        },
        paginatedUsers() {
            const start = (this.currentPage - 1) * this.itemsPerPage;
            const end = start + this.itemsPerPage;
            return this.sortedUsers.slice(start, end);
        },
        totalPages() {
            return Math.ceil(this.sortedUsers.length / this.itemsPerPage);
        }
    },
    methods: {
        toggleAll() {
            this.selectAll = !this.selectAll;
        },
        openDeleteModal(user) {
            this.userToDelete = user;
            this.$refs.deleteModal.showModal();
        },
        closeDeleteModal() {
            this.$refs.deleteModal.close();
            this.userToDelete = null;
        },
        confirmDelete() {
            this.users = this.users.filter(user => user.id !== this.userToDelete.id);
            this.closeDeleteModal();
        },
        openEditModal(user) {
            this.userToEdit = { ...user };
            this.$refs.editModal.showModal();
        },
        closeEditModal() {
            this.$refs.editModal.close();
            this.userToEdit = null;
        },
        saveEdit(editedUser) {
            const index = this.users.findIndex(user => user.id === editedUser.id);
            if (index !== -1) {
                this.users[index] = editedUser;
            }
            this.closeEditModal();
        }
    }
};
</script>

<style></style>
