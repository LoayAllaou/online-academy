<template>
  <footer class="footer -type-1 bg-dark-1 -green-links">
    <div class="container">
      <div class="footer-header">
        <div class="row y-gap-20 justify-between items-center">
          <div class="col-auto">
            <div class="footer-header__logo">
              <nuxt-img
                width="140"
                height="50"
                src="/assets/img/logo/ScaLE-UP-Academy-Logo.svg"
                alt="logo"
              />
            </div>
          </div>
          <div class="col-auto">
            <div class="footer-header-socials">
              <div class="footer-header-socials__title text-white">
                Follow us on social media
              </div>
              <div class="footer-header-socials__list">
                <Socials />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="footer-columns">
        <div class="row y-gap-30">
          <FooterLinks
            :allClasses="'text-17 fw-500 text-white uppercase mb-25'"
          />

          <div class="col-xl-4 col-lg-4 col-md-6">
            <div class="text-17 fw-500 text-white uppercase mb-25">
              GET IN TOUCH
            </div>
            <div class="footer-columns-form">
              <div>We don’t send spam so don’t worry.</div>
              <form @submit.prevent="handleSubmit">
                <div class="form-group">
                  <input required type="text" placeholder="Email..." />
                  <button type="submit">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div class="py-30 border-top-light-15">
        <div class="row justify-between items-center y-gap-20">
          <div class="col-auto">
            <div class="d-flex items-center h-100 text-white">
              © {{ new Date().getFullYear() }} Educrat. All Right Reserved.
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
import FooterLinks from "../component/FooterLinks";
import Links from "../component/Links";

const handleSubmit = (e) => {
  e.preventDefault();
};
</script>
