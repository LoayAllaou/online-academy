<template>
  <div class="main-content">
    <Header />
    <div class="content-wrapper js-content-wrapper overflow-hidden">
      <ContactOne />
      <Faq />

      <FooterOne />
    </div>
  </div>
</template>

<script setup>
useSeoMeta({
  title:
    "ScaleUp - Academy - Contact Us",
  description:
    "ScaleUp - Academy - Contact Us",
});
import Faq from "@/components/common/Faq";
import ContactOne from "@/components/contacts/ContactOne";

import FooterOne from "@/components/layout/footers/FooterOne";
import Header from "@/components/layout/headers/Header";
</script>

<style lang="scss" scoped></style>
