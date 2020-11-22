<template>
  <div
    class="swiper-slide rounded-3xl overflow-hidden relative"
    :class="appearance === 'icons' ? 'bg-theme-tint' : 'shadow-smooth'"
  >
    <prismic-image
      :field="item.image"
      :class="
        appearance === 'images'
          ? 'h-48 lg:h-64 object-cover w-full'
          : 'h-16 w-16 mt-6 ml-8 lg:h-20 lg:w-20 xl:h-24 xl:w-24'
      "
    />
    <prismic-link
      v-if="item.link"
      :field="item.link"
      class="flex items-center justify-between py-6 px-8"
      :class="contentAppearance"
    >
      <prismic-rich-text
        :field="item.title"
        class="text-2xl lg:text-3xl font-display uppercase"
      />
      <Arrow class="w-8 h-8" />
    </prismic-link>
    <prismic-rich-text
      v-else
      :field="item.title"
      class="text-xl lg:text-xl font-display uppercase py-6 px-8"
      :class="
        appearance === 'images'
          ? 'absolute z-10 right-0 bottom-0 left-0 text-white'
          : 'relative text-contrast'
      "
    />
    <div
      v-if="appearance === 'images'"
      class="absolute right-0 bottom-0 left-0 h-32 bg-gradient-to-t from-gray-900 opacity-50"
    />
  </div>
</template>

<script>
import Arrow from '~/assets/svg/Arrow.svg?inline'

export default {
  components: {
    Arrow,
  },
  props: {
    item: {
      type: Object,
      required: true,
    },
    appearance: {
      type: String,
      default: 'images',
    },
  },
}
</script>
