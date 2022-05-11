<script setup>
import { RouterLink, RouterView } from "vue-router";
// import HelloWorld from "@/components/HelloWorld.vue";
</script>

<template>
  <header>
    <RouterLink to="/">
      <img src="" alt="" />
    </RouterLink>

    <nav>
      <RouterLink to="/after">После ремонта</RouterLink>
      <RouterLink to="/general">Генеральная уборка</RouterLink>
      <RouterLink to="/regular">Регулярная уборка</RouterLink>
      <RouterLink to="/windows">Мойка окон</RouterLink>
    </nav>
    <RouterView />
  </header>
</template>

<style lang="scss">
@import "@/assets/mixins.scss";
@import "@/assets/fonts.scss";
@import "@/assets/variables.scss";
@import "@/assets/base.scss";
</style>
