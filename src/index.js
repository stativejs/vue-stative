import state from 'stative';
import VueRx from 'vue-rx';
import objectPath from 'object-path';

export default {
  install(Vue) {
    Vue.use(VueRx);

    Vue.mixin({
      subscriptions() {
        const { subscribeTo } = this.$options;

        if (!subscribeTo) {
          return {};
        }

        if (subscribeTo instanceof Array) {
          const subscribeObject = {};
          subscribeTo.forEach(path => {
            if (objectPath.has(state.subjects, path)) {
              objectPath.set(subscribeObject, path, state.subjects[path]);
            }
          });
          return subscribeObject;
        }

        if (typeof subscribeTo === 'string' && subscribeTo === '*') {
          return {
            state: state.getState$()
          };
        }

        return {};
      }
    });
  }
};
