<template>
    <div class="bg-white min-h-screen">
        <NavBar />
        <AsideBar />
        <div class="p-6  lg:w-3/4 w-full  px-4 absolute lg:left-20">
            <HeaderSection />
            <TableSection />
        </div>
    </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import AsideBar from "@/components/AsideBar.vue";
import HeaderSection from "@/components/UserPage/HeaderSection.vue";
import TableSection from "@/components/UserPage/TableSection.vue";
export default {
    name: "UsersPage",
    components: {
        AsideBar,
        NavBar,
        HeaderSection,
        TableSection,
    },
    data() {
        return {
            headers: [
                "الاسم",
                "تاریخ الانشاء",
                "الشارع",
                "الحي",
                "المدينة",
                "الاميل",
                "رقم الهاتف",
                "الزبون",
            ],
            data: [
                {
                    الاسم: "خالد محمد",
                    "تاریخ الانشاء": "2024-09-29",
                    الشارع: "الرياض",
                    الحي: "الراشدي",
                    المدينة: "السعوديةk",
                    الاميل: "khaledmohamed@gmail.com",
                    "رقم الهاتف": "966625151484",
                    الزبون: "khalud",
                },
            ],
        };
    },
};
</script>

<style></style>
