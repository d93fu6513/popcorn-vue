<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <router-link to="/login" class="nav-link">好運爆米花後台管理系統</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/dashboard/products" class="nav-link">產品管理</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/dashboard/orders" class="nav-link">訂單管理</router-link>
          </li>          
          <li class="nav-item">
            <router-link to="/dashboard/coupons" class="nav-link">優惠券管理</router-link>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" @click.prevent="logout">登出</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
    methods:{
        logout(){
           const api = `${process.env.VUE_APP_API}logout`;
           this.isLoading = true;
            this.$http.post(api,this.user).then((res)=>{
              this.isLoading = false;
                if(res.data.success){
                    this.$router.push('/login');
                }
            })
        }
    }
}
</script>