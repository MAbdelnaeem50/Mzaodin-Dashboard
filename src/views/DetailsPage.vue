<template>
  <div dir="rtl" class="bg-white min-h-screen">
    <AsideBar/>
    <NavBar/>
    <div class="p-6  lg:w-3/4 w-full  px-4 absolute lg:left-20">
      <h1 class="text-right mb-10 text-2xl font-bold text-blue-500">صفحة عرض المنتج</h1>

      <ProductHeader :product="product" />
      <ProductImageCarousel :images="product.images" />
      <ProductDetails :product="product" />
      <ProductDescription :description="product.description" />
      <ProductPricing :prices="product.prices" />
    </div>
  </div>
</template>

<script>
import AsideBar from '@/components/AsideBar.vue';
import NavBar from '@/components/NavBar.vue';
import ProductHeader from '@/components/DetailsProduct/ProductHeader.vue';
import ProductImageCarousel from '@/components/DetailsProduct/ProductImageCarousel.vue';
import ProductDetails from '@/components/DetailsProduct/ProductDetails.vue';
import ProductDescription from '@/components/DetailsProduct/ProductDescription.vue';
import ProductPricing from '@/components/DetailsProduct/ProductPricing.vue';

export default {
  components: {
    AsideBar,
    NavBar,
    ProductHeader,
    ProductImageCarousel,
    ProductDetails,
    ProductDescription,
    ProductPricing,
  },
  data() {
    return {
      product: {
        name: 'موبايل ايفون 13 برو',
        sku: 'ds6f4sd6f4',
        weight: 100,
        images: [
        'https://kaleidoscope.scene7.com/is/image/OttoUK/600w/Apple-iPhone-14-Pro-Max-128GB-Silver~33H494FRSP.jpg',
        'https://www.tmt.my/data/editor/sc-product/18751/iPhone_16_Pro_Max_Desert_Titanium_PDP_Image_Position_1a_Desert_Titanium_Colour__MY-EN.jpg',
        'https://kingstore.link/upload/iblock/7aa/ax3byk9e24t9ed4oq3yd52rm0857nbla.jpg',
        ],
        description: 'هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة. لقد تم توليد هذا النص من مولد النص العربي، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التي يولدها التطبيق.إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد',
        prices: {
          'سعر المنتج التقديري': 100,
          'سعر تكلفة المنتج': 100,
          'سعر فتح المزاد': 100,
          'مبلغ التسجيل المطلوب': 100
        }
      }
    }
  }
}
</script>