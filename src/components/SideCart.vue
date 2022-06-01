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
        <template v-for="i in cart.carts" :key="i.id">
          <!-- 問題：length=0時不會顯示 -->
          <div class="icon-null" v-if="cart.carts.length == 0">來點好運</div>
          <div class="icon-num" v-else>
            {{ cart.carts.length }}
          </div>
        </template>
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
                ><i class="bi bi-x"></i
              ></a>
            </div>
            <!-- <h3 v-if="cart.length == 0">購物車目前空空的</h3> -->
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
                :disabled="status.loadingItem === item.id"
                @click="removeCartItem(item.id)"
              >
                <font-awesome-icon :icon="['fas', 'trash-can']" />
              </button>
            </div>
            <div class="cart-footer">
              <h4>小計</h4>
              <h5>${{ $filters.currency(cart.total) }}元</h5>
            </div>
            <div class="cart-checkout">
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
export default {
  data() {
    return {
      sideCart: "",
      products: [],
      product: {},
      status: {
        loadingItem: "", //對應品項id
      },
      cart: {},
    };
  },
  methods: {
    tooglesideCart() {
      this.sideCart = !this.sideCart;
    },
    getCart() {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
      this.isLoading = true;
      this.$http.get(url).then((res) => {
        this.cart = res.data.data;
        this.isLoading = false;
      });
    },
    removeCartItem(id) {
      this.status.loadingItem = id;
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${id}`;
      this.$http.delete(url).then((res) => {
        this.$httpMessageState(res, "移除購物車品項");
        this.status.loadingItem = "";
        this.getCart();
      });
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