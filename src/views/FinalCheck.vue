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
          <h4>總計：${{ $filters.currency(cart.final_total) }}元</h4>
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
    li:nth-child(2) {
      background-color: #93a38a;
    }
  }
  .check {
    display: flex;
    justify-content: space-between;
    margin: 30px 0;
    @media screen and (max-width: 768px) {
      flex-direction: column;
      margin: 0;
    }
  }
  .cart,
  .form {
    padding-right: 30px;
    @media screen and (max-width: 768px) {
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
    @media screen and (max-width: 768px) {
      width: 100%;
      padding: 0px;
    }
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
  Form {
    label {
      padding-top: 10px;
      width: 500px;
      &:last-child {
        height: 200px;
      }
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
    a,
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
        this.isLoading = false;
        this.products = res.data.products;
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
      const order = this.form;
      this.$http.post(url, { data: order }).then((res) => {
      });
    },
  },
  created() {
    this.getProducts();
    this.getCart();
  },
};
</script>