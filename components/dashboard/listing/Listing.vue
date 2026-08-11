<!-- pages/listing.vue -->

<template>
  <div class="dashboard__main">
    <div class="dashboard__content bg-light-4">
      <div class="row pb-50 mb-10">
        <div class="col-auto">
          <h1 class="text-30 lh-12 fw-700">Create New Course</h1>
          <div class="mt-10">Lorem ipsum dolor sit amet, consectetur.</div>
        </div>
      </div>

      <div class="row y-gap-60">
        <div class="col-12">
          <div class="rounded-16 bg-white -dark-bg-dark-1 shadow-4 h-100">
            <div class="d-flex items-center py-20 px-30 border-bottom-light">
              <h2 class="text-17 lh-1 fw-500">Basic Information</h2>
            </div>

            <div class="py-30 px-30">
              <form
                class="contact-form row y-gap-30"
                action="#"
              >
              <!-- Course Image-->
              <div class="col-12">
                  <label class="text-16 lh-1 fw-500 text-dark-1 mb-10">
                    Course Image*
                  </label>
                  <!--Upload image file-->
                   <nuxt-img
                  v-if="previewImage"
                  :src="previewImage"
                  :alt="'image'"
                  width="735"
                  height="612"
                  class="w-1/1"
                  style="width: 250px; height: 200px; object-fit: contain"
                />

                  <input required type="file" accept="image/*" @change="handleImageChange" />
                </div>
                <div class="col-12">
                  <label class="text-16 lh-1 fw-500 text-dark-1 mb-10">
                    Course Title*
                  </label>

                  <input
                    required
                    type="text"
                    v-model="model.titleEn"
                    placeholder="Learn Figma - UI/UX Design Essential Training"
                  />
                </div>

                <div class="col-12">
                  <label class="text-16 lh-1 fw-500 text-dark-1 mb-10">
                    Course Title Arabic*
                  </label>

                  <input
                    required
                    type="text"
                    v-model="model.titleAr"
                    placeholder="تعلم فيجما - تدريب أساسي لتصميم واجهة المستخدم / تجربة المستخدم"
                  />
                </div>
                <div class="col-12">
                  <label class="text-16 lh-1 fw-500 text-dark-1 mb-10">
                    Course Description English*
                  </label>

                  <textarea
                    required
                    placeholder="Description"
                    rows="7"
                    v-model="model.descriptionEn"
                  ></textarea>
                </div>

                <div class="col-12">
                  <label class="text-16 lh-1 fw-500 text-dark-1 mb-10">
                    Course Description Arabic*
                  </label>

                  <textarea
                    required
                    placeholder="وصف الدورة"
                    rows="7"
                    v-model="model.descriptionAr"
                  ></textarea>
                </div>

                <!-- <div class="col-md-6">
                  <label class="text-16 lh-1 fw-500 text-dark-1 mb-10">
                    What will students learn in your course?*
                  </label>

                  <textarea
                    required
                    placeholder="Description"
                    rows="7"
                  ></textarea>
                </div> -->

                <!-- <div class="col-md-6">
                  <label class="text-16 lh-1 fw-500 text-dark-1 mb-10">
                    Requirements*
                  </label>

                  <textarea
                    required
                    placeholder="Description"
                    rows="7"
                  ></textarea>
                </div> -->
                <!--Choose Category as drop down-->
                <div class="col-md-6">
                  <label class="text-16 lh-1 fw-500 text-dark-1 mb-10">
                    Course Category*
                  </label>
                  <select required>
                    <option value="" disabled selected>Select Category</option>
                    <option value="design">Design</option>
                    <option value="development">Development</option>
                    <option value="marketing">Marketing</option>
                  </select>
                </div>

                <!--Choose Instructor as drop down-->
                <div class="col-md-6">
                  <label class="text-16 lh-1 fw-500 text-dark-1 mb-10">
                    Instructor*
                  </label>
                  <select required>
                    <option value="" disabled selected>Select Instructor</option>
                    <option value="instructor1">Instructor 1</option>
                    <option value="instructor2">Instructor 2</option>
                    <option value="instructor3">Instructor 3</option>
                  </select>
                </div>

                <!--Course Price-->
                <div class="col-md-12">
                  <label class="text-16 lh-1 fw-500 text-dark-1 mb-10">
                    Course Price ($)*
                  </label>

                  <input required type="number" 
                  placeholder="Enter Price" :min="0" v-model="model.price"/>
                </div>

                <!-- <div class="col-md-6">
                  <label class="text-16 lh-1 fw-500 text-dark-1 mb-10">
                    Course Level*
                  </label>

                  <input required type="text" placeholder="Select" />
                </div> -->

                <!-- <div class="col-md-6">
                  <label class="text-16 lh-1 fw-500 text-dark-1 mb-10">
                    Audio Language*
                  </label>

                  <input required type="text" placeholder="Select" />
                </div> -->

                <!-- <div class="col-md-6">
                  <label class="text-16 lh-1 fw-500 text-dark-1 mb-10">
                    Close Caption*
                  </label>

                  <input required type="text" placeholder="Select" />
                </div> -->

                <!-- <div class="col-md-6">
                  <label class="text-16 lh-1 fw-500 text-dark-1 mb-10">
                    Course Category*
                  </label>

                  <input required type="text" placeholder="Select" />
                </div> -->
                <!-- what about the lessons? i want to add it as list with add button so i can add name for each title-->
                <div class="col-md-12">
                  <label class="text-16 lh-1 fw-500 text-dark-1 mb-10">
                    Lessons*
                  </label>

                  <div class="d-flex items-center mb-10">
                    <input
                      v-model="newLesson.title"
                      type="text"
                      placeholder="Enter Lesson Title English"
                      class="mr-10"
                    />
                    <input
                      v-model="newLesson.arabicTitle"
                      type="text"
                      placeholder="Enter Lesson Title Arabic"
                      class="mr-10"
                    />
                    <button class="button -sm -purple-1 text-white" type="button" @click="addNewRow">
                      Add Lesson
                    </button>

                  </div>
                    <div v-if="showLessonValidationMessage">
                      <span class="text-red-1">Please fill in both fields</span>
                    </div>

                  <ul class="mt-10">
                    <li v-for="(lesson, index) in lessons" :key="index" class="mb-20">
                      <div class="d-flex items-center mb-10">
                        <span class="mr-10">{{ index + 1 }}. {{ lesson.titleEn || 'Untitled' }} / {{ lesson.titleAr || 'بدون عنوان' }}</span>
                        <button class="button -sm -red-1 text-white" type="button" @click="removeLesson(index)">
                          Remove
                        </button>
                      </div>
                        <div class="mt-10">
                        <h3 class="text-16 lh-1 fw-500 text-dark-1 mb-10">Videos</h3>
                        <div class="d-flex items-center mb-10">
                            <input
                            type="text"
                            v-model="lessons[index].videoTitle"
                            placeholder="Video Name"
                            class="mr-10"
                            />
                          <input
                            type="file"
                            accept="video/*"
                            @change="handleVideoUpload($event, index)"
                            class="mr-10"
                          />  
                          <button class="button -sm -green-1 text-white mt-10" type="button" @click="addVideoToLesson(index)">
                          Add Video
                        </button>
                        </div>
                     <div v-if="showVideoValidationMessage">
                      <span class="text-red-1">Please fill in both fields</span>
                    </div>
                        <div v-if="isUploadingVideo" class="loading-indicator">Uploading...</div>
                        <ul>
                          <li v-for="(video, videoIndex) in lesson.videos" :key="videoIndex" class="mb-10">
                          <div class="d-flex items-center">
                            <span class="mr-10">{{ videoIndex + 1 }}. {{ video.title }} {{ video.videoUrl ? '(Uploaded)' : '(Not Uploaded)' }}</span>

                            <button class="button -sm -red-1 text-white" type="button" @click="lesson.videos.splice(videoIndex, 1)">
                            Remove Video
                            </button>
                          </div>
                          </li>
                        </ul>

                        </div>
                    </li>
                  </ul>
                </div>
              </form>

              <div class="row y-gap-20 justify-between pt-15">
                <div class="col-auto">
                  <!-- <button
                    class="button -md -outline-purple-1 text-purple-1"
                    @click="prevStep"
                  >
                    Prev
                  </button> -->
                </div>

                <div class="col-auto">
                  <button
                    class="button -md -purple-1 text-white"
                    @click="handleSubmit"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- <div class="col-12">
          <div class="rounded-16 bg-white -dark-bg-dark-1 shadow-4 h-100">
            <div class="d-flex items-center py-20 px-30 border-bottom-light">
              <h2 class="text-17 lh-1 fw-500">Curriculum</h2>
            </div>

            <Curriculum />
          </div>
        </div>

        <Media /> -->
      </div>
    </div>

    <FooterNine />
  </div>
</template>

<script setup>
import FooterNine from "~/components/layout/footers/FooterNine.vue";
import Curriculum from "./Curriculum.vue";
import Media from "./Media.vue";
import { ref } from "vue";
import { useCourseStore } from "~/stores/courseStore";

const courseStore = useCourseStore();
//Add model that holds the form data
const model = ref({
  thumbnailUrl: '',
  titleEn: '',
  titleAr: '',
  descriptionEn: '',
  descriptionAr: '',
  categoryId: 4,
  instructorId: 3,
  price: 0,
  titles: [],
});

const handleSubmit = (e) => {
  model.value.titles = lessons.value;
  model.value.price = parseFloat(model.value.price);
  model.value.categoryId = 4;
  // Set instructorId based on selected instructor
  model.value.instructorId = 3;
  model.value.thumbnailUrl = "https://picsum.photos/451/316";
  console.log(model.value);
  courseStore.createCourse(model.value);
  // Prevent default form submission
  e.preventDefault();
  // Implement form submission logic
};

const prevStep = () => {
  // Implement the logic for previous step
};

const nextStep = () => {
  // Implement the logic for next step
};

const previewImage = ref(null);
const lessons = ref([]);
const addNewRow = () => {
  // add only if both fields are filled
  if (!newLesson.value.title || !newLesson.value.arabicTitle) {
    showLessonValidationMessage.value = true;
    return;
  }
  lessons.value.push({ titleEn: newLesson.value.title, titleAr: newLesson.value.arabicTitle });
  // Clear the input fields
  newLesson.value.title = '';
  newLesson.value.arabicTitle = '';
  showLessonValidationMessage.value = false;
};
const removeLesson = (index) => {
  lessons.value.splice(index, 1);
};

const handleImageChange = (event) => {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      previewImage.value = e.target.result;
      model.value.thumbnailUrl = e.target.result;
    };
    reader.readAsDataURL(file);
  }
};
const handleVideoUpload = (event, index) => {
  const file = event.target.files[0];
  isUploadingVideo.value = true;
  if (file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      videoItem.value.videoUrl = "https://localhost:7240/videos/course5/introducation.mp4" // e.target.result;
     
      isUploadingVideo.value = false;
    };
    reader.readAsDataURL(file);
  }
  console.log(lessons.value)
};
const newLesson = ref({ titleEn: '', titleAr: '' });

const addVideoToLesson = (index) => {
  videoItem.value.title = lessons.value[index].videoTitle;
  //validation
  if (!videoItem.value.title || !videoItem.value.videoUrl) {
    showVideoValidationMessage.value = true;
    return;
  }
  if (!lessons.value[index].videos) {
    lessons.value[index].videos = [];
  }
  lessons.value[index].videos.push({ title: videoItem.value.title, videoUrl: videoItem.value.videoUrl });
  // Clear videoItem after adding
  videoItem.value = { title: '', videoUrl: '' };
  showVideoValidationMessage.value = false;
  //clear videoTitle input
  lessons.value[index].videoTitle = '';
  // Reset file input after adding video
  const fileInputs = document.querySelectorAll('input[type="file"]');
  fileInputs.forEach(input => input.value = '');
};

const isUploadingVideo = ref(false);
const showLessonValidationMessage = ref(false);
const showVideoValidationMessage = ref(false);
const videoItem = ref({ title: '', videoUrl: '' });
</script>
