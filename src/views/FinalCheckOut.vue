<template>
<Loading :active="isLoading"></Loading>
  <div class="wrap">
    <div class="cart-container">
      <h2>填寫資料</h2>
      <ul>
        <li>Step1<br />購物內容</li>
        <li>Step2<br />填寫資料</li>
        <li>Step3<br />完成訂單</li>
      </ul>
      <div class="check">
        <form @submit.prevent="payOrder">
          <div class="cart">
            <h3>購物清單</h3>
            <div class="cart-box">
              <table>
                <tr v-for="item in order.products" :key="item.id">
                  <td>{{ item.product.title }}</td>
                  <td>{{ item.qty }}/{{ item.product.unit }}</td>
                  <td>{{ item.final_total }}</td>
                </tr>
              </table>
            </div>
            <h4>總計：${{ order.total }}元</h4>
          </div>
          <div class="cart">
            <h3>訂購資料</h3>
            <div class="cart-box">
              <table>
                <tr>
                  <td>訂購姓名：</td>
                  <td>{{ order.user.name }}</td>
                  <td></td>
                </tr>
                <tr>
                  <td>訂購信箱：</td>
                  <td>{{ order.user.email }}</td>
                  <td></td>
                </tr>
                <tr>
                  <td>聯絡電話：</td>
                  <td>{{ order.user.tel }}</td>
                  <td></td>
                </tr>
                <tr>
                  <td>收件地址：</td>
                  <td>{{ order.user.address }}</td>
                  <td></td>
                </tr>
                <tr>
                  <td>付款狀態：</td>
                  <td>
                    <span v-if="!order.is_paid">尚未付款</span>
                    <span v-else class="text-success">付款完成</span>
                  </td>
                  <td></td>
                </tr>
              </table>
            </div>
            <div class="cart-footer" v-if="order.is_paid === false">
            <button class="check-out">立即付款</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
img {
  width: 10%;
  height: auto;
  vertical-align: middle;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
}
.wrap {
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
    }
    li:last-child {
      background-color: #93a38a;
    }
  }
  .check form{
    display: flex;
    justify-content: space-between;
    margin: 30px 0;
    @media screen and (max-width: 768px) {
      flex-direction: column;
      padding: 0 10px;
    }
  }
  .cart-box {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 5px;
    @media screen and (max-width: 768px) {
      flex-direction: column;
    }
  }
  td {
    width: 150px;
    font-size: 20px;
    color: #949494;
    text-align: center;
    padding: 10px;
    &:first-child {
      text-align: left;
    }
    &:last-child {
      text-align: end;
    }
    @media screen and (max-width: 768px) {
      margin: 10px 0;
    }
  }
  h3 {
    font-size: 26px;
    color: #949494;
    text-align: center;
    border-bottom: 1px solid #d6d6ca;
    padding: 10px;
    @media screen and (max-width: 768px) {
      margin: 10px 0;
    }
  }
  h4 {
    font-size: 26px;
    color: #949494;
    padding: 10px;
    text-align: center;
    border-top: 1px solid #d6d6ca;
    @media screen and (max-width: 768px) {
      margin: 10px 0;
    }
  }
  .cart-footer {
    display: flex;
    justify-content: center;
    margin: auto;
    padding: 30px 0;
    @media screen and (max-width: 768px) {
      flex-direction: column;
      align-items: center;
    }
    
    .check-out {
      text-decoration: none;
      color: white;
      font-size: 22px;
      border: none;
      background-color: #93a38a;
      width: 200px;
      border-radius: 10px;
      text-align: center;
      padding: 20px 0;
      margin-left: 30px;
      transition: 0.3s;
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
      order: {
        user: {},
      },
      orderId: '',
      isLoading: false,
    };
  },
  methods: {
    getOrder() {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/order/${this.orderId}`;
      this.$http.get(url)
        .then((res) => {
          if (res.data.success) {
            this.order = res.data.order;
          }
        });
    },
    payOrder() {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/pay/${this.orderId}`;
      this.$http.post(url)
        .then((res) => {
          if (res.data.success) {
            this.getOrder();
          }
        });
    },
  },
  created() {
    this.orderId = this.$route.params.orderId;
    this.getOrder();
  },
};
</script>