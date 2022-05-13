<template>
  <header class="header">
    <div class="container_lg">
      <div class="header__row">
        <RouterLink to="/" class="logo">
          <img src="/img/logo.svg" alt="cleaning" />
        </RouterLink>
        <label class="switch">
          <input type="checkbox" />
          <span class="toggler"></span>
        </label>
        <div class="header__menu" :class="{ active: isActiveMenu }">
          <nav class="nav">
            <RouterLink to="/after">После ремонта</RouterLink>
            <RouterLink to="/general">Генеральная уборка</RouterLink>
            <RouterLink to="/regular">Регулярная уборка</RouterLink>
            <RouterLink to="/windows">Мойка окон</RouterLink>
          </nav>
          <div class="header__contact">
            <a href=":tel+380 67 401 69 77" class="header__phone"
              >+380 67 401 69 77</a
            >
            <p class="header__hours">24/7</p>
          </div>
        </div>
        <BurgerBtn @click="toggleMenu" :class="{ active: isActiveBurger }" />
      </div>
    </div>
  </header>
  <RouterView />
</template>

<script>
import { RouterLink, RouterView } from "vue-router";
import BurgerBtn from "./HeaderBurger.vue";
export default {
  name: "MainHeader",
  components: {
    RouterLink,
    RouterView,
    BurgerBtn,
  },
  data() {
    return {
      isActiveBurger: false,
      isActiveMenu: false,
    };
  },
  methods: {
    toggleMenu: function () {
      this.isActiveBurger = !this.isActiveBurger;
      this.isActiveMenu = !this.isActiveMenu;
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/mixins.scss";
@import "@/assets/fonts.scss";
@import "@/assets/variables.scss";
.header {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1;

  &__row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px 0;
  }
  &__menu {
    display: flex;
    align-items: center;
    @include d(1280px) {
      position: fixed;
      top: 0;
      right: 0;
      width: 300px;
      height: 100vh;
      z-index: 1;
      margin: 0;
      padding: 80px 15px 0 0;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      transform: translate(110%, 0);
      transition: transform $duration $timing;

      &.active {
        transform: translate(0, 0);
        &::before {
          opacity: 1;
        }
      }
      &::before {
        content: "";
        width: 100vw;
        height: 100vh;
        opacity: 1;
        position: absolute;
        top: 0;
        right: 0;
        backdrop-filter: blur(4px);
        z-index: -1;
        opacity: 0;
        transition: opacity 1s $timing;
      }
      &::after {
        content: "";
        width: 100%;
        height: 100%;
        opacity: 1;
        position: absolute;
        top: 0;
        right: 0;
        background-color: $white;
        z-index: -1;
        overflow: hidden;
      }
    }
  }
  &__contact {
    display: flex;
    letter-spacing: 0.02em;
    margin-right: 32px;
    font-weight: 600;
    @include d(768px) {
      margin-right: 15px;
    }
    @include d(575px) {
      font-size: 12px;
    }
  }
  &__phone {
    position: relative;
    margin-right: 35px;
    line-height: 1.2em;
    @include d(768px) {
      margin-right: 0;
    }
    &::after {
      content: "";
      width: 1px;
      height: 14px;
      background-color: $textBlack;
      position: absolute;
      top: 50%;
      right: -20px;
      transform: translate(0, -50%);
      @include d(768px) {
        right: -7px;
        display: none;
      }
    }
  }
  &__hours {
    line-height: 1.2em;
    @include d(768px) {
      display: none;
    }
  }
}
.logo {
  width: 99px;
  margin-right: 20px;
  @include d(768px) {
    margin-right: 0;
  }
}
.nav {
  margin-right: 66px;
  @include d(1366px) {
    margin: 0 10px;
  }
  @include d(1280px) {
    margin: 0 0 30px 0;
    padding: 0 15px 0 0;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }
  a {
    font-weight: 500;
    line-height: 1.2em;
    letter-spacing: 0.02em;
    @include d(1280px) {
      padding: 10px;
    }
    &:not(:last-child) {
      margin-right: 31px;
      @include d(1280px) {
        margin: 0 0 10px 0;
      }
    }
  }
}
.switch {
  width: 131px;
  height: 37px;
  margin-right: 50px;
  background-color: $white;
  border-radius: 48px;
  position: relative;
  overflow: hidden;
  padding: 3px;
  @include d(1366px) {
    margin: 0 10px;
  }
  @include d(1280px) {
    margin: 0 auto 0 10px;
  }
  @include d(768px) {
    border: 1px solid $primary;
  }
  input {
    opacity: 0;
    width: 0;
    height: 0;

    &:checked + .slider:before {
      content: "Офис";
      -webkit-transform: translateX(69px);
      -ms-transform: translateX(69px);
      transform: translateX(69px);
    }
    &:checked + .slider:after {
      content: "Дом";
      -webkit-transform: translateX(-66px);
      -ms-transform: translateX(-66px);
      transform: translateX(-66px);
    }
  }

  .toggler {
    position: absolute;
    cursor: pointer;
    font-weight: bold;
    top: 3px;
    left: 3px;
    right: 3px;
    bottom: 3px;
    background-color: $white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: inherit;
    &::before,
    &::after {
      position: absolute;
      width: 55px;
      height: 31px;
      top: 0;
      bottom: 0;
      border-radius: 34px;
      color: $white;
      font-size: 14px;
      display: flex;
      align-items: center;
      justify-content: center;
      @include d(768px) {
        height: 29px;
      }
    }
    &:before {
      content: "Дом";
      background-color: $primary;
      transition: 0.4s;
      left: 0;
      z-index: 1;
    }
    &:after {
      position: absolute;
      content: "Офис";
      right: 6px;
      background-color: transparent;
      border-radius: 34px;
      color: $textBlack;
      transform: translateX(0);
    }
  }
}
</style>