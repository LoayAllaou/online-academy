<template>
  <footer class="footer -type-4 bg-dark-2">
    <div class="container">
      <div class="row y-gap-30 justify-between pt-60">
        <div class="col-lg-7 col-md-6">
          <div class="text-17 fw-500 text-white uppercase mb-25">
            GET IN TOUCH
          </div>
          <form
            @submit.prevent="handleSubmit"
            class="form-single-field -base mt-15"
          >
            <input
              required
              class="py-20 px-30 bg-dark-6 rounded-200 text-white"
              type="text"
              placeholder="Your Email"
            />
            <button class="button -white rounded-full" type="submit">
              <i class="icon-arrow-right text-24 text-dark-1"></i>
            </button>
          </form>
        </div>

        <div class="col-xl-4 col-lg-5 col-md-6">
          <div class="footer-header__logo">
            <nuxt-img
              width="140"
              height="50"
              src="/assets/img/footer/footer-logo.svg"
              alt="logo"
            />
          </div>

          <div class="d-flex justify-between mt-30">
            <div class="">
              <div class="text-white opac-70">Toll Free Customer Care</div>
              <div class="text-18 lh-1 fw-500 text-white mt-5">
                +(1) 123 456 7890
              </div>
            </div>
            <div class="">
              <div class="text-white opac-70">Need live support?</div>
              <div class="text-18 lh-1 fw-500 text-white mt-5">
                hi@educrat.comv
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="row y-gap-30 justify-between pt-60 pb-60">
        <div class="col-lg-7 col-md-6">
          <div class="row y-gap-30">
            <FooterLinksTwo
              :allClasses="'text-17 fw-500 text-white uppercase mb-25'"
            />
          </div>
        </div>

        <div class="col-xl-4 col-lg-5 col-md-6">
          <div class="">
            <div class="text-17 uppercase text-white fw-500">
              Take your learning with you
            </div>

            <div class="d-flex mt-15">
              <div
                class="d-flex items-center rounded-8 px-25 py-10 footer-bg-color"
              >
                <div class="icon-apple text-white text-24"></div>
                <div class="text-white ml-20">
                  <div class="text-13 lh-12">Download on the</div>
                  <div class="text-15 fw-500 lh-12 mt-3">Apple Store</div>
                </div>
              </div>

              <div
                class="d-flex items-center rounded-8 px-25 py-10 footer-bg-color ml-10"
              >
                <div class="icon-play-market text-white text-24"></div>
                <div class="text-white ml-20">
                  <div class="text-13 lh-12">Get in on</div>
                  <div class="text-15 fw-500 lh-12 mt-3">Google Play</div>
                </div>
              </div>
            </div>
          </div>

          <div class="footer-header-socials mt-60">
            <div class="text-17 uppercase text-white fw-500">
              Follow us on social media
            </div>
            <div class="footer-header-socials__list d-flex items-center mt-15">
              <Socials
                :componentsClass="'size-40 d-flex justify-center items-center text-white'"
              />
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
import Links from "../component/Links";
import Socials from "@/components/common/Socials";
import FooterLinksTwo from "../component/FooterLinksTwo";

const handleSubmit = (e) => {
  e.preventDefault();
};
</script>
