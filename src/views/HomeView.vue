<template>
    <Header></Header>
    <Banner></Banner>
    <Sale></Sale>
    <Shop></Shop>
    <Footer></Footer>

</template>

<script>
import Header from '@/components/Header.vue'
import Banner from '@/components/Banner.vue'
import Sale from '@/components/Sale.vue'
import Shop from '@/components/Shop.vue'
import Footer from '@/components/Footer.vue'

export default {
  components: {
    Header,
    Banner,
    Sale,
    Shop,
    Footer,
  },
  created () {
  }
}
</script>
