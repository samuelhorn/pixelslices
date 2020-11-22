<!-- HEALTH:UNKNOWN header-burger -->
<template>
  <section class="bg-theme-tint">
    <div
      class="relative py-48 lg:py-64 -mt-24 -mb-32 lg:-mt-32 md:-mb-48 lg:-mb-64"
    >
      <div class="container relative z-10 flex" :class="alignment">
        <div class="max-w-md md:max-w-3xl">
          <span
            class="font-display uppercase text-xl md:text-2xl mb-4 inline-block tracking-wider text-contrast"
          >
            {{ slice.primary.preTitle }}
          </span>
          <prismic-rich-text
            :field="slice.primary.title"
            class="text-5xl sm:text-6xl md:text-8xl mb-4 md:mb-8 font-display uppercase"
            :class="textColor"
          />
          <nav class="mt-12">
            <MultiButton
              v-for="(item, index) in slice.items"
              :key="index"
              :link="item.link"
              :color="item.branding"
              :class="alignmentButtons"
            >
              {{ item.buttonText }}
            </MultiButton>
          </nav>
        </div>
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
    alignment() {
      if (this.slice.primary.alignment === 'left') {
        return 'justify-start text-left'
      } else if (this.slice.primary.alignment === 'right') {
        return 'justify-end text-right'
      } else {
        return 'justify-center text-center'
      }
    },
    alignmentButtons() {
      if (this.slice.primary.alignment === 'left') {
        return 'mr-2'
      } else if (this.slice.primary.alignment === 'right') {
        return 'ml-2'
      } else {
        return 'mx-2'
      }
    },
    textColor() {
      if (this.slice.primary.branding === 'theme') {
        return 'text-contrast'
      } else if (this.slice.primary.branding === 'primary') {
        return 'text-primary'
      } else if (this.slice.primary.branding === 'secondary') {
        return 'text-secondary'
      } else {
        return 'bg-gradient-to-b from-primary to-secondary bg-clip-text text-transparent'
      }
    },
  },
}
</script>
