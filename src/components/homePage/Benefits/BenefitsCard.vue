<template>
  <div class="benefits__col" v-for="card in cards" :key="card.id">
    <div class="benefits-card js-show-benefits">
      <div class="benefits-card__content">
        <p>
          {{ card.text }}
        </p>
      </div>
      <div class="benefits-card__front">
        <div class="benefits-card__title">
          <h3>{{ card.title }}</h3>
        </div>
        <div class="benefits-card__img">
          <img :src="card.image" :alt="card.title" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import { db } from "../../../firebase/config";
import { collection, getDocs } from "firebase/firestore";

export default {
  data() {
    return {
      cards: [],
    };
  },
  mounted() {
    this.getData();
  },

  methods: {
    async getData() {
      const collectionsRef = collection(db, "benefits");
      await getDocs(collectionsRef).then((snapshot) => {
        snapshot.forEach((doc) => {
          this.cards.push(doc.data());
        });
      });

      gsap.from(".js-show-benefits", {
        scrollTrigger: {
          trigger: ".js-show-benefits",
          markers: false,
          toggleActions: "play none none reset",
          start: "0, 100%",
          end: "0, 100%",
        },
        y: 100,
        stagger: 0.1,
        opacity: 0,
        duration: 0.6,
      });
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/mixins.scss";
@import "@/assets/fonts.scss";
@import "@/assets/variables.scss";
.benefits-card {
  border-radius: 8px;
  margin-bottom: 30px;
  overflow: hidden;
  position: relative;
  height: 100%;
  background-color: $lightGrey;
  @include d(1024px) {
    // min-height: 280px;
  }
  @include d(575px) {
    margin-bottom: 15px;
  }
  &:hover {
    .benefits-card__front {
      opacity: 0;
    }
    .benefits-card__content {
      opacity: 1;
    }
  }
  &__title {
    text-align: center;
    margin-bottom: 34px;
  }
  &__img {
    width: auto;
    max-width: 210px;
    margin: 0 auto;
    @include d(1024px) {
      max-width: 90%;
    }
  }
  &__front {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 20px 40px 0 40px;
    height: 100%;
    transition: opacity 0.4s $timing;
  }
  &__content {
    position: absolute;
    padding: 30px 30px 40px 30px;
    color: $white;
    background-color: $primary;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.6s $timing;
    z-index: 1;
    p {
      line-height: 1.4em;
    }
  }
}
</style>