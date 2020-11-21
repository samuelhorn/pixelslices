import TheFooter from './TheFooter.vue'
import mocks from './mocks.json'

export default {
  title: 'Partials/TheFooter',
}

export const Default = () => ({
  components: { TheFooter },
  props: {
    mock: {
      default: mocks,
    },
  },
  template: '<TheFooter :partials="mock" />',
})
