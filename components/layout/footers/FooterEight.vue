<template>
  <footer class="footer -type-5 pt-60 bg-dark-2">
    <div class="container">
      <div class="row y-gap-30 pb-60">
        <div class="col-xl-4 col-lg-5 col-md-6">
          <div class="footer-header__logo">
            <nuxt-img
              width="140"
              height="50"
              src="/assets/img/footer/footer-logo.svg"
              alt="logo"
            />
          </div>

          <div class="mt-30">
            <div class="text-17 text-white">Call Us</div>
            <div class="text-17 lh-1 fw-500 text-white mt-5">800 388 80 90</div>
          </div>

          <div class="mt-30 pr-20">
            <div class="lh-17 text-white">
              329 Queensberry Street, North Melbourne VIC 3051, Australia.
              hi@educrat.com
            </div>
          </div>

          <div class="footer-header-socials mt-30">
            <div
              class="footer-header-socials__list d-flex items-center text-white"
            >
              <Socials
                componentsClass="size-40 d-flex justify-center items-center"
              />
            </div>
          </div>
        </div>

        <FooterLinksFour
          allClasses="text-17 fw-500 text-white uppercase mb-25"
        />
      </div>

      <div class="py-30 border-top-light-15">
        <div class="row justify-between items-center y-gap-20">
          <div class="col-auto">
            <div class="d-flex items-center h-100 text-white">
              ©{{ new Date().getFullYear() }} Educrat. All Right Reserved.
            </div>
          </div>

          <div class="col-auto">
            <div class="d-flex x-gap-20 y-gap-20 items-center flex-wrap">
              <div>
                <div class="d-flex x-gap-15 text-white">
                  <Links />
                </div>
              </div>

              <div>
                <a
                  href="#"
                  class="button px-30 h-50 -dark-6 rounded-200 text-white"
                >
                  <i class="icon-worldwide text-20 mr-15"></i>
                  <span class="text-15">English</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import Socials from "@/components/common/Socials";

import Links from "../component/Links";
import FooterLinksFour from "../component/FooterLinksFour";
</script>

<style lang="scss" scoped></style>
