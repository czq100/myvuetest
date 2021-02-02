<template>
  <div v-if="channels!=null">
    <div v-for="item in channels" :key="item.strKey" class="item">
      <Item :isActive="strKey==item.strKey" @clicka2="clicka2" @click.native="strKey=item.strKey">
        <div class="inner">
          <span class="name">{{item.strKey}}</span>
          <span class="number">{{item.value}}</span>
        </div>
      </Item>
    </div>
  </div>
</template>

<script>
import Item from "./Item.vue";
import channelService from "../service/industry";
export default {
  props: {
    //props 表示入参，接收上层调用传的参数
    isActice: {
      type: Boolean,
      require: false,
      default: false,
    },
  },
  components: { Item },
  methods: {
    clicka2(e) {
      this.$emit("clicka1", e);
    }
  },
  data() {
    return {
      strKey: "500010000",
      channels: [],
    };
  },
  async created() {
    //只执行一次
    var data = await channelService.getChannels();
    this.channels = data.data;
  },
};
</script>

<style scoped>
.item {
  float: left;
  width: 50%;
}
.name {
}
.number {
}
</style>