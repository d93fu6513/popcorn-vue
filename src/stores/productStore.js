import axios from "axios";
import { defineStore } from "pinia";
import statusStore from './statusStore';

// const status = statusStore();

export default defineStore('productStore', {
    state: () => ({
        products: [],
        product: {},
    }),
    actions: {
        getProducts() {
            const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`;
            // status.isLoading = true;
            axios.get(url).then((res) => {
                this.products = res.data.products;
                // status.isLoading = false;
            });
        },
    }
})