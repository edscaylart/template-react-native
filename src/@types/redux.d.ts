import 'react-redux'
import { AuthState } from '~/store/modules/auth/slice'
import { LoginState } from '~/store/modules/login/slice'
import { ThemeState } from '~/store/modules/theme/slice'

declare module 'react-redux' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultRootState {
    auth: AuthState
    login: LoginState
    theme: ThemeState
  }
}
