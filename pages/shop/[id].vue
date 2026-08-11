<template>
  <div class="main-content">
    <Header />
    <div className="content-wrapper js-content-wrapper overflow-hidden">
      <PageLinks />

      <ProductDetails :id="id" />
      <RelatedProducts />

      <FooterOne />
    </div>
  </div>
</template>

<script setup>
useSeoMeta({
  title:
    "Shop || Educrat - Professional LMS Online Education Course NuxtJS Template",
  description:
    "Elevate your e-learning content with Educrat, the most impressive LMS template for online courses, education and LMS platforms.",
});
import PageLinks from "@/components/common/PageLinks";
import FooterOne from "@/components/layout/footers/FooterOne";
import Header from "@/components/layout/headers/Header";
import ProductDetails from "@/components/shop/ProductDetails";
import RelatedProducts from "@/components/shop/RelatedProducts";
const route = useRoute();
const id = route.params.id;
</script>

<style lang="scss" scoped></style>
