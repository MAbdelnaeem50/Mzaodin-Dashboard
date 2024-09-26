<template>
    <div dir="rtl" class="bg-white min-h-screen">
      <NavBar/>
      <AsideBar/>
   
      <div class="p-6 lg:w-3/4 w-full px-4 absolute lg:left-20">
        <h1 class="text-right mb-10 text-2xl font-bold text-blue-500">صفحة المزاد القادم</h1>
        <HeaderSection/>
        <ProductImageCarousel :images="product.images" />
        <CardsSection/>
        <AuctionDescription/>
        <InformationSection/>
        <MoreInformations/>
  
        <!-- Tab Section -->
        <div class="mt-10 mb-6">
          <nav class="flex">
            <button
              @click="activeTab = 'SubscriberPayments'"
              :class="{'bg-blue-500 text-white px-4 py-1 rounded-3xl mx-2': activeTab === 'SubscriberPayments'}"
              class="border-2 border-gray-200 text-blue-500 px-4 py-1 rounded-3xl mx-2">مدفوعات المشتركين </button>
            <button
              @click="activeTab = 'BiddingRecord'"
              :class="{'bg-blue-500 text-white px-4 py-1 rounded-3xl mx-2': activeTab === 'BiddingRecord'}"
              class="border-2 border-gray-200 text-blue-500 px-4 py-1 rounded-3xl mx-2">سجل المزايدات </button>
            <button
              @click="activeTab = 'WinnerInfo'"
              :class="{'bg-blue-500 text-white px-4 py-1 rounded-3xl mx-2': activeTab === 'WinnerInfo'}"
              class="border-2 border-gray-200 text-blue-500 px-4 py-1 rounded-3xl mx-2"> معلومات الفائز</button>
          </nav>
        </div>
  
        <!-- Tab Content -->
        <div class="pb-10">
          <component :is="currentTabComponent" />
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import NavBar from '@/components/NavBar.vue';
  import AsideBar from '@/components/AsideBar.vue';
  import HeaderSection from '@/components/IncomingAuction/HeaderSection.vue';
  import ProductImageCarousel from '@/components/DetailsProduct/ProductImageCarousel.vue';
  import CardsSection from '@/components/IncomingAuction/CardsSection.vue';
  import AuctionDescription from '@/components/IncomingAuction/AuctionDescription.vue';
  import InformationSection from '@/components/IncomingAuction/InformationSection.vue';
  import MoreInformations from '@/components/IncomingAuction/MoreInformations.vue';
  import SubscriberPayments from '@/components/IncomingAuction/SubscriberPayments.vue';
  import BiddingRecord from '@/components/IncomingAuction/BiddingRecord.vue';
  import WinnerInfo from '@/components/IncomingAuction/WinnerInfo.vue';
  
  export default {
    components: {
      NavBar,
      AsideBar,
      HeaderSection,
      ProductImageCarousel,
      CardsSection,
      AuctionDescription,
      InformationSection,
      MoreInformations,
      SubscriberPayments,
      BiddingRecord,
      WinnerInfo
    },
    data() {
      return {
        activeTab: 'SubscriberPayments',
        product: {
          images: [
            'https://kaleidoscope.scene7.com/is/image/OttoUK/600w/Apple-iPhone-14-Pro-Max-128GB-Silver~33H494FRSP.jpg',
            'https://www.tmt.my/data/editor/sc-product/18751/iPhone_16_Pro_Max_Desert_Titanium_PDP_Image_Position_1a_Desert_Titanium_Colour__MY-EN.jpg',
            'https://kingstore.link/upload/iblock/7aa/ax3byk9e24t9ed4oq3yd52rm0857nbla.jpg',
          ],
        }
      };
    },
    computed: {
      currentTabComponent() {
        switch (this.activeTab) {
          case 'SubscriberPayments':
            return SubscriberPayments;
          case 'BiddingRecord':
            return BiddingRecord;
          case 'WinnerInfo':
            return WinnerInfo;
          default:
            return SubscriberPayments;
        }
      }
    }
  }
  </script>