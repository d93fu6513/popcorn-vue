<template>
  <Loading :active="isLoading"></Loading>
  <div class="wrap">
    <div class="cart-container">
      <h2>購物車</h2>
      <ul>
        <li>Step1<br />購物內容</li>
        <li>Step2<br />填寫資料</li>
        <li>Step3<br />完成訂單</li>
      </ul>
      <div class="cart-body">
        <div class="box" v-for="item in cart.carts" :key="item.id">
          <img :src="item.product.imageUrl" alt="" />
          <h3>
            {{ item.product.title }}<br /><small v-if="item.coupon"
              >已套用優惠券</small
            >
          </h3>
          <div class="count">
            <button @click="minus(item)">
              <font-awesome-icon :icon="['fas', 'minus']" />
            </button>
            <input
              type="number"
              min="1"
              v-model.number="item.qty"
              @change="updateCart(item)"
            />
            <button @click="plus(item)">
              <font-awesome-icon :icon="['fas', 'plus']" />
            </button>
          </div>
          <h4>${{ item.product.price }}元 / {{ item.product.unit }}</h4>
          <h4>
            <small v-if="cart.final_total !== cart.total">折扣價：</small>
            ${{ $filters.currency(item.final_total) }}元
          </h4>
          <button
            type="button"
            class="cart-del"
            :disabled="status.loadingItem === item.id"
            @click="removeCartItem(item.id)"
          >
            <font-awesome-icon :icon="['fas', 'trash-can']" />
          </button>
        </div>
        <div class="box-footer">
          <div class="coupon">
            <input
              type="text"
              class="form-control"
              v-model="coupon_code"
              placeholder="請輸入優惠碼"
            />
            <button type="button" @click="addCouponCode()">套用優惠碼</button>
          </div>
          <div class="price">
            <h4>總計：${{ $filters.currency(cart.total) }}元</h4>
            <strong v-if="cart.final_total !== cart.total">
              折扣價：${{ $filters.currency(cart.final_total) }}元
            </strong>
          </div>
        </div>
        <div class="cart-footer">
          <router-link to="/product/index">繼續購物</router-link>
          <router-link to="/final/check">下一步</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [],
      product: {},
      status: {
        loadingItem: "", //對應品項id
      },
      cart: {},
      coupon_code: "",
    };
  },
  methods: {
    plus(item) {
      item.qty += 1;
      this.updateCart(item);
    },
    minus(item) {
      if (item.qty > 1) {
        item.qty -= 1;
        this.updateCart(item);
      }
    },
    getProducts() {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`;
      this.isLoading = true;
      this.$http.get(url).then((res) => {
        this.products = res.data.products;
        this.isLoading = false;
      });
    },
    getCart() {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
      this.isLoading = true;
      this.$http.get(url).then((res) => {
        this.cart = res.data.data;
        this.isLoading = false;
      });
    },
    updateCart(item) {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${item.id}`;
      this.isLoading = true;
      this.status.loadingItem = item.id;
      const cart = {
        product_id: item.product_id,
        qty: item.qty,
      };
      this.$http.put(url, { data: cart }).then((res) => {
        this.status.loadingItem = "";
        this.getCart();
      });
    },
    removeCartItem(id) {
      this.status.loadingItem = id;
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${id}`;
      this.isLoading = true;
      this.$http.delete(url).then((res) => {
        this.$httpMessageState(res, "移除購物車品項");
        this.status.loadingItem = "";
        this.getCart();
        this.isLoading = false;
      });
    },
    addCouponCode() {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/coupon`;
      this.isLoading = true;
      const coupon = {
        code: this.coupon_code,
      };      
      this.$http.post(url, { data: coupon }).then((response) => {
        this.$httpMessageState(response, "加入優惠券");
        this.getCart();
        this.isLoading = false;
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
@import "@/assets/css/viewsScss/_finalcart";
</style>