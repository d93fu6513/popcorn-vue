<template>
  <Loading :active="isLoading"></Loading>
  <div class="wrap">
    <div class="container">
      <div class="sideicon">
        <button class="sidecarticon" @click="tooglesideCart">
          <img src="../assets/images/popcronman.gif" alt="" srcset="" />
        </button>
        <button class="sidecarticon-back" @click="tooglesideCart">
          查看<br />購物車
        </button>
        <div class="icon-num" v-if="cartLen !== 0">
          {{ cartLen }}
        </div>
        <div class="icon-null" v-else>來點好運</div>
      </div>
      <transition name="sideCart">
        <div class="cart-wrap" v-show="sideCart">
          <div class="cart-container">
            <div class="cart-header">
              <h2>
                <font-awesome-icon :icon="['fas', 'cart-shopping']" />
                好運購物車
              </h2>
              <a href="#" @click.prevent="tooglesideCart"
                ><font-awesome-icon :icon="['fas', 'xmark']"
              /></a>
            </div>
            <h3 v-if="cartLen === 0">購物車目前空空的</h3>
            <div class="cart-item" v-for="item in cart.carts" :key="item.id">
              <div class="cart-photo">
                <img :src="item.product.imageUrl" alt="" />
              </div>
              <div class="cart-text">
                <h3>{{ item.product.title }}</h3>
                <div class="num">
                  <h4>{{ item.qty }} / {{ item.product.unit }}</h4>
                  <h4>${{ $filters.currency(item.total) }}元</h4>
                </div>
              </div>
              <button
                type="button"
                class="cart-del"
                :disabled="loadingItem === item.id"
                @click="removeCartItem(item.id)"
              >
                <font-awesome-icon
                  :icon="['fas', 'spinner']"
                  v-if="loadingItem === item.id"
                />
                <font-awesome-icon :icon="['fas', 'trash-can']" v-else />
              </button>
            </div>
            <div class="cart-footer" v-if="cartLen !== 0">
              <h4>小計</h4>
              <h5>${{ $filters.currency(cart.total) }}元</h5>
            </div>
            <div class="cart-checkout" v-if="cartLen !== 0">
              <router-link to="/final/cart">
                <font-awesome-icon :icon="['fas', 'cart-shopping']" /> 結帳
              </router-link>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'pinia';
import statusStore from '@/stores/statusStore';
import cartStore from '@/stores/cartStore';

export default {
  data() {
    return {
      sideCart: "",
    };
  },
  computed: {
    ...mapState(statusStore, ['isLoading', 'loadingItem']),
    ...mapState(cartStore, ['cart', 'cartLen']),
  },
  methods: {
    ...mapActions(cartStore, ['getCart', 'removeCartItem']),

    tooglesideCart() {
      this.sideCart = !this.sideCart;
    },
  },
  created() {
      this.getCart();
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/componentsScss/_sidecart";
</style>