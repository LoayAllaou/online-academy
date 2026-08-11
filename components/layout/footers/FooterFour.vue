<template>
  <footer class="footer -type-1 -dark bg-light-9">
    <div class="container">
      <div class="footer-header border-bottom-dark">
        <div class="row y-gap-20 justify-between items-center">
          <div class="col-auto">
            <div class="footer-header__logo">
              <nuxt-img
                width="140"
                height="50"
                src="/assets/img/general/logo-dark.svg"
                alt="logo"
              />
            </div>
          </div>
          <div class="col-auto">
            <div class="footer-header-socials">
              <div class="footer-header-socials__title text-dark-1">
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
          <FooterLinks :allClasses="'text-17 fw-500 uppercase mb-25'" />

          <div class="col-xl-4 ol-md-4 col-sm-6">
            <div class="text-17 fw-500 uppercase mb-25">GET IN TOUCH</div>
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

      <div class="footer-footer border-top-dark">
        <div class="row justify-between y-gap-20">
          <div class="col-md-6">
            <div class="footer-footer__copyright">
              © {{ new Date().getFullYear() }} Educrat. All Right Reserved.
            </div>
          </div>

          <div class="col-auto">
            <div class="footer-footer__right">
              <div class="footer-footer__list">
                <Links />
              </div>

              <div class="ml-20">
                <a
                  href="#"
                  class="button -white px-30 py-20 rounded-200 text-black -light-4 -purple-3 text-purple-1"
                >
                  English
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

const handleSubmit = (e) => {
  e.preventDefault();
};
</script>
