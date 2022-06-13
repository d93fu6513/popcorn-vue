<template>
  <Header></Header>
  <router-view />
  <Footer></Footer>
  <ToastMessages></ToastMessages>  
</template>

<script>

import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import ToastMessages from "@/components/ToastMessages.vue";

export default {
  components: {
    Header,
    Footer,
    ToastMessages,
  },
    
}
</script>