# vue-stative

Vue.js plugin to use [stative](https://github.com/stativejs/stative).

### Installation

```sh
npm install vue-stative stative
```

### Usage

```ts
import Vue from 'vue';
import VueStative from 'vue-stative';
import state from 'stative';

Vue.use(VueStative);

// set your app's initial state
state.set({
  loading: false,
  menus: {
    home: 'selected',
    about: 'not-selected',
    contact: 'not-selected',
  },
  articles: [
    { id: 1, title: 'Simple state management' },
    { id: 2, title: 'Reactive state' },
    { id: 3, title: 'Made with RxJS' },
  ],
});
```

You can subscribe to every state change

```vue
<template>
  <div>
    <p>Loading: {{ state.loading }}</p>
    <p>Menus: {{ state.menus }}</p>
    <button @click="goToAbout"></button>
  </div>
</template>

<script>
import state from 'stative';

export default {
  subscribeTo: '*',
  methods: {
    goToAbout() {
      state.set('menus.about', 'selected');      
    }
  }
};
</script>
```

Or just to some part of it

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
  subscribeTo: ['loading', 'menus'],  
  methods: {
    goToAbout() {      
      state.set('menus.about', 'selected');
    }
  }
};
</script>
```
