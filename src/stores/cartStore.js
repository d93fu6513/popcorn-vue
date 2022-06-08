import { defineStore } from "pinia";
import axios from "axios";
// import statusStore from "./statusStore";

// const status = statusStore();

export default defineStore('cartStore', {
    state: () => ({
        cart: {},
        cartLen: 0,
    }),
    actions: {

        getCart() {
            const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
            // status.isLoading = true;
            axios.get(url).then((res) => {
                this.cart = res.data.data;
                this.cartLen = res.data.data.carts.length;
                // status.isLoading = false;
            });
        },
        addCart(id) {
            const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
            const cart = {
                product_id: id,
                qty: 1,
            };
            // status.loadingItem = id;
            axios.post(url, { data: cart }).then((res) => {
                // status.loadingItem = "";
                // this.$httpMessageState(res, "加入購物車");
                // emitter.emit('sendCart', this.cart);
                this.getCart();
            });
        },
        updateCart(item) {
            const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${item.id}`;
            // status.isLoading = true;
            // status.loadingItem = id;
            const cart = {
                product_id: item.product_id,
                qty: item.qty,
            };
            axios.put(url, { data: cart }).then((res) => {
                this.getCart();
                // status.loadingItem = "";
                // status.isLoading = false;
            });
        },
        removeCartItem(id) {
            const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${id}`;
            // status.isLoading = true;
            // status.loadingItem = id;
            axios.delete(url).then((res) => {
                //   this.$httpMessageState(res, "移除購物車品項");
                // status.loadingItem = "";
                this.getCart();
                // status.isLoading = false;
            });
        },
    },
})