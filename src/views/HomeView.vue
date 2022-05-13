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
};
</script>

<template>
  <main class="main">
    <HeroSection />
    <BenefitsSection />
    <CleanSection />
  </main>
</template>
