<template>
  <div
    class="toast align-items-center"
    role="alert"
    aria-live="assertive"
    aria-atomic="true"
    ref="toast"
  >
      <div
        class="toast-body align-items-center"
        :class="`text-${msg.style}`"
      >
        <div v-if="msg.style === 'success'"><font-awesome-icon :icon="['fas', 'circle-check']" /></div>
        <div v-else><font-awesome-icon :icon="['fas', 'circle-xmark']" /></div>
        {{ msg.content || msg.title }}
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
      delay: 1500,
    });
    toast.show();
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/componentsScss/_toast";
</style>