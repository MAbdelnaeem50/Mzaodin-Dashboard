<template>

    <form @submit.prevent="submitForm">
        <div class="grid gap-6 mb-6 md:grid-cols-2">
            <div>
                <input type="text" 
                    class=" appearance-none  rounded-3xl w-full py-3 pl-3 pr-10 border-2 border-gray-200 text-gray-700 leading-tight text-right focus:outline-none focus:shadow-outline "
                    placeholder="اسم المستخدم" required />
            </div>
            <div>
                <input type="text"
                    class=" appearance-none  rounded-3xl w-full py-3 pl-3 pr-10 border-2 border-gray-200 text-gray-700 leading-tight text-right focus:outline-none focus:shadow-outline "
                    placeholder="الاسم الحقيقي" required />
            </div>
            <div>
                <input type="text" 
                    class=" appearance-none  rounded-3xl w-full py-3 pl-3 pr-10 border-2 border-gray-200 text-gray-700 leading-tight text-right focus:outline-none focus:shadow-outline "
                    placeholder="رقم الهاتف" required />
            </div>
            <div>
                <input type="email" 
                    class=" appearance-none  rounded-3xl w-full py-3 pl-3 pr-10 border-2 border-gray-200 text-gray-700 leading-tight text-right focus:outline-none focus:shadow-outline "
                    placeholder="البريد الإلكتروني" required />
            </div>
            <div>
                <input type="text"  
                    class=" appearance-none  rounded-3xl w-full py-3 pl-3 pr-10 border-2 border-gray-200 text-gray-700 leading-tight text-right focus:outline-none focus:shadow-outline "
                    placeholder="البلد" required />
            </div>
            <div>
                <input type="text"  
                    class=" appearance-none  rounded-3xl w-full py-3 pl-3 pr-10 border-2 border-gray-200 text-gray-700 leading-tight text-right focus:outline-none focus:shadow-outline "
                    placeholder="المدينة" required />
            </div>
            <div>
                <input type="text"  
                    class=" appearance-none  rounded-3xl w-full py-3 pl-3 pr-10 border-2 border-gray-200 text-gray-700 leading-tight text-right focus:outline-none focus:shadow-outline "
                    placeholder="الحي" required />
            </div>
            <div>
                <input type="text"  
                    class=" appearance-none  rounded-3xl w-full py-3 pl-3 pr-10 border-2 border-gray-200 text-gray-700 leading-tight text-right focus:outline-none focus:shadow-outline "
                    placeholder="الشارع" required />
            </div>
        </div>
        <div class="flex justify-center items-center h-full">
            <div class="w-full max-w-md px-4">
                <button type="submit" class="w-full bg-blue-500 text-white py-2 rounded-3xl mt-4 hover:bg-blue-600 transition duration-300">
                    تعديل البيانات
                </button>
            </div>
        </div>
    </form>



</template>

<script>
export default {
    data() {
        return {
        }
    },
    methods: {

    }
}
</script>

<style></style>