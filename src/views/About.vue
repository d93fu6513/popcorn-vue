<template>
    <Header></Header>
    <Banner></Banner>
    <Info></Info>
    <Qa></Qa>
    <Footer></Footer>
    <router-view/>
</template>

<script>
import Header from '@/components/Header.vue';
import Banner from '@/components/Banner.vue';
import Info from '@/components/Info.vue';
import Qa from '@/components/Qa.vue';
import Footer from '@/components/Footer.vue';

export default {
  components: {
    Header,
    Banner,
    Info,
    Qa,
    Footer,
  },
  created () {
  }
}
</script>
