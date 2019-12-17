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
    <ul class="o-list-inline">
      <li
        v-for="icon in filteredIcons"
        :key="icon"
        class="o-list-inline__item"
      >
        <div>
          <Icon :type="icon" />
        </div>
        <p>{{ icon }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import icons from '../../../components/icons/icons.json';

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
