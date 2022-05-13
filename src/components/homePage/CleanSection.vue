<template>
  <section class="section how-we-clean">
    <div class="container">
      <div class="how-we-clean__row">
        <div class="how-we-clean__col">
          <div class="how-we-clean__title">
            <h2 class="title-2">Как мы убираем</h2>
          </div>
        </div>
        <div class="how-we-clean__col">
          <div class="how-we-clean__text">
            <p>
              Клинер приезжает в назначенное время со всем необходимым и сразу
              приступает к делу. Вам остаётся только оценить результат.
            </p>
          </div>
        </div>
      </div>
    </div>
    <CleanSlider />
  </section>
</template>

<script>
import CleanSlider from "./CleaningSlider.vue";
export default {
  components: {
    CleanSlider,
  },
};
</script>

<style lang="scss">
@import "@/assets/mixins.scss";
@import "@/assets/fonts.scss";
@import "@/assets/variables.scss";
.how-we-clean {
  padding: 78px 0 0 0;

  @include d(992px) {
    padding: 0;
  }
  &__row {
    display: flex;
    margin: 0 -15px;
    flex-wrap: wrap;
  }
  &__col {
    flex: 0 0 50%;
    max-width: 50%;
    padding: 0 15px;
    @include d(768px) {
      flex: 0 0 100%;
      max-width: 100%;
    }
  }
  &__text {
    font-size: 18px;
    max-width: 414px;
    margin: 10px 10px 0 auto;
    p {
      line-height: 1.4em;
    }
  }
}
</style>