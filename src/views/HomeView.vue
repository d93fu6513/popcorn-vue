<template>
    <Header></Header>
    <Banner></Banner>
    <Sale></Sale>
    <UserCart></UserCart>
    <Banner2></Banner2>
    <About></About>
    <Qa></Qa>
    <Footer></Footer>
    <ToastMessages></ToastMessages>
    <router-view/>
</template>

<script>
import Header from '@/components/Header.vue';
import Banner from '@/components/Banner.vue';
import Sale from '@/views/Sale.vue';
import UserCart from '@/views/UserCart.vue';
import About from '@/views/About.vue';
import Banner2 from '@/components/Banner2.vue';
import Qa from '@/views/Qa.vue';
import Footer from '@/components/Footer.vue';
import emitter from "@/methods/emitter";
import ToastMessages from "@/components/ToastMessages.vue";

export default {
  components: {
    Header,
    Banner,
    Sale,
    UserCart,
    Banner2,
    About,
    Qa,
    Footer,
    ToastMessages,
  },
  provide() { //內層元件都能用外層的功能+inject
    return {
      emitter,
    };
  },
  created () {
  }
}
</script>
