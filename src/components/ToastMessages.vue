<template>
  <div class="toastcontainer">
    <Toast v-for="(msg, key) in messages" :key="key"
      :msg="msg"
    />
  </div>
</template>

<style lang="scss" scoped>
  .toastcontainer{
    position: fixed;
    top: 100px;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 3;
  }
</style>

<script>
import Toast from '../components/Toast.vue';
import statusStore from "@/stores/statusStore";
import { storeToRefs } from 'pinia';

export default {
  components: { Toast },
  setup() {
    const status = statusStore();
    const { messages } = storeToRefs(status);

    return{
      messages,
    }
  }
};
</script>