<template>
  <div aria-live="polite">
    <transition-group
      class="c-alert__global-container"
      mode="out-in"
      name="c-alert-trans"
      tag="div"
    >
      <Alert
        v-for="(alert, index) in alerts"
        :hasClose="true"
        :key="alert.id"
        :text="alert.text"
        :title="alert.title"
        :type="alert.type"
        @emitClose="closeAlert(index)"
      />
    </transition-group>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import Alert from './Alert.vue';
import { CLOSE } from './constants/mutation-types';
import alertStore from './store';

export default {
  components: {
    Alert,
  },

  computed: {
    ...mapState('alerts', ['alerts']),
  },

  methods: {
    ...mapMutations('alerts', [CLOSE]),
  },

  created() {
    if (!this.$store.state.alerts) {
      this.$store.registerModule('alerts', alertStore);
    }
  },
};
</script>
