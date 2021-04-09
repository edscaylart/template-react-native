import React from 'react'

import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack'

import { AuthScreens } from '~/constants/screens'
import ForgetPassword from '~/screens/forget-password'
import Login from '~/screens/login'
import Register from '~/screens/register'

const modalOptions: StackNavigationOptions = {
  animationEnabled: true,
  cardStyle: { backgroundColor: 'rgba(0,0,0,0.15)' },
  cardOverlayEnabled: true,
  cardStyleInterpolator: ({ current: { progress } }) => ({
    cardStyle: {
      opacity: progress.interpolate({
        inputRange: [0, 0.5, 0.9, 1],
        outputRange: [0, 0.25, 0.7, 1],
      }),
    },
    overlayStyle: {
      opacity: progress.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 0.5],
        extrapolate: 'clamp',
      }),
    },
  }),
}

const LoginStack = createStackNavigator()
const LoginStackNavigator: React.FC = () => (
  <LoginStack.Navigator initialRouteName={AuthScreens.LOGIN}>
    <LoginStack.Screen
      component={Login}
      name={AuthScreens.LOGIN}
      options={{ headerShown: false }}
    />
    <LoginStack.Screen component={Register} name={AuthScreens.REGISTER} />
  </LoginStack.Navigator>
)

const AuthStack = createStackNavigator()
const AuthStackNavigator: React.FC = () => (
  <AuthStack.Navigator
    mode="modal"
    headerMode="none"
    screenOptions={{ animationEnabled: false }}
  >
    <AuthStack.Screen component={LoginStackNavigator} name="AuthStack" />
    <AuthStack.Screen
      component={ForgetPassword}
      name={AuthScreens.FORGET_PASSWORD}
      options={modalOptions}
    />
  </AuthStack.Navigator>
)

export default AuthStackNavigator
