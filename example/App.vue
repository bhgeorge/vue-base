<template>
  <SidebarLayout
    :navItems="navItems"
  >
    <p
      slot="navLogo"
      class="u-font-serif h4 u-p"
    >
      vue-base
    </p>
    <div slot="navActions">
      <SidebarNavLink
        htmlTag="div"
        text="Contact"
        @emitClick="showContactModal"
      />
    </div>
  </SidebarLayout>
</template>

<script>
import navItems from './public/navItems.json';

export default {
  data() {
    return {
      navItems,
    };
  },

  methods: {
    showContactModal() {
      // TODO: Show a modal w/ a form?
    },
  },
};
</script>
