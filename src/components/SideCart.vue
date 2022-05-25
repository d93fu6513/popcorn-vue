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
          <div class="icon-null" v-if="cart.carts.length === 0">來點好運</div>
          <div class="icon-num" v-else>
            {{ cart.carts.length }}
          </div>
        </template>
      </div>
      <!-- 購物車列表 -->
      <transition name="sideCart">
        <div class="cart-wrap" v-show="sideCart">
          <div class="cart-container">
            <div class="cart-header">
              <h2>
                <font-awesome-icon :icon="['fas', 'cart-shopping']" />
                好運購物車
              </h2>
              <a href="" @click.prevent="tooglesideCart"
                ><i class="bi bi-x"></i
              ></a>
            </div>
            <div class="cart-item" v-for="item in cart.carts" :key="item.id">
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
                <font-awesome-icon :icon="['fas', 'trash-can']" />
              </button>
            </div>
            <div class="cart-footer">
              <h5>小計</h5>
              <h4>${{ $filters.currency(cart.total) }}元</h4>
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
.icon-null {
  position: fixed;
  right: 50px;
  bottom: 190px;
  z-index: 2;
  border: none;
  background-color: #d67675;
  width: 56px;
  height: 56px;
  font-size: 18px;
  padding: 10px;
  color: white;
  border-radius: 10px;
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
  .cart-header a {
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
    border: none;
    border-radius: 10px;
    font-size: 26px;
    background-color: #d67675;
    transition: 0.3s;
    text-align: center;
    padding: 10px 0;
    a{
      text-decoration: none;
      color: white;
    }
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