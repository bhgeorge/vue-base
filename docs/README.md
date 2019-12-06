---
sidebar: auto
---

# vue-base
<Badge :text="`v${ VERSION }`" />

Vue components I use in most projects.

## Usage

Register all components globally
```js
import VueBase from 'vue-base';

Vue.use(VueBase);
```

Register components locally
```js
import { Modal } from 'vue-base';

export default {
  components: {
    Modal,
  },
}
```
