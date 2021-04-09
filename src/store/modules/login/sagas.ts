// import { delay } from 'redux-saga'
import { PayloadAction } from '@reduxjs/toolkit'
import { REHYDRATE } from 'redux-persist/lib/constants'
import { takeLatest, put, all } from 'redux-saga/effects'

import api from '~/services/api'

import { actions } from './slice'

// @ts-ignore
export function setToken({ payload }) {
  if (!payload) return
  const { token } = payload.auth
  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`
  }
}

function* loginAsync(
  action: PayloadAction<{ email: string; password: string }>,
) {
  // const response = yield call(loginUser, action.username, action.password);

  // if (response.success) {
  yield put(actions.loginSuccess({}))
  // } else {
  // yield put(actions.loginFailure({}))
  // }
}

export default all([
  // @ts-ignore
  takeLatest(REHYDRATE, setToken),
  takeLatest(actions.login.type, loginAsync),
])
