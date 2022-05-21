<template>
  <div class="container-fluid mt-3">
    <ToastMessages></ToastMessages>
    <router-view />
  </div>
</template>

<script>
import emitter from "../methods/emitter";
import ToastMessages from "../components/ToastMessages.vue";

export default {
  components: {
    ToastMessages,
  },
  provide() { //內層元件都能用外層的功能+inject
    return {
      emitter,
    };
  },
  created() {
  },
};
</script>