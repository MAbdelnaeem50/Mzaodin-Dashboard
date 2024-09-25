<template>
    <dialog ref="deleteModal" class="modal">
        <div class="modal-box">
            <h3 class="text-lg font-bold">تأكيد الحذف</h3>
            <p class="py-4">هل أنت متأكد أنك تريد حذف هذا المستخدم؟</p>
            <div class="modal-action px-4 mr-4">
                <button @click="$emit('confirm-delete')" class="btn w-1/2 btn-error rounded-3xl bg-red-600 ml-2 text-white">حذف</button>
                <button @click="$emit('close-modal')" class="btn w-1/2 rounded-3xl text-blue-500">إلغاء</button>
            </div>
        </div>
    </dialog>
</template>

<script>
export default {
    props: ['userToDelete'],
    emits: ['confirm-delete', 'close-modal'],
    methods: {
        showModal() {
            this.$refs.deleteModal.showModal();
        },
        close() {
            this.$refs.deleteModal.close();
        }
    }
}
</script>