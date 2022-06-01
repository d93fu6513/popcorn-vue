<template>
  <header>
    <div
      class="header-container"
      :class="{ 'header-container-scrolled': scrollNav }"
    >
      <router-link to="/" class="logo">
        <img src="../assets/images/logo.png" alt="logo" />
      </router-link>
      <nav class="header-menu" v-show="!mobile">
        <router-link to="/product/index"
          ><font-awesome-icon :icon="['fas', 'store']" /> 好運商品</router-link
        >
        <router-link to="/about"
          ><font-awesome-icon :icon="['fas', 'circle-info']" />
          關於好運</router-link
        >
        <router-link to="/login"
          ><font-awesome-icon :icon="['fas', 'gear']" /> 好運管理員</router-link
        >
      </nav>
      <div
        class="hamburger-icon"
        v-show="mobile"
        @click="toogleNav"
        :class="{ 'hamburger-icon-active': mobileNav }"
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <transition name="mobile-nav">
        <nav class="mobile-menu" v-show="mobileNav">
          <router-link to="/product/index"
            ><font-awesome-icon :icon="['fas', 'store']" />
            好運商品</router-link
          >
          <router-link to="/about"
            ><font-awesome-icon :icon="['fas', 'circle-info']" />
            關於好運</router-link
          >
          <router-link to="/login"
            ><font-awesome-icon :icon="['fas', 'gear']" />
            好運管理員</router-link
          >
        </nav>
      </transition>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      mobile: "",
      mobileNav: "",
      screenWidth: "",
      scrollNav: "",
    };
  },
  methods: {
    toogleNav() {
      this.mobileNav = !this.mobileNav;
    },
    screenSize() {
      this.screenWidth = window.innerWidth;
      if (this.screenWidth <= 768) {
        this.mobile = true;
        return;
      }
      this.mobile = false;
      this.mobileNav = false;
      return;
    },
    updateScroll() {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 50) {
        this.scrollNav = true;
        return;
      }
      this.scrollNav = false;
    },
  },
  created() {
    window.addEventListener("resize", this.screenSize);
    this.screenSize();
  },
  mounted() {
    window.addEventListener("scroll", this.updateScroll);
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/componentsScss/_header";
</style>
