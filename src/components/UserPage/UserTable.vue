<template>
    <div dir="rtl" class="overflow-x-auto bg-gray-50 border-2 border-gray-200 rounded-2xl py-8 px-2">
        <table class="table-auto w-full text-center border-collapse text-sm border-t border-gray-300">
            <thead>
                <tr>
                    <th class="border-b px-8 py-2">
                        <input type="checkbox" class="rounded" :checked="selectAll" @change="$emit('toggle-all')" />
                    </th>
                    <th class="border-b px-8 py-2">الاسم</th>
                    <th class="border-b px-8 py-2">تاریخ الانشاء</th>
                    <th class="border-b px-8 py-2">الشارع</th>
                    <th class="border-b px-8 py-2">الحي</th>
                    <th class="border-b px-8 py-2">المدينة</th>
                    <th class="border-b px-8 py-2">الاميل</th>
                    <th class="border-b px-8 py-2">رقم الهاتف</th>
                    <th class="border-b px-8 py-2">الزبون</th>
                    <th class="border-b px-8 py-2">الإجراءات</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="user in users" :key="user.id" class="border-b">
                    <td class="px-8 py-2">
                        <input type="checkbox" class="rounded" :checked="selectAll" @change="$emit('toggle-user', user.id)" />
                    </td>
                    <td class="px-8 py-2">{{ user.name }}</td>
                    <td class="px-8 py-2">{{ user.creationDate }}</td>
                    <td class="px-8 py-2">{{ user.street }}</td>
                    <td class="px-8 py-2">{{ user.district }}</td>
                    <td class="px-8 py-2">{{ user.city }}</td>
                    <td class="px-8 py-2">{{ user.email }}</td>
                    <td class="px-8 py-2">{{ user.phone }}</td>
                    <td class="px-8 py-2">{{ user.customer }}</td>
                    <td class="px-8 py-2">
                        <button @click="$emit('open-edit-modal', user)" class="btn btn-sm bg-white border-none shadow-none text-blue-600 p-1 ml-1"><i class="fa-solid fa-pen-to-square"></i></button>
                        <button @click="$emit('open-delete-modal', user)" class="btn btn-sm bg-white border-none shadow-none text-red-600 p-1 mr-1"><i class="fa-solid fa-trash"></i></button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    props: ['users', 'selectAll'],
    emits: ['toggle-all', 'toggle-user', 'open-delete-modal', 'open-edit-modal']
}
</script>