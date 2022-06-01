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
            <h3>總計：${{ order.total }}元</h3>
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

<script>
export default {
  data() {
    return {
      order: {
        user: {},
      },
      orderId: "",
      isLoading: false,
    };
  },
  methods: {
    getOrder() {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/order/${this.orderId}`;
      this.isLoading = true;
      this.$http.get(url).then((res) => {
        if (res.data.success) {
          this.order = res.data.order;
          this.isLoading = false;
        }
      });
    },
    payOrder() {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/pay/${this.orderId}`;
      this.isLoading = true;
      this.$http.post(url).then((res) => {
        if (res.data.success) {
          this.getOrder();
          this.isLoading = false;
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

<style lang="scss" scoped>
@import "@/assets/css/viewsScss/_finalcheckout";
</style>