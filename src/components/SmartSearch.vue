<template lang="html">
  <div class="c-input c-smart-search">
    <label
      class="c-input__label"
      :for="inputId"
    >
      {{ label }}
    </label>
    <input
      :class="inputClassNames"
      :id="inputId"
      type="search"
      :name="inputId"
      placeholder="Search"
      autocomplete="off"
      v-model="query"
      @focus="showResults = true"
      @blur="handleBlur"
      @keydown.up="decrementActive"
      @keydown.down="incrementActive"
      @keydown.enter="selectItem(activeIndex)"
    />
    <div v-show="showResults" class="c-smart-search__results">
      <ul class="o-list-bare">
        <li
          v-for="(item, index) in results"
          :key="item"
          :class="{ 'c-smart-search__results-item': true, 'active': index === activeIndex }"
          @click="selectItem(index)"
        >
          {{ item }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    inputId: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    dataset: {
      type: Array,
      required: true,
    },
    searchKey: {
      type: String,
      required: false,
    },
    searchExact: {
      type: Boolean,
      default: false,
    },
    resetOnSelect: {
      type: Boolean,
      default: true,
    },
    canAddNew: {
      type: Boolean,
      default: false,
    },
    modifiers: {
      type: Array,
      required: false,
    },
  },
  data() {
    return {
      query: '',
      activeIndex: 0,
      maxResults: 8,
      resLen: 0,
      showResults: false,
      results: [],
    };
  },
  computed: {
    inputClassNames() {
      let classNames = ['c-input__input'];
      if (this.modifiers) {
        classNames = classNames.concat(this.modifiers);
      }
      return classNames;
    },
  },
  methods: {
    matchExact(a, b) {
      // NOTE: This is more performant than a "starts with" regex
      return a.substr(0, b.length).toLowerCase() === b;
    },
    matchLoose(a, b) {
      return a.toLowerCase().includes(b);
    },
    searchResults() {
      const arr = [];
      const isFlat = !this.searchKey;
      const searchMethod = this.searchExact ? this.matchExact : this.matchLoose;
      if (this.query !== '') {
        const searchQuery = this.query.toLowerCase();

        for (let i = 0; i < this.dataset.length; i += 1) {
          const item = this.dataset[i];
          const key = isFlat ? item : item[this.searchKey];
          if (searchMethod(key, searchQuery)) {
            arr.push(item);

            if (arr.length === this.maxResults) {
              break;
            }
          }
        }
      }
      this.results = arr;
      this.resLen = arr.length === 0 ? 0 : arr.length - 1;
      if (this.activeIndex > this.resLen) {
        this.activeIndex = 0;
      }
    },
    incrementActive() {
      this.activeIndex = this.activeIndex + 1;
      if (this.activeIndex > this.resLen) {
        this.activeIndex = 0;
      }
    },
    decrementActive() {
      this.activeIndex = this.activeIndex - 1;
      if (this.activeIndex < 0) {
        this.activeIndex = this.resLen;
      }
    },
    selectItem(index) {
      if (this.results.length > 0) {
        this.$emit('emitSelect', this.results[index]);
        if (this.resetOnSelect) {
          this.query = '';
        }
      } else if (this.canAddNew) {
        this.$emit('emitAddNew', this.query);
      }
    },
    handleBlur() {
      const that = this;
      // NOTE: This is to allow click events on results to fire before we hide them
      setTimeout(() => {
        that.showResults = false;
      }, 150);
    },
  },
  watch: {
    query() {
      this.searchResults();
    },
  },
};
</script>
