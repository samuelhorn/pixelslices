import { withKnobs, boolean, select } from '@storybook/addon-knobs'
import cloneDeep from 'lodash/cloneDeep'
import SliceZone from 'vue-slicezone'
import model from './model'
import imageMocks from './imageMocks.json'
import iconMocks from './iconMocks.json'
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
        const _mock = cloneDeep(imageMocks[0])

        _mock.primary.navigation = boolean('Navigation dots?', true)

        _mock.primary.branding = select(
          'Branding',
          ['theme', 'primary', 'secondary'],
          _mock.primary.branding
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

export const withIcons = () => ({
  components: {
    Slice,
    SliceZone,
  },
  props: {
    mock: {
      default: (() => {
        const _mock = cloneDeep(iconMocks[0])

        _mock.primary.navigation = boolean('Navigation dots?', true)

        _mock.primary.branding = select(
          'Branding',
          ['theme', 'primary', 'secondary'],
          _mock.primary.branding
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

withIcons.storyName = 'With icons'
