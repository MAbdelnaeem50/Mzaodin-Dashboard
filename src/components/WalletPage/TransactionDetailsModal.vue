<template>
    <dialog ref="detailsModal" class="modal">
      <div class="modal-box">
        <h3 class="text-lg font-bold">تفاصيل المعاملة</h3>
        <div v-if="transactionDetails" class="py-4">
          <p><strong>نوع المعاملة:</strong> {{ transactionDetails.type }}</p>
          <p><strong>المبلغ:</strong> {{ transactionDetails.amount }}</p>
          <p><strong>التاريخ:</strong> {{ transactionDetails.date }}</p>
          <p><strong>الحالة:</strong> {{ transactionDetails.status }}</p>
          <p><strong>المستخدم:</strong> {{ transactionDetails.user }}</p>
        </div>
        <div class="modal-action">
          <button @click="$emit('close-modal')" class="btn">إغلاق</button>
        </div>
      </div>
    </dialog>
  </template>
  
  <script>
  export default {
    props: ['transactionDetails'],
    emits: ['close-modal'],
    methods: {
      showModal() {
        this.$refs.detailsModal.showModal();
      },
      close() {
        this.$refs.detailsModal.close();
      }
    }
  }
  </script>