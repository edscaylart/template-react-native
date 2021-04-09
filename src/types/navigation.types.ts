import { StackNavigationProp } from '@react-navigation/stack'

export type LoginStackParamList = {
  Login: undefined
  Register: undefined
}

export type RegisterNavigationProp = StackNavigationProp<
  LoginStackParamList,
  'Register'
>

export type AuthStackParamList = {
  LoginStack: undefined
  ForgetPassword: undefined
}

export type ForgetPasswordNavigationProp = StackNavigationProp<
  AuthStackParamList,
  'ForgetPassword'
>
