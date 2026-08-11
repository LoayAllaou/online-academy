<!-- components/Menu.vue -->
<template>
  <div :class="`header-menu js-mobile-menu-toggle ${headerPosition || ''}`">
    <div class="header-menu__content">
      <div class="mobile-bg js-mobile-bg"></div>

      <div
        class="d-none xl:d-flex items-center px-20 py-20 border-bottom-light"
      >
        <nuxt-link to="/login" class="text-dark-1">Log in</nuxt-link>
        <nuxt-link to="/signup" class="text-dark-1 ml-30">Sign Up</nuxt-link>
      </div>

      <div class="menu js-navList">
        <ul :class="`${allClasses || ''}`">
          <li class="menu-item-has-children">
            <a
              href="/"
              :class="{
                activeMenu: menuItem === 'Home',
                '': menuItem !== 'Home',
              }"
            >
              {{ $t("header.home") }} <i class="icon-chevron-right text-13 ml-10"></i>
            </a>

            <!-- <ul class="subnav">
              <li class="menu__backButton js-nav-list-back">
                <a href="#">
                  <i class="icon-chevron-left text-13 mr-10"></i> Home
                </a>
              </li>

              <li
                v-for="(elm, i) in menuList[0].links"
                :key="i"
                :class="{
                  activeMenu: pathname.split('/')[1] === elm.href.split('/')[1],
                  inActiveMenu:
                    pathname.split('/')[1] !== elm.href.split('/')[1],
                }"
              >
                <nuxt-link :to="elm.href">{{ elm.label }}</nuxt-link>
              </li>
            </ul> -->
          </li>
          <li class="menu-item">
                <a
                  href="/about-1"
                  :class="{
                    activeMenu: submenu === 'About Us',
                    inActiveMenu: submenu !== 'About Us',
                  }"
                >
                  {{ $t("header.about") }}<i
                    class=" text-13 ml-10 text-11"
                  ></i>
                </a>
              </li>
          <!-- <li class="menu-item-has-children -has-mega-menu">
            <a
              data-barba
              href="#"
              :class="{
                activeMenu: menuItem === 'Courses',
                '': menuItem !== 'Courses',
              }"
            >
              Courses <i class="icon-chevron-right text-13 ml-10"></i>
            </a>

            <div class="mega xl:d-none">
              <div class="mega__menu">
                <div class="row x-gap-40">
                  <div class="col">
                    <h4 class="text-17 fw-500 mb-20">Course List Layouts</h4>

                    <ul class="mega__list">
                      <li
                        v-for="(elm, i) in menuList[1].links[0].links"
                        :key="i"
                        :class="{
                          activeMenu:
                            pathname.split('/')[1] === elm.href.split('/')[1],
                          inActiveMegaMenu:
                            pathname.split('/')[1] !== elm.href.split('/')[1],
                        }"
                      >
                        <nuxt-link data-barba :to="elm.href">{{
                          elm.label
                        }}</nuxt-link>
                      </li>
                    </ul>
                  </div>

                  <div class="col">
                    <h4 class="text-17 fw-500 mb-20">Course Single Layouts</h4>

                    <ul class="mega__list">
                      <li
                        v-for="(elm, i) in menuList[1].links[1].links"
                        :key="i"
                        :class="{
                          activeMenu:
                            pathname.split('/')[1] === elm.href.split('/')[1],
                          inActiveMegaMenu:
                            pathname.split('/')[1] !== elm.href.split('/')[1],
                        }"
                      >
                        <nuxt-link data-barba :to="elm.href">{{
                          elm.label
                        }}</nuxt-link>
                      </li>
                    </ul>
                  </div>

                  <div class="col">
                    <h4 class="text-17 fw-500 mb-20">About Courses</h4>

                    <ul class="mega__list">
                      <li
                        v-for="(elm, i) in menuList[1].links[2].links"
                        :key="i"
                        :class="{
                          activeMenu:
                            pathname.split('/')[1] === elm.href.split('/')[1],
                          inActiveMegaMenu:
                            pathname.split('/')[1] !== elm.href.split('/')[1],
                        }"
                      >
                        <nuxt-link data-barba :to="elm.href">{{
                          elm.label
                        }}</nuxt-link>
                      </li>
                    </ul>
                  </div>

                  <div class="col">
                    <h4 class="text-17 fw-500 mb-20">Dashboard Pages</h4>

                    <ul class="mega__list">
                      <li
                        v-for="(elm, i) in menuList[1].links[3].links"
                        :key="i"
                        :class="{
                          activeMenu:
                            pathname.split('/')[1] === elm.href.split('/')[1],
                          inActiveMegaMenu:
                            pathname.split('/')[1] !== elm.href.split('/')[1],
                        }"
                      >
                        <nuxt-link data-barba :to="elm.href">{{
                          elm.label
                        }}</nuxt-link>
                      </li>
                    </ul>
                  </div>

                  <div class="col">
                    <h4 class="text-17 fw-500 mb-20">Popular Courses</h4>

                    <ul class="mega__list">
                      <li
                        v-for="(elm, i) in menuList[1].links[4].links"
                        :key="i"
                        :class="{
                          activeMenu:
                            pathname.split('/')[1] === elm.href.split('/')[1],
                          inActiveMegaMenu:
                            pathname.split('/')[1] !== elm.href.split('/')[1],
                        }"
                      >
                        <nuxt-link data-barba :to="elm.href">{{
                          elm.label
                        }}</nuxt-link>
                      </li>
                    </ul>
                  </div>
                </div>

                <div class="mega-banner bg-purple-1 ml-40">
                  <div class="text-24 lh-15 text-white fw-700">
                    Join more than
                    <br />
                    <span class="text-green-1">8 million learners</span>
                    worldwide
                  </div>
                  <a
                    href="#"
                    class="button -md -green-1 text-dark-1 fw-500 col-12"
                  >
                    Start Learning For Free
                  </a>
                </div>
              </div>
            </div>
          </li> -->

          <!-- <li class="menu-item-has-children">
            <a
              data-barba
              href="#"
              :class="{
                activeMenu: menuItem === 'Events',
                '': menuItem !== 'Events',
              }"
            >
              Events <i class="icon-chevron-right text-13 ml-10"></i>
            </a>
            <ul class="subnav">
              <li class="menu__backButton js-nav-list-back">
                <a href="#">
                  <i class="icon-chevron-left text-13 mr-10"></i> Events
                </a>
              </li>
              <li
                v-for="(elm, i) in menuList[2].links"
                :key="i"
                :class="{
                  activeMenu: pathname.split('/')[1] === elm.href.split('/')[1],
                  inActiveMenu:
                    pathname.split('/')[1] !== elm.href.split('/')[1],
                }"
              >
                <nuxt-link data-barba :to="elm.href">{{ elm.label }}</nuxt-link>
              </li>
            </ul>
          </li>

          <li class="menu-item-has-children">
            <a
              data-barba
              href="#"
              :class="{
                activeMenu: menuItem === 'Blogs',
                '': menuItem !== 'Blogs',
              }"
            >
              Blog <i class="icon-chevron-right text-13 ml-10"></i>
            </a>
            <ul class="subnav">
              <li class="menu__backButton js-nav-list-back">
                <a href="#">
                  <i class="icon-chevron-left text-13 mr-10"></i> Blog
                </a>
              </li>
              <li
                v-for="(elm, i) in menuList[3].links"
                :key="i"
                :class="{
                  activeMenu: pathname.split('/')[1] === elm.href.split('/')[1],
                  inActiveMenu:
                    pathname.split('/')[1] !== elm.href.split('/')[1],
                }"
              >
                <nuxt-link data-barba :to="elm.href">{{ elm.label }}</nuxt-link>
              </li>
            </ul>
          </li>

          <li class="menu-item-has-children">
            <a
              href="#"
              data-barba
              :class="{
                activeMenu: menuItem === 'Pages',
                '': menuItem !== 'Pages',
              }"
            >
              Pages <i class="icon-chevron-right text-13 ml-10"></i>
            </a>
            <ul class="subnav">
              <li class="menu__backButton js-nav-list-back">
                <a href="#">
                  <i class="icon-chevron-left text-13 mr-10"></i> Pages
                </a>
              </li>
              <li class="menu-item-has-children">
                <a
                  href="#"
                  :class="{
                    activeMenu: submenu === 'About Us',
                    inActiveMenu: submenu !== 'About Us',
                  }"
                >
                  About Us<i
                    class="icon-chevron-right text-13 ml-10 text-11"
                  ></i>
                </a>

                <ul class="subnav">
                  <li class="menu__backButton js-nav-list-back">
                    <a href="#">
                      <i class="icon-chevron-left text-13 mr-10"></i> About Us
                    </a>
                  </li>

                  <li
                    v-for="(elm, i) in menuList[4].links[0].links"
                    :key="i"
                    :class="{
                      activeMenu:
                        pathname.split('/')[1] === elm.href.split('/')[1],
                      inActiveMenu:
                        pathname.split('/')[1] !== elm.href.split('/')[1],
                    }"
                  >
                    <nuxt-link :to="elm.href">{{ elm.label }}</nuxt-link>
                  </li>
                </ul>
              </li>

              <li class="menu-item-has-children">
                <a
                  href="#"
                  :class="{
                    activeMenu: submenu === 'Contact',
                    inActiveMenu: submenu !== 'Contact',
                  }"
                >
                  Contact<i
                    class="icon-chevron-right text-13 ml-10 text-11"
                  ></i>
                </a>
                <ul class="subnav">
                  <li class="menu__backButton js-nav-list-back">
                    <a href="#">
                      <i class="icon-chevron-left text-13 mr-10"></i> Contact
                    </a>
                  </li>

                  <li
                    v-for="(elm, i) in menuList[4].links[1].links"
                    :key="i"
                    :class="{
                      activeMenu:
                        pathname.split('/')[1] === elm.href.split('/')[1],
                      inActiveMenu:
                        pathname.split('/')[1] !== elm.href.split('/')[1],
                    }"
                  >
                    <nuxt-link :to="elm.href">{{ elm.label }}</nuxt-link>
                  </li>
                </ul>
              </li>

              <li class="menu-item-has-children">
                <a
                  href="#"
                  :class="{
                    activeMenu: submenu === 'Shop',
                    inActiveMenu: submenu !== 'Shop',
                  }"
                >
                  Shop<i class="icon-chevron-right text-13 ml-10 text-11"></i>
                </a>
                <ul class="subnav">
                  <li class="menu__backButton js-nav-list-back">
                    <a href="#">
                      <i class="icon-chevron-left text-13 mr-10"></i> Shop
                    </a>
                  </li>

                  <li
                    v-for="(elm, i) in menuList[4].links[2].links"
                    :key="i"
                    :class="{
                      activeMenu:
                        pathname.split('/')[1] === elm.href.split('/')[1],
                      inActiveMenu:
                        pathname.split('/')[1] !== elm.href.split('/')[1],
                    }"
                  >
                    <nuxt-link :to="elm.href">{{ elm.label }}</nuxt-link>
                  </li>
                </ul>
              </li>

              <li
                v-for="(elm, i) in menuList[4].links.filter((el) => el.href)"
                :key="i"
                :class="{
                  activeMenu: pathname.split('/')[1] === elm.href.split('/')[1],
                  inActiveMenu:
                    pathname.split('/')[1] !== elm.href.split('/')[1],
                }"
              >
                <nuxt-link :to="elm.href">{{ elm.label }}</nuxt-link>
              </li>
            </ul>
          </li> -->

          <li>
            <nuxt-link
              data-barba
              to="/contact-1"
              :class="{
                activeMenu: pathname === '/contact-1',
                inActiveMenuTwo: pathname !== '/contact-1',
              }"
            >
              {{ $t("header.contact") }}
            </nuxt-link>
          </li>
        </ul>
      </div>

      <!-- mobile footer start -->
      <MobileFooter />
      <!-- mobile footer end -->
    </div>

    <div class="header-menu-close" data-el-toggle=".js-mobile-menu-toggle">
      <div
        class="size-40 d-flex items-center justify-center rounded-full bg-white"
      >
        <div class="icon-close text-dark-1 text-16"></div>
      </div>
    </div>

    <div class="header-menu-bg"></div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import { menuList } from "~/data/menu";
import MobileFooter from "./MobileFooter.vue";
const route = useRoute();
const headerPosition = defineProps(["headerPosition", "allClasses"]);

const menuItem = ref("");
const submenu = ref("");
const pathname = route.path;

onMounted(() => {
  menuList.forEach((elm) => {
    elm?.links?.forEach((elm2) => {
      if (elm2.href?.split("/")[1] === pathname.split("/")[1]) {
        menuItem.value = elm.title;
      } else {
        elm2?.links?.map((elm3) => {
          if (elm3.href?.split("/")[1] === pathname.split("/")[1]) {
            menuItem.value = elm.title;
            submenu.value = elm2.title;
          }
        });
      }
    });
  });
});
</script>
