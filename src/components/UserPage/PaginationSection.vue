<template>
    <div class="mt-6 flex justify-center space-x-4">
        <button
            v-for="page in totalPages"
            :key="page"
            @click="$emit('update:currentPage', page)"
            :class="['px-3 py-1 rounded-lg', currentPage === page ? 'bg-blue-500 text-white' : 'bg-gray-200']"
        >
            {{ page }}
        </button>
    </div>
</template>

<script>
export default {
    props: ['totalPages', 'currentPage'],
    emits: ['update:currentPage']
}
</script>
