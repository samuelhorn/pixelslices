import Vue from 'vue'
import { prepareForInline } from './nuxt-entry';
import '~storybook';

import * as components from '../components';
Object.keys(components).forEach(name => Vue.component(name, components[name]));

const globalParameters = {layout:"fullscreen",options:{storySort:{order:["TheHeader","TheFooter"]}}};
globalParameters.docs = {
    ...globalParameters.docs,
    prepareForInline
}
export const parameters = globalParameters
