<template>
  <section class="section home-hero" v-for="data in heroData" :key="data.id">
    <div class="home-hero__img">
      <img :src="data.image" :alt="data.title" />
    </div>
    <div class="home-hero__content">
      <div class="home-hero__title">
        <h1 class="title-1">{{ data.title }}</h1>
        <p>
          {{ data.text }}
        </p>
      </div>
      <CtaButton :text="data.btnText" />
    </div>
  </section>
</template>

<script>

import CtaButton from "./CtaButton.vue";
import { db } from "../../../firebase/config";
import { collection, getDocs } from "firebase/firestore";
export default {
  components: {
    CtaButton,
  },

  data() {
    return {
      heroData: [],
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      const collectionsRef = collection(db, "hero");
      getDocs(collectionsRef).then((snapshot) => {
        snapshot.forEach((doc) => {
          this.heroData.push(doc.data());
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
.home-hero {
  height: 100vh;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  @include d(768px) {
    height: auto;
  }
  &__img {
    flex: 0 0 50%;
    height: 100%;
    @include d(768px) {
      flex: 0 0 100%;
      width: 100%;
      height: 50vh;
      order: 1;
    }
    img {
      height: 100%;
      object-fit: cover;
    }
  }
  &__content {
    flex: 0 0 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    @include d(768px) {
      flex: 0 0 100%;
      width: 100%;
      height: auto;
      justify-content: flex-start;
      padding: 100px 15px 60px 15px;
    }
  }
  &__title {
    width: 330px;
    position: relative;
    transform: translateX(-41px);
    @include d(1024px) {
      transform: translateX(0);
    }
    p {
      font-size: 18px;
      line-height: 1.4em;
    }
  }
}
</style>