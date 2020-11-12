<template>
  <section class="section">
    <prismic-rich-text :field="slice.primary.title" class="title" />
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
}
</script>
