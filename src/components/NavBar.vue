<template>
    <nav dir="rtl" class=" p-4 w-full z-50">
        <div class="container mx-auto flex justify-between items-center">
            <div class="flex-1">
            </div>
            <div class="flex items-center space-x-4 space-x-reverse">
                <!-- Notification dropdown -->
                <div class="flex-none">
                    <div class="dropdown dropdown-end">
                        <div tabindex="0" role="button" class="btn btn-ghost btn-circle">
                            <i class="fa-regular fa-bell fa-lg"></i>
                        </div>
                        <div tabindex="0"
                            class="card card-compact dropdown-content bg-base-100 z-[1] mt-3 lg:w-96 w-64 shadow">
                            <div class="card-body">
                                <div class="flex justify-between px-4 py-2 items-center">
                                    <h2 class="text-lg font-semibold">الإشعارات</h2>
                                    <button class="text-blue-500 text-sm">الكل كمقروء</button>
                                </div>
                                <div class="divide-y divide-gray-200">
                                    <div class="flex justify-between items-center px-4 py-2 hover:bg-gray-100">
                                        <div>
                                            <p class="text-sm font-semibold text-gray-700">
                                                عنوان الاشعار
                                            </p>
                                            <p class="text-xs text-gray-500">تفاصيل الاشعار</p>
                                        </div>
                                        <div class="flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full">
                                            <i class="fa-solid fa-bell"></i>
                                        </div>
                                    </div>
                                </div>
                                <div class="text-center py-2">
                                    <button class="text-blue-500 text-sm">عرض الكل</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- User info -->

                <!-- Avatar dropdown -->
                <div class="dropdown dropdown-end">
                    <div tabindex="0" role="button" class="btn btn-ghost btn-circle avatar">
                        <div class="w-10 rounded-full">
                            <img alt="Tailwind CSS Navbar component"
                                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                        </div>
                    </div>
                    <ul tabindex="0"
                        class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 px-4 py-6 shadow">
                        <li>
                            <a class=""> <i class="fa-regular fa-user"></i>الملف الشخصي </a>
                        </li>
                        <router-link to="/settings">
                            <li>
                                <a><i class="fa-solid fa-gear"></i>الإعدادات</a>
                            </li>
                        </router-link>
                        <router-link to="/login">
                            <li>
                                <a><i class="fa-solid fa-right-from-bracket"></i>تسجيل الخروج</a>
                            </li>
                        </router-link>
                    </ul>
                </div>
                <span class="text-gray-700 hidden lg:inline">أحمد محمد</span>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    data() {
        return {
            isMenuOpen: false,
        };
    },
    methods: {
        toggleMenu() {
            this.isMenuOpen = !this.isMenuOpen;
        },
    },
};
</script>

