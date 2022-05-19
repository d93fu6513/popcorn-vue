<template>
  <div class="wrap">
    <div class="container">
      <h2>好運商品</h2>
      <div class="shopnav">
        <a style="margin-bottom:20px"
          href=""
          :class="{ 'active': link === '經典款' }"
          @click.prevent="link = '經典款'"
        >
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            xmlns:a="http://ns.adobe.com/AdobeSVGViewerExtensions/3.0/"
            x="0px"
            y="0px"
            viewBox="0 0 293 355"
            enable-background="new 0 0 293 355"
          >
            <defs></defs>
            <path
              d="M145.875,13.686c8.589-18.971,45.8-17.54,53.993,0.75c18.129,1.869,27.671,12.324,29.996,29.996
	c13.987,4.761,24.358,13.137,25.497,30.746c9.312,2.747,17.83,7.449,22.496,15.748c1.738,3.09,1.67,7.378,3.75,11.249
	c3.656,6.801,10.992,9.657,11.25,18.747c0.291,10.322-7.541,20.483-20.248,20.248c-10.801,70.191-18.454,143.523-30.746,212.224
	c-60.518,2.496-131.458,2.496-191.976,0C38.295,284.496,29.6,212.7,19.892,141.92c-22.12,1.893-26.765-32.237-8.999-38.995
	C13.928,88.463,21.914,78.95,36.39,75.928c1.711-17.286,10.479-27.516,26.247-30.746c2.35-17.897,11.722-28.773,29.996-30.746
	C100.208-3.75,137.979-5.579,145.875,13.686z M107.63,13.686c-4.022,2.823-5.833,9.609-9.749,11.249
	c-3.334,1.396-7.274,0.042-9.749,0.75C77.05,28.854,73.126,39.946,73.134,53.431C54.92,55.758,46.267,64.895,46.138,84.927
	c-12.154,1.595-21.575,5.921-23.997,17.248c13.249,0,26.497,0,39.745,0c1.399-8.046,11.63-6.537,13.498,0
	c12.749,0,25.497,0,38.245,0c2.138-8.094,11.642-6.201,14.248,0c12.749,0,25.497,0,38.245,0c1.348-8.323,11.563-6.251,13.498,0
	c12.748,0,25.497,0,38.245,0c1.497-7.946,11.64-6.527,13.499,0c12.998,0,25.996,0,38.994,0
	c-1.248-13.996-16.508-14.526-25.496-18.748c-1.861-3.643,0.302-5.903,0-8.999c-1.402-14.361-13.18-17.502-25.497-21.747
	c-0.003-17.996-7.104-28.894-26.247-27.746c-5.559-12.787-20.803-19.808-32.996-11.249c-6.382,4.48-7.048,15.388-19.498,11.249
	C135.358,12.668,120.194,4.867,107.63,13.686z M10.893,126.172c2.717,5.531,18.167,4.499,30.746,4.499c73.102,0,139.615,0,211.473,0
	c13.781,0,27.345,1.866,28.498-7.499c1.387-11.266-9.603-10.499-23.248-10.499c-70.99,0-137.267,0.001-206.973,0
	c-11.498,0-29.36-1.357-35.245,0.75C11.44,115.107,7.842,119.963,10.893,126.172z M30.391,143.42
	c9.659,66.33,19.032,132.949,27.747,200.225c58.494,0,116.985,0,175.478,0c8.943-67.797,18.886-134.595,27.746-202.475
	c-76.74,0-153.479,0-230.22,0C30.267,141.296,30.326,142.355,30.391,143.42z"
            />
            <path
              d="M151.875,60.18c-12.731,3.122-6.592-15.812-20.248-16.498c-5.34-0.268-9.519,1.947-12.748,8.999
	c1.515,4.973,5.845,5.204,8.249,9.749c2.383,4.505,4.976,17.668-3.75,15.748c-6.287-1.383-3.532-7.313-5.999-11.249
	c-5.083-8.107-18.26-6.248-21.747,0.75c-3.091,6.204,1.337,10.444-5.25,11.249c-10.094,1.232-4.309-15.847-1.5-19.498
	c5.36-6.967,10.259-7.375,19.498-8.249C111.534,24.821,161.758,31.377,151.875,60.18z"
            />
            <path
              d="M192.37,57.181c3.055-0.341,9.892-0.383,14.998,2.999c3.615,2.395,17.764,25.529,4.499,23.997
	c-7.128-0.823-5.304-15.316-13.498-17.248c-8.032-1.893-13.003,2.126-14.998,5.999c-2.751,5.343,0.56,9.875-4.5,11.249
	c-12.667,3.442-2.765-19.169,0-21.747C181.546,59.935,186.975,57.78,192.37,57.181z"
            />
            <path
              d="M62.636,159.917c11.982-8.683,11.65,26.146,12.748,37.496c3.698,38.206,6.878,71.601,10.499,109.486
	c0.427,4.467,2.89,18.012-3.75,18.747c-9.084,1.007-8.354-31.295-8.999-38.246c-1.272-13.711-3.264-30.243-4.499-42.743
	C65.659,214.521,62.005,186.051,62.636,159.917z"
            />
            <path
              d="M116.629,159.917c11.471-8.91,9.957,20.037,10.499,31.496c1.847,39.082,2.301,80.276,3.75,113.236
	c0.326,7.419,3.396,19.358-3.75,20.247c-9.765,1.215-7.255-29.521-7.499-37.496C118.347,245.557,114.518,199.053,116.629,159.917z"
            />
            <path
              d="M177.372,159.168c3.854,11.817,1.197,26.788,0.75,41.244c-0.896,28.915-1.54,56.1-3,86.988
	c-0.469,9.912,0.796,37.928-6.749,38.246c-8.021,0.339-5.353-11.699-5.25-15.748c0.917-36.244,2.801-72.315,4.5-107.986
	c0.599-12.559-0.823-35.96,3-41.995C171.938,158.083,175.145,158.146,177.372,159.168z"
            />
            <path
              d="M232.116,159.917c0.691,25.842-3.993,55.78-6.749,85.489c-2,21.558-3.712,42.089-5.999,65.242
	c-0.411,4.16-0.434,16.137-7.499,14.248c-7.205-1.927-2.703-27.154-1.5-38.996c2.851-28.058,5.396-56.096,8.249-84.738
	c1.177-11.822,2.707-35.14,5.999-41.245C225.905,157.416,230.537,158.499,232.116,159.917z"
            />
          </svg>
          經典款
        </a>
        <a
          href=""
          :class="{ 'active': link === '露營款' }"
          @click.prevent="link = '露營款'"
        >
          <svg
            viewBox="0 0 24 24"
            xml:space="preserve"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M23.5 22.3 13.1 4.5l1.6-2.8c.2-.5.4-1.1-.1-1.5-.5-.4-.9-.2-1.3.1L12 2.6 10.7.5C10.5.1 10-.3 9.4.1c-.7.5-.6.9-.3 1.4l1.8 3-10.5 18s-.6.7-.3 1.2c.4.4.8.3 1.3.3H10v-6.8c0-1.1.9-2 2-2s2 .9 2 2V24h8.7c.6 0 .9.2 1.2-.4.3-.4-.3-1.3-.4-1.3zM9 22H2.8L4 20h5v2zm3-7.8c-1.7 0-3 1.3-3 3V19H4.6L12 6.2 19.5 19H15v-1.8c0-1.6-1.3-3-3-3zm3 7.8v-2h5l1.2 2H15z"
              class="fill-000000"
            ></path>
          </svg>
          露營款</a
        >
      </div>
      <div class="shopbody">
        <template v-for="item in products" :key="item.id">
          <div
            class="item"
            v-show="item.category === '經典款'"
            v-if="link === '經典款'"
          >
            <a href=""><img :src="item.imageUrl" alt="" /></a>
            <h3>{{ item.title }}</h3>
            <h4>{{ item.description }}</h4>
            <h5>${{ item.price }}元</h5>
            <div class="shopfooter">
            <button
                    type="button"
                    class="intro"
                    @click="getProduct(item.id)"
                  >
                    <i class="bi bi-search"></i> 查看更多
                  </button>
            <button
                    type="button"
                    class="add-cart"
                    :disabled="this.status.loadingItem === item.id"
                    @click="addCart(item.id)"
                  >
                    <i class="bi bi-cart-plus"></i> 購物車
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
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.wrap {
  margin: auto;
  max-width: 1200px;
  width: 100%;
  height: 100%;
  .container {
    h2 {
      font-size: 60px;
      margin: 50px 0;
      text-align: center;
      color: #3d7cfc;
      position: relative;
      @media screen and (max-width: 768px) {
            font-size: 50px;
            margin: 50px 0;
            }
      &:before{
          content: '';
          width: 35%;
          height: 5px;
          background-image: linear-gradient(90deg, #ffffff 0%, #3d7cfc 100%);
          position: absolute;
          top: 25px;
          left: 0;
          border-radius: 3px;
          @media screen and (max-width: 768px) {
            width: 18%;
            }
      }
      &:after{
          content: '';
          width: 35%;
          height: 5px;
          background-image: linear-gradient(270deg, #ffffff 0%, #3d7cfc 100%);
          position: absolute;
          top: 25px;
          right: 0;
          border-radius: 3px;
          @media screen and (max-width: 768px) {
            width: 18%;
            }
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
    padding: 30px 40px;
    border-radius: 20px;
    font-size: 40px;
    color: #93a38a;
    position: relative;
    transition: 0.5s;
    text-decoration: none;
    letter-spacing: 20px;
    @media screen and (max-width: 768px) {
        padding: 30px 40px;
            }
    svg {
      width: 80px;
      margin-right: 20px;
      fill: #93a38a;
      transition: 0.5s;
    }
    &:hover {
      background-color: #93a38a;
      color: white;
      svg {
        fill: white;
      }
      &:after {
        content: "";
        position: absolute;
        bottom: -20px;
        left: 30px;
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
  .active{
      background-color: #93a38a;
      color: white;
      svg {
        fill: white;
      }
      &:after {
        content: "";
        position: absolute;
        bottom: -20px;
        left: 30px;
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
  flex-wrap: wrap;
  margin-top: 30px;
  @media screen and (max-width: 768px) {
        margin-top: 20px;
            }
  .item {
    display: flex;
    flex-direction: column;
    width: 350px;
    height: 100%;
    margin: 20px;
    overflow: hidden;
    box-shadow: 0 0 5px #93a38a;
    border-radius: 5px;
    transition: .3s;
    @media screen and (max-width: 768px) {
        width: 100%;
            margin: 0 0 20px 0;
            }
    &:hover{
        box-shadow: 0 0 10px #93a38a;
    }
    img {
      width: 100%;
      height: 100%;
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
      color: #dd4b8e;
    }
  }
}
.shopfooter{
    display: flex;
    justify-content: space-around;
    height: 50px;
    margin-bottom: 20px;
    .intro,.add-cart{
        width: 150px;
        border: 1px solid #93a38a;
        border-radius: 5px;
        background-color: transparent;
        color: #93a38a;
        font-size: 20px;
        transition: .5s;
        &:hover{
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
      coupon_code: "",
    };
  },
  methods: {
    getProducts() {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`;
      this.isLoading = true;
      this.$http.get(url).then((res) => {
        this.isLoading = false;
        this.products = res.data.products;
        console.log("products:", res);
      });
    },
    getProduct(id) {
      this.$router.push(`/user/product/${id}`);
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
        console.log(res);
        this.getCart();
      });
    },
    getCart() {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
      this.isLoading = true;
      this.$http.get(url).then((response) => {
        console.log(response);
        this.cart = response.data.data;
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
        console.log(res);
        this.status.loadingItem = "";
        this.getCart();
      });
    },
    removeCartItem(id) {
      this.status.loadingItem = id;
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${id}`;
      this.isLoading = true;
      this.$http.delete(url).then((response) => {
        this.$httpMessageState(response, "移除購物車品項");
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