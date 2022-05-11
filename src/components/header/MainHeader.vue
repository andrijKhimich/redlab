<template>
  <header class="header">
    <div class="container_lg">
      <div class="header__row">
        <RouterLink to="/" class="logo">
          <img src="../../../public/img/logo.svg" alt="cleaning" />
        </RouterLink>
        <div class="switcher">

        </div>
        <nav>
          <RouterLink to="/after">После ремонта</RouterLink>
          <RouterLink to="/general">Генеральная уборка</RouterLink>
          <RouterLink to="/regular">Регулярная уборка</RouterLink>
          <RouterLink to="/windows">Мойка окон</RouterLink>
        </nav>
        <RouterView />
      </div>
    </div>
  </header>
</template>

<script>
import { RouterLink, RouterView } from "vue-router";

export default {
  name: "MainHeader",
  components: {
    RouterLink,
    RouterView,
  },
};
</script>

<style lang="scss">
.header {
  position: absolute;
}
.logo {
  width: 99px;
  margin-right: 20px;
}
.switcher {
  width: 131px;
  height: 37px;
}
</style>