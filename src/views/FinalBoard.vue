<template>
  <Header></Header>
  <Footer></Footer>
  <ToastMessages></ToastMessages>  
  <router-view />
</template>

<script>

import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import emitter from "@/methods/emitter";
import ToastMessages from "@/components/ToastMessages.vue";

export default {
  components: {
    Header,
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