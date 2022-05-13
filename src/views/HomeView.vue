<script>
import HeroSection from "../components/homePage/Hero/HeroSection.vue";
import BenefitsSection from "../components/homePage/Benefits/BenefitsSection.vue";
import CleanSection from "../components/homePage/CleanSection.vue";

import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default {
  components: {
    HeroSection,
    BenefitsSection,
    CleanSection,
  },
  mounted() {
    // gsap.from(".js-show-benefits", {
    //   scrollTrigger: {
    //     trigger: ".js-show-benefits",
    //     markers: false,
    //     toggleActions: "play none none reset",
    //     start: "0, 100%",
    //     end: "0, 100%",
    //   },
    //   y: 100,
    //   stagger: 0.1,
    //   opacity: 0,
    //   duration: 0.6,
    // });

  },
};
</script>

<template>
  <main class="main">
    <HeroSection />
    <BenefitsSection />
    <CleanSection />
  </main>
</template>
