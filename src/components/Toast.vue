<template>
  <div class="toast" ref="toast">
    <div class="toast-header">
      <span :class="`bg-${msg.style}`" class="p-2 rounded me-2 d-inline-block"></span>
      <strong class="me-auto">{{ msg.title }}</strong>
      <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
    </div>
    <div class="toast-body" v-if="msg.content">
      {{ msg.content }}
    </div>
  </div>
</template>

<style lang="scss" scoped>
.toast,
.toast-header,
.toast-body{
  background-color: white;
  height: 100px;
  font-size: 26px;
  font-family: 'Noto Sans TC', sans-serif;
  font-weight: 300;
  @media screen and (max-width: 768px) {
        height: 30px;
  font-size: 20px;
      }
}
</style>

<script>
import Toast from 'bootstrap/js/dist/toast';
export default {
  name: 'Toast',
  props: [
    'msg',
  ],
  mounted() {
    const toastEl = this.$refs.toast;
    const toast = new Toast(toastEl, {
      delay: 3000,
    });
    toast.show();
  },
};
</script>