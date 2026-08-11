<!-- components/Media.vue -->

<template>
  <div class="col-12">
    <div class="rounded-16 bg-white -dark-bg-dark-1 shadow-4 h-100">
      <div class="d-flex items-center py-20 px-30 border-bottom-light">
        <h2 class="text-17 lh-1 fw-500">Media</h2>
      </div>

      <div class="py-30 px-30">
        <div class="row y-gap-50">
          <div class="col-12">
            <form
              @submit.prevent="handleSubmit"
              class="contact-form d-flex lg:flex-column"
            >
              <!-- First Media Upload Section -->
              <div
                class="relative shrink-0"
                :style="{
                  backgroundColor: previewImage ? '' : '#f2f3f4',
                  width: '250px',
                  height: '200px',
                }"
              >
                <nuxt-img
                  v-if="previewImage"
                  :src="previewImage"
                  :alt="'image'"
                  width="735"
                  height="612"
                  class="w-1/1"
                  style="width: 250px; height: 200px; object-fit: contain"
                />

                <div
                  class="absolute-full-center d-flex justify-end py-20 px-20"
                >
                  <span
                    style="cursor: pointer"
                    @click="() => clearPreview('imageUpload1')"
                    class="d-flex justify-center items-center bg-white size-40 rounded-8 shadow-1"
                  >
                    <i class="icon-bin text-16"></i>
                  </span>
                </div>
              </div>

              <div class="w-1/1 ml-30 lg:ml-0 lg:mt-20">
                <div class="form-upload col-12">
                  <label class="text-16 lh-1 fw-500 text-dark-1 mb-10"
                    >Course thumbnail*</label
                  >
                  <div class="form-upload__wrap">
                    <input type="text" name="name" placeholder="Cover-1.png" />
                    <button class="button -dark-3 text-white">
                      <label style="cursor: pointer" :for="'imageUpload1'">
                        Upload Files
                      </label>
                      <input
                        :id="'imageUpload1'"
                        type="file"
                        accept="image/*"
                        @change="handleImageChange"
                        style="display: none"
                      />
                    </button>
                  </div>
                </div>

                <p class="mt-10">
                  Upload your course image here. It must meet our course image
                  quality standards to be accepted. Important guidelines:
                  750x440 pixels; .jpg, .jpeg,. gif, or .png. no text on the
                  image.
                </p>
              </div>
            </form>
          </div>
          <!-- Second Media Upload Section -->
          <div class="col-12">
            <form
              @submit.prevent="handleSubmit"
              class="contact-form d-flex lg:flex-column"
            >
              <div
                class="relative shrink-0"
                :style="{
                  backgroundColor: previewVideo ? '' : '#f2f3f4',
                  width: '250px',
                  height: '200px',
                }"
              >
                <nuxt-img
                  v-if="previewVideo"
                  :src="previewVideo"
                  :alt="'image'"
                  width="735"
                  height="612"
                  class="w-1/1"
                  style="width: 250px; height: 200px; object-fit: contain"
                />

                <div
                  class="absolute-full-center d-flex justify-end py-20 px-20"
                >
                  <span
                    style="cursor: pointer"
                    @click="() => clearPreview('imageUpload2')"
                    class="d-flex justify-center items-center bg-white size-40 rounded-8 shadow-1"
                  >
                    <i class="icon-bin text-16"></i>
                  </span>
                </div>
              </div>

              <div class="w-1/1 ml-30 lg:ml-0 lg:mt-20">
                <div class="form-upload col-12">
                  <label class="text-16 lh-1 fw-500 text-dark-1 mb-10"
                    >Video URL*</label
                  >
                  <div class="form-upload__wrap">
                    <input type="text" name="name" placeholder="Video-1.mp3" />
                    <button class="button -dark-3 text-white">
                      <label style="cursor: pointer" :for="'imageUpload2'">
                        Upload Files
                      </label>
                      <input
                        :id="'imageUpload2'"
                        type="file"
                        accept="image/*"
                        @change="handleVideoChange"
                        style="display: none"
                      />
                    </button>
                  </div>
                </div>

                <p class="mt-10">
                  Enter a valid video URL. Students who watch a well-made promo
                  video are 5X more likely to enroll in your course.
                </p>
              </div>
            </form>
          </div>
        </div>

        <div class="row y-gap-20 justify-between pt-30">
          <div class="col-auto">
            <button class="button -md -outline-purple-1 text-purple-1">
              Prev
            </button>
          </div>

          <div class="col-auto">
            <button class="button -md -purple-1 text-white">Next</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { mediaUpload } from "@/data/dashboard";
const previewImage = ref(mediaUpload[0].imgSrc);
const previewVideo = ref(mediaUpload[1].imgSrc);

const handleImageChange = (event) => {
  event.preventDefault();
  const file = event.target.files[0];

  if (file) {
    const reader = new FileReader();

    reader.onloadend = () => {
      previewImage.value = reader.result;
    };

    reader.readAsDataURL(file);
  }
};

const handleVideoChange = (event) => {
  const file = event.target.files[0];

  if (file) {
    const reader = new FileReader();

    reader.onloadend = () => {
      previewVideo.value = reader.result;
    };

    reader.readAsDataURL(file);
  }
};

const clearPreview = (inputId) => {
  document.getElementById(inputId).value = "";
  if (inputId === "imageUpload1") {
    previewImage.value = "";
  } else if (inputId === "imageUpload2") {
    previewVideo.value = "";
  }
};

const handleSubmit = (e) => {
  e.preventDefault();
  // Implement form submission logic
};
</script>
