import React from 'react'
import { StatusBar } from 'react-native'
import { useSelector } from 'react-redux'

import { NavigationContainer } from '@react-navigation/native'

import { navigationRef } from '~/services/navigation.service'

import AppStackNavigator from './app.routes'
import AuthStackNavigator from './auth.routes'

const Routes: React.FC = () => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn)
  const isDark = useSelector(state => state.theme.darkMode)

  return (
    <NavigationContainer ref={navigationRef}>
      <StatusBar barStyle={isDark ? 'light-content' : 'dark-content'} />
      {isLoggedIn ? <AppStackNavigator /> : <AuthStackNavigator />}
    </NavigationContainer>
  )
}

export default Routes
