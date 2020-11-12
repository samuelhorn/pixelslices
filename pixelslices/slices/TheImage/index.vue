<template>
  <section class="flex" :class="alignContainer">
    <div class="relative w-3/4">
      <prismic-image :field="slice.primary.image" />
      <prismic-rich-text
        :field="slice.primary.caption"
        class="absolute right-0 bottom-0 left-0 p-6 text-white font-bold text-lg"
        :class="alignText"
      />
    </div>
  </section>
</template>

<script>
export default {
  props: {
    slice: {
      type: Object,
      required: true,
      default() {
        return {}
      },
    },
  },
  computed: {
    alignContainer() {
      if (this.slice.primary.align === 'left') {
        return 'justify-start'
      } else if (this.slice.primary.align === 'right') {
        return 'justify-end'
      } else {
        return 'justify-center'
      }
    },
    alignText() {
      if (this.slice.primary.align === 'left') {
        return 'text-right'
      } else if (this.slice.primary.align === 'right') {
        return 'text-left'
      } else {
        return 'text-center'
      }
    },
  },
}
</script>
