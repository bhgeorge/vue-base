<!-- eslint-disable -->
<template>
  <div>
    <section class="o-section">
      <div class="o-container">
        <h1 class="h1 u-font-serif">vue-base</h1>
      </div>
    </section>
    <section class="o-section">
      <div class="o-container">
        <div class="u-w-m800">
          <!-- Card Outline -->
          <div class="c-card c-card--outline">
            <h2 class="c-card__title">Card Outline</h2>
            <div class="c-card__body">
              <p>Card used to display some sort of simple grouping.</p>
              <div class="u-m-top">
                <SearchAutocomplete
                  :dataset="colors"
                  inputId="sample-search-autocomplete"
                  label="Search Autocomplete"
                  searchKey="name"
                  @emitSelect="handleSmartSearchSelect"
                />
              </div>
              <div class="u-m-top">
                <ul class="c-tag-list o-list-inline">
                  <li class="c-tag o-list-inline__item o-cover-link">
                    <a href="#" class="c-tag__link o-cover-link__item">
                      <Icon type="code" />
                      <span class="u-font-xs">Code Tag</span>
                    </a>
                  </li>
                  <li class="c-tag o-list-inline__item o-cover-link">
                    <a href="#" class="c-tag__link o-cover-link__item">
                      <span class="u-font-xs">Naked Tag</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr class="u-m-vert-xxl">
        <!--  -->
        <div class="o-section">
          <div class="u-p-xs u-c-theme-code-header-text u-bg-theme-code-header-bg">
            <h4>SampleScript.cs</h4>
          </div>
            <pre><code class="u-font-s"><span class="token keyword">using</span> UnityEngine<span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SkillAttack</span> <span class="token punctuation">:</span> <span class="token class-name">Skill</span>
<span class="token punctuation">{</span>
  <span class="token keyword">public</span> <span class="token keyword">float</span> freezeTime <span class="token operator">=</span> <span class="token number">0.1f</span><span class="token punctuation">;</span>
  <span class="token keyword">public</span> <span class="token keyword">float</span> invincibleTime <span class="token operator">=</span> <span class="token number">0.2f</span><span class="token punctuation">;</span>

  <span class="token comment">// I am a comment</span>
  <span class="token keyword">protected</span> <span class="token class-name">HitData</span> <span class="token function">getHitData</span><span class="token punctuation">(</span><span class="token class-name">Collider2D</span> col<span class="token punctuation">,</span> <span class="token class-name">Vector2</span> force<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">HitData</span><span class="token punctuation">(</span>
      gameObject<span class="token punctuation">,</span>
      col<span class="token punctuation">.</span>gameObject<span class="token punctuation">,</span>
      force<span class="token punctuation">,</span>
      col<span class="token punctuation">.</span>offset<span class="token punctuation">,</span>
      freezeTime<span class="token punctuation">,</span>
      invincibleTime
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">public</span> <span class="token keyword">override</span> <span class="token keyword">void</span> <span class="token function">OnHit</span><span class="token punctuation">(</span><span class="token class-name">Collider2D</span> col<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    Debug<span class="token punctuation">.</span><span class="token function">Log</span><span class="token punctuation">(</span><span class="token string">"Default SkillAttack.OnHit() called"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span></code></pre>
        </div>
        <hr class="u-m-vert-xxl">
        <!-- Sample Thought -->
        <div class="o-section c-typography u-w-m800">
          <h1 class="u-m-bot-l">The Last Remnant had some good ideas</h1>
          <p class="u-font-xs u-m-bot-xs">Jan 8th, 2020</p>
          <hr class="u-m-bot-l">
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum reprehenderit consectetur dolor fugiat provident. Tenetur ut quas tempore assumenda quo et aliquam aperiam fugit.</p>
          <h2>Control</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium inventore nemo, cupiditate ratione, culpa, adipisci quia rerum magni sint fuga labore dignissimos! Necessitatibus optio natus excepturi, sint inventore illo. Cum.</p>
          <!-- Buttons -->
          <div class="u-d-flex u-f-align-center">
            <button class="c-btn c-btn--primary u-m-right">Primary</button>
            <button class="c-btn c-btn--secondary u-m-right">Secondary</button>
            <button class="c-btn c-btn--icon u-m-right">
              <Icon type="trash" />
            </button>
            <button class="c-btn c-btn--ui">
              <Icon type="add" /> UI Button
            </button>
            <button class="c-btn--text">Text Button</button>
          </div>
        </div>
        <hr>
        <!-- Colors -->
        <div class="o-grid o-grid--4-4-4@m">
          <div
            v-for="hue in colors"
            :key="hue.name"
            class="o-col"
          >
            <h3 class="h3">{{ hue.name }}</h3>
            <ul class="o-list-bare">
              <!-- Base Color -->
              <li class="o-list-bare__item">
                <div :class="`u-p u-bg-${hue.name}`"></div>
              </li>
              <!-- Shades -->
              <li
                v-for="shade in hue.shades"
                :key="shade"
                class="o-list-bare__item"
              >
                <div :class="`u-p u-bg-${hue.name}-${shade}`"></div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<!-- eslint-enable -->

<script>
export default {
  data() {
    return {
      colors: [
        {
          name: 'gray',
          id: 'gray',
          shades: [
            'white',
            'light',
            'dark',
            'black',
          ],
        },
        {
          name: 'white',
          id: 'white',
          shades: [
            'hover',
          ],
        },
        {
          name: 'black',
          id: 'black',
          shades: [],
        },
        {
          name: 'salmon',
          id: 'salmon',
          shades: [
            'hover',
            'white',
            'light',
            'dark',
            'black',
          ],
        },
        {
          name: 'indigo',
          id: 'indigo',
          shades: [
            'hover',
            'white',
            'light',
            'dark',
            'black',
          ],
        },
        {
          name: 'gold',
          id: 'gold',
          shades: [],
        },
        {
          name: 'orange',
          id: 'orange',
          shades: [],
        },
        {
          name: 'teal',
          id: 'teal',
          shades: [],
        },
        {
          name: 'blue',
          id: 'blue',
          shades: [],
        },
      ],
    };
  },

  methods: {
    handleSmartSearchAddNew(query) {
      console.log(query);
    },

    handleSmartSearchSelect(result) {
      console.log(result);
    },
  },
};
</script>
