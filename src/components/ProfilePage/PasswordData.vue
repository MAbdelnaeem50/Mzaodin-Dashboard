<template>

    <form @submit.prevent="updatePassword">
        <div class="grid gap-2 mb-6 md:grid-cols-2 grid-cols-1">
            <div class="mb-6 lg:col-span-2">
                <input type="password" id="password"
                class=" appearance-none  rounded-3xl w-full py-3 pl-3 pr-10 border-2 border-gray-200 text-gray-700 leading-tight text-right focus:outline-none focus:shadow-outline "
                placeholder="كلمة المرور القديمة" required />
            </div>
            <div class="mb-6">
                <input type="password" id="password"
                class=" appearance-none  rounded-3xl w-full py-3 pl-3 pr-10 border-2 border-gray-200 text-gray-700 leading-tight text-right focus:outline-none focus:shadow-outline "
                placeholder="كلمة المرور الجديدة" required />
            </div>
            <div class="mb-6">
                <input type="password" id="confirm_password"
                class=" appearance-none  rounded-3xl w-full py-3 pl-3 pr-10 border-2 border-gray-200 text-gray-700 leading-tight text-right focus:outline-none focus:shadow-outline "
                placeholder="تاكيد كلمة المرور الجديدة" required />
            </div>
        </div>
        <div class="flex justify-center items-center h-full">
            <div class="w-full max-w-md px-4">
                <button type="submit" class="w-full bg-blue-500 text-white py-2 rounded-3xl mt-4 hover:bg-blue-600 transition duration-300">
                    تعديل كلمة المرور
                </button>
            </div>
        </div>


    </form>

</template>

<script>
export default {
    data() {
        return {
            showModal: false,
        }
    },
    methods: {
        updatePassword() {
            // Add your password update logic here
            // If successful, show the modal
            this.showModal = true;
        },
        closeModal() {
            this.showModal = false;
        }
    }
}
</script>

<style></style>