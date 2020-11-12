import TheFooter from './TheFooter.vue'
import mocks from './mocks.json'

export default {
  title: 'Partials/TheFooter',
}

export const Default = () => ({
  // mounted() {
  //   this.$colorMode.preference = select(
  //     'Theme',
  //     ['light', 'dark'],
  //     this.$colorMode.value
  //   )
  // },
  components: { TheFooter },
  props: {
    mock: {
      default: mocks,
    },
  },
  template:
    '<TheFooter class="fixed z-40 top-0 left-0 w-full" :partials="mock" />',
})
