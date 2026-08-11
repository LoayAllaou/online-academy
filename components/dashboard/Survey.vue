<template>
  <div class="dashboard__main">
    <div class="dashboard__content bg-light-4">
      <div class="row pb-50 mb-10">
        <div class="col-auto">
          <h1 class="text-30 lh-12 fw-700">Survey</h1>
          <PageLinksTwo />
        </div>
      </div>

      <div class="row y-gap-30">
        <div class="col-12">
          <div class="rounded-16 bg-white -dark-bg-dark-1 shadow-4 h-100">
            <div class="d-flex items-center py-20 px-30 border-bottom-light">
              <h2 class="text-17 lh-1 fw-500">Page Head</h2>
            </div>

            <div class="py-30 px-30">
              <h4 class="text-24 lh-12 fw-500">Your views on this course</h4>
              <div class="mt-15">
                Mode: User's name will be logged and shown with answers
              </div>

              <div class="mt-50">
                <div class="row y-gap-20">
                  <div class="col-lg-4">
                    <div class="text-dark-1">How do you rate this course?</div>
                  </div>

                  <div class="col-auto">
                    <div
                      v-for="(option, index) in ratingOptions"
                      :key="index"
                      class="form-radio d-flex items-center mt-10"
                    >
                      <div class="radio">
                        <input type="radio" name="radio3" />
                        <div class="radio__mark">
                          <div class="radio__icon"></div>
                        </div>
                      </div>
                      <div class="ml-12">{{ option }}</div>
                    </div>
                  </div>
                </div>

                <div class="row y-gap-20 pt-40">
                  <div class="col-lg-4">
                    <div class="text-dark-1">
                      In one word, how would you describe the course to other
                      students?
                    </div>
                  </div>

                  <div class="col-auto">
                    <form @submit.prevent="handleSubmit" class="contact-form">
                      <div class="col-12">
                        <input
                          type="text"
                          v-model="description"
                          placeholder="Text"
                        />
                      </div>
                    </form>
                  </div>
                </div>

                <div class="row y-gap-20 pt-40">
                  <div class="col-lg-4">
                    <div class="text-dark-1">Did you use the mobile app?</div>
                  </div>

                  <div class="col-auto">
                    <div
                      v-for="(option, index) in mobileAppOptions"
                      :key="index"
                      class="form-radio d-flex items-center mt-10"
                    >
                      <div class="radio">
                        <input type="radio" name="radio2" />
                        <div class="radio__mark">
                          <div class="radio__icon"></div>
                        </div>
                      </div>
                      <div class="ml-12">{{ option }}</div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="d-flex x-gap-20 items-center pt-30">
                <div>
                  <a
                    @click="goToNextPage"
                    href="#"
                    class="button px-50 -dark-1 -dark-button-white h-50 text-white"
                  >
                    Next Page
                  </a>
                </div>
                <div>
                  <a
                    href="#"
                    class="button px-50 -outline-dark-1 h-50 text-dark-1"
                  >
                    Cancel
                  </a>
                </div>
              </div>

              <div class="d-flex justify-between items-center mt-40">
                <a href="#" class="button -icon -purple-3 h-50 text-purple-1">
                  Forum Netiquette
                  <i class="icon-arrow-top-right text-13 ml-10"></i>
                </a>

                <div
                  id="dd22button"
                  @click="toggleDropdown"
                  class="dropdown js-dropdown js-category-active"
                >
                  <div
                    class="dropdown__button d-flex items-center text-14 bg-white -dark-bg-dark-2 -dark-border-white-10 border-light rounded-8 px-20 py-10"
                    data-el-toggle=".js-category-toggle"
                    data-el-toggle-active=".js-category-active"
                  >
                    <span class="js-dropdown-title">Jump to...</span>
                    <i class="icon text-9 ml-40 icon-chevron-down"></i>
                  </div>

                  <div
                    id="dd22content"
                    class="toggle-element -dropdown -dark-bg-dark-2 -dark-border-white-10 js-click-dropdown js-category-toggle"
                  >
                    <div class="text-14 y-gap-15 js-dropdown-list">
                      <div>
                        <a href="#" class="d-block js-dropdown-link">
                          Animation
                        </a>
                      </div>

                      <div>
                        <a href="#" class="d-block js-dropdown-link">
                          Design
                        </a>
                      </div>

                      <div>
                        <a href="#" class="d-block js-dropdown-link">
                          Illustration
                        </a>
                      </div>

                      <div>
                        <a href="#" class="d-block js-dropdown-link">
                          Business
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <a href="#" class="button -icon -purple-3 h-50 text-purple-1">
                  Share Examples Of Digital
                  <i class="icon-arrow-top-right text-13 ml-10"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <FooterNine />
  </div>
</template>

<script setup>
import FooterNine from "../layout/footers/FooterNine";
import PageLinksTwo from "../common/PageLinksTwo";
const selectedRating = ref(null);
const description = ref("");
const usedMobileApp = ref(null);

const ratingOptions = ["Outstanding", "Good", "Satisfactory", "Poor"];
const mobileAppOptions = ["Yes", "No"];

const handleSubmit = () => {
  // Handle form submission
};

const goToNextPage = () => {
  // Add logic to navigate to the next page
};

const toggleDropdown = () => {
  document.getElementById("dd22button").classList.toggle("-is-dd-active");
  document.getElementById("dd22content").classList.toggle("-is-el-visible");
};
</script>

<style scoped>
/* Add your component-specific styles here */
</style>
