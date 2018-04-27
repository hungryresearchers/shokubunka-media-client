import 'bootstrap/dist/css/bootstrap.css'
import { configure } from '@storybook/react'
import { injectGlobal } from 'styled-components'
import { fontFace } from '../src/components/styles/font-family.css'
const req = require.context('../src/components', true, /\.stories\.js$/)

function loadStories() {
  req.keys().forEach((filename) => req(filename))
}

injectGlobal`${fontFace}`

configure(loadStories, module)
