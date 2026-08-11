<template>
  <section class="masthead -type-1 js-mouse-move-container">
    <div class="masthead__bg">
      <!-- <nuxt-img
        :width="1920"
        height="820"
        src="/assets/img/home-1/hero/bg.png"
        alt="image"
      /> -->
    </div>

    <div class="container">
      <div class="row y-gap-30 justify-between items-end">
        <div class="col-xl-6 col-lg-6 col-sm-10">
          <div
            class="masthead__content"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <h1 class="masthead__title">
              {{ $t("Hero Content.title") }}
              <span class="text-blue-1 underline">{{ $t("Hero Content.text_underline") }}</span>
            </h1>
            <p
              data-aos="fade-up"
              data-aos-duration="100"
              class="masthead__text"
            >
              {{ $t("Hero Content.info_hero") }}
            </p>
            <div
              data-aos="fade-up"
              data-aos-duration="200"
              class="masthead__buttons row x-gap-10 y-gap-10"
            >
              <div class="col-12 col-sm-auto">
                <nuxt-link
                  data-barba
                  to="/signup"
                  class="button -md -blue-1 text-white"
                >
                  {{ $t("Buttons.Join Button") }}
                </nuxt-link>
              </div>
              <div class="col-12 col-sm-auto">
                <nuxt-link
                  data-barba
                  to="/courses-list-1"
                  class="button -md -outline-blue-1 text-blue-1"
                >
                  {{ $t("Buttons.Find Courses Button") }}
                </nuxt-link>
              </div>
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="300"
              class="masthead-info row y-gap-15 sm:d-none"
            >
              <!-- <div
                v-for="(item, i) in masthead_info"
                :key="i"
                class="masthead-info__item d-flex items-center text-white"
              >
                <div class="masthead-info__icon mr-10">
                  <nuxt-img
                    width="24"
                    height="24"
                    :src="item.icon"
                    alt="icon"
                  />
                </div>
                <div class="masthead-info__title lh-1">{{ item.text }}</div>
              </div> -->
            </div>
          </div>
        </div>

        <div class="col-xl-6 col-lg-6" data-aos="fade-up" data-aos-delay="700">
          <div class="masthead-image d-flex justify-content-center align-items-center h-100">
                  <nuxt-img
      src="/assets/img/ScaleUp - Academy/ScaLE-UP-Academy-1.png"
      alt="Hero Image"
    />
                <!-- <nuxt-img
                class="js-mouse-move"
                data-move="40"
                style="object-fit: cover"
                src="/assets/img/ScaleUp - Academy/ScaLE-UP-Academy-1.png"
                alt="image"
              /> -->
            <!-- <div class="masthead-image__el1">
              <nuxt-img
                class="js-mouse-move"
                data-move="40"
                width="300"
                height="400"
                style="object-fit: cover"
                src="/assets/img/masthead/1.png"
                alt="image"
              />
              <div
                data-move="30"
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
              <nuxt-img
                class="js-mouse-move"
                data-move="70"
                width="200"
                height="200"
                src="/assets/img/masthead/2.png"
                style="object-fit: cover"
                alt="image"
              />
              <div
                data-move="60"
                class="lg:d-none img-el -w-260 px-20 py-20 d-flex items-center bg-white rounded-8 js-mouse-move"
              >
                <nuxt-img
                  width="70"
                  height="70"
                  src="/assets/img/masthead/4.png"
                  alt="icon"
                />
                <div class="ml-20">
                  <div class="text-dark-1 text-16 fw-500 lh-1">Ali Tufan</div>
                  <div class="mt-3">UX/UI Designer</div>
                  <div class="d-flex x-gap-5 mt-3">
                    <div v-for="(start, index) in starts" :key="index">
                      <div class="start-icon"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="masthead-image__el3">
              <nuxt-img
                class="js-mouse-move"
                data-move="40"
                width="255"
                height="250"
                src="/assets/img/masthead/3.png"
                style="object-fit: cover"
                alt="image"
              />
              <div
                data-move="30"
                class="shadow-4 img-el -w-260 px-30 py-20 d-flex items-center bg-white rounded-8 js-mouse-move"
              >
                <div class="img-el__side">
                  <div
                    class="size-50 d-flex justify-center items-center bg-purple-1 rounded-full"
                  >
                    <nuxt-img
                      style="object-fit: cover"
                      src="/assets/img/masthead/2.svg"
                      width="20"
                      height="27"
                      alt="icon"
                    />
                  </div>
                </div>
                <div class="">
                  <div class="text-purple-1 text-16 fw-500 lh-1">Congrats!</div>
                  <div class="mt-3">Your Admission Completed</div>
                </div>
              </div>
            </div> -->
          </div>
        </div>
      </div>
    </div>

    <!-- animated shape start -->
    <shape-rendering />

    <!-- animated shape end -->
  </section>
</template>

<script setup>
import gsap from "gsap";
import { ref, onMounted } from "vue";
import ShapeRendering from "~/svg/ShapeRendering.vue";

const masthead_icon_1 = "/assets/img/masthead/icons/1.svg";
const masthead_icon_2 = "/assets/img/masthead/icons/2.svg";
const masthead_icon_3 = "/assets/img/masthead/icons/3.svg";

const masthead_info = [
  { id: 1, icon: masthead_icon_1, text: "Over 12 million students" },
  { id: 2, icon: masthead_icon_2, text: "More than 60,000 courses" },
  { id: 3, icon: masthead_icon_3, text: "Learn anything online" },
];

const hero_content = {
  title: "Learn New Skills Online with",
  text_underline: "ScaleUp Academy",
  info_hero: `Build skills with courses, certificates, and degrees online from
    world-class universities and companies.`,
  starts: [
    "icon-star text-yellow-1 text-11",
    "icon-star text-yellow-1 text-11",
    "icon-star text-yellow-1 text-11",
    "icon-star text-yellow-1 text-11",
    "icon-star text-yellow-1 text-11",
  ],
};

const { title, text_underline, info_hero, starts } = hero_content;

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
