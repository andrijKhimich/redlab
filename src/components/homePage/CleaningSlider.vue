<template>
  <div class="slider js-gallery">
    <swiper
      :modules="modules"
      :parallax="true"
      :loop="false"
      :speed="1000"
      :pagination="{
        clickable: true,
        renderBullet: function (index, className) {
          const item = `<span class=${className}> ${menu[index]}</span>`;
          return item;
        },
      }"
    >
      <swiper-slide class="js-slider">
        <div class="slider__item">
          <div class="slider__cover" data-swiper-parallax="%">
            <div
              class="slider__img"
              style="background-image: url(./img/slide-1.jpg)"
              data-swiper-parallax-scale="1.6"
              data-swiper-parallax-duration="1000"
            ></div>
          </div>

          <div class="slider__tooltips">
            <div class="slider__tooltip">
              <div class="slider__tooltip-wrapper">
                <div class="slider__tooltip-text">
                  <span>Чистим плиту</span>
                </div>
                <div class="slider__tooltip-icon">
                  <img src="../../assets/img/plus.svg" alt="plus" />
                </div>
              </div>
            </div>
            <div class="slider__tooltip">
              <div class="slider__tooltip-wrapper">
                <div class="slider__tooltip-text">
                  <span>Чистим вытяжку</span>
                </div>
                <div class="slider__tooltip-icon">
                  <img src="../../assets/img/plus.svg" alt="plus" />
                </div>
              </div>
            </div>
            <div class="slider__tooltip">
              <div class="slider__tooltip-wrapper">
                <div class="slider__tooltip-text">
                  <span>Моем фасады техники</span>
                </div>
                <div class="slider__tooltip-icon">
                  <img src="../../assets/img/plus.svg" alt="plus" />
                </div>
              </div>
            </div>
            <div class="slider__tooltip">
              <div class="slider__tooltip-wrapper">
                <div class="slider__tooltip-text">
                  <span>Моем пол</span>
                </div>
                <div class="slider__tooltip-icon">
                  <img src="../../assets/img/plus.svg" alt="plus" />
                </div>
              </div>
            </div>
            <div class="slider__tooltip">
              <div class="slider__tooltip-wrapper">
                <div class="slider__tooltip-text">
                  <span>Моем посуду</span>
                </div>
                <div class="slider__tooltip-icon">
                  <img src="../../assets/img/plus.svg" alt="plus" />
                </div>
              </div>
            </div>
            <div class="slider__tooltip">
              <div class="slider__tooltip-wrapper">
                <div class="slider__tooltip-text">
                  <span>Моем фасады</span>
                </div>
                <div class="slider__tooltip-icon">
                  <img src="../../assets/img/plus.svg" alt="plus" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide class="js-slider">
        <div class="slider__item">
          <div class="slider__cover" data-swiper-parallax="%">
            <div
              class="slider__img"
              style="background-image: url(./img/slide-2.jpg)"
              data-swiper-parallax-scale="1.6"
              data-swiper-parallax-duration="1000"
            ></div>
          </div>

          <div class="slider__tooltips">
            <div class="slider__tooltip">
              <div class="slider__tooltip-wrapper">
                <div class="slider__tooltip-text">
                  <span>Чистим плиту</span>
                </div>
                <div class="slider__tooltip-icon">
                  <img src="../../assets/img/plus.svg" alt="plus" />
                </div>
              </div>
            </div>
            <div class="slider__tooltip">
              <div class="slider__tooltip-wrapper">
                <div class="slider__tooltip-text">
                  <span>Чистим плиту</span>
                </div>
                <div class="slider__tooltip-icon">
                  <img src="../../assets/img/plus.svg" alt="plus" />
                </div>
              </div>
            </div>
            <div class="slider__tooltip">
              <div class="slider__tooltip-wrapper">
                <div class="slider__tooltip-text">
                  <span>Чистим плиту</span>
                </div>
                <div class="slider__tooltip-icon">
                  <img src="../../assets/img/plus.svg" alt="plus" />
                </div>
              </div>
            </div>
            <div class="slider__tooltip">
              <div class="slider__tooltip-wrapper">
                <div class="slider__tooltip-text">
                  <span>Чистим плиту</span>
                </div>
                <div class="slider__tooltip-icon">
                  <img src="../../assets/img/plus.svg" alt="plus" />
                </div>
              </div>
            </div>
            <div class="slider__tooltip">
              <div class="slider__tooltip-wrapper">
                <div class="slider__tooltip-text">
                  <span>Чистим плиту</span>
                </div>
                <div class="slider__tooltip-icon">
                  <img src="../../assets/img/plus.svg" alt="plus" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide class="js-slider">
        <div class="slider__item">
          <div class="slider__cover" data-swiper-parallax="%">
            <div
              class="slider__img"
              style="background-image: url(./img/slide-1.jpg)"
              data-swiper-parallax-scale="1.6"
              data-swiper-parallax-duration="1000"
            ></div>
          </div>
          <div class="slider__tooltips">
            <div class="slider__tooltip">
              <div class="slider__tooltip-wrapper">
                <div class="slider__tooltip-text">
                  <span>Чистим плиту</span>
                </div>
                <div class="slider__tooltip-icon">
                  <img src="../../assets/img/plus.svg" alt="plus" />
                </div>
              </div>
            </div>
            <div class="slider__tooltip">
              <div class="slider__tooltip-wrapper">
                <div class="slider__tooltip-text">
                  <span>Чистим плиту</span>
                </div>
                <div class="slider__tooltip-icon">
                  <img src="../../assets/img/plus.svg" alt="plus" />
                </div>
              </div>
            </div>
            <div class="slider__tooltip">
              <div class="slider__tooltip-wrapper">
                <div class="slider__tooltip-text">
                  <span>Чистим плиту</span>
                </div>
                <div class="slider__tooltip-icon">
                  <img src="../../assets/img/plus.svg" alt="plus" />
                </div>
              </div>
            </div>
            <div class="slider__tooltip">
              <div class="slider__tooltip-wrapper">
                <div class="slider__tooltip-text">
                  <span>Чистим плиту</span>
                </div>
                <div class="slider__tooltip-icon">
                  <img src="../../assets/img/plus.svg" alt="plus" />
                </div>
              </div>
            </div>
            <div class="slider__tooltip">
              <div class="slider__tooltip-wrapper">
                <div class="slider__tooltip-text">
                  <span>Чистим плиту</span>
                </div>
                <div class="slider__tooltip-icon">
                  <img src="../../assets/img/plus.svg" alt="plus" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide class="js-slider">
        <div class="slider__item">
          <div class="slider__cover" data-swiper-parallax="%">
            <div
              class="slider__img"
              style="background-image: url(./img/slide-2.jpg)"
              data-swiper-parallax-scale="1.6"
              data-swiper-parallax-duration="1000"
            ></div>
          </div>
          <div class="slider__tooltips">
            <div class="slider__tooltip">
              <div class="slider__tooltip-wrapper">
                <div class="slider__tooltip-text">
                  <span>Чистим плиту</span>
                </div>
                <div class="slider__tooltip-icon">
                  <img src="../../assets/img/plus.svg" alt="plus" />
                </div>
              </div>
            </div>
            <div class="slider__tooltip">
              <div class="slider__tooltip-wrapper">
                <div class="slider__tooltip-text">
                  <span>Чистим плиту</span>
                </div>
                <div class="slider__tooltip-icon">
                  <img src="../../assets/img/plus.svg" alt="plus" />
                </div>
              </div>
            </div>
            <div class="slider__tooltip">
              <div class="slider__tooltip-wrapper">
                <div class="slider__tooltip-text">
                  <span>Чистим плиту</span>
                </div>
                <div class="slider__tooltip-icon">
                  <img src="../../assets/img/plus.svg" alt="plus" />
                </div>
              </div>
            </div>
            <div class="slider__tooltip">
              <div class="slider__tooltip-wrapper">
                <div class="slider__tooltip-text">
                  <span>Чистим плиту</span>
                </div>
                <div class="slider__tooltip-icon">
                  <img src="../../assets/img/plus.svg" alt="plus" />
                </div>
              </div>
            </div>
            <div class="slider__tooltip">
              <div class="slider__tooltip-wrapper">
                <div class="slider__tooltip-text">
                  <span>Чистим плиту</span>
                </div>
                <div class="slider__tooltip-icon">
                  <img src="../../assets/img/plus.svg" alt="plus" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Parallax, Pagination } from "swiper";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default {
  components: {
    Swiper,
    SwiperSlide,
    Parallax,
    Pagination,
  },

  setup() {
    return {
      menu: ["Кухня", "Комнаты", "Ванная", "Прихожая"],
      modules: [Parallax, Pagination],
    };
  },
  mounted() {
    this.slideOnHOver();

    document.onreadystatechange = () => {
      if (document.readyState == "complete") {
        setTimeout(() => {
          gsap.from(".js-slider", {
            scrollTrigger: {
              trigger: ".js-slider",
              markers: false,
              toggleActions: "play none none reset",
              start: "0, 100%",
              end: "0, 100%",
            },
            y: 100,
            opacity: 0,
            duration: 0.6,
          });
          gsap.to(".js-gallery", {
            scrollTrigger: {
              trigger: ".js-gallery",
              markers: false,
              toggleActions: "play none none reset",
              start: "99%, 100%",
              end: "100%, 0%",
              toggleClass: "active",
            },
          });
          console.log("site loaded");
        }, 1000);
      }
    };
  },
  methods: {
    slideOnHOver() {
      const bullets = document.querySelectorAll(".swiper-pagination-bullet");
      bullets.forEach((bullet) => {
        bullet.addEventListener("mouseenter", (e) => {
          e.target.click();
        });
      });
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/mixins.scss";
@import "@/assets/fonts.scss";
@import "@/assets/variables.scss";
// Import Swiper styles
@import "swiper/css";
@import "swiper/css/parallax";
@import "swiper/css/pagination";

.slider {
  margin: 50px auto 0 auto;
  width: 100%;
  height: 100vh;
  width: 100vw;
  background-color: $white;
  max-width: 100vw;
  z-index: 1;
  @include d(768px) {
    height: 100vw;
  }
  &__cover {
    width: 100%;
    height: 100%;
  }
  &__img {
    width: 100%;
    height: 100%;
    background-position: center;
    background-size: cover;
    will-change: transform;
  }
  &__item {
    height: 630px;
    overflow: hidden;
    transition: all 1s linear;
    max-width: 1095px;
    position: absolute;
    width: 100%;
    right: 50%;
    transform: translate(50%, 0px);
    transition: all 1s ease;
  }
  &__tooltips {
    // display: none;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    opacity: 0;
    transition: opacity 1s ease;
    // transition-delay: 1s;
  }
  &__tooltip {
    position: absolute;
    width: 50px;
    height: 50px;
    &-wrapper {
      position: relative;
    }
    &-icon {
      width: 50px;
      height: 50px;
      background: radial-gradient(
        circle,
        rgba(90, 48, 240, 1) 40%,
        rgba(90, 48, 240, 0.3169642857142857) 40%
      );
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      img {
        width: 12px;
        height: 12px;
      }
    }
    &-text {
      font-size: 12px;
      padding: 3px;
      background-color: rgba($white, 0.8);
      color: $textBlack;
      position: absolute;
      width: max-content;
      bottom: 110%;
      left: 50%;
      transform: translate(-50%, 0);
      border-radius: 3px;
      clip-path: polygon(0 0, 0% 0, 0% 100%, 0% 100%);
      &::before {
        content: "";
        position: absolute;
        top: 100%;
        left: 50%;
        transform: translate(-50%, 0);
        width: 0;
        height: 0;
        border-left: 5px solid transparent;
        border-right: 5px solid transparent;
        border-top: 5px solid rgba($white, 0.8);
      }
    }
    &:first-child {
      top: 53%;
      left: 26%;
    }
    &:nth-child(2) {
      top: 30%;
      left: 26%;
    }
    &:nth-child(3) {
      top: 33%;
      left: 60%;
    }
    &:nth-child(4) {
      top: 92%;
      left: 20%;
      @include d(768px) {
        top: 85%;
      }
    }
    &:nth-child(5) {
      top: 63%;
      left: 90%;
      @include d(768px) {
        left: 78%;
      }
    }
    &:nth-child(6) {
      top: 60%;
      left: 46%;
    }
  }
}
.swiper-slide {
  background-color: #fff;
}
.swiper-slide.swiper-slide-prev {
  .slider__img {
    transition-delay: 1s;
  }
}
.swiper-slide.swiper-slide-next {
  .slider__img {
    transition-delay: 1s;
  }
}
.swiper {
  height: 100%;
}

.js-gallery {
  transition: all 1s ease;

  &.active {
    visibility: visible;
    .slider__tooltips {
      transition: opacity 1s ease;
      opacity: 1;
    }
    .slider__tooltip-text {
      transition: clip-path 1s ease;
      transition-delay: 1s;
      clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
    }
    .slider__item {
      height: 100vh;
      max-width: 75vw;
      right: 0;
      left: auto;
      transform: translate(0, 0);
      @include d(800px) {
        max-width: 100vw;
      }
      @include d(768px) {
        height: 100vw;
      }
    }
    .swiper-horizontal > .swiper-pagination-bullets,
    .swiper-pagination-bullets.swiper-pagination-horizontal,
    .swiper-pagination-custom,
    .swiper-pagination-fraction {
      left: 0;
    }
  }
}
.swiper-wrapper {
  will-change: transform;
  
}
.swiper-horizontal > .swiper-pagination-bullets,
.swiper-pagination-bullets.swiper-pagination-horizontal,
.swiper-pagination-custom,
.swiper-pagination-fraction {
  position: fixed;
  width: 25vw;
  height: 100vh;
  background-color: $primary;
  top: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-left: 60px;
  left: -25vw;
  transition: all 1s ease;
  @include d(800px) {
    display: none;
  }
}
.swiper-horizontal > .swiper-pagination-bullets .swiper-pagination-bullet,
.swiper-pagination-horizontal.swiper-pagination-bullets
  .swiper-pagination-bullet {
  margin-bottom: 15px;
}
.swiper-pagination-bullet {
  display: block;
  margin-bottom: 15px;
  font-size: 44px;
  color: $white;
  line-height: 1.3em;
  width: 100%;
  height: auto;
  background: none;
  text-align: left;
  font-weight: 400;
  position: relative;
  overflow: hidden;
  border-radius: 0;
  top: 50px;
  margin-bottom: 20px;
  transform: skewX(0);
  transition: padding $duration $timing, transform $duration $timing,
    color $duration $timing;
  @include d(1280px) {
    font-size: 36px;
  }
  @include d(1024px) {
    font-size: 30px;
  }
  @include d(992px) {
    font-size: 24px;
  }
  &::before {
    content: "";
    width: 30px;
    height: 100%;
    position: absolute;
    top: 50%;
    left: -40px;
    overflow: hidden;
    transform: translate(0, -50%);
    background-image: url(../img/arrow.svg);
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    transition: left $duration $timing;
  }
  &-active {
    padding-left: 50px;
    transform: skewX(-15deg);
    &::before {
      left: 10px;
    }
  }
}
</style>