<template>
  <section class="masthead -type-3 bg-light-6 js-mouse-move-container">
    <div class="container">
      <div class="row y-gap-30 items-center justify-center">
        <div
          class="col-xl-7 col-lg-11 relative z-5"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          <div class="masthead__content pl-32 lg:pl-0">
            <h1 class="masthead__title">
              Find Your Preferred
              <br />
              <span class="text-purple-1">Courses</span> & Improve Your Skills
            </h1>

            <p class="masthead__text text-17 text-dark-1 mt-25">
              Build skills with courses, certificates, and degrees online from
              <br class="lg:d-none" />
              world-class universities and companies.
            </p>

            <div class="masthead-search mt-30">
              <div class="masthead-search__form">
                <form @submit.prevent="handleSubmit">
                  <input
                    required
                    type="text"
                    placeholder="What do you want to learn today?"
                  />

                  <button
                    class="button -purple-1 text-white"
                    @click="() => $router.push('/courses-list-2')"
                  >
                    <i class="icon icon-search"></i>
                  </button>
                </form>
              </div>

              <div class="masthead-search__searches mt-40">
                Trending Search:
                <nuxt-link to="/courses/6">Development</nuxt-link>,
                <nuxt-link to="/courses-single-2/3">Business</nuxt-link>,
                <nuxt-link to="/courses-single-6/3">Design</nuxt-link>,
                <a href="#">Marketing</a>
              </div>
            </div>
          </div>
        </div>

        <div
          class="col-xl-5 col-lg-7 relative z-2"
          data-aos="fade-up"
          data-aos-delay="750"
        >
          <div class="masthead-image">
            <div class="masthead-image__img1">
              <div class="masthead-image__shape xl:d-none">
                <nuxt-img
                  width="859"
                  height="859"
                  src="/assets/img/home-4/masthead/shape.svg"
                  alt="image"
                />
              </div>
              <nuxt-img
                width="580"
                height="648"
                data-move="20"
                class="js-mouse-move"
                src="/assets/img/home-4/masthead/1.png"
                alt="image"
              />
            </div>

            <div class="masthead-image__el1">
              <div
                data-move="40"
                class="lg:d-none img-el -w-250 px-20 py-20 d-flex items-center bg-white rounded-8 js-mouse-move"
              >
                <div
                  class="size-50 d-flex justify-center items-center bg-red-2 rounded-full"
                >
                  <nuxt-img
                    width="24"
                    height="23"
                    src="/assets/img/masthead/1.svg"
                    alt="icon"
                  />
                </div>
                <div class="ml-20">
                  <div class="text-orange-1 text-16 fw-500 lh-1">3.000 +</div>
                  <div class="mt-3">Free Courses</div>
                </div>
              </div>
            </div>

            <div class="masthead-image__el2">
              <div
                data-move="40"
                class="shadow-4 img-el -w-260 px-40 py-20 d-flex items-center bg-white rounded-8 js-mouse-move"
              >
                <div class="img-el__side">
                  <div
                    class="size-50 d-flex justify-center items-center bg-dark-1 rounded-full"
                  >
                    <nuxt-img
                      width="20"
                      height="27"
                      src="/assets/img/masthead/2.svg"
                      alt="icon"
                    />
                  </div>
                </div>
                <div class="">
                  <div class="text-purple-1 text-16 fw-500 lh-1">Congrats!</div>
                  <div class="mt-3">Your Admission Completed</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useRouter } from "vue-router";
import gsap from "gsap";
import { ref, onMounted } from "vue";

const router = useRouter();
const handleSubmit = (e) => {
  e.preventDefault();
};

onMounted(() => {
  const parallaxIt = () => {
    const target = document.querySelectorAll(".js-mouse-move-container");

    target.forEach((container) => {
      const targets = container.querySelectorAll(".js-mouse-move");

      targets.forEach((el) => {
        const movement = el.getAttribute("data-move");

        document.addEventListener("mousemove", (e) => {
          const relX = e.pageX - container.offsetLeft;
          const relY = e.pageY - container.offsetTop;

          gsap.to(el, {
            x:
              ((relX - container.offsetWidth / 2) / container.offsetWidth) *
              Number(movement),
            y:
              ((relY - container.offsetHeight / 2) / container.offsetHeight) *
              Number(movement),
            duration: 0.2,
          });
        });
      });
    });
  };

  parallaxIt();
});
</script>

<style scoped>
/* Add your component-specific styles here */
</style>
