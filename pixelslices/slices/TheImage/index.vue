<template>
  <section class="flex my-16 md:my-24 lg:my-32" :class="alignContainer">
    <div :class="alignWrapper">
      <div class="relative overflow-hidden" :class="alignImage">
        <prismic-image
          :field="slice.primary.image"
          class="object-cover w-full h-64 md:h-128"
        />
        <div
          class="bg-gradient-to-t from-black to-transparent absolute right-0 bottom-0 left-0 h-32 md:h-64 opacity-50"
        />
        <prismic-rich-text
          :field="slice.primary.caption"
          class="absolute bottom-0 left-0 right-0 px-8 pb-6 text-white font-bold text-xl md:text-2xl uppercase font-display tracking-wider"
          :class="alignText"
        />
      </div>
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
    alignText() {
      if (this.slice.primary.align === 'left') {
        return 'text-right'
      } else if (this.slice.primary.align === 'right') {
        return 'text-left'
      } else if (this.slice.primary.align === 'full') {
        return 'text-center'
      } else {
        return 'text-center'
      }
    },
    alignContainer() {
      if (this.slice.primary.align === 'left') {
        return 'justify-start'
      } else if (this.slice.primary.align === 'right') {
        return 'justify-end'
      } else {
        return 'justify-center'
      }
    },
    alignWrapper() {
      if (this.slice.primary.align === 'left') {
        return 'w-5/6'
      } else if (this.slice.primary.align === 'right') {
        return 'w-5/6'
      } else if (this.slice.primary.align === 'full') {
        return 'w-full'
      } else {
        return 'container'
      }
    },
    alignImage() {
      if (this.slice.primary.align === 'left') {
        return 'rounded-r-3xl'
      } else if (this.slice.primary.align === 'right') {
        return 'rounded-l-3xl'
      } else if (this.slice.primary.align === 'full') {
        return 'w-full'
      } else {
        return 'rounded-3xl'
      }
    },
  },
}
</script>
