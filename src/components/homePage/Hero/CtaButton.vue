<template>
  <div class="cta-wrapper js-cta">
    <div
      class="cta-container"
      id="cta-container"
      @mouseover="onMouseEnter"
      @mouseleave="onMouseLeave"
      @mousemove="mouseMove"
    >
      <a href="#" class="cta-btn">
        <span class="cta-btn__border"></span>
        <span class="cta-btn__text">{{ text }}</span>
      </a>
    </div>
  </div>
</template>

<script>
import { gsap } from "gsap";
export default {
  props: ["text"],
  mounted() {
    setTimeout(() => {
      gsap.to(".js-cta", {
        scrollTrigger: {
          trigger: ".js-cta",
          markers: false,
          toggleActions: "play none none reverse",
          start: "0, 70%",
          end: "100%, 100%",
        },
        rotate: 36,
        y: 80,
        duration: 0.6,
        scale: 0.8,
      });
    }, 1000);
  },
  methods: {
    onMouseEnter(e) {
      gsap.to("#cta-container", {
        height: 300,
        width: 300,
        duration: 0.3,
      });
      gsap.to(".cta-btn", 0.3, { scale: 1.3 });
      gsap.to(".cta-btn__border", {
        width: 300,
        height: 300,
        duration: 0.3,
      });
    },
    onMouseLeave(e) {
      gsap.to("#cta-container", {
        height: 250,
        width: 250,
        duration: 0.3,
      });
      gsap.to(".cta-btn, .cta-btn__text", {
        scale: 1,
        x: 0,
        y: 0,
        duration: 0.3,
      });
      gsap.to(".cta-btn__border", {
        width: 195,
        height: 195,
        duration: 0.3,
      });
    },
    mouseMove(e) {
      this.callParallax(e);
    },

    callParallax(e) {
      this.parallaxIt(e, ".cta-btn", -40);
      this.parallaxIt(e, ".cta-btn__text", -10);
    },

    parallaxIt(e, target, movement) {
      let el = document.getElementById("cta-container");
      let relX = e.pageX / 2 - el.offsetLeft;
      let relY = e.pageY / 2 - el.offsetTop;
      gsap.to(target, {
        x: ((relX - el.offsetWidth / 2) / el.offsetWidth) * movement,
        y: ((relY - el.offsetHeight / 2) / el.offsetHeight) * movement,
        ease: "power2.out",
        duration: 0.3,
      });
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/mixins.scss";
@import "@/assets/fonts.scss";
@import "@/assets/variables.scss";
.cta-wrapper {
  position: fixed;
  bottom: -50px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
  width: 350px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.cta-container {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 250px;
  height: 250px;
}
.cta-btn {
  text-transform: uppercase;
  width: 195px;
  height: 195px;
  border-radius: 50%;
  color: $white;
  background-color: $primary;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  line-height: 1.3em;
  text-align: center;
  word-spacing: 100px;
  letter-spacing: 0.03em;

  position: absolute;
  @include d(1024px) {
    width: 150px;
    height: 150px;
    font-size: 16px;
  }
  @include d(768px) {
    left: auto;
    right: 15px;
  }
  @include d(575px) {
    position: fixed;
    left: auto;
    right: 15px;
    z-index: 1;
    width: 90px;
    height: 90px;
    font-size: 12px;
    bottom: 20px;
  }
  &__text {
    position: relative;
    transform: rotate(-15deg);
  }
  &__border {
    width: 195px;
    height: 195px;
    flex: 0 0 100%;
    border: 0.5px solid rgba($primary, 0.2);
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>