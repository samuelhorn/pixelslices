<template>
  <header
    ref="header"
    class="py-5 px-6 md:py-6 md:px-8 xl:px-20 flex justify-between items-center z-40 top-0 left-0 w-full"
  >
    <nuxt-link to="/" class="flex items-center" aria-label="home">
      <prismic-image
        v-if="partials.logo_image"
        :field="partials.logo_image"
        class="mr-4 h-8 md:h-12 w-auto"
      />
      <span class="text-contrast text-2xl md:text-3xl font-display uppercase">{{
        partials.logo_text
      }}</span>
    </nuxt-link>
    <client-only>
      <ThemeSwitch v-if="$colorMode" />
    </client-only>
  </header>
</template>

<script>
import Headroom from 'headroom.js'

export default {
  props: {
    partials: {
      type: Object,
      required: true,
    },
  },
  mounted() {
    const header = this.$refs.header
    const headroom = new Headroom(header, { offset: 0 })
    headroom.init()
  },
}
</script>

<style lang="postcss" scoped>
.headroom {
  @apply fixed transition-all duration-300;
}

.headroom--unpinned {
  @apply opacity-100 bg-theme-op;
  backdrop-filter: blur(16px);
}

.headroom--pinned {
  @apply opacity-100 bg-theme-op;
  backdrop-filter: blur(16px);
}

.headroom--top {
  @apply bg-transparent;
  backdrop-filter: blur(0);
}

.sb-show-main .headroom--top {
  @apply bg-theme-tint;
}
</style>
