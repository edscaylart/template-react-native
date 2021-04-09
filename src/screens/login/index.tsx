import React from 'react'
import { useTranslation } from 'react-i18next'
import { Pressable } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

import { useTheme } from '@shopify/restyle'

import { Box, Text } from '~/components'
import { actions as themeAction } from '~/store/modules/theme/slice'
import { Theme } from '~/themes'

export default function Login() {
  const { t, i18n } = useTranslation()
  const theme = useTheme<Theme>()
  const dispatch = useDispatch()

  const isDark = useSelector(state => state.theme.darkMode)

  const toggleTheme = () => {
    dispatch(themeAction.changeTheme(isDark ? 'light' : 'dark'))
  }

  const handleChangeLanguage = (language: string) => () => {
    i18n.changeLanguage(language)
  }

  return (
    <Box
      flex={1}
      backgroundColor="mainBackground"
      alignItems="center"
      justifyContent="center"
    >
      <Text variant="body">{t('welcome', { name: 'John doe' })}</Text>
      <Box>
        <Text variant="body">Theme</Text>
        <Pressable onPress={toggleTheme}>
          <Text>{isDark ? 'dark' : 'light'}</Text>
        </Pressable>
      </Box>
      <Text variant="body">Idioma</Text>
      <Box flexDirection="row" justifyContent="space-between" width="50%">
        <Pressable onPress={handleChangeLanguage('pt-BR')}>
          <Text>{t('language.pt-br')}</Text>
        </Pressable>
        <Pressable onPress={handleChangeLanguage('en')}>
          <Text>{t('language.en-us')}</Text>
        </Pressable>
      </Box>
    </Box>
  )
}
