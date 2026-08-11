<template>
  <div id="reviews" class="pt-60 lg:pt-40">
    <div class="blogPost -comments">
      <div class="blogPost__content">
        <h2 class="text-20 fw-500">Student feedback</h2>
        <!-- ... (rest of the code) ... -->

        <h2 class="text-20 fw-500 mt-60 lg:mt-40">Reviews</h2>
        <ul class="comments__list mt-30">
          <li
            v-for="(review, index) in reviews.slice(0, 2)"
            :key="index"
            class="comments__item"
          >
            <div class="comments__item-inner md:direction-column">
              <div class="row x-gap-10 y-gap-10 pt-30">
                <div class="col-md-4">
                  <div
                    class="d-flex items-center justify-center flex-column py-50 text-center bg-light-6 rounded-8"
                  >
                    <div class="text-60 lh-11 text-dark-1 fw-500">4.8</div>
                    <div class="d-flex x-gap-5 mt-10">
                      <Star :star="5" textSize="text-11" />
                    </div>
                    <div class="mt-10">Course Rating</div>
                  </div>
                </div>

                <div class="col-md-8">
                  <div class="py-20 px-30 bg-light-6 rounded-8">
                    <div class="row y-gap-15">
                      <div class="col-12">
                        <div class="d-flex items-center">
                          <div class="progress-bar w-1/1 mr-15">
                            <div class="progress-bar__bg bg-light-12"></div>
                            <div
                              class="progress-bar__bar bg-purple-1 w-1/1"
                            ></div>
                          </div>
                          <div class="d-flex x-gap-5 pr-15">
                            <Star :star="5" />
                          </div>
                          <div class="text-dark-1">70%</div>
                        </div>
                      </div>

                      <div class="col-12">
                        <div class="d-flex items-center">
                          <div class="progress-bar w-1/1 mr-15">
                            <div class="progress-bar__bg bg-light-12"></div>
                            <div
                              class="progress-bar__bar bg-purple-1 w-1/2"
                            ></div>
                          </div>
                          <div class="d-flex x-gap-5 pr-15">
                            <Star :star="5" />
                          </div>
                          <div class="text-dark-1">15%</div>
                        </div>
                      </div>

                      <div class="col-12">
                        <div class="d-flex items-center">
                          <div class="progress-bar w-1/1 mr-15">
                            <div class="progress-bar__bg bg-light-12"></div>
                            <div
                              class="progress-bar__bar bg-purple-1 w-1/3"
                            ></div>
                          </div>
                          <div class="d-flex x-gap-5 pr-15">
                            <Star :star="5" />
                          </div>
                          <div class="text-dark-1">20%</div>
                        </div>
                      </div>

                      <div class="col-12">
                        <div class="d-flex items-center">
                          <div class="progress-bar w-1/1 mr-15">
                            <div class="progress-bar__bg bg-light-12"></div>
                            <div
                              class="progress-bar__bar bg-purple-1 w-1/5"
                            ></div>
                          </div>
                          <div class="d-flex x-gap-5 pr-15">
                            <Star :star="5" />
                          </div>
                          <div class="text-dark-1">3%</div>
                        </div>
                      </div>

                      <div class="col-12">
                        <div class="d-flex items-center">
                          <div class="progress-bar w-1/1 mr-15">
                            <div class="progress-bar__bg bg-light-12"></div>
                            <div
                              class="progress-bar__bar bg-purple-1 w-1/7"
                            ></div>
                          </div>
                          <div class="d-flex x-gap-5 pr-15">
                            <Star :star="5" />
                          </div>
                          <div class="text-dark-1">2%</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>

          <li class="comments__item">
            <div class="d-flex justify-center">
              <a href="#" class="text-purple-1 lh-12 underline fw-500">
                View All Reviews
              </a>
            </div>
          </li>
        </ul>
      </div>
    </div>

    <div class="respondForm pt-60">
      <h3 class="text-20 fw-500">Write a Review</h3>

      <div class="mt-30">
        <h4 class="text-16 fw-500">What is it like to Course?</h4>
        <div class="d-flex x-gap-10 pt-10">
          <Star :star="5" textSize="text-14" />
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
        <div class="col-12">
          <button
            type="submit"
            name="submit"
            id="submit"
            class="button -md -purple-1 text-white"
          >
            Submit Review
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { reviews } from "@/data/aboutcourses";
import Star from "@/components/common/Star.vue";

const handleSubmit = () => {
  // Your form submission logic here
};
</script>

<style scoped>
/* Add your component-specific styles here */
</style>
