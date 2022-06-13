<template>
  <Loading :active="isLoading">
  </Loading>
  
  <div class="container">
      <div class="text-end">
    <button class="btn btn-primary" type="button" @click="openModal(true)">
      <!-- 如果開啟是空的話，就打開空的 -->
      新增產品
    </button>
  </div>
      <table class="table mt-4">
    <thead>
      <tr>
        <th >分類</th>
        <th>產品名稱</th>
        <th>描述</th>
        <th>說明</th>
        <th>圖片</th>
        <th >原價</th>
        <th >售價</th>
        <th>是否啟用</th>
        <th>編輯</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in products" :key="item.id">
        <td>{{ item.category }}</td>
        <td>{{ item.title }}</td>
        <td>{{ item.description }}</td>
        <td>{{ item.content }}</td>
        <td class="text-right">{{ $filters.currency(item.origin_price) }}</td>
        <td class="text-right">{{ $filters.currency(item.price) }}</td>
        <td>
          <span class="text-success" v-if="item.is_enabled">啟用</span>
          <span class="text-muted" v-else>未啟用</span>
        </td>
        <td>
          <div class="btn-group">
            <button
              class="btn btn-outline-primary btn-sm"
              @click="openModal(false, item)"
            >
              編輯
            </button>
            <!-- 如果開啟不是空的話，就打開當前品項 -->
            <button
              class="btn btn-outline-danger btn-sm"
              @click="openDelModal(item)"
            >
              刪除
            </button>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
  </div>
  
  <Page :pages="pagination"
    @emit-pages="getProducts"></Page>
  <ProductModal
    ref="productModal"
    :product="tempProduct"
    @update-product="updateProduct"
  ></ProductModal>
  <DelModal
    ref="delModal"
    :item="tempProduct"
    @del-item="delProduct"
  ></DelModal>
</template>

<script>
import ProductModal from "../components/ProductModal.vue";
import DelModal from "../components/DelModal.vue";
import Page from '../components/Page.vue';
export default {
  data() {
    return {
      products: [],
      pagination: {},
      tempProduct: {},
      isNew: false,
      isLoading: false,
    };
  },
  components: {
    ProductModal,
    DelModal,
    Page,
  },
  inject:['emitter'],
  methods: {
    getProducts(page = 1) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/products/?page=${page}`;
      this.isLoading = true;
      this.$http.get(api).then((res) => {
        this.isLoading = false;
        if (res.data.success) {
        //   console.log(res.data);
          this.products = res.data.products;
          this.pagination = res.data.pagination;
        }
      });
    },
    updateProduct(item) {
      this.tempProduct = item; //外層傳送的資料儲存
      //新增
      let api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product`;
      let httpMethod = "post"; //宣告httpMethod針對新增或編輯要採取的方法
      //編輯
      if (!this.isNew) {
        api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product/${item.id}`;
        httpMethod = "put";
      }
      this.isLoading = true;
      const productComponent = this.$refs.productModal;
      this.$http[httpMethod](api, { data: this.tempProduct }).then((res) => {
        this.isLoading = false;
        //把儲存資料發送
        productComponent.hideModal(); //新增完關閉
        this.$httpMessageState(res, '更新');
      });
    },
    openModal(isNew, item) {
      if (isNew) {
        this.tempProduct = {}; //如果打開資料是空的話，內層資料清空
      } else {
        this.tempProduct = { ...item }; //如果打開不是空的，就顯示綁定V-FOR的展開的資料
      }
      this.isNew = isNew;
      const productComponent = this.$refs.productModal;
      productComponent.showModal(); //打開
    },
    openDelModal(item) {
      this.tempProduct = { ...item }; 
      const delComponent = this.$refs.delModal;
      delComponent.showModal(); 
    },
    delProduct() {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product/${this.tempProduct.id}`;
      this.isLoading = true;
      this.$http.delete(api).then((res) => {
        this.isLoading = false;
        const delComponent = this.$refs.delModal;
        delComponent.hideModal(); 
        this.getProducts(); 
      });
    },
  },
  created() {
    this.getProducts();
  },
};
</script>

