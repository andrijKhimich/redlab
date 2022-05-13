<template>
  <button class="burger">
    <span class="burger__item"></span>
    <span class="burger__item"></span>
  </button>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import "@/assets/mixins.scss";
@import "@/assets/fonts.scss";
@import "@/assets/variables.scss";

.burger {
  width: 32px;
  height: 32px;
  position: relative;
  padding: 12px 6px;
  z-index: 2;
  top: -2px;
  pointer-events: none;
  @include d(1280px) {
    pointer-events: all;
  }
  &__item {
    background-color: $textBlack;
    width: 20px;
    height: 2px;
    border-radius: 4px;
    position: absolute;
    top: 11px;
    left: 6px;
    transition: transform $duration $timing, top $duration $timing, bottom $duration $timing;
    &:last-child {
      top: auto;
      bottom: 11px;
    }
  }
  &.active {
    .burger__item:first-child {
      transform: rotate(45deg);
      top: 15px;
    }
    .burger__item:last-child {
      transform: rotate(-45deg);
      bottom: 14px;
    }
  }
}
</style>