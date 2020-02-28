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
      <div class="c-site-nav__item">
        <button
          class="c-site-nav__link"
          type="button"
          name="showContactModal"
        >
          Contact
        </button>
      </div>
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
};
</script>
