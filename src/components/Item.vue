<template>
  <div
    class="item"
    :class="{active:isActive}"
    @click="clicka"
  >
    <slot></slot>
    <!--插槽就是子组件中的提供给父组件使用的一个占位符，用<slot></slot> 表示，父组件可以在这个占位符中填充任何模板代码，如 HTML、组件等，填充的内容会替换子组件的<slot></slot>标签。 -->

  </div>
</template>

<script>
export default {
  props: {
    isActive: { type: Boolean, require: false, default: true }, //约束属性值
    extraClass: { type: String, default: "" },
  },
  methods: {
    clicka() {
      this.$emit("clicka2", "abcd");
    },
  },
};
//$emit 子组件调用父组件的方法并传递数据
//$on 兄弟组件之间相互传递数据
//$refs 父组件调用子组件的方法，可以传递数据
</script>

<style scoped>
/*scoped 可以使样式item[data-v-1c4665c3]  */
.item {
  cursor: pointer;
  width: 100%;
  height: 100%;
  transition: 0.1s; /*延迟变化属性变化 */
}
.item:hover {
  background-color: azure;
}
.active {
  background: burlywood;
}
</style>