<template>
  <footer class="footer -type-4 bg-white border-top-light">
    <div class="container">
      <div class="row y-gap-30 justify-between pt-60">
        <div class="col-lg-7 col-md-6">
          <div class="text-17 fw-500 text-dark-1 uppercase mb-25">
            GET IN TOUCH
          </div>
          <form
            @submit.prevent="handleSubmit"
            class="form-single-field -base mt-15"
          >
            <input
              required
              class="py-20 px-30 bg-light-3 rounded-200 text-dark-1"
              type="text"
              placeholder="Your Email"
            />
            <button class="button -purple-1 rounded-full" type="submit">
              <i class="icon-arrow-right text-24 text-white"></i>
            </button>
          </form>
        </div>

        <div class="col-xl-4 col-lg-5 col-md-6">
          <div class="footer-header__logo">
            <nuxt-img
              width="140"
              height="50"
              src="/assets/img/general/logo-dark.svg"
              alt="logo"
            />
          </div>

          <div class="d-flex justify-between mt-30">
            <div class="">
              <div class="">Toll Free Customer Care</div>
              <div class="text-18 lh-1 fw-500 text-dark-1 mt-5">
                +(1) 123 456 7890
              </div>
            </div>
            <div class="">
              <div class="">Need live support?</div>
              <div class="text-18 lh-1 fw-500 text-dark-1 mt-5">
                hi@educrat.comv
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="row y-gap-30 justify-between pt-60 pb-60">
        <div class="col-lg-7 col-md-6">
          <div class="row y-gap-30">
            <FooterLinksThree
              :allClasses="'text-17 fw-500 text-dark-1 uppercase mb-25'"
              :parentClass="'col-lg-4 col-md-4'"
            />
          </div>
        </div>

        <div class="col-xl-4 col-lg-5 col-md-6">
          <div class="">
            <div class="text-17 uppercase text-whitedark-1 fw-500">
              Take your learning with you
            </div>
            <div class="d-flex mt-15">
              <a href="#">
                <nuxt-img
                  width="180"
                  height="60"
                  src="/assets/img/footer/apps-2/1.png"
                  alt="image"
                />
              </a>
              <a href="#" class="ml-10">
                <nuxt-img
                  width="180"
                  height="60"
                  src="/assets/img/footer/apps-2/2.png"
                  alt="image"
                />
              </a>
            </div>
          </div>

          <div class="footer-header-socials mt-60">
            <div class="text-17 uppercase text-dark-1 fw-500">
              Follow us on social media
            </div>
            <div class="footer-header-socials__list d-flex items-center mt-15">
              <Socials
                :componentsClass="'size-40 d-flex justify-center items-center'"
              />
            </div>
          </div>
        </div>
      </div>

      <div class="py-30 border-top-light-15">
        <div class="row justify-between items-center y-gap-20">
          <div class="col-auto">
            <div class="d-flex items-center h-100">
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

              <div class="">
                <a
                href="#"
                  class="button -md -light-3 px-15 rounded-200 -purple-3 text-purple-1"
                >
                  <i class="icon-worldwide mr-10"></i>English
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

import FooterLinksThree from "../component/FooterLinksThree";

const handleSubmit = (e) => {
  e.preventDefault();
};
</script>
