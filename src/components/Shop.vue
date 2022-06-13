<template>
  <Loading :active="isLoading"></Loading>
  <div class="wrap">
    <div class="container" v-motion-slide-visible-once-top>
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
                  :disabled="loadingItem === item.id"
                  @click="addCart(item.id)"
                >
                  <font-awesome-icon
                    :icon="['fas', 'spinner']"
                    v-if="loadingItem === item.id"
                  />
                  <font-awesome-icon :icon="['fas', 'cart-plus']" v-else />
                  購物車
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
                  :disabled="loadingItem === item.id"
                  @click="addCart(item.id)"
                >
                  <font-awesome-icon
                    :icon="['fas', 'spinner']"
                    v-if="loadingItem === item.id"
                  />
                  <font-awesome-icon :icon="['fas', 'cart-plus']" v-else />
                  購物車
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
                  :disabled="loadingItem === item.id"
                  @click="addCart(item.id)"
                >
                  <font-awesome-icon
                    :icon="['fas', 'spinner']"
                    v-if="loadingItem === item.id"
                  />
                  <font-awesome-icon :icon="['fas', 'cart-plus']" v-else />
                  購物車
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
import { mapState, mapActions } from "pinia";
import productStore from "@/stores/productStore";
import statusStore from "@/stores/statusStore";

export default {
  data() {
    return {
      link: "經典款",
    };
  },
  computed: {
    ...mapState(productStore, ['products', 'product', 'cart']),
    ...mapState(statusStore, ['isLoading', 'loadingItem']),
  },
  methods: {
    ...mapActions(productStore, ['getProducts','addCart']),

    getProduct(id) {
      this.$router.push(`/product/product/${id}`);
    },
  },
  created() {
    this.getProducts();
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/componentsScss/_shop";
</style>