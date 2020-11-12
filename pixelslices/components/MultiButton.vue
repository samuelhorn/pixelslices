<template>
  <component
    :is="tag"
    :field="link"
    class="font-medium tracking-wider cursor-pointer px-10 py-6 rounded-sm text-white text-lg font-display uppercase leading-none"
    :class="'bg-' + color"
  >
    <slot />
  </component>
</template>

<script>
export default {
  props: {
    link: {
      type: Object,
      default: null,
    },
    color: {
      type: String,
      default: 'primary',
    },
  },
  computed: {
    tag() {
      return this.link ? 'prismic-link' : 'button'
    },
  },
}
</script>
