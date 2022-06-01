<template>
  <div class="wrap">
    <div class="container">
      <img src="../assets/images/salePic.png" alt="" />
      <div class="text-container">
        <h2>好運爆米花 好運發發發</h2>
        <h3>官網開幕慶</h3>
        <h3>讓你好運一整個月！</h3>
        <h4>2022/05/20-2022/06/19</h4>
        <div class="coupon">
          <div class="coupon-left">
            <p>商品<br />６折</p>
          </div>
          <div class="coupon-right">
            <p>getlucky60</p>
          </div>
        </div>
        <button type="button" @click="copy">
          <p>點我領取 <font-awesome-icon :icon="['fas', 'arrow-pointer']" /></p>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "getlucky60",
    };
  },
  methods: {
    copy() {
      this.$copyText(this.message)
        .then(() => {})
        .catch(() => {});
      alert("優惠碼複製成功");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/viewsScss/_sale";
</style>