import { debounce } from 'lodash';

export default {
  props: {
    dataset: {
      type: Array,
      required: true,
    },

    maxSearchResults: {
      type: Number,
      default: NaN,
    },

    searchExact: {
      type: Boolean,
      default: false,
    },

    // Used when dataset is an Object[]
    searchKey: {
      type: String,
      required: false,
    },
  },

  data() {
    return {
      searchQuery: '',
      searchResults: [],
      debouncedFilterSearchResults: debounce(function () { // eslint-disable-line func-names
        this.searchResults = this.filterSearchResults();
      }, 250),
    };
  },

  computed: {
    isSearchFlat() {
      return !this.searchKey;
    },

    searchMethod() {
      return this.searchExact ? this.matchExact : this.matchLoose;
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

    filterSearchResults() {
      if (this.searchQuery === '') {
        return [];
      }

      const results = [];
      const query = this.query.toLowerCase();

      for (let i = 0; i < this.dataset.length; i += 1) {
        const item = this.dataset[i];
        const key = this.isSearchFlat ? item : item[this.searchKey];
        if (this.searchMethod(key, query)) {
          results.push(item);

          if (results.length === this.maxSearchResults) {
            return results;
          }
        }
      }
      return results;
    },
  },
};
