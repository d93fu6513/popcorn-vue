<template>
  <div class="wrap">
    <div class="login-container">
      <form @submit.prevent="signIn">
          <h2>好運爆米花後台管理系統</h2>
            <label for="inputEmail" class="sr-only">帳號</label>
            <input
              type="email"
              id="inputEmail"
              class="form-control"
              placeholder="帳號"
              required
              autofocus
              v-model="user.username"
            />
            <label for="inputPassword" class="sr-only">密碼</label>
            <input
              type="password"
              id="inputPassword"
              class="form-control"
              placeholder="密碼"
              required
              v-model="user.password"
            />
            <button class="btn" type="submit">
              登入
            </button>
      </form>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.wrap {
  height: 100vh;
  background-color: #93a38a;
  @media screen and (max-width: 768px) {
    margin-top: 100px;
  }
  .login-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
	align-items: center;
    margin: auto;
    max-width: 1200px;
    width: 100%;
    height: 100%;
    h2 {
      font-size: 40px;
      color: white;
      position: relative;
      margin-bottom: 40px;
      text-align: center;
      &:after {
        content: "";
        width: 600px;
        border-bottom: 5px dotted white;
        position: absolute;
        bottom: -50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }
	label{
		padding: 10px;
	}
	input{		
		width: 100%;
	}
	.btn{
		display: flex;
		margin: auto;
		margin-top: 30px;
		background-color: #d6d6ca;
	}
  }
}
</style>


<script>
export default {
  data() {
    return {
      user: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    signIn() {
      const api = `${process.env.VUE_APP_API}admin/signin`;
      this.isLoading = true;
      this.$http.post(api, this.user).then((res) => {
        this.isLoading = false;
        if (res.data.success) {
          const { token, expired } = res.data;
          document.cookie = `hexToken=${token};expires=${new Date(expired)}`;
          this.$router.push("/dashboard/products");
        }
      });
    },
  },
};
</script>