<template>
  <footer class="footer -type-5 pt-60">
    <div class="container">
      <div class="row y-gap-30 pb-60">
        <div class="col-xl-4 col-lg-5 col-md-6">
          <div class="footer-header__logo">
            <nuxt-img
              width="140"
              height="50"
              src="/assets/img/general/logo-dark.svg"
              alt="logo"
            />
          </div>

          <div class="mt-30">
            <div class="text-17 text-dark-1">Call Us</div>
            <div class="text-17 lh-1 fw-500 text-purple-1 mt-5">
              800 388 80 90
            </div>
          </div>

          <div class="mt-30 pr-20">
            <div class="lh-17">
              329 Queensberry Street, North Melbourne VIC 3051, Australia.
              hi@educrat.com
            </div>
          </div>

          <div class="footer-header-socials mt-30">
            <div class="footer-header-socials__list d-flex items-center">
              <Socials
                componentsClass="size-40 d-flex justify-center items-center"
              />
            </div>
          </div>
        </div>

        <FooterLinks
          :allClasses="'text-17 fw-500 text-dark-1 uppercase mb-25'"
        />
      </div>

      <div class="py-30 border-top-light">
        <div class="row justify-between items-center y-gap-20">
          <div class="col-auto">
            <div class="footer-footer__copyright d-flex items-center h-100">
              © {{ new Date().getFullYear() }} Educrat. All Right Reserved.
            </div>
          </div>

          <div class="col-auto">
            <div class="d-flex x-gap-20 y-gap-20 items-center flex-wrap">
              <div>
                <div class="d-flex x-gap-15">
                  <Links />
                </div>
              </div>

              <div>
                <a
                href="#"
                  class="button -md -light-4 px-20 -purple-3 text-purple-1"
                >
                  <i class="icon-worldwide mr-5"></i>English
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
import Links from "../component/Links";
import Socials from "@/components/common/Socials";
import FooterLinks from "../component/FooterLinks";
</script>
