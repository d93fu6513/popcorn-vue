<template>
  <div class="wrap">
    <div class="container">
      <h2>常見問題</h2>
      <div class="item">
        <div class="title" @click="isOpenA = !isOpenA">
          <font-awesome-icon :icon="['fas', 'circle-question']" />
          好運爆米花素食可以食用嗎？
        </div>
        <transition>
          <div class="text" v-show="isOpenA">
            好運的產品有分全素、五辛蛋奶素、非素食，詳情再麻煩請見產品說明。
          </div>
        </transition>
      </div>
      <div class="item">
        <div @click="isOpenB = !isOpenB" class="title">
          <font-awesome-icon :icon="['fas', 'circle-question']" />
          好運爆米花運送方式？
        </div>
        <transition>
          <div class="text" v-show="isOpenB">
            按照訂購數量可以選擇7-11店到店或宅配運送。<br />7-11店到店：運費為35元，滿400元皆可免運，數量限12桶以下。<br />宅配運送：運費為70元，滿400元皆可免運，外島運費另計。
          </div>
        </transition>
      </div>
      <div class="item">
        <div @click="isOpenC = !isOpenC" class="title">
          <font-awesome-icon :icon="['fas', 'circle-question']" />
          好運爆米花什麼時候會出貨？
        </div>
        <transition>
          <div class="text" v-show="isOpenC">
            接到訂單後生產，確認付款後約2-3天(不含例假日)完成出貨。
          </div>
        </transition>
      </div>
      <div class="item">
        <div @click="isOpenD = !isOpenD" class="title">
          <font-awesome-icon :icon="['fas', 'circle-question']" />
          好運爆米花造型可以客製化嗎？
        </div>
        <transition>
          <div class="text" v-show="isOpenD">
            當然可以！我們可以幫你客製化婚禮小物、周歲禮品、生日派對等場合使用的造型包裝。
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.wrap {
    margin: 50px 0;
  @media screen and (max-width: 768px) {
      margin: 20px 0;
    }
  .container {
    max-width: 1200px;
    width: 100%;
    height: 100%;
    h2 {
      font-size: 40px;
      color: #93a38a;
      position: relative;
      margin: 50px 0;
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
  .item {
    margin: 10px;
    color: #5c5e66;
    font-size: 20px;
    line-height: 30px;
    letter-spacing: 2px;
      @media screen and (max-width: 768px) {
        font-size: 18px;
      }
  }
  .title {
    padding: 20px;
    background-color: #d6d6ca;
    border-radius: 10px;
    cursor: pointer;
    transition: .3s;
    &:hover{
        transform: scale(1.02);
    }
  }
  .text {
    padding: 20px;
    margin-top: 10px;
    border: 3px dotted #d6d6ca;
    border-radius: 10px;
  }
}
.v-enter-active,
.v-leave-active {
  transition: all 0.5s ease;
}

.v-enter-from {
  transform: translateX(-10%);
}

.v-leave-to {
  transform: translateX(10%);
}
</style>

<script>
export default {
  data() {
    return {
      isOpenA: false,
      isOpenB: false,
      isOpenC: false,
      isOpenD: false,
    };
  },
};
</script>