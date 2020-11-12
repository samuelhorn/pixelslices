<template>
  <div class="swiper-slide rounded-3xl overflow-hidden shadow-smooth relative">
    <prismic-image
      :field="item.image"
      class="h-48 lg:h-64 object-cover w-full"
    />
    <div
      class="absolute z-10 right-0 bottom-0 left-0 flex items-center justify-between py-6 px-8 text-white"
    >
      <prismic-rich-text
        :field="item.title"
        class="text-xl lg:text-xl font-display uppercase"
      />
      <Arrow class="w-8 h-8" />
    </div>
    <div
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
  },
}
</script>
