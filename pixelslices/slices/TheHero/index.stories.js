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

        _mock.primary.branding = select(
          'Text color',
          ['theme', 'primary', 'secondary', 'gradient'],
          _mock.primary.branding
        )

        _mock.primary.alignment = select(
          'Alignment',
          ['left', 'center', 'right'],
          _mock.primary.alignment
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

export const GradientLeft = () => ({
  components: {
    Slice,
    SliceZone,
  },
  props: {
    mock: {
      default: (() => {
        const _mock = cloneDeep(mocks[0])

        _mock.primary.branding = 'gradient'
        _mock.primary.alignment = 'left'

        _mock.primary.branding = select(
          'Text color',
          ['theme', 'primary', 'secondary', 'gradient'],
          _mock.primary.branding
        )

        _mock.primary.alignment = select(
          'Alignment',
          ['left', 'center', 'right'],
          _mock.primary.alignment
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

export const PrimaryRight = () => ({
  components: {
    Slice,
    SliceZone,
  },
  props: {
    mock: {
      default: (() => {
        const _mock = cloneDeep(mocks[0])

        _mock.primary.branding = 'primary'
        _mock.primary.alignment = 'right'

        _mock.primary.branding = select(
          'Text color',
          ['theme', 'primary', 'secondary', 'gradient'],
          _mock.primary.branding
        )

        _mock.primary.alignment = select(
          'Alignment',
          ['left', 'center', 'right'],
          _mock.primary.alignment
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
GradientLeft.storyName = 'Gradient left aligned'
PrimaryRight.storyName = 'Primary right aligned'
