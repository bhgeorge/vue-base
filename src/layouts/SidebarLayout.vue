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
    <!-- Mobile Nav Toggle -->
    <button
      class="o-circle c-mobile-nav-toggle u-d-none@m"
      name="toggleNav"
      type="button"
      @click="toggleNav"
    >
      <Icon
        :type="navToggleIcon"
        :modifiers="['o-icon--l']"
      />
      <span class="u-visually-hidden">Toggle navigation</span>
    </button>
    <!-- Header -->
    <header :class="classNames">
      <!-- Navigation -->
      <nav class="c-site-nav">
        <router-link
          :to="{ name: 'home' }"
          class="u-bg-theme-nav-bg"
        >
          <!-- SLOT: navLogo -->
          <slot name="navLogo"></slot>
        </router-link>
        <!-- Nav Primary Links -->
        <ul
          v-if="navItems.primary"
          class="o-list-bare"
        >
          <SidebarNavLink
            v-for="item in navItems.primary"
            :key="item.text"
            :icon="item.icon"
            :isActive="activeSubdir === item.name"
            :route="{ name: item.name, params: { ...item.params } }"
            :text="item.text"
          >
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
          </SidebarNavLink>
        </ul>
        <!-- TODO: Check if navActions exists and add this + an <hr> -->
        <!-- SLOT: navActions -->
        <slot name="navActions"></slot>
        <!-- Nav Social Links (Github etc...) -->
        <div v-if="navItems.social">
          <hr class="u-m-horiz-s">
          <ul class="o-list-inline u-p-s">
            <li
              v-for="icon in navItems.social"
              :key="icon.type"
              class="o-list-inline__item"
            >
              <div class="o-circle o-cover-link c-social-link">
                <a
                  :href="icon.href"
                  class="o-cover-link__item c-social-link__link"
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  <Icon :type="icon.type" />
                  <span class="u-visually-hidden">
                    {{ icon.text }} (Opens in a new tab)
                  </span>
                </a>
              </div>
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
            &copy; Brian George 2020
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
      return this.isNavOpen ? 'close' : 'menu';
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
    toggleNav() {
      this.isNavOpen = !this.isNavOpen;
    },
  },
};
</script>
