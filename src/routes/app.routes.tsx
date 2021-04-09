import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'

import { AppScreens } from '~/constants/screens'
import Home from '~/screens/home'

const AppStack = createStackNavigator()
const AppStackNavigator: React.FC = () => (
  <AppStack.Navigator initialRouteName={AppScreens.HOME}>
    <AppStack.Screen component={Home} name={AppScreens.HOME} />
  </AppStack.Navigator>
)

export default AppStackNavigator
