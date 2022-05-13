<template>
  <section class="section benefits">
    <div class="container_lg">
      <div class="benefits__row">
        <BenefitsCard/>
      </div>
    </div>
  </section>
</template>

<script>
import BenefitsCard from "./BenefitsCard.vue"

export default {
  components: {
    BenefitsCard,
  },

};
</script>

<style lang="scss">
@import "@/assets/mixins.scss";
@import "@/assets/fonts.scss";
@import "@/assets/variables.scss";
.benefits {
  padding: 73px 0;
  &__row {
    display: flex;
    justify-content: space-between;
    margin: 0 -20px;
    flex-wrap: wrap;
    @include d(1280px) {
      margin: 0 -15px;
    }
  }
  &__col {
    flex: 0 0 25%;
    max-width: 25%;
    padding: 0 20px;
    @include d(1280px) {
      padding: 0 15px;
    }
    @include d(992px) {
      flex: 0 0 50%;
      max-width: 50%;
    }
    @include d(575px) {
      flex: 0 0 100%;
      max-width: 100%;
    }
  }
}
</style>