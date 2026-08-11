<template>
  <div>
    <section class="mt-90">
      <!-- <MapComponent /> -->
    </section>
    <section class="layout-pt-md layout-pb-lg">
      <div class="container">
        <div class="row y-gap-50 justify-between">
          <div class="col-lg-4">
            <h3 class="text-24 fw-500">Keep In Touch With Us.</h3>
            <p class="mt-25">
              Neque convallis a cras semper auctor. Libero id faucibus nisl
              tincidunt egetnvallis.
            </p>

            <div class="y-gap-30 pt-60 lg:pt-40">
              <div
                v-for="(elm, i) in contactData"
                :key="i"
                class="d-flex items-center"
              >
                <div
                  class="d-flex justify-center items-center size-60 rounded-full bg-light-7"
                >
                  <nuxt-img  width="30" height="30"  :src="elm.icon" alt="icon" />
                </div>
                <div class="ml-20">
                  {{
                    elm.address
                      ? `${elm.address
                          .split(" ")
                          .slice(0, 4)
                          .join(" ")} \n ${elm.address
                          .split(" ")
                          .slice(4, -1)
                          .join(" ")}`
                      : elm.email || elm.phoneNumber
                  }}
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-7">
            <h3 class="text-24 fw-500">Send a Message.</h3>
            <p class="mt-25">
              Neque convallis a cras semper auctor. Libero id faucibus nisl
              <br />
              tincidunt egetnvallis.
            </p>

            <form
              class="contact-form row y-gap-30 pt-60 lg:pt-40"
              @submit.prevent="handleSubmit"
            >
              <div class="col-md-6">
                <label class="text-16 lh-1 fw-500 text-dark-1 mb-10"
                  >Name</label
                >
                <input
                  v-model="formData.title"
                  required
                  type="text"
                  placeholder="Name..."
                />
              </div>
              <div class="col-md-6">
                <label class="text-16 lh-1 fw-500 text-dark-1 mb-10"
                  >Email Address</label
                >
                <input
                  v-model="formData.email"
                  required
                  type="email"
                  placeholder="Email..."
                />
              </div>
              <div class="col-12">
                <label class="text-16 lh-1 fw-500 text-dark-1 mb-10"
                  >Message...</label
                >
                <textarea
                  v-model="formData.comment"
                  required
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
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { contactData } from "@/data/contactLinks";
import MapComponent from "./Map";

const formData = ref({
  title: "",
  email: "",
  comment: "",
});

const handleSubmit = () => {
  // Handle form submission logic here
};
</script>
