<template>
  <SidebarLayout
    :navItems="navItems"
  >
    <p slot="navLogo">vue-base</p>
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
