<template>
  <Loading :active="isLoading"></Loading>
  <div class="wrap">
    <div class="container" v-motion-slide-visible-top>
      <h2>好運商品</h2>
      <div class="shopnav">
        <a
          href=""
          :class="{ active: link === '經典款' }"
          @click.prevent="link = '經典款'"
        >
          <font-awesome-icon :icon="['fas', 'store']" />
          經典款
        </a>
        <a
          href=""
          :class="{ active: link === '露營款' }"
          @click.prevent="link = '露營款'"
        >
          <font-awesome-icon :icon="['fas', 'tent']" />
          露營款</a
        >
        <a
          href=""
          :class="{ active: link === '限量款' }"
          @click.prevent="link = '限量款'"
        >
          <font-awesome-icon :icon="['fas', 'gem']" />
          限量款</a
        >
      </div>
      <div class="shopbody">
        <template v-for="item in products" :key="item.id">
          <transition
            mode="out-in"
            enter-active-class="animate__animated animate__zoomIn animate__fast"
            leave-active-class="animate__animated animate__zoomOut animate__fast"
          >
            <div
              class="item"
              v-show="item.category === '經典款'"
              v-if="link === '經典款'"
            >
              <a href="" @click.prevent="getProduct(item.id)"
                ><img :src="item.imageUrl" alt=""
              /></a>
              <h3>{{ item.title }}</h3>
              <h4>{{ item.description }}</h4>
              <h5>${{ item.price }}元</h5>
              <div class="shopfooter">
                <button
                  type="button"
                  class="intro"
                  @click="getProduct(item.id)"
                >
                  <font-awesome-icon :icon="['fas', 'magnifying-glass']" />
                  查看更多
                </button>
                <button
                  type="button"
                  class="add-cart"
                  :disabled="status.loadingItem === item.id"
                  @click="addCart(item.id)"
                >
                  <font-awesome-icon :icon="['fas', 'cart-plus']" /> 購物車
                </button>
              </div>
            </div>
            <div
              class="item"
              v-show="item.category === '露營款'"
              v-else-if="link === '露營款'"
            >
              <a href="" @click.prevent="getProduct(item.id)"
                ><img :src="item.imageUrl" alt=""
              /></a>
              <h3>{{ item.title }}</h3>
              <h4>{{ item.description }}</h4>
              <h5>${{ item.price }}元</h5>
              <div class="shopfooter">
                <button
                  type="button"
                  class="intro"
                  @click="getProduct(item.id)"
                >
                  <font-awesome-icon :icon="['fas', 'magnifying-glass']" />
                  查看更多
                </button>
                <button
                  type="button"
                  class="add-cart"
                  :disabled="status.loadingItem === item.id"
                  @click="addCart(item.id)"
                >
                  <font-awesome-icon :icon="['fas', 'cart-plus']" /> 購物車
                </button>
              </div>
            </div>
            <div
              class="item"
              v-show="item.category === '限量款'"
              v-else-if="link === '限量款'"
            >
              <a href="" @click.prevent="getProduct(item.id)"
                ><img :src="item.imageUrl" alt=""
              /></a>
              <h3>{{ item.title }}</h3>
              <h4>{{ item.description }}</h4>
              <h5>${{ item.price }}元</h5>
              <div class="shopfooter">
                <button
                  type="button"
                  class="intro"
                  @click="getProduct(item.id)"
                >
                  <font-awesome-icon :icon="['fas', 'magnifying-glass']" />
                  查看更多
                </button>
                <button
                  type="button"
                  class="add-cart"
                  :disabled="status.loadingItem === item.id"
                  @click="addCart(item.id)"
                >
                  <font-awesome-icon :icon="['fas', 'cart-plus']" /> 購物車
                </button>
              </div>
            </div>
          </transition>
        </template>
      </div>
    </div>
  </div>
</template>

<script>

import emitter from '@/methods/emitter';

export default {
  data() {
    return {
      link: "經典款",
      products: [],
      product: {},
      status: {
        loadingItem: "", //對應品項id
      },
      cart: {},
    };
  },
  methods: {
    getProducts() {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`;
      this.isLoading = true;
      this.$http.get(url).then((res) => {
        this.isLoading = false;
        this.products = res.data.products;
      });
    },
    getProduct(id) {
      //查看更多
      this.$router.push(`/product/product/${id}`);
    },
    getCart() {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
      this.isLoading = true;
      this.$http.get(url).then((res) => {
        this.cart = res.data.data;
        this.isLoading = false;
      });
    },
    addCart(id) {
      //加入購物車
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
      const cart = {
        product_id: id,
        qty: 1,
      };
      this.status.loadingItem = id;
      this.$http.post(url, { data: cart }).then((res) => {
      this.status.loadingItem = "";
      this.$httpMessageState(res, "加入購物車");
      // 加入購物車後不會自動更新，要另外重新整理
      emitter.emit('sendCart', this.cart);
      });
    },
  },
  created() {
    this.getProducts();
    this.getCart();
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/componentsScss/_shop";
</style>