<template>
    <Header></Header>
    <Banner></Banner>
    <Sale v-motion-slide-visible-left :delay="200"></Sale>
    <SideCart></SideCart>
    <Shop></Shop>
    <Banner2 v-motion-fade-visible :delay="200"></Banner2>
    <Info></Info>
    <Qa v-motion-fade-visible :delay="200"></Qa>
    <Footer></Footer>
    <ToastMessages></ToastMessages>
    <router-view/>
</template>

<script>
import Header from '@/components/Header.vue';
import Banner from '@/components/Banner.vue';
import Sale from '@/views/Sale.vue';
import Shop from '@/components/Shop.vue';
import SideCart from '@/components/SideCart.vue';
import Banner2 from '@/components/Banner2.vue';
import Info from '@/components/Info.vue';
import Qa from '@/components/Qa.vue';
import Footer from '@/components/Footer.vue';
import emitter from "@/methods/emitter";
import ToastMessages from "@/components/ToastMessages.vue";

export default {
  components: {
    Header,
    Banner,
    Sale,
    Shop,
    SideCart,
    Banner2,
    Info,
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
