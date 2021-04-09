/* eslint-disable @typescript-eslint/no-empty-function */
import { initReactI18next } from 'react-i18next'
import * as RNLocalize from 'react-native-localize'

import AsyncStorage from '@react-native-async-storage/async-storage'
import i18n from 'i18next'

import { AppPreferenceStorage } from '~/constants/storage'

import en from './translations/en_US.json'
import pt_br from './translations/pt_BR.json'

const resources = {
  en,
  'pt-BR': pt_br,
}

const languageDetector = {
  type: 'languageDetector',
  async: true,
  init: () => {},
  detect: async (callback: any) => {
    const storedLanguage = await AsyncStorage.getItem(
      AppPreferenceStorage.LOCALE,
    )
    if (storedLanguage) {
      return callback(storedLanguage)
    }

    // @ts-ignore
    const { languageTag } = RNLocalize.findBestAvailableLanguage(
      Object.keys(resources),
    )

    return callback(languageTag)
  },
  cacheUserLanguage: (language: string) => {
    AsyncStorage.setItem(AppPreferenceStorage.LOCALE, language)
  },
}

i18n
  // @ts-ignore
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'pt-BR',
    debug: true,
    interpolation: {
      escapeValue: false,
    },
  })

export default i18n
