import VueRx from 'vue-rx';
import state from 'stative';
import objectPath from 'object-path';

export default {
  install(Vue) {
    Vue.use(VueRx);

    Vue.mixin({
      subscriptions() {
        const { listenTo } = this.$options;

        if (!listenTo || !(listenTo instanceof Array)) {
          return {};
        }

        const listenObject = {};
        listenTo.forEach(path => {
          objectPath.set(listenObject, path, state.subjects[path]);
        });

        return listenObject;
      },
      methods: {
        set(path, value) {
          state.set(path, value);
        }
      }
    });
  }
};
