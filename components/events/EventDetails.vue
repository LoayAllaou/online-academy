<template>
  <section class="page-header -type-2">
    <div class="page-header__bg">
      <div
        class="bg-image js-lazy"
        :style="{ backgroundImage: `url(${data.imgSrc})` }"
      ></div>
    </div>

    <div class="container">
      <div class="page-header__content">
        <div class="row">
          <div class="col-xl-5 col-lg-6">
            <div class="page-header__info d-flex items-center">
              <div class="d-flex items-center text-white mr-15">
                <div class="icon icon-calendar-2"></div>
                <div class="text-14 ml-8">{{ data.date }}</div>
              </div>

              <div class="d-flex items-center text-white mr-15">
                <div class="icon icon-location"></div>
                <div class="text-14 ml-8">{{ data.location }}</div>
              </div>
            </div>

            <div>
              <h1 class="page-header__title text-white mt-20">
                {{ data.desc }}
              </h1>
            </div>

            <div>
              <div class="d-flex x-gap-50 pt-12">
                <div class="text-white">
                  <div class="text-40 lh-12 fw-700">20</div>
                  <div class="text-15">Days</div>
                </div>

                <div class="text-white">
                  <div class="text-40 lh-12 fw-700">32</div>
                  <div class="text-15">Hours</div>
                </div>

                <div class="text-white">
                  <div class="text-40 lh-12 fw-700">57</div>
                  <div class="text-15">Minutes</div>
                </div>

                <div class="text-white">
                  <div class="text-40 lh-12 fw-700">13</div>
                  <div class="text-15">Seconds</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="pt-50 layout-pb-lg">
    <div class="container">
      <div class="row y-gap-50">
        <div class="col-xl-8 col-lg-8 lg:order-2">
          <h4 class="text-20">About The Event</h4>
          <p class="text-light-1 mt-30">
            Phasellus enim magna, varius et commodo ut, ultricies vitae velit.
            Ut nulla tellus, eleifend euismod pellentesque vel, sagittis vel
            justo. In libero urna, venenatis sit amet ornare non, suscipit nec
            risus. Sed consequat justo non mauris pretium at tempor justo
            sodales. Quisque tincidunt laoreet malesuada. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur.
            <br />
            <br />
            This course is aimed at people interested in UI/UX Design. We’ll
            start from the very beginning and work all the way through, step by
            step. If you already have some UI/UX Design experience but want to
            get up to speed using Adobe XD then this course is perfect for you
            too!
            <br />
            <br />
            First, we will go over the differences between UX and UI Design. We
            will look at what our brief for this real-world project is, then we
            will learn about low-fidelity wireframes and how to make use of
            existing UI design kits.
          </p>
          <button class="button underline text-purple-1 mt-30">
            Show More
          </button>

          <div class="mt-60">
            <h4 class="text-20 mb-30">What you'll learn</h4>
            <div class="row x-gap-100 justfiy-between">
              <div class="col-md-6">
                <div class="y-gap-20">
                  <div
                    v-for="(elm, i) in learnList.slice(0, 6)"
                    :key="i"
                    class="d-flex items-center"
                  >
                    <div
                      class="d-flex justify-center items-center border-light rounded-full size-20 mr-10"
                    >
                      <i class="icon-check text-6"></i>
                    </div>
                    <p>{{ elm }}</p>
                  </div>
                </div>
              </div>

              <div class="col-md-6">
                <div class="y-gap-20">
                  <div
                    v-for="(elm, i) in learnList.slice(6)"
                    :key="i"
                    class="d-flex items-center"
                  >
                    <div
                      class="d-flex justify-center items-center border-light rounded-full size-20 mr-10"
                    >
                      <i class="icon-check text-6"></i>
                    </div>
                    <p>{{ elm }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="mt-60">
            <h4 class="text-20">Event Content</h4>
            <ul class="ul-list y-gap-15 pt-30">
              <li v-for="(elm, i) in eventContent" :key="i">{{ elm }}</li>
            </ul>
          </div>

          <div class="mt-60">
            <h4 class="text-20 mb-30">Our Speakers</h4>
            <div class="row y-gap-30">
              <div
                v-for="(elm, i) in instractorsNine.slice(0, 4)"
                :key="i"
                class="col-lg-3 col-md-6"
              >
                <div class="text-center">
                  <nuxt-img
                    width="180"
                    height="180"
                    :src="elm.image"
                    alt="image"
                  />
                  <h5 class="text-17 fw-500 mt-20">
                    <nuxt-link
                      :to="`/instructors/${elm.id}`"
                      class="linkCustom"
                    >
                      {{ elm.name }}
                    </nuxt-link>
                  </h5>
                  <p>{{ elm.role }}</p>
                </div>
              </div>
            </div>
          </div>

          <div class="blogPost -comments mt-60">
            <div class="blogPost__content">
              <h2 class="text-20 fw-500">Reviews</h2>

              <ul class="comments__list mt-30">
                <li class="comments__item">
                  <div class="comments__item-inner md:direction-column">
                    <div class="comments__img mr-20">
                      <div
                        class="bg-image rounded-full js-lazy"
                        :style="{
                          backgroundImage: 'url(/assets/img/avatars/1.png)',
                        }"
                      ></div>
                    </div>

                    <div class="comments__body md:mt-15">
                      <div class="comments__header">
                        <h4 class="text-17 fw-500 lh-15">
                          Ali Tufan
                          <span class="text-13 text-light-1 fw-400">
                            3 Days ago
                          </span>
                        </h4>

                        <div class="stars"></div>
                      </div>

                      <h5 class="text-15 fw-500 mt-15">The best LMS Design</h5>
                      <div class="comments__text mt-10">
                        <p>
                          This course is a very applicable. Professor Ng
                          explains precisely each algorithm and even tries to
                          give an intuition for mathematical and statistic
                          concepts behind each algorithm. Thank you very much.
                        </p>
                      </div>

                      <div class="comments__helpful mt-20">
                        <span class="text-13 text-purple-1">
                          Was this review helpful?
                        </span>
                        <button class="button text-13 -sm -purple-1 text-white">
                          Yes
                        </button>
                        <button
                          class="button text-13 -sm -light-7 text-purple-1"
                        >
                          No
                        </button>
                      </div>
                    </div>
                  </div>
                </li>

                <li class="comments__item">
                  <div class="comments__item-inner md:direction-column">
                    <div class="comments__img mr-20">
                      <div
                        class="bg-image rounded-full js-lazy"
                        :style="{
                          backgroundImage: 'url(/assets/img/avatars/1.png)',
                        }"
                      ></div>
                    </div>

                    <div class="comments__body md:mt-15">
                      <div class="comments__header">
                        <h4 class="text-17 fw-500 lh-15">
                          Ali Tufan
                          <span class="text-13 text-light-1 fw-400">
                            3 Days ago
                          </span>
                        </h4>

                        <div class="stars"></div>
                      </div>

                      <h5 class="text-15 fw-500 mt-15">The best LMS Design</h5>
                      <div class="comments__text mt-10">
                        <p>
                          This course is a very applicable. Professor Ng
                          explains precisely each algorithm and even tries to
                          give an intuition for mathematical and statistic
                          concepts behind each algorithm. Thank you very much.
                        </p>
                      </div>

                      <div class="comments__helpful mt-20">
                        <span class="text-13 text-purple-1">
                          Was this review helpful?
                        </span>
                        <button class="button text-13 -sm -purple-1 text-white">
                          Yes
                        </button>
                        <button
                          class="button text-13 -sm -light-7 text-purple-1"
                        >
                          No
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div class="respondForm mt-60">
            <h3 class="text-20 fw-500">Write a Review</h3>

            <div class="mt-30">
              <h4 class="text-16 fw-500">What is it like to Course?</h4>
              <div class="d-flex x-gap-10 pt-10">
                <Star textSize="text-14" :star="5" />
              </div>
            </div>

            <form
              class="contact-form respondForm__form row y-gap-30 pt-30"
              @submit.prevent="handleSubmit"
            >
              <div class="col-12">
                <label class="text-16 lh-1 fw-500 text-dark-1 mb-10">
                  Review Title
                </label>
                <input
                  required
                  type="text"
                  name="title"
                  placeholder="Great Courses"
                />
              </div>
              <div class="col-12">
                <label class="text-16 lh-1 fw-500 text-dark-1 mb-10">
                  Review Content
                </label>
                <textarea
                  required
                  name="comment"
                  placeholder="Message"
                  rows="8"
                ></textarea>
              </div>
              <nuxt-link to="/login" class="col-12">
                <button
                  type="submit"
                  name="submit"
                  id="submit"
                  class="button -md -purple-1 text-white"
                >
                  Submit Review
                </button>
              </nuxt-link>
            </form>
          </div>
        </div>

        <div class="col-xl-4 col-lg-4 lg:order-1">
          <div
            class="event-info bg-white rounded-8 px-30 py-30 border-light shadow-1"
          >
            <div class="d-flex justify-between items-center">
              <div class="text-24 lh-1 fw-500 text-dark-1">
                ${{ data.price.toFixed(2) }}
              </div>

              <div class="d-flex items-center">
                <div class="text-light-1 line-through mr-10">
                  ${{ data.preDiscount.toFixed(2) }}
                </div>
                <div
                  class="text-14 fw-500 text-dark-1 px-15 py-5 bg-green-1 rounded-4"
                >
                  91% off
                </div>
              </div>
            </div>

            <div class="d-flex justify-between mt-30 pb-10">
              <div class="d-flex items-center text-dark-1">
                <div class="icon-location"></div>
                <div class="ml-10">Total Slot</div>
              </div>
              <div>587</div>
            </div>

            <div class="d-flex justify-between pt-10 border-top-light">
              <div class="d-flex items-center text-dark-1">
                <div class="icon-location"></div>
                <div class="ml-10">Booked Slot</div>
              </div>
              <div>987</div>
            </div>

            <div
              @click="() => addEventToCart(data.id)"
              class="button -md col-12 -purple-1 text-white mt-30 cursor"
            >
              {{ isAddedToCartEvents(data.id) ? "Booked" : "Book Now" }}
            </div>

            <div class="d-flex justify-center pt-25">
              <Socials
                componentsClass="d-flex justify-center items-center size-50 rounded-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { events, learnList, eventContent } from "@/data/events";
import Socials from "../common/Socials";
import { instractorsNine } from "@/data/instractors";
import Star from "../common/Star";
import { addEventToCart, isAddedToCartEvents } from "../../composables/states";
const props = defineProps(["id"]);

const data = ref(events[0]);

onMounted(() => {
  data.value = events.filter((elm) => elm.id == props.id)[0] || events[0];
  console.log(events.filter((elm) => elm.id == props.id)[0]);
});

const handleSubmit = () => {};
</script>

<style lang="scss" scoped></style>
