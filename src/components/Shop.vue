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

<style lang="scss" scoped>
img {
  width: 100%;
  height: 356px;
  vertical-align: middle;
}
.wrap {
  font-family: "Noto Sans TC", sans-serif;
  font-weight: 300;
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
      &:after {
        content: "";
        width: 200px;
        border-bottom: 5px dotted #93a38a;
        position: absolute;
        bottom: -50%;
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
    transition: .5s ease-in-out;
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
    margin: 10px;
    overflow: hidden;
    box-shadow: 0 0 5px #93a38a;
    border-radius: 5px;
    transition: .3s ease-in-out;
    @media screen and (max-width: 768px) {
      width: 100%;
      margin: 0 0 20px 0;
    }
    &:hover {
      box-shadow: 0 0 10px #93a38a;
    }
    img {
      transition: .5s ease-in-out;
      &:hover {
        transform: scale(1.05);
      }
    }

    h3 {
      font-weight: 500;
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
      font-weight: 500;
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
    font-weight: 300;
    width: 150px;
    border: 1px solid #93a38a;
    border-radius: 5px;
    background-color: transparent;
    color: #93a38a;
    font-size: 20px;
    transition: .5s ease-in-out;
    &:hover {
      background-color: #93a38a;
      color: white;
    }
  }
}
</style>

<script>
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
      const cart = {
        product_id: id,
        qty: 1,
      };
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
      this.status.loadingItem = id;
      this.$http.post(url, { data: cart }).then((res) => {
        this.status.loadingItem = "";
        this.$httpMessageState(res, "加入購物車");
        // 加入購物車後不會自動更新，要另外重新整理
        this.getCart();
      });
    },
  },
  created() {
    this.getProducts();
    this.getCart();
  },
};
</script>