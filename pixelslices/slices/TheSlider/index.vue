<template>
  <section
    class="overflow-hidden bg-theme py-10 md:py-24 lg:py-32"
    :class="{ 'bg-theme-alt': backgroundTint }"
  >
    <div class="container">
      <prismic-rich-text
        :field="slice.primary.title"
        class="text-md md:text-lg tracking-wider mb-4 md:mb-6 font-display uppercase leading-tight"
        :class="'text-' + branding"
      />
      <div
        v-swiper:mySwiper="swiperOption"
        class="mb-10"
        style="overflow: visible !important"
      >
        <div class="swiper-wrapper">
          <SliderCard
            v-for="(item, index) in slice.items"
            :key="index"
            :item="item"
          />
        </div>
        <div
          v-show="isNav"
          class="swiper-pagination relative w-full mt-6 md:mt-10"
          :class="'dots-' + branding"
        />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  directives: !process.browser
    ? {}
    : {
        swiper: require('vue-awesome-swiper').directive,
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
      swiperOption: {
        slidesPerView: 1.1,
        spaceBetween: 20,
        breakpoints: {
          620: {
            slidesPerView: 2.1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2.3,
            spaceBetween: 40,
          },
        },
        loop: false,
        loopAdditionalSlides: 1,
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
          clickable: true,
        },
      },
    }
  },
  computed: {
    isNav() {
      return this.slice.primary.navigation
    },
    branding() {
      return this.slice.primary.branding
    },
    backgroundTint() {
      return this.slice.primary.background
    },
  },
}
</script>

<style lang="postcss">
.swiper-container {
  @apply mx-auto relative list-none p-0 z-10;
}

.swiper-wrapper {
  @apply relative w-full h-full z-10 flex transition-transform box-content;
}

.swiper-slide {
  @apply flex-shrink-0 w-full h-full relative transition-transform;
}

.swiper-pagination {
  @apply relative text-center transition-opacity duration-300 transform-none z-10;
}

.swiper-pagination.swiper-pagination-hidden {
  @apply opacity-0;
}

.swiper-pagination-fraction,
.swiper-pagination-custom,
.swiper-container-horizontal > .swiper-pagination-bullets {
  @apply w-full;
}

.swiper-pagination-bullet {
  @apply w-3 h-3 inline-block rounded-full mx-1 opacity-25;
}

.dots-primary .swiper-pagination-bullet {
  @apply bg-primary;
}

.dots-secondary .swiper-pagination-bullet {
  @apply bg-secondary;
}

.swiper-pagination-bullet-active {
  @apply opacity-100;
}

button.swiper-pagination-bullet {
  @apply border-none m-0 p-0 shadow-none appearance-none;
}
</style>
