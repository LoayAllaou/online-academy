<template>
  <div class="form-page__img bg-dark-1">
    <div class="logo-container">
      <nuxt-img
        src="/assets/img/ScaleUp - Academy/ScaLE-UP-Academy-1.png"
        alt="Logo"
        class="login-logo"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import gsap from "gsap";

const handleSubmit = (e) => {
  e.preventDefault();
};

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

<style scoped>
/* Add your styles here if necessary */
/* .logo-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  min-height: 100vh; /* Full screen height 
  padding: 20px;
} */

/* .login-logo {
  max-width: 400px; /* Adjust as needed 
  width: 80%;
  height: auto;
  object-fit: contain;
} */
</style>
