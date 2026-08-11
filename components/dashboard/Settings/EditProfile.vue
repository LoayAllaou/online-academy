<!-- components/EditProfile.vue -->

<template>
  <div v-if="activeTab === 1" class="tabs__pane -tab-item-1 is-active">
    <div class="row y-gap-20 x-gap-20 items-center">
      <label
        class="col-auto"
        for="imageUpload"
        :style="
          previewImage
            ? {}
            : { backgroundColor: '#f2f3f4', width: '100px', height: '100px' }
        "
      >
        <nuxt-img
          v-if="previewImage"
          width="100"
          height="100"
          class="size-100"
          :src="previewImage"
          :alt="previewImage ? 'image' : ''"
        />
      </label>

      <div class="col-auto">
        <div class="text-16 fw-500 text-dark-1">Your avatar</div>
        <div class="text-14 lh-1 mt-10">
          PNG or JPG no bigger than 800px wide and tall.
        </div>

        <div class="d-flex x-gap-10 y-gap-10 flex-wrap pt-15">
          <div>
            <div
              class="d-flex justify-center items-center size-40 rounded-8 bg-light-3"
            >
              <label
                style="cursor: pointer"
                for="imageUpload1"
                class="icon-cloud text-16"
              ></label>
              <input
                required
                id="imageUpload1"
                type="file"
                accept="image/*"
                @change="handleImageChange"
                style="display: none"
              />
            </div>
          </div>
          <div>
            <div
              style="cursor: pointer"
              @click="handleImageRemove"
              class="d-flex justify-center items-center size-40 rounded-8 bg-light-3"
            >
              <div class="icon-bin text-16"></div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="border-top-light pt-30 mt-30">
      <form @submit.prevent="handleSubmit" class="contact-form row y-gap-30">
        <div class="col-md-6">
          <label class="text-16 lh-1 fw-500 text-dark-1 mb-10"
            >First Name</label
          >
          <input
  required
  type="text"
  placeholder="First Name"
  v-model="firstName"
/>
        </div>

        <div class="col-md-6">
          <label class="text-16 lh-1 fw-500 text-dark-1 mb-10">Last Name</label>
          <input required type="text" placeholder="Last Name" v-model="lastName"/>
        </div>

        <div class="col-md-6">
          <label class="text-16 lh-1 fw-500 text-dark-1 mb-10">Phone</label>
          <input required type="text" placeholder="Phone" v-model="phone"/>
        </div>

        <div class="col-md-6">
          <label class="text-16 lh-1 fw-500 text-dark-1 mb-10">Birthday</label>
          <input type="text" placeholder="Birthday" v-model="birthday"/>
        </div>

        <!-- <div class="col-md-6">
          <label class="text-16 lh-1 fw-500 text-dark-1 mb-10"
            >Address Line 1</label
          >
          <input required type="text" placeholder="Address Line 1" />
        </div> -->

        <!-- <div class="col-md-6">
          <label class="text-16 lh-1 fw-500 text-dark-1 mb-10"
            >Address Line 2</label
          >
          <input required type="text" placeholder="Address Line 2" />
        </div> -->
<!-- 
        <div class="col-md-6">
          <label class="text-16 lh-1 fw-500 text-dark-1 mb-10">State</label>
          <input required type="text" placeholder="State" />
        </div> -->

        <div class="col-md-6">
          <label class="text-16 lh-1 fw-500 text-dark-1 mb-10">Country</label>
          <input required type="text" placeholder="Country" v-model="country"/>
        </div>

        <!-- <div class="col-12">
          <label class="text-16 lh-1 fw-500 text-dark-1 mb-10"
            >Personal info</label
          >
          <textarea required placeholder="Text..." rows="7"></textarea>
        </div> -->

        <div class="col-12">
          <button class="button -md -purple-1 text-white">
            Update Profile
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { onMounted } from "vue";
const props = defineProps(["activeTab"]);
const previewImage = ref("/assets/img/dashboard/edit/1.png");

import { useUserStore } from '@/stores/userStore'
const userStore = useUserStore();

const userInfo = ref(null);
const firstName = ref("");
const lastName = ref("");
const phone = ref("");
const birthday = ref("");
const country = ref("");

onMounted(async () => {
  const data = await userStore.userInfo(); // wait for the Promise
  userInfo.value = data;
  console.log("User Info:", userInfo.value);
  
  firstName.value = userInfo.value?.fullName?.split(" ")[0] || "";
  lastName.value = userInfo.value?.fullName?.split(" ")[1] || "";
  phone.value = userInfo.value?.phone || "";
  birthday.value = userInfo.value?.birthday || "";
  country.value = userInfo.value?.country || "";
});

const handleImageChange = (event) => {
  const file = event.target.files[0];

  if (file) {
    const reader = new FileReader();

    reader.onloadend = () => {
      previewImage.value = reader.result;
    };

    reader.readAsDataURL(file);
  }
};

const handleImageRemove = () => {
  document.getElementById("imageUpload1").value = "";
  previewImage.value = "";
};

const handleImageUpload = () => {
  document.getElementById("imageUpload1").click();
};

const handleSubmit = async () => {
  var result = await userStore.updateUserInfo({
    fullName: `${firstName.value} ${lastName.value}`,
    phone: phone.value,
    birthday: birthday.value ? new Date(birthday.value) : null,
    country: country.value,
  });

  if (result) {
    alert("Profile updated successfully!");
    //Call userStore
    await userStore.userInfo();

    // Implement form submission logic
  }

};
</script>
