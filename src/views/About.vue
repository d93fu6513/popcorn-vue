<template>
    <Header></Header>
    <Banner></Banner>
    <SideCart></SideCart>
    <Info></Info>
    <Qa></Qa>
    <Footer></Footer>
    <router-view/>
</template>

<script>
import Header from '@/components/Header.vue';
import Banner from '@/components/Banner.vue';
import SideCart from '@/components/SideCart.vue';
import Info from '@/components/Info.vue';
import Qa from '@/components/Qa.vue';
import Footer from '@/components/Footer.vue';

export default {
  components: {
    Header,
    Banner,
    SideCart,
    Info,
    Qa,
    Footer,
  },
  created () {
  }
}
</script>
