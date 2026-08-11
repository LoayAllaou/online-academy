"use client"; import Link from "next/link"; import { useState } from "react";

<template>
  <div class="sidebar -base-sidebar">
    <div class="sidebar__inner">
      <div>
        <div class="text-16 lh-1 fw-500 text-dark-1 mb-30">General</div>
        <div>
          <div class="sidebar__item -is-active">
            <nuxt-link
            to="/about-1"
              class="-dark-sidebar-white d-flex items-center text-17 lh-1 fw-500"
            >
              <i class="text-20 icon-discovery mr-15"></i>
              Explore
            </nuxt-link>
          </div>

          <div class="sidebar__item">
            <nuxt-link
            to="/courses-list-1"
              class="-dark-sidebar-white d-flex items-center text-17 lh-1 fw-500"
            >
              <i class="text-20 icon-play-button mr-15"></i>
              Courses
            </nuxt-link>
          </div>

          <div class="sidebar__item">
            <a
              href="#"
              class="-dark-sidebar-white d-flex items-center text-17 lh-1 fw-500"
            >
              <i class="text-20 icon-book mr-15"></i>
              Books
            </a>
          </div>

          <div class="sidebar__item">
            <nuxt-link
            to="/blog-list-1"
              class="-dark-sidebar-white d-flex items-center text-17 lh-1 fw-500"
            >
              <i class="text-20 icon-list mr-15"></i>
              Articles
            </nuxt-link>
          </div>

          <div class="sidebar__item">
            <a
              href="#"
              class="-dark-sidebar-white d-flex items-center text-17 lh-1 fw-500"
            >
              <i class="text-20 icon-time-management mr-15"></i>
              Calendar
            </a>
          </div>
        </div>
      </div>

      <div class="mt-60">
        <div class="text-16 lh-1 fw-500 text-dark-1 mb-30">Pages</div>
        <div class="">
          <div class="">
            <div class="accordion js-accordion" @click="toggleAccordion">
              <div
                :class="{ 'is-active': isDropdownOpen }"
                class="accordion__item"
              >
                <div
                  class="accordion__button py-10 px-20 bg-light-4 rounded-16"
                >
                  <span class="text-16 fw-500 text-dark-1">About</span>
                  <div
                    class="accordion__icon display-flex justify-center items-center h-[100%]"
                  >
                    <div class="icon size-20 mt-5" data-feather="chevron-down">
                      <i class="fa fa-chevron-down" style="font-size: 14px"></i>
                    </div>
                    <div class="icon size-20" data-feather="chevron-up">
                      <i class="fa fa-chevron-up" style="font-size: 14px"></i>
                    </div>
                  </div>
                </div>
                <div
                  :style="{ maxHeight: isDropdownOpen ? '112px' : '0' }"
                  class="accordion__content"
                >
                  <div class="accordion__content__inner px-30 pt-15 pb-10">
                    <div class="sidebar__links y-gap-5">
                      <div>
                        <NuxtLink to="/about-1">About v1</NuxtLink>
                      </div>
                      <div>
                        <NuxtLink to="/about-2">About v2</NuxtLink>
                      </div>
                      <div>
                        <a href="#">About v3</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="">
            <nuxt-link
            to="/contact-1"
              class="d-flex items-center justify-between py-15 px-20 rounded-16 text-16 lh-1 fw-500 -base-sidebar-menu-hover"
            >
              Contact
            </nuxt-link>
          </div>

          <div class="">
            <nuxt-link
            to="/pricing"
              class="d-flex items-center justify-between py-15 px-20 rounded-16 text-16 lh-1 fw-500 -base-sidebar-menu-hover"
            >
              Pricing
            </nuxt-link>
          </div>

          <div class="">
            <nuxt-link
            to="/help-center"
              class="d-flex items-center justify-between py-15 px-20 rounded-16 text-16 lh-1 fw-500 -base-sidebar-menu-hover"
            >
              Help
            </nuxt-link>
          </div>

          <div class="">
            <nuxt-link
            to="/terms"
              class="d-flex items-center justify-between py-15 px-20 rounded-16 text-16 lh-1 fw-500 -base-sidebar-menu-hover"
            >
              Faq
            </nuxt-link>
          </div>

          <div class="">
            <nuxt-link
            to="/terms"
              class="d-flex items-center justify-between py-15 px-20 rounded-16 text-16 lh-1 fw-500 -base-sidebar-menu-hover"
            >
              Term
            </nuxt-link>
          </div>

          <div class="">
            <a
              href="#"
              class="d-flex items-center justify-between py-15 px-20 rounded-16 text-16 lh-1 fw-500 -base-sidebar-menu-hover"
            >
              Privacy
            </a>
          </div>

          <div class="">
            <a
              href="#"
              class="d-flex items-center justify-between py-15 px-20 rounded-16 text-16 lh-1 fw-500 -base-sidebar-menu-hover"
            >
              Setting
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const isDropdownOpen = ref(false);
const toggleAccordion = () => {
  isDropdownOpen.value = !isDropdownOpen.value;
};
</script>

<style lang="scss" scoped></style>
