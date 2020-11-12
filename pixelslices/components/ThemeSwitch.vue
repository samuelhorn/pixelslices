<template>
  <button
    class="bg-theme-alt-3 w-16 px-1 h-10 rounded-full focus:outline-none transition-colors duration-200"
    @click="switchEnv"
  >
    <div
      class="w-8 h-8 bg-theme rounded-full relative transform text-text shadow-sm transition-all duration-200"
      :class="$colorMode.value === 'light' ? 'translate-x-0' : 'translate-x-6'"
    >
      <transition-group
        enter-class="opacity-0"
        enter-active-class="transition-opacity duration-200"
        leave-active-class="transition-opacity duration-200"
        leave-to-class="opacity-0"
      >
        <Sun
          v-if="$colorMode.value === 'light'"
          key="1"
          class="absolute top-0 left-0 h-6 w-6 mt-1 ml-1"
        />
        <Moon
          v-if="$colorMode.value === 'dark'"
          key="2"
          class="absolute top-0 left-0 h-6 w-6 mt-1 ml-1"
        />
      </transition-group>
    </div>
  </button>
</template>

<script>
import Sun from '~/assets/svg/Sun.svg?inline'
import Moon from '~/assets/svg/Moon.svg?inline'

export default {
  components: {
    Sun,
    Moon,
  },
  methods: {
    switchEnv() {
      if (this.$colorMode.value === 'dark') {
        this.$colorMode.preference = 'light'
      }

      if (this.$colorMode.value === 'light') {
        this.$colorMode.preference = 'dark'
      }
    },
  },
}
</script>
