---
sidebar: auto
---

# vue-base
<Badge :text="`v${ VERSION }`" />

A Bootstrap-esque set of Vue components I use in most projects.

Developed alongside [scss-base](https://github.com/bhgeorge/scss-base), which is still in progress. You can write your own CSS for vue-base, but that sounds like a lot.

## Usage

### Register globally
You can register all the vue-base components globally.
```js
import VueBase from 'vue-base';

Vue.use(VueBase);
```

If the component names are too generic for your tastes, you can apply a prefix to them as well.
```js
Vue.use(VueBase, { prefix: 'VB' });

// Components are now called with 'VB' like so <VBIcon type="add" />
```

### Registering locally
If you just want a couple of components you can import them like so.
```js
import { Modal } from 'vue-base';

export default {
  components: {
    Modal,
  },
}
```
