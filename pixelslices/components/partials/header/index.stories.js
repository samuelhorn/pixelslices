import { withKnobs, text } from '@storybook/addon-knobs'
import cloneDeep from 'lodash/cloneDeep'
import TheHeader from './TheHeader.vue'
import mocks from './mocks.json'

export default {
  title: 'Partials/TheHeader',
  decorators: [withKnobs],
}

export const Default = () => ({
  components: { TheHeader },
  props: {
    mock: {
      default: (() => {
        const _mock = cloneDeep(mocks)

        _mock.logo_text = text('Site name', 'Pixelslices')

        return _mock
      })(),
    },
  },
  template:
    '<TheHeader class="fixed z-40 top-0 left-0 w-full" :partials="mock" />',
})
