<template>
  <div>
    <div class="c-input">
      <label
        class="c-input__label"
        for="icon-search"
      >
        Search Icons
      </label>
      <input
        id="icon-search"
        name="searchKey"
        v-model="searchKey"
        type="text"
        class="c-input__input"
      >
    </div>
    <ul class="o-grid o-grid--2">
      <li
        v-for="icon in filteredIcons"
        :key="icon"
        class="o-list-inline__item"
      >
        <div class="icon-item">
          <Icon :type="icon" />
        </div>
        <p>{{ icon }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import icons from '../../../src/components/icons/constants/icons.json';

export default {
  data() {
    return {
      searchKey: '',
    };
  },

  computed: {
    filteredIcons() {
      const keys = Object.keys(icons);
      if (!this.searchKey) {
        return keys;
      }
      return keys.filter(key => key.includes(this.searchKey));
    },
  },
};
</script>

<style lang="scss">
.o-grid {
  list-style: none;
  display: grid;
  grid-template-columns: 20% 20% 20% 20% 20%;
  grid-column-gap: 1rem;
}

.icon-item {
  border: 1px solid gray;
  height: 2rem;
  width: 2rem;
}
</style>
