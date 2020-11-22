<template>
  <section class="my-16 md:my-24 lg:my-32" :class="width">
    <prismic-rich-text
      :field="slice.primary.title"
      class="slice-heading mb-2"
    />
    <div class="grid gap-x-12" :class="columns">
      <prismic-rich-text
        v-for="(item, index) in slice.items"
        :key="'column-' + index"
        :field="item.column"
        class="slice-text mt-8"
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
    columns() {
      if (this.slice.primary.columns === '1') {
        return 'grid-cols-1'
      } else if (this.slice.primary.columns === '2') {
        return 'grid-cols-1 sm:grid-cols-2'
      } else {
        return 'grid-cols-1 sm:grid-cols-3'
      }
    },
    width() {
      if (this.slice.primary.columns === '1') {
        return 'max-w-2xl mx-auto px-6'
      } else if (this.slice.primary.columns === '2') {
        return 'max-w-4xl mx-auto px-6'
      } else {
        return 'container'
      }
    },
  },
}
</script>

<style lang="postcss" scoped>
.slice-text >>> *:first-child {
  @apply mt-0;
}

.slice-text >>> *:last-child {
  @apply mb-0;
}

.slice-text >>> h2 {
  @apply mb-6 mt-8 text-3xl font-bold;
}

.slice-text >>> h3 {
  @apply mt-8 -mb-2 text-2xl font-bold;
}

.slice-text >>> h4 {
  @apply mt-6 -mb-4 text-xl font-bold;
}

.slice-text >>> p {
  @apply my-6 leading-relaxed opacity-75;
}
</style>
