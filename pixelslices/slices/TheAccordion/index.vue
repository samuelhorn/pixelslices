<template>
  <section class="px-6 max-w-xl mx-auto my-16 md:my-24 lg:my-32 md:max-w-2xl">
    <prismic-rich-text :field="slice.primary.title" class="slice-heading" />
    <div
      v-for="(item, index) in slice.items"
      :key="'accordion-' + index"
      class="rounded-3xl px-6 py-6 md:px-12 md:py-8 mb-4 md:mb-6 cursor-pointer"
      :class="
        slice.primary.appearance === 'primary'
          ? 'text-white bg-primary'
          : slice.primary.appearance === 'secondary'
          ? 'text-white bg-secondary'
          : 'text-contrast bg-theme-tint'
      "
      @click="toggleAccordion(index)"
    >
      <header class="pointer-events-none relative">
        <transition-group
          enter-class="opacity-0 transform rotate-180"
          enter-active-class="transition-all duration-200 ease-out"
          leave-active-class="transition-all duration-200 ease-in"
          leave-to-class="opacity-0 transform -rotate-180"
        >
          <Plus
            v-if="active !== index"
            key="plus"
            class="w-6 h-6 absolute left-0 top-0 mt-0.5 md:w-8 md:h-8 md:mt-0"
          />
          <Minus
            v-else
            key="minus"
            class="w-6 h-6 absolute left-0 top-0 mt-0.5 md:w-8 md:h-8 md:mt-0"
          />
        </transition-group>
        <prismic-rich-text
          :field="item.title"
          class="text-xl md:text-2xl pl-10 md:pl-12"
        />
      </header>
      <prismic-rich-text
        v-show="active === index"
        :field="item.text"
        class="pointer-events-none mt-2 opacity-75 pl-10 md:pl-12"
      />
    </div>
  </section>
</template>

<script>
import Plus from '~/assets/svg/Plus.svg?inline'
import Minus from '~/assets/svg/Minus.svg?inline'

export default {
  components: {
    Plus,
    Minus,
  },
  props: {
    slice: {
      type: Object,
      required: true,
      default() {
        return {}
      },
    },
  },
  data() {
    return {
      active: null,
    }
  },
  methods: {
    toggleAccordion(item) {
      this.active === item ? (this.active = null) : (this.active = item)
    },
  },
}
</script>
