<script>
import MainHeader from "./components/header/MainHeader.vue";
import HomeView from "./views/HomeView.vue";
import PagePreloader from "./components/preloader/PagePreloader.vue";

import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
export default {
  components: {
    MainHeader,
    HomeView,
    PagePreloader,
  },
  data() {
    return {
      delay: null,
      isPreloader: true,
      step: 0,
    };
  },
  mounted() {
    this.preloaderAnimation();
  },
  methods: {
    preloaderAnimation() {
      window.addEventListener("load", () => {
        let loadTime =
          window.performance.timing.domContentLoadedEventEnd -
          window.performance.timing.navigationStart;
        this.delay += loadTime;
        const totalDelay = this.delay + 2000;

        let percent = Math.round(totalDelay / 100);

        let count = setInterval(() => {
          this.step++;
          if (this.step === 100) {
            clearInterval(count);
          }
        }, percent);
        const duration = Math.ceil(percent / 10);

        let timeline = gsap.timeline({});
        timeline
          .to(".circle", {
            duration: duration,
            opacity: 1,
            strokeDashoffset: 0,
          })
          .to(".preloader", {
            duration: duration / 3,
            opacity: 0,
            display: "none",
          });
      });
    },
  },
};
</script>

<template>
  <div class="main-wrapper">
    <MainHeader />
    <PagePreloader :step="step" v-show="isPreloader" />
  </div>
</template>

<style lang="scss">
@import "@/assets/mixins.scss";
@import "@/assets/fonts.scss";
@import "@/assets/variables.scss";
@import "@/assets/base.scss";
</style>
