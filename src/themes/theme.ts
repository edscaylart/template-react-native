import { createTheme } from '@shopify/restyle'

import defaultColors from './colors'
import { spacing } from './spacing'
import variants from './variants'

const defaultTheme = createTheme({
  breakpoints: {},
  spacing,
  colors: defaultColors,
  ...variants,
})

export type Theme = typeof defaultTheme

export default defaultTheme
