<template>
  <div>
    <div style="width:120px;height:50px;border:1px solid;">
      <Item
        :isActive="isActive==`dianjing`"
        @clickaa="clickaa"
      >电竞</Item>
    </div>
  </div>
</template>

<script>
import Item from "./components/Item";
export default {
  components: { Item },
  data() {
    return { isActive:"" };
  },
  methods: {
    clickaa(e) {
      this.isActive = !this.isActive;
      console.log(e);
    },
  },
};
</script>

<style>
</style>