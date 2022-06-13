import axios from "axios";
import { defineStore } from "pinia";
import statusStore from './statusStore';

export default defineStore('productStore', {
    state: () => ({
        products: [],
        product: {},
        cart: {},
        cartLen: 0,
        coupon_code: '',
        form: {
            user: {
                name: "",
                email: "",
                tel: "",
                address: "",
            },
        },
        order: {
            user: {},
        },
        orderId: "",
    }),
    actions: {
        getProducts() {
            const status = statusStore();
            const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`;
            status.isLoading = true;
            axios.get(url).then((res) => {
                this.products = res.data.products;
                status.isLoading = false;
            });
        },
        plus(item) {
            item.qty += 1;
            this.updateCart(item);
          },
          minus(item) {
            if (item.qty > 1) {
              item.qty -= 1;
              this.updateCart(item);
            }
          },
        getCart() {
            const status = statusStore();
            const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
            status.isLoading = true;
            axios.get(url).then((res) => {
                this.cart = res.data.data;
                this.cartLen = res.data.data.carts.length;
                status.isLoading = false;
            });
        },
        addCart(id) {
            const status = statusStore();
            const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
            const cart = {
                product_id: id,
                qty: 1,
            };
            status.loadingItem = id;
            axios.post(url, { data: cart }).then((res) => {
                status.loadingItem = "";
                status.pushMessage({ title: '加入購物車' });
                this.getCart();
            });
        },
        updateCart(item) {
            const status = statusStore();
            const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${item.id}`;
            
            status.loadingItem = id;
            const cart = {
                product_id: item.product_id,
                qty: item.qty,
            };
            axios.put(url, { data: cart }).then((res) => {
                this.getCart();
                status.loadingItem = "";
                
            });
        },
        removeCartItem(id) {
            const status = statusStore();
            const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${id}`;
            status.isLoading = true;
            status.loadingItem = id;
            axios.delete(url).then((res) => {
                status.pushMessage({ title: '移除購物車' });
                status.loadingItem = "";
                this.getCart();
                status.isLoading = false;
            });
        },
        addCouponCode() {
            const status = statusStore();
            const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/coupon`;
            status.isLoading = true;
            const coupon = {
                code: this.coupon_code,
            };
            axios.post(url, { data: coupon }).then((response) => {
                status.pushMessage({ title: '加入優惠券' });
                this.getCart();
                status.isLoading = false;
            });
        },
        createOrder() {
            const status = statusStore();
            const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/order`;
            const order = this.form;
            status.isLoading = true;
            axios.post(url, { data: order }).then((res) => {
                status.pushMessage({ title: '送出訂單' });
                const orderId = res.data.orderId;
                status.isLoading = false;
                this.$router.push(`./checkout/${orderId}`);
            });
        },
        getOrder() {
            const status = statusStore();
            const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/order/${this.orderId}`;
            status.isLoading = true;
            axios.get(url).then((res) => {
                if (res.data.success) {
                    this.order = res.data.order;
                    status.isLoading = false;
                }
            });
        },
        payOrder() {
            const status = statusStore();
            const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/pay/${this.orderId}`;
            status.isLoading = true;
            axios.post(url).then((res) => {
                if (res.data.success) {
                    this.getOrder();
                    status.isLoading = false;
                }
            });
        },
    }
})