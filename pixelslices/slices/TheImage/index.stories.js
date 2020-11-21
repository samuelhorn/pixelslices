import { withKnobs, select } from '@storybook/addon-knobs'
import cloneDeep from 'lodash/cloneDeep'
import SliceZone from 'vue-slicezone'
import model from './model'
import mocks from './customMocks.json'
import Slice from './'

export default {
  title: model.name,
  decorators: [withKnobs],
}

export const DefaultSlice = () => ({
  components: {
    Slice,
    SliceZone,
  },
  props: {
    mock: {
      default: (() => {
        const _mock = cloneDeep(mocks[0])

        _mock.primary.align = select(
          'Alignement',
          ['center', 'full', 'left', 'right'],
          _mock.primary.align
        )

        return _mock
      })(),
    },
  },
  data() {
    return {
      resolver() {
        return Slice
      },
    }
  },
  template: '<slice-zone :slices="[ mock ]" :resolver="resolver" />',
})

DefaultSlice.storyName = 'Default'
