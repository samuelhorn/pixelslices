import TheHeader from './TheHeader.vue'
import mocks from './mocks.json'

export default {
  title: 'Partials/TheHeader',
}

export const Default = () => ({
  // mounted() {
  //   this.$colorMode.preference = select(
  //     'Theme',
  //     ['light', 'dark'],
  //     this.$colorMode.value
  //   )
  // },
  components: { TheHeader },
  props: {
    mock: {
      default: mocks,
    },
  },
  template:
    '<TheHeader class="fixed z-40 top-0 left-0 w-full" :partials="mock" />',
})
