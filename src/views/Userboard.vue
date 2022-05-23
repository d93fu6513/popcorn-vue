<template>
  <Header></Header>
  <router-view />
  <Footer></Footer>
  <ToastMessages></ToastMessages>
  
</template>

<script>
import Header from '@/components/Header.vue';
import Banner from '@/components/Banner.vue';
import Sale from '@/views/Sale.vue';
import UserCart from '@/views/UserCart.vue';
import Footer from '@/components/Footer.vue';
import emitter from "../methods/emitter";
import ToastMessages from "../components/ToastMessages.vue";

export default {
  components: {
    Header,
    Banner,
    Sale,
    UserCart,
    Footer,
    ToastMessages,
  },
  provide() {
    //內層元件都能用外層的功能+inject
    return {
      emitter,
    };
  },
  created() {},
};
</script>