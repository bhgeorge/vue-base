<template>
  <div class="c-input c-autocomplete">
    <label
      class="c-input__label"
      :for="id"
    >
      {{ label }}
    </label>
    <input
      :id="id"
      :aria-describedby="describedby || false"
      autocomplete="off"
      class="c-input__input"
      name="search"
      type="search"
      v-model="query"
      @change="debouncedFilterResults"
      @keyup="debouncedFilterResults"
      @focus="showResults = true"
      @blur="handleBlur"
      @keydown.up="decrementActiveResultIndex"
      @keydown.down="incrementActiveResultIndex"
      @keydown.enter="selectItem()"
    />
    <div
      v-show="showResults"
      class="c-autocomplete__results"
    >
      <ul class="o-list-bare">
        <SearchResult
          v-for="(result, index) in results"
          :key="result.id"
          :active="index === activeResultIndex"
          :result="result"
          @emitSelect="selectItem"
        />
      </ul>
    </div>
  </div>
</template>

<script>
import { debounce } from 'lodash';
import SearchResult from '@/components/search/SearchResult.vue';
import getUniqueId from '@/utils/getUniqueId';

const MAX_RESULTS = 8;

export default {
  props: {
    dataset: {
      type: Array,
      required: true,
    },

    describedby: {
      type: String,
      required: false,
    },

    label: {
      type: String,
      required: true,
    },

    searchExact: {
      type: Boolean,
      default: false,
    },

    searchKey: {
      type: String,
      default: 'name',
    },
  },

  components: {
    SearchResult,
  },

  data() {
    return {
      activeResultIndex: 0,
      debouncedFilterResults: debounce(this.filterResults, 250),
      id: getUniqueId(),
      query: '',
      results: [],
      showResults: false,
    };
  },

  methods: {
    matchExact(a, b) {
      // NOTE: This is more performant than a "starts with" regex
      return a.substr(0, b.length).toLowerCase() === b;
    },

    matchLoose(a, b) {
      return a.toLowerCase().includes(b);
    },

    getFilteredResults() {
      if (!this.query) {
        return [];
      }

      const results = [];
      const query = this.query.toLowerCase();
      const isMatch = this.searchExact ? this.matchExact : this.matchLoose;

      for (let i = 0; i < this.dataset.length; i += 1) {
        const item = this.dataset[i];
        if (isMatch(item[this.searchKey], query)) {
          results.push(item);

          if (results.length === MAX_RESULTS) {
            return results;
          }
        }
      }

      return results;
    },

    filterResults() {
      this.results = this.getFilteredResults();
      if (this.activeResultIndex > this.results.length - 1) {
        this.activeResultIndex = 0;
      }
    },

    incrementActiveResultIndex() {
      this.activeResultIndex += 1;
      if (this.activeResultIndex === this.results.length) {
        this.activeResultIndex = 0;
      }
    },

    decrementActiveResultIndex() {
      this.activeResultIndex -= 1;
      if (this.activeResultIndex < 0) {
        this.activeResultIndex = this.results.length - 1;
      }
    },

    resetLocalState() {
      this.query = '';
      this.results = [];
    },

    selectItem(result = null) {
      const obj = result || this.results[this.activeResultIndex];
      this.$emit('emitSelect', obj);
      this.resetLocalState();
    },

    handleBlur() {
      setTimeout(() => {
        this.showResults = false;
      }, 150);
    },
  },
};
</script>
