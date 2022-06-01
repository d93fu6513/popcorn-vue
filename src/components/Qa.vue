<template>
  <div class="wrap" id="qa">
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

<style lang="scss" scoped>
@import "@/assets/css/componentsScss/_qa";
</style>