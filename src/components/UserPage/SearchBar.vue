<template>
    <div>
        <div class="relative">
            <input
                :value="modelValue"
                @input="$emit('update:modelValue', $event.target.value)"
                type="text"
                placeholder="بحث"
                class="bg-white border-2 border-gray-200 rounded-3xl py-3 pl-10 w-full px-5"
            />
            <i class="fa-solid fa-search absolute left-5 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
        </div>
    </div>
</template>

<script>
export default {
    props: ['modelValue'],
    emits: ['update:modelValue']
}
</script>