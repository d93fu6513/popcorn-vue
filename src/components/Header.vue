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
          <router-link to="/product/index"><font-awesome-icon :icon="['fas', 'store']" /> 好運商品</router-link>
          <router-link to="/about"><font-awesome-icon :icon="['fas', 'circle-info']" /> 關於好運</router-link>
          <router-link to="/login"><font-awesome-icon :icon="['fas', 'gear']" /> 好運管理員</router-link>
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
          <router-link to="/product/index"><font-awesome-icon :icon="['fas', 'store']" /> 好運商品</router-link>
          <router-link to="/about"><font-awesome-icon :icon="['fas', 'circle-info']" /> 關於好運</router-link>
          <router-link to="/login"><font-awesome-icon :icon="['fas', 'gear']" /> 好運管理員</router-link>
        </nav>
      </transition>
    </div>
  </header>
</template>

<style lang="scss" scoped>
header {
  width: 100%;
  position: fixed;
  top: 0px;
  z-index: 2;
  font-family: 'Noto Sans TC:wght@100', sans-serif;
}
.header-container {
  background-color: #93a38a;
  display: flex;
  position: relative;
  height: 120px;
  transition: 0.3s ease-in-out;
  @media screen and (max-width: 768px) {    
    height: 70px;
  }
}
.header-container-scrolled {
  height: 70px;
}
.logo {
  display: flex;
  align-items: center;
  padding-left: 30px;
}
.header-menu {
  display: flex;
  align-items: center;
  margin-left: auto;
  padding: 0 40px;
  a {
    color: white;
    margin-left: 20px;
    font-size: 22px;
    text-decoration: none;
    transition: 0.3s ease-in-out;
    padding: 12px 20px;
    border-radius: 4px;
    &:hover {
      background-color: white;
      color: #93a38a;
      transform: scale(1.1);
    }
  }
}

.mobile-menu {
  display: flex;
  flex-direction: column;
  position: absolute;
  width: 100%;
  max-width: 300px;
  height: 100vh;
  background-color: #93a38a;
  top: 70px;
  left: 0;
  z-index: 1;
  text-align: center;
  a {
    color: white;
    font-size: 28px;
    text-decoration: none;
    padding: 30px;
    position: relative;
    &:after {
      content: "";
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0px;
      border-bottom: 1px solid rgba($color: white, $alpha: 0.5);
      margin: 0 30px;
    }
  }
  i {
    margin-right: 8px;
  }
  .bi-megaphone {
    color: #d1411d;
  }
  .bi-shop {
    color: #e07bb6;
  }
  .bi-chat-text {
    color: #d1ce1d;
  }
  .bi-gear {
    color: #1dd1a1;
  }
}

.hamburger-icon {
  display: block;
  width: 25px;
  position: absolute;
  right: 10px;
  top: 50px;
  @media screen and (max-width: 768px) {    
    top: 30px;
  }

  span {
    display: block;
    height: 3px;
    background-color: white;
    position: relative;

    &:nth-child(2) {
      margin-top: 7px;
    }

    &:nth-child(3) {
      margin-top: 7px;
    }
  }
}

.hamburger-icon-active {
  span {
    transform: rotate(45deg);
    top: 10px;

    &:nth-child(2) {
      transform: translateX(100px);
    }

    &:nth-child(3) {
      transform: rotate(-45deg);
      top: -10px;
    }
  }
}

.mobile-nav-enter-active,
.mobile-nav-leave-active {
  transition: 0.5s ease-in-out;
}

.mobile-nav-enter-from,
.mobile-nav-leave-to {
  transform: translateX(-500px);
}

.mobile-nav-enter-to {
  transform: translateX(0);
}
</style>

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