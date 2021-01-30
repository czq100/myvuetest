import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import industry from "./service/industry";

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app");


async function test() {
    var industryData = await industry.getChannels();
    console.log(industryData);
}

test();