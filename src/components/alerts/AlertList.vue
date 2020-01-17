<template>
  <div aria-live="polite">
    <transition-group
      class="c-alert__global-container"
      mode="out-in"
      name="c-alert-trans"
      tag="div"
    >
      <div
        v-for="(alert, index) in alerts"
        :key="alert.id"
        class="u-m-bot-xs"
      >
        <Alert
          :hasClose="true"
          :text="alert.text"
          :title="alert.title"
          :state="alert.state"
          @emitClose="closeAlert(index)"
        />
      </div>
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
    ...mapMutations('alerts', {
      closeAlert: CLOSE,
    }),
  },

  created() {
    if (!this.$store.state.alerts) {
      this.$store.registerModule('alerts', alertStore);
    }
  },
};
</script>
