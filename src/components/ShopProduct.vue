<template>
  <Loading :active="isLoading"></Loading>
  <div class="wrap">
    <div class="container">
      <h2>好運商品</h2>
      <div class="sideicon">
        <button class="sidecarticon" @click="tooglesideCart">
          <img src="../assets/images/popcronman.gif" alt="" srcset="" />
        </button>
        <button class="sidecarticon-back" @click="tooglesideCart">
          查看<br />購物車
        </button>
        <template v-for="i in cart.carts" :key="i.id">
          <div class="icon-num" v-if="i.total >= 1">
            {{ cart.carts.length }}
          </div>
          <div class="icon-null" v-else>來點好運</div>
        </template>
      </div>
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
              <button type="button" class="intro" @click="getProduct(item.id)">
                <font-awesome-icon :icon="['fas', 'magnifying-glass']" /> 查看更多
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
            <a href=""><img :src="item.imageUrl" alt="" /></a>
            <h3>{{ item.title }}</h3>
            <h4>{{ item.description }}</h4>
            <h5>${{ item.price }}元</h5>
            <div class="shopfooter">
              <button type="button" class="intro" @click="getProduct(item.id)">
                <font-awesome-icon :icon="['fas', 'magnifying-glass']" /> 查看更多
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
            <a href=""><img :src="item.imageUrl" alt="" /></a>
            <h3>{{ item.title }}</h3>
            <h4>{{ item.description }}</h4>
            <h5>${{ item.price }}元</h5>
            <div class="shopfooter">
              <button type="button" class="intro" @click="getProduct(item.id)">
                <font-awesome-icon :icon="['fas', 'magnifying-glass']" /> 查看更多
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
        </template>
      </div>
    </div>
  </div>
  <!-- 購物車列表 -->
  <transition name="sideCart">
    <div class="cart-wrap" v-show="sideCart">
      <div class="cart-container">
        <div class="cart-header">
          <h2><font-awesome-icon :icon="['fas', 'cart-shopping']" /> 好運購物車</h2>
          <a href="" @click.prevent="tooglesideCart"><i class="bi bi-x"></i></a>
        </div>
        <div
          class="cart-item"
          v-for="item in cart.carts"
          :key="item.id"
        >
          <div class="cart-photo">
            <img :src="item.product.imageUrl" alt="" />
          </div>
          <div class="cart-text">
            <h3>{{ item.product.title }}</h3>
            <div class="num">
              <h5>{{ item.qty }} / {{ item.product.unit }}</h5>
              <h4>${{ $filters.currency(item.total) }}元</h4>
            </div>
          </div>
          <button
            type="button"
            class="cart-del"
            :disabled="status.loadingItem === item.id"
            @click="removeCartItem(item.id)"
          >
            <i class="bi bi-trash3"></i>
          </button>
        </div>
        <div class="cart-footer">
          <h5>小計</h5>
          <h4>${{ $filters.currency(cart.total) }}元</h4>
        </div>
        <button class="cart-checkout"><i class="bi bi-cart"></i> 結帳</button>
      </div>
    </div>
  </transition>
</template>

<style lang="scss" scoped>
img {
  max-width: 100%;
  height: auto;
  vertical-align: middle;
}
.wrap {
  .container {
    margin: auto;
    max-width: 1200px;
    width: 100%;
    height: 100%;
    h2 {
      font-size: 40px;
      color: #93a38a;
      position: relative;
      margin-bottom: 50px;
      text-align: center;
      &:after{
        content: '';
        width: 200px;
        border-bottom: 5px dotted #93a38a;
        position: absolute;
        bottom:-50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
      @media screen and (max-width: 768px) {
        margin-bottom: 40px;
      }
    }
  }
}
.shopnav {
  display: flex;
  justify-content: space-around;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
  a {
    display: flex;
    align-items: center;
    border: 1px solid #93a38a;
    padding: 30px 0px;
    border-radius: 20px;
    font-size: 28px;
    color: #93a38a;
    position: relative;
    transition: 0.5s;
    text-decoration: none;
    letter-spacing: 20px;
    @media screen and (max-width: 768px) {
      margin-bottom: 20px;
      justify-content: center;
    }
    svg {
      width: 80px;
    }
    &:hover {
      background-color: #93a38a;
      color: white;
      &:after {
        content: "";
        position: absolute;
        bottom: -20px;
        left: 90px;
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 20px 20px 0 20px;
        border-color: #93a38a transparent transparent transparent;
        @media screen and (max-width: 768px) {
          display: none;
        }
      }
    }
  }
  .active {
    background-color: #93a38a;
    color: white;
    &:after {
      content: "";
      position: absolute;
      bottom: -20px;
      left: 90px;
      width: 0;
      height: 0;
      border-style: solid;
      border-width: 20px 20px 0 20px;
      border-color: #93a38a transparent transparent transparent;
      @media screen and (max-width: 768px) {
        display: none;
      }
    }
  }
}
.sideicon:hover {
  .sidecarticon {
    transform: perspective(1000px) rotateY(-180deg);
  }
  .sidecarticon-back {
    transform: perspective(1000px) rotateY(0deg);
  }
}
.sidecarticon,
.sidecarticon-back {
  backface-visibility: hidden;
  transition: 1s;
  position: fixed;
  right: -10px;
  bottom: 120px;
  z-index: 2;
  border: none;
  width: 100px;
  height: 100px;
}
.sidecarticon {
  background-color: transparent;
  transform: perspective(1000px) rotateY(0deg);
  @media screen and (max-width: 768px) {
    right: -10px;
    bottom: -10px;
    width: 80px;
    height: 80px;
  }
}
.sidecarticon-back {
  font-size: 22px;
  background-color: #d67675;
  border-radius: 50%;
  color: white;
  transform: perspective(1000px) rotateY(180deg);
  @media screen and (max-width: 768px) {
    display: none;
  }
}
.icon-num {
  position: fixed;
  right: 50px;
  width: 38px;
  height: 38px;
  bottom: 190px;
  z-index: 2;
  border: none;
  background-color: #d67675;
  font-size: 18px;
  padding: 10px;
  color: white;
  border-radius: 50%;
  text-align: center;
  @media screen and (max-width: 768px) {
    bottom: 40px;
    right: 40px;
    width: 28px;
    height: 28px;
    font-size: 18px;
  }
}
// .icon-null {
//   position: fixed;
//   right: 50px;
//   bottom: 190px;
//   z-index: 2;
//   border: none;
//   background-color: #d67675;
//   width: 56px;
//   height: 56px;
//   font-size: 18px;
//   padding: 10px;
//   color: white;
//   border-radius: 10px;
// }
.shopbody {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 30px;
  @media screen and (max-width: 768px) {
    margin-top: 0px;
  }
  .item {
    display: flex;
    flex-direction: column;
    width: 30%;
    height: 100%;
    margin: 10px;
    overflow: hidden;
    box-shadow: 0 0 5px #93a38a;
    border-radius: 5px;
    transition: 0.3s;
    @media screen and (max-width: 768px) {
      width: 100%;
      margin: 0 0 20px 0;
    }
    &:hover {
      box-shadow: 0 0 10px #93a38a;
    }
    img {
      transition: 0.5s;
      &:hover {
        transform: scale(1.05);
      }
    }

    h3 {
      font-size: 36px;
      margin: 20px 0;
      text-align: center;
      color: #93a38a;
    }
    h4 {
      font-size: 18px;
      text-align: center;
      color: #5c5e66;
    }
    h5 {
      font-size: 26px;
      margin: 20px 0;
      text-align: center;
      color: #d67675;
    }
  }
}
.shopfooter {
  display: flex;
  justify-content: space-around;
  height: 50px;
  margin-bottom: 20px;
  .intro,
  .add-cart {
    width: 150px;
    border: 1px solid #93a38a;
    border-radius: 5px;
    background-color: transparent;
    color: #93a38a;
    font-size: 20px;
    transition: 0.5s;
    &:hover {
      background-color: #93a38a;
      color: white;
    }
  }
}
// 購物車樣式
.cart-wrap {
  width: 350px;
  height: 100%;
  background-color: #93a38a;
  position: fixed;
  top: 0px;
  right: 0;
  z-index: 3;
  .cart-container {
    width: 310px;
    margin: 50px 20px;
  }
  h2 {
    font-size: 32px;
    color: white;
    position: relative;
    margin-bottom: 50px;
    &:after {
      content: "";
      position: absolute;
      bottom: -25px;
      left: 0;
      width: 310px;
      border-bottom: 3px solid #bec8b9;
    }
  }
  a {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 50%;
    right: 340px;
    width: 60px;
    height: 120px;
    font-size: 60px;
    background-color: #93a38a;
    color: white;
    border-radius: 10px;
    transition: 0.3s;
    &:hover {
      transform: scale(1.1);
    }
  }
  .cart-item {
    display: flex;
    background-color: rgba($color: white, $alpha: 0.3);
    margin-bottom: 10px;
    transition: 0.3s;
    &:hover {
      transform: scale(1.02);
    }
    .cart-photo {
      width: 30%;
    }
    .cart-text {
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 60%;
      align-items: center;
      h3 {
        font-size: 34px;
        color: white;
        margin-top: 10px;
      }
      .num {
        display: flex;
        margin: 10px 0;
        align-items: center;
      }
    }
    .cart-del {
      background-color: transparent;
      border: none;
      color: #d67675;
      transition: 0.3s;
      &:hover {
        transform: scale(1.1);
      }
    }
  }
  h4 {
    font-size: 26px;
    color: #485741;
  }
  h5 {
    font-size: 18px;
    color: #5c5e66;
    padding-right: 10px;
  }
  .cart-footer {
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    position: relative;
    margin: 50px 0;
    &:before {
      content: "";
      position: absolute;
      top: -25px;
      left: 0;
      width: 310px;
      border-bottom: 3px solid #bec8b9;
    }
  }
  .cart-checkout {
    width: 100%;
    height: 50px;
    border: none;
    border-radius: 10px;
    font-size: 26px;
    background-color: #d67675;
    color: white;
    transition: 0.3s;
    &:hover {
      transform: scale(1.05);
    }
  }
}
.sideCart-enter-active,
.sideCart-leave-active {
  transition: 0.5s;
}

.sideCart-enter-from,
.sideCart-leave-to {
  transform: translateX(500px);
}

.sideCart-enter-to {
  transform: translateX(0);
}
</style>

<script>
export default {
  data() {
    return {
      sideCart: "",
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
    tooglesideCart() {
      this.sideCart = !this.sideCart;
    },
    getProducts() {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`;
      this.isLoading = true;
      this.$http.get(url).then((res) => {
        this.isLoading = false;
        this.products = res.data.products;
      });
    },
    getProduct(id) {
      this.$router.push(`/product/product/${id}`);
    },
    addCart(id) {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
      this.status.loadingItem = id;
      const cart = {
        product_id: id,
        qty: 1,
      };
      this.$http.post(url, { data: cart }).then((res) => {
        this.status.loadingItem = "";
        this.$httpMessageState(res, '加入購物車');
        this.getCart();
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
  },
  created() {
    this.getProducts();
    this.getCart();
  },
};
</script>