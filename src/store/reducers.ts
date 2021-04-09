import { combineReducers } from 'redux'

import { reducer as auth } from './modules/auth/slice'
import { reducer as login } from './modules/login/slice'
import { reducer as theme } from './modules/theme/slice'

const reducers = combineReducers({
  auth,
  login,
  theme,
})

export default reducers
