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

<style lang="scss" scoped>
img {
  width: 13%;
  height: auto;
  vertical-align: middle;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
}
.wrap {
  font-family: 'Noto Sans TC', sans-serif;
  font-weight: 300;
  margin-top: 150px;
  @media screen and (max-width: 768px) {
    margin-top: 100px;
  }
  .cart-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: auto;
    max-width: 1200px;
    width: 100%;
    height: 100%;
    h2 {
      font-size: 40px;
      color: #93a38a;
      position: relative;
      margin-bottom: 40px;
      text-align: center;
      &:after {
        content: "";
        width: 200px;
        border-bottom: 5px dotted #93a38a;
        position: absolute;
        bottom: -50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }
    ul {
      display: flex;
      justify-content: space-around;
      position: relative;
      @media screen and (max-width: 768px) {
        flex-direction: column;
        justify-content: center;
        margin: 0 10px;
      }
      &:before {
        content: "";
        position: absolute;
        bottom: -30px;
        left: 0;
        width: 100%;
        border-top: 3px solid #d6d6ca;
      }
    }
    li {
      background: #949494;
      border-radius: 15px;
      padding: 20px 80px;
      font-size: 22px;
      text-align: center;
      line-height: 30px;
      color: white;
      @media screen and (max-width: 768px) {
        font-size: 18px;
        padding: 10px;
        border-radius: 0px;
      }
      &:first-child {
        background-color: #93a38a;
      }
    }
  }
  .cart-body {
    margin-top: 40px;
    @media screen and (max-width: 768px) {
      margin: 40px 10px 0 10px;
    }
  }
  .box {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #e9f0f3;
    margin: 10px 0;
    @media screen and (max-width: 768px) {
      flex-direction: column;
    }
    h3 {
      font-weight: 500;
      font-size: 26px;
      color: #949494;
      position: relative;
      margin: 50px 0;
      text-align: center;
      @media screen and (max-width: 768px) {
        margin: 10px 0;
      }
    }
    h4 {
      font-size: 26px;
      color: #949494;
      position: relative;
      margin: 50px 0;
      text-align: center;
      @media screen and (max-width: 768px) {
        margin: 10px 0;
      }
    }
    small {
      font-size: 16px;
      color: #d67675;
    }
    .count {
      display: flex;
      margin: 20px 0;
      align-items: center;
      button {
        width: 30px;
        height: 30px;
        border: none;
        background-color: #d6d6ca;
        svg {
          transition: .3s ease-in-out;
          color: #949494;
        }
        &:hover svg {
          transform: scale(1.2);
        }
      }
      input {
        width: 150px;
        height: 30px;
        text-align: center;
        border: 1px solid #d6d6ca;
        font-size: 20px;
        color: #949494;
      }
    }
    .cart-del {
      background-color: transparent;
      border: none;
      font-size: 20px;
      color: #d67675;
      transition: .3s ease-in-out;
      margin-right: 30px;
      &:hover {
        transform: scale(1.1);
      }
    }
  }
  .box-footer {
    display: flex;
    justify-content: space-between;
    position: relative;
    margin: 40px 0;
    @media screen and (max-width: 768px) {
      flex-direction: column;
      margin: 40px 0 0 0;
    }
    &:before {
      content: "";
      position: absolute;
      top: -20px;
      left: 0;
      width: 100%;
      border-top: 3px solid #d6d6ca;
    }
    .coupon {
      display: flex;
      @media screen and (max-width: 768px) {
        justify-content: center;
      }
      input {
        font-weight: 300;
        width: 60%;
      }
      button {
        font-weight: 300;
        margin-left: 10px;
        border: none;
        background-color: #d6d6ca;
        color: #949494;
        transition: .3s ease-in-out;
        border-radius: 3px;
        &:hover {
          transform: scale(1.1);
        }
      }
    }
    .price {
      display: flex;
      @media screen and (max-width: 768px) {
        justify-content: center;
        text-align: center;
        margin: 10px 5px;
        font-size: 22px;
      }
      strong {
        color: #d67675;
        margin-left: 30px;
      }
    }
  }
  .cart-footer {
    display: flex;
    justify-content: center;
    margin: auto;
    padding-bottom: 30px;
    @media screen and (max-width: 768px) {
      flex-direction: column;
      align-items: center;
    }
    a {
      text-decoration: none;
      color: white;
      font-size: 22px;
      background-color: #93a38a;
      width: 200px;
      border-radius: 10px;
      text-align: center;
      padding: 20px 0;
      margin-left: 30px;
      transition: .3s ease-in-out;
      @media screen and (max-width: 768px) {
        margin: 10px 0 0 0;
      }
      &:hover {
        transform: scale(1.1);
      }
      &:first-child {
        background-color: #949494;
      }
    }
  }
}
</style>

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
        this.isLoading = false;
        this.products = res.data.products;
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
      const coupon = {
        code: this.coupon_code,
      };
      this.isLoading = true;
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