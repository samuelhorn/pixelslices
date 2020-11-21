<template>
  <section class="px-6 max-w-xl mx-auto my-16 md:my-24 lg:my-32 md:max-w-2xl">
    <prismic-rich-text :field="slice.primary.title" class="slice-heading" />
    <prismic-rich-text
      :field="slice.primary.description"
      class="mb-12 opacity-60"
    />
    <form :name="slice.primary.name" method="POST" data-netlify="true">
      <label
        v-for="(item, index) in slice.items"
        :key="'field-' + index"
        class="w-full block mt-8 relative text-center"
      >
        <span
          class="inline-block font-display -mb-4 text-sm ml-6 text-white tracking-wider absolute top-0 leading-none px-2 pb-0.5 pt-1 rounded-full transform -translate-y-1/2"
          :class="'bg-' + slice.primary.appearance"
        >
          {{ item.label }}
        </span>
        <input
          :type="item.type"
          :placeholder="item.placeholder"
          :name="item.name"
          class="w-full bg-theme-tint rounded-3xl py-4 p-6 md:py-6 focus:outline-none focus:ring-2"
          :class="'focus:ring-' + slice.primary.appearance"
        />
      </label>
      <footer class="flex justify-end mt-8">
        <MultiButton type="submit" :color="slice.primary.appearance">
          Send
        </MultiButton>
      </footer>
    </form>
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
