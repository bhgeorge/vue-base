<template>
  <div
    class="c-site"
    id="app"
  >
    <!-- eslint-disable -->
    <!-- Skip Link -->
    <a
      class="u-visually-hidden u-visually-hidden--focus u-bg-theme-interaction-accent u-c-theme-interaction u-p"
      href="#site-main"
      id="skip-link"
    >
      Skip to content
    </a>
    <!-- eslint-enable -->
    <!-- Header -->
    <header :class="classNames">
      <!-- Mobile Nav Toggle -->
      <button
        class="c-site-nav-toggle c-btn c-btn--icon u-d-none@m"
        name="toggleNav"
        type="button"
        @click="toggleNav"
      >
        <Icon :type="navToggleIcon" />
        <span class="u-visually-hidden">Toggle navigation</span>
      </button>
      <!-- Navigation -->
      <nav class="c-site-nav">
        <router-link
          :to="{ name: 'home' }"
          class="u-bg-theme-nav-bg"
        >
          <!-- SLOT: navLogo -->
          <slot name="navLogo"></slot>
        </router-link>
        <!-- Nav Text Links -->
        <ul
          v-if="navItems.text"
          class="o-list-bare"
        >
          <li
            v-for="item in navItems.text"
            :key="item.text"
            :class="getNavItemClasses(item)"
          >
            <router-link
              :to="{ name: item.name, params: { ...item.params } }"
              class="c-site-nav__link u-p-vert-xs u-p-horiz-s"
            >
              {{ item.text }}
            </router-link>
            <!-- Active Dir Sub Nav -->
            <ul
              v-if="activeSubdir === item.name && item.sub"
              class="o-list-bare"
            >
              <li
                v-for="subItem in item.sub"
                :key="subItem.text"
                class="c-site-nav__link o-list-bare_item u-p-0"
              >
                <router-link
                  :to="{ name: subItem.name, params: { ...subItem.params } }"
                  class="u-p-left-l u-p-vert-xs u-font-xs"
                >
                  {{ subItem.text }}
                </router-link>
              </li>
            </ul>
          </li>
        </ul>
        <!-- TODO: Check if navActions exists and add this + an <hr> -->
        <!-- SLOT: navActions -->
        <slot name="navActions"></slot>
        <!-- Nav Icon Links (Github etc...) -->
        <div
          v-if="navItems.icons"
          class="u-bg-theme-nav-bg"
        >
          <hr class="u-w-100">
          <ul class="o-list-inline u-p-s">
            <li
              v-for="icon in navItems.icons"
              :key="icon.type"
              class="o-list-inline__item"
            >
              <a
                :href="icon.href"
                rel="noreferrer noopener"
                target="_blank"
              >
                <Icon :type="icon.type" />
                <span class="u-visually-hidden">
                  {{ icon.text }} (opens in a new tab)
                </span>
              </a>
            </li>
          </ul>
        </div>
        <!-- SLOT: misc -->
        <div class="u-bg-theme-nav-bg u-p-s">
          <slot name="misc"></slot>
        </div>
        <!-- Copyright -->
        <div class="c-site-nav__copyright">
          <p class="u-font-xs u-c-theme-text-alt">
            <!-- TODO: Pull from author and lastUpdated -->
            &copy; Brian George 2019
          </p>
        </div>
      </nav>
    </header>
    <!-- Site Main -->
    <main
      id="site-main"
      class="c-site-main"
    >
      <router-view />
    </main>
    <!-- Alerts -->
    <AlertList />
    <!-- Modal Portal Target -->
    <portal-target name="modal" slim />
  </div>
</template>

<script>
import { PortalTarget } from 'portal-vue';
import AlertList from '@/components/alerts/AlertList.vue';

export default {
  props: {
    navItems: {
      type: Object,
      required: false,
      default: () => ({}),
    },
  },

  components: {
    AlertList,
    PortalTarget,
  },

  data() {
    return {
      isNavOpen: false,
    };
  },

  computed: {
    activeSubdir() {
      if (this.$route && this.$route.name) {
        return this.$route.name.split('.')[0];
      }
      return null;
    },

    classNames() {
      const classNames = ['c-site-header'];
      if (this.isNavOpen) {
        classNames.push('active');
      }
      return classNames;
    },

    navToggleIcon() {
      return this.isNavOpen ? 'close' : 'more';
    },
  },

  watch: {
    $route() {
      if (this.isNavOpen) {
        this.isNavOpen = false;
      }
    },
  },

  methods: {
    getNavItemClasses(item) {
      const classes = ['o-list-bare__item', 'c-site-nav__item'];
      if (this.activeSubdir === item.route) {
        classes.push('active');
      }
      return classes;
    },

    toggleNav() {
      this.isNavOpen = !this.isNavOpen;
    },
  },
};
</script>
