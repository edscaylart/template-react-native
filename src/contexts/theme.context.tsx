/* eslint-disable react/prop-types */
import React, { useMemo } from 'react'
import { useColorScheme } from 'react-native'
import { useSelector } from 'react-redux'

import {
  createTheme,
  ThemeProvider as RestyleThemeProvider,
} from '@shopify/restyle'

import defaultColors from '~/themes/colors'
import darkColors from '~/themes/dark/colors'
import spacing from '~/themes/spacing'
import variants from '~/themes/variants'

export const ThemeProvider: React.FC = ({ children }) => {
  const colorScheme = useColorScheme()

  const isDark = useSelector(state => state.theme.darkMode)
  const darkMode = isDark === null ? colorScheme === 'dark' : isDark

  const theme = useMemo(() => {
    const colors = darkMode ? darkColors : defaultColors
    const baseTheme = createTheme({
      breakpoints: {},
      spacing,
      colors,
      ...variants,
    })
    return baseTheme
  }, [darkMode])

  return <RestyleThemeProvider theme={theme}>{children}</RestyleThemeProvider>
}
