<!-- HEALTH:UNKNOWN header-burger -->
<template>
  <section class="bg-theme-alt">
    <div class="relative py-24 lg:py-40">
      <div class="container relative z-10 flex" :class="textAlignment">
        <div class="max-w-md md:max-w-3xl">
          <span
            class="font-display uppercase text-md md:text-lg mb-4 inline-block tracking-wider"
            :class="branding === 'primary' ? 'text-primary' : 'text-secondary'"
          >
            {{ slice.primary.preTitle }}
          </span>
          <prismic-rich-text
            :field="slice.primary.title"
            class="text-4xl md:text-6xl text-text mb-12 font-display uppercase"
          />
          <MultiButton :link="slice.primary.ctaLink" :color="branding">
            {{ slice.primary.ctaText }}
          </MultiButton>
        </div>
      </div>
      <div class="absolute top-0 bottom-0" :class="imageAlignment">
        <div class="absolute inset-0" :class="tintAlignment" />
        <prismic-image
          :field="slice.primary.image"
          class="h-full w-full object-cover md:object-left"
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
    branding() {
      return this.slice.primary.branding
    },
    textAlignment() {
      if (this.slice.primary.alignment === 'left') {
        return 'justify-start'
      } else if (this.slice.primary.alignment === 'right') {
        return 'justify-end'
      } else {
        return 'justify-center text-center'
      }
    },
    imageAlignment() {
      if (this.slice.primary.alignment === 'left') {
        return 'right-0 md:w-2/3'
      } else if (this.slice.primary.alignment === 'right') {
        return 'left-0 md:w-2/3'
      } else {
        return 'inset-0'
      }
    },
    tintAlignment() {
      if (this.slice.primary.alignment === 'left') {
        return 'bg-theme opacity-50 md:opacity-100 md:bg-transparent md:bg-gradient-to-r md:right-auto from-theme-alt to-transparent md:w-3/4'
      } else if (this.slice.primary.alignment === 'right') {
        return 'bg-theme opacity-50 md:opacity-100 md:bg-transparent md:bg-gradient-to-l md:left-auto from-theme-alt to-transparent md:w-3/4'
      } else {
        return 'bg-theme opacity-50'
      }
    },
  },
}
</script>
