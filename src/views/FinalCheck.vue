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
        <div class="cart">
          <h3>購物清單</h3>
          <div class="cart-box" v-for="item in cart.carts" :key="item.id">
            <table>
              <tr>
                <td>{{ item.product.title }}</td>
                <td>{{ item.qty }}</td>
                <td>${{ $filters.currency(item.final_total) }}</td>
              </tr>
            </table>
          </div>
          <h3>總計：${{ $filters.currency(cart.final_total) }}元</h3>
        </div>
        <div class="form">
          <h3>訂單資料</h3>
          <Form v-slot="{ errors }" @submit="createOrder">
            <div class="form-box">
              <label for="name" class="form-label">收件人姓名</label>
              <Field
                id="name"
                name="姓名"
                type="text"
                class="form-control"
                :class="{ 'is-invalid': errors['姓名'] }"
                placeholder="請輸入姓名"
                rules="required"
                v-model="form.user.name"
              ></Field>
              <ErrorMessage name="姓名" class="invalid-feedback"></ErrorMessage>
            </div>
            <div class="form-box">
              <label for="email" class="form-label">Email</label>
              <Field
                id="email"
                name="email"
                type="email"
                class="form-control"
                :class="{ 'is-invalid': errors['email'] }"
                placeholder="請輸入 Email"
                rules="email|required"
                v-model="form.user.email"
              ></Field>
              <ErrorMessage
                name="email"
                class="invalid-feedback"
              ></ErrorMessage>
            </div>
            <div class="form-box">
              <label for="tel" class="form-label">收件人電話</label>
              <Field
                id="tel"
                name="電話"
                type="tel"
                class="form-control"
                :class="{ 'is-invalid': errors['電話'] }"
                placeholder="請輸入電話"
                rules="required"
                v-model="form.user.tel"
              ></Field>
              <ErrorMessage name="電話" class="invalid-feedback"></ErrorMessage>
            </div>
            <div class="form-box">
              <label for="address" class="form-label">收件人地址</label>
              <Field
                id="address"
                name="地址"
                type="text"
                class="form-control"
                :class="{ 'is-invalid': errors['地址'] }"
                placeholder="請輸入地址"
                rules="required"
                v-model="form.user.address"
              ></Field>
              <ErrorMessage name="地址" class="invalid-feedback"></ErrorMessage>
            </div>
            <div class="form-box">
              <label for="message" class="form-label">留言</label>
              <textarea
                name=""
                id="message"
                class="form-control"
                cols="30"
                rows="10"
                v-model="form.message"
              ></textarea>
            </div>
            <div class="cart-footer">
              <router-link to="/final/cart">修改購物車</router-link>
              <button class="check-out">送出訂單</button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [],
      product: {},
      status: {
        loadingItem: "", //對應品項id
      },
      cart: {},
      form: {
        user: {
          name: "",
          email: "",
          tel: "",
          address: "",
        },
        message: "",
      },
    };
  },
  methods: {
    getProducts() {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`;
      this.isLoading = true;
      this.$http.get(url).then((res) => {
        this.products = res.data.products;
        this.isLoading = false;
      });
    },
    getCart() {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
      this.isLoading = true;
      this.$http.get(url).then((res) => {
        this.cart = res.data.data;
        this.isLoading = false;
      });
    },
    createOrder() {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/order`;
      this.isLoading = true;
      const order = this.form;
      this.$http.post(url, { data: order }).then((res) => {
        this.$httpMessageState(res, "送出訂單");
        const orderId = res.data.orderId;
        this.isLoading = false;
        this.$router.push(`./checkout/${orderId}`);
      });
    },
  },
  created() {
    this.getProducts();
    this.getCart();
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/viewsScss/_finalcheck";
</style>