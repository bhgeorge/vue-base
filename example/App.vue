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
};
</script>
