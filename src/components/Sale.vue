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
          <i class="bi bi-balloon"></i>
          <p>點我領取</p>
        </button>
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
  background-image: linear-gradient(115deg, #f6cfe1 50%, #e9f0f3 50%);
  @media screen and (max-width: 768px) {
    background-image: none;
  }
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 30px 0;
    @media screen and (max-width: 768px) {
      flex-direction: column;
      position: relative;
      padding: 30px 0 0 0;
    }
    img {
      @media screen and (max-width: 768px) {
        width: 100%;
        height: 100%;
      }
    }
  }
}

.text-container {
  display: flex;
  flex-direction: column;
  margin-left: 40px;
  @media screen and (max-width: 768px) {
    margin-left: 0px;
    position: absolute;
    background-color: #e9f0f3;
    align-items: center;
  }
  h2 {
    font-size: 60px;
    margin-bottom: 20px;
    @media screen and (max-width: 768px) {
      font-size: 30px;
      text-align: center;
      margin: 20px 10px;
    }
  }
  h3 {
    font-size: 48px;
    margin-bottom: 10px;
    text-align: center;
    @media screen and (max-width: 768px) {
      font-size: 20px;
      text-align: center;
    }
  }
  h4 {
    font-size: 20px;
    margin-bottom: 10px;
    text-align: center;
    color: #3d7cfc;
    @media screen and (max-width: 768px) {
      font-size: 20px;
      text-align: center;
    }
  }
}
.coupon {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #d6d6ca;
  height: 180px;
  border-radius: 10px;
  margin-top: 20px;
  position: relative;
  @media screen and (max-width: 768px) {
    width: 90%;
    height: 90px;
  }
  &:before {
    content: "";
    position: absolute;
    top: -25px;
    left: 180px;
    width: 50px;
    height: 50px;
    background-color: #e9f0f3;
    border-radius: 50%;
    @media screen and (max-width: 768px) {
      left: 70px;
      top: -10px;
      width: 20px;
      height: 20px;
    }
  }
  &:after {
    content: "";
    position: absolute;
    bottom: -25px;
    left: 180px;
    width: 50px;
    height: 50px;
    background-color: #e9f0f3;
    border-radius: 50%;
    @media screen and (max-width: 768px) {
      background-color: #e9f0f3;
      left: 70px;
      bottom: -10px;
      width: 20px;
      height: 20px;
    }
  }
  .coupon-left {
    width: 100px;
    height: 100px;
    background-color: #5c5e66;
    font-size: 40px;
    text-align: center;
    line-height: 50px;
    color: white;
    margin-left: 40px;
    position: relative;
    @media screen and (max-width: 768px) {
      width: 50px;
      height: 50px;
      font-size: 20px;
      line-height: 25px;
      margin-left: 10px;
    }
    &:after {
      content: "";
      position: absolute;
      bottom: -10px;
      left: 163px;
      height: 120px;
      border-right: 3px dotted #e9f0f3;
      @media screen and (max-width: 768px) {
        bottom: 5px;
        left: 70px;
        height: 40px;
      }
    }
  }
  .coupon-right {
    font-size: 40px;
    text-align: center;
    color: #5c5e66;
    margin-right: 100px;
    @media screen and (max-width: 768px) {
      font-size: 30px;
      margin-right: 30px;
    }
  }
}
button {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  margin-top: 25px;
  border: none;
  border-radius: 5px;
  background-color: #93a38a;
  color: white;
  font-size: 30px;
  transition: 0.3s;
  @media screen and (max-width: 768px) {
    margin-bottom: 20px;
  }
  &:hover {
    transform: scale(1.1);
  }
  i {
    color: #d1ce1d;
  }
}
</style>

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
        alert('優惠碼複製成功')
    },
  },
};
</script>