<template>
  <div class="channel-list">
    <Channel @clicka1="clicka1"></Channel>
  </div>
</template>

<script>
import Channel from "./components/Channel.vue";
export default {
  components: { Channel },
  methods: {
    clicka1(e) {
      console.log(e);
    },
  },
};
</script>

<style scoped>
.channel-list {
  width: 100%;
  overflow: hidden;
}
</style>