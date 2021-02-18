<template>
  <i class="iconfont" :class="[iconClass,extraClass]"></i>
</template>

<script>
var icons = [
  "icon-07lianjie",
  "icon-08jiechulianjie",
  "icon-19beijingyanse",
  "icon-19beijingyanse",
  "icon-20xiangmufuhao",
  "icon-05xiabiao",
  "icon-5",
];
export default {
  props: {
    num: {
      type: Number,
      require: true,
    },
    extraClass: {
      type: String,
      default: "",
    },
  },
  computed: {
    iconClass() {
      return icons[this.num];
    },
  },
};
</script>

<style scoped>
@import "//at.alicdn.com/t/font_2362095_ul1lxrdbd6b.css";
</style>