<template>
  <Loading :active="isLoading"></Loading>
  <SideCart></SideCart>
  <div class="product-container">
    <ol class="breadcrumb">
      <li>
        <router-link to="/">首頁</router-link>
      </li>
      <li>
        <router-link to="/product/index">好運商品</router-link>
      </li>
      <li>
        {{ product.title }}
      </li>
    </ol>
    <div class="box">
      <div class="banner">
        <Swiper
          :style="{
            '--swiper-navigation-color': '#fff',
            '--swiper-pagination-color': '#fff',
          }"
          :loop="false"
          :thumbs="{ swiper: thumbsSwiper }"
          :navigation="true"
          :autoplay="{
            delay: 3500,
            disableOnInteraction: false,
          }"
          :direction="'horizontal'"
          class="mySwiper2"
        >
          <SwiperSlide>
            <img
              :src="product.imageUrl"
              :alt="product.title"
              class="img-fluid"
            />
          </SwiperSlide>
          <SwiperSlide v-for="(image, key) in product.images" :key="image">
            <img
              :src="image"
              :alt="`${product.title} ${key}`"
              class="img-fluid"
            />
          </SwiperSlide>
        </Swiper>
        <Swiper
          @swiper="setThumbsSwiper"
          :loop="false"
          :slidesPerView="4"
          :spaceBetween="10"
          :watchSlidesVisibility="true"
          :watchSlidesProgress="true"
          :direction="'horizontal'"
          class="mySwiper"
        >
          <SwiperSlide>
            <img
              :src="product.imageUrl"
              :alt="product.title"
              class="img-fluid"
            />
          </SwiperSlide>
          <SwiperSlide v-for="(image, key) in product.images" :key="image">
            <img
              :src="image"
              :alt="`${product.title} ${key}`"
              class="img-fluid"
            />
          </SwiperSlide>
        </Swiper>
      </div>
      <div class="text">
        <h2>{{ product.title }}</h2>
        <h3>{{ product.description }}</h3>
        <h4>{{ product.content }}</h4>
        <h5>${{ product.origin_price }} 元 / {{ product.unit }}</h5>
        <div class="count">
          <button @click="minus">
            <font-awesome-icon :icon="['fas', 'minus']" />
          </button>
          <input type="number" min="1" :value="count" />
          <button @click="plus">
            <font-awesome-icon :icon="['fas', 'plus']" />
          </button>
        </div>
        <button class="add-cart" @click="addToCart(product.id)">
          <font-awesome-icon :icon="['fas', 'cart-plus']" /> 購物車
        </button>
      </div>
    </div>
  </div>
  <Qa></Qa>
</template>

<script>
import SideCart from "@/components/SideCart.vue";
import Qa from "@/components/Qa.vue";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import "swiper/scss/thumbs";
import { Swiper, SwiperSlide } from "swiper/vue";
import SwiperCore, {
  Navigation,
  Thumbs,
  Autoplay,
  Pagination,
} from "swiper/core";
SwiperCore.use([Navigation, Thumbs, Autoplay, Pagination]);
export default {
  components: {
    Swiper,
    SwiperSlide,
    SideCart,
    Qa,
  },
  data() {
    return {
      product: {},
      id: "",
      count: 1,
      thumbsSwiper: null,
    };
  },
  methods: {
    setThumbsSwiper(swiper) {
      this.thumbsSwiper = swiper;
    },
    plus() {
      this.count += 1;
    },
    minus() {
      if (this.count > 1) {
        this.count -= 1;
      }
    },
    getProduct() {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/product/${this.id}`;
      this.isLoading = true;
      this.$http.get(api).then((response) => {
        this.isLoading = false;
        if (response.data.success) {
          this.product = response.data.product;
        }
      });
    },
    addToCart(id) {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
      this.isLoading = true;
      const cart = {
        product_id: id,
        qty: this.count,
      };
      this.$http.post(url, { data: cart }).then((res) => {
        this.isLoading = false;
        this.$httpMessageState(res, "加入購物車");
        //因為無法自動更新購物車，要另外重新整理，所以先跳回產品頁
        this.$router.push("/product/index");
      });
    },
  },
  created() {
    this.id = this.$route.params.productId;
    this.getProduct();
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/viewsScss/_productItem";
</style>