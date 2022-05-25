<template>
  <Loading :active="isLoading"></Loading>
  <SideCart></SideCart>
  <div class="product-container">
    <ol class="breadcrumb">
      <li>
        <router-link to="/">首頁</router-link>
      </li>
      <li>
        <router-link to="/product/cart">好運商品</router-link>
      </li>
      <li>
        {{ product.title }}
      </li>
    </ol>
    <div class="box">
      <div class="banner">
        <!-- Swiper下方小圖無法運作 -->
      <swiper
        :style="{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }"
        :spaceBetween="10"
        :navigation="true"
        :thumbs="{ swiper: thumbsSwiper }"
        :modules="modules"
        :autoplay="{
          delay: 2500,
          disableOnInteraction: false,
        }"
        class="mySwiper2"
      >
        <swiper-slide>
          <img :src="product.imageUrl" />
        </swiper-slide>
        <swiper-slide>
          <img :src="product.images" />
        </swiper-slide>
        <swiper-slide>
          <img :src="product.images" />
        </swiper-slide>
        <swiper-slide>
          <img :src="product.images" />
        </swiper-slide>
      </swiper>
      <swiper
        @swiper="setThumbsSwiper"
        :spaceBetween="10"
        :slidesPerView="4"
        :freeMode="true"
        :watchSlidesProgress="true"
        :modules="modules"
        class="mySwiper"
      >
        <swiper-slide>
          <img :src="product.imageUrl" />
        </swiper-slide>
        <swiper-slide>
          <img :src="product.images" />
        </swiper-slide>
        <swiper-slide>
          <img :src="product.images" />
        </swiper-slide>
        <swiper-slide>
          <img :src="product.images" />
        </swiper-slide>
      </swiper>
      </div>
      <div class="text">
        <h2>{{ product.title }}</h2>
        <h3>{{ product.description }}</h3>
        <h4>{{ product.content }}</h4>
        <h5>${{ product.origin_price }} 元 / {{ product.unit }}</h5>        
        <div class="count">
          <button @click="minus"><font-awesome-icon :icon="['fas', 'minus']" /></button>
          <input type="number" min="1" :value="count">
          <button @click="plus"><font-awesome-icon :icon="['fas', 'plus']" /></button>
        </div>
          <button class="add-cart" @click="addToCart(product.id)"><font-awesome-icon :icon="['fas', 'cart-plus']" /> 購物車</button>              
      </div>
      </div>
  </div>
  <Qa></Qa>
</template>

<style lang="scss" scoped>
.product-container {
  padding-top: 150px;
  max-width: 1200px;
  width: 100%;
  height: 100%;
  margin: auto;
  @media screen and (max-width: 768px) {
      padding-top: 90px;
    }
}
.breadcrumb {
  font-size: 18px;
  @media screen and (max-width: 768px) {
      margin: 20px 20px;
    }
  li {
    a {
      text-decoration: none;
      color: #5c5e66;
    }
    & + li:before {
      content: ">";
      margin: 0 10px;
      color: #5c5e66;
    }
    &:last-child {
      color: #93a38a;
    }
    &:hover a {
      border-bottom: 1px solid #5c5e66;
    }
  }
}
.box{
  display: flex;
  @media screen and (max-width: 768px) {
      flex-direction: column;
    }
}
.text{
  margin-left: 20px;
  @media screen and (max-width: 768px) {
      margin: 10px 20px;
    }
  h2{
    font-size: 38px;
    color: #5c5e66;
    position: relative;
    &:after{
      content: '';
      width: 100%;
      border-bottom: 2px solid #d6d6ca;
      position: absolute;
      bottom: -20px;
      left: 0;
    }
  }
  h3{
    width: 400px;
    font-size: 20px;
    color: white;
    background-color: #93a38a;
    text-align: center;
    border-radius: 7px;
    margin-top: 40px;
    padding: 10px 0;
    @media screen and (max-width: 768px) {
      width: 100%;
    }
  }
  h4{
    margin: 20px 0;
    font-size: 20px;
    color: #5c5e66;
    line-height: 28px;
  }
  h5{
    font-size: 38px;
    color: #d67675;
  }
  .count{
    display: flex;
    margin: 20px 0;
    align-items: center;
    button{
      width: 50px;
      height: 50px;
      border: none;
      background-color: #d6d6ca;
      svg{
        transition: 0.3s;
      }
      &:hover svg{
        transform: scale(1.7);
      }
    }
    input{
      width: 250px;
      height: 50px;
      text-align: center;
      border: 1px solid #d6d6ca;
      font-size: 20px;
    }
  }
  .add-cart {
    width: 350px;
    border: 1px solid #93a38a;
    border-radius: 7px;
    background-color: transparent;
    color: #93a38a;
    font-size: 20px;
    transition: 0.5s;
    padding: 10px 0;
    &:hover {
      background-color: #93a38a;
      color: white;
    }
  }
}
.banner{
  width: 400px;
  @media screen and (max-width: 768px) {
      width: 100%;
    }

.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  background: #fff;

  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.swiper {
  width: 100%;
  height: 300px;
  margin-left: 0;
}

.swiper-slide {
  background-size: cover;
  background-position: center;
}

.mySwiper2 {
  height: 300px;
  width: 100%;
}

.mySwiper {
  width: 100%;
  height: 100px;
  box-sizing: border-box;
  padding: 10px 0;
}

.mySwiper .swiper-slide {
  width: 25%;
  height: 100%;
  opacity: 0.4;
}

.mySwiper .swiper-slide-thumb-active {
  opacity: 1;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
}

</style>


<script>
import SideCart from '@/components/SideCart.vue';
import Qa from '@/components/Qa.vue';

import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { Autoplay, FreeMode, Navigation, Thumbs } from "swiper";
export default {
  components: {
    Swiper,
    SwiperSlide,
    SideCart,
    Qa,
  },
  data() {
    return {
      product: {},
      id: "",
      count:1 ,
    };
  },
  methods: {
    plus(){
      this.count += 1;
    },
    minus(){
      if(this.count > 1){
        this.count -= 1;
      }
    },
    getProduct() {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/product/${this.id}`;
      this.isLoading = true;
      this.$http.get(api).then((response) => {
        console.log(response.data);
        this.isLoading = false;
        if (response.data.success) {
          this.product = response.data.product;
        }
      });
    },
    addToCart(id) {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
      // 無法運作
      // this.isLoading = true; 
      const cart = {
        product_id: id,
        qty: this.count,
      };
      this.$http.post(url, { data: cart }).then((res) => {
        // 無法運作
        // this.isLoading = false;
        this.$httpMessageState(res, '加入購物車');
        //無法自動更新購物車，要另外重新整理
      });
    },
  },
  setup() {
    let thumbsSwiper = null;

    const setThumbsSwiper = (swiper) => {
      thumbsSwiper = swiper;
    };

    return {
      modules: [Autoplay, FreeMode, Navigation, Thumbs],
    };
  },
  
  created() {
    this.id = this.$route.params.productId;
    this.getProduct();
  },
};
</script>