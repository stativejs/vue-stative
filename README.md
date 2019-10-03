# vue-stative

Vue.js plugin to use stative.

### Installation

```sh
npm install vue-stative
```

### Usage

```ts
import Vue from 'vue';
import VueStative from 'vue-stative';

Vue.use(VueStative);
```

Now you can choose to listen to stative in your components

```vue
<template>
  <div>
    <p>Loading: {{ loading }}</p>
    <p>Menus: {{ menus }}</p>
    <button @click="goToAbout"></button>
  </div>
</template>

<script>
import state from 'stative';

export default {
  listentTo: ['loading', 'menus'],
  created() {
    state.set({
      loading: false,
      menus: {
        home: 'selected',
        about: 'not-selected',
        contact: 'not-selected'
      },
      articles: [
        { id: 1, title: 'Simple state management' },
        { id: 2, title: 'Reactive state' },
        { id: 3, title: 'RxJS' }
      ]
    });
  },
  methods: {
    goToAbout() {
      state.update('menus.home', 'not-selected');
      state.update('menus.about', 'selected');
    }
  }
};
</script>
```
