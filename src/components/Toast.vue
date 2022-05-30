<template>
  <div
    class="toast align-items-center"
    role="alert"
    aria-live="assertive"
    aria-atomic="true"
    ref="toast">
    <div class="d-flex">
      <div class="toast-body d-flex align-items-center" :class="`text-${msg.style}`">
        <i
          class="bi me-3"
          :class="msg.style === 'success' ? 'bi-check-circle-fill' : 'bi-exclamation-circle-fill'"></i>
        {{ msg.content || msg.title }}
      </div>
      <button
        type="button"
        class="btn-close m-auto"
        data-bs-dismiss="toast"
        aria-label="Close"></button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.toast,
.toast-header,
.toast-body{
  width: 300px;
  height: 100px;
  font-size: 18px;
  font-family: 'Noto Sans TC', sans-serif;
  font-weight: 300;
  margin-bottom: 10px;
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
      delay: 10000,
    });
    toast.show();
  },
};
</script>