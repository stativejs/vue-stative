import VueRx from "vue-rx";
import state from "stative";

export default {
  install(Vue) {
    Vue.use(VueRx);

    Vue.mixin({
      subscriptions() {
        return { state: state.getState$() };
      }
    });
  }
};
