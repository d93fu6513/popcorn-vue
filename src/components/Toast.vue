<template>
  <div
    class="toast align-items-center"
    role="alert"
    aria-live="assertive"
    aria-atomic="true"
    ref="toast"
  >
    <div class="d-flex">
      <div
        class="toast-body d-flex align-items-center"
        :class="`text-${msg.style}`"
      >
        <div v-if="msg.style === 'success'"><font-awesome-icon :icon="['fas', 'circle-check']" /></div>
        <div v-else><font-awesome-icon :icon="['fas', 'circle-xmark']" /></div>
        {{ msg.content || msg.title }}
      </div>
      <button
        type="button"
        class="btn-close m-auto"
        data-bs-dismiss="toast"
        aria-label="Close"
      ></button>
    </div>
  </div>
</template>

<script>
import Toast from "bootstrap/js/dist/toast";
export default {
  name: "Toast",
  props: ["msg"],
  mounted() {
    const toastEl = this.$refs.toast;
    const toast = new Toast(toastEl, {
      delay: 3000,
    });
    toast.show();
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/componentsScss/_toast";
</style>