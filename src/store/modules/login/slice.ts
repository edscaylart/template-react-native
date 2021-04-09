/* eslint-disable @typescript-eslint/no-unused-vars */
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Loading } from '~/constants/loading'
import { Token } from '~/models/token'
import { ErrorResponse } from '~/services/api'
import { BaseReducerState } from '~/types/redux.types'

export type LoginState = BaseReducerState

const loginSlice = createSlice({
  name: 'login',
  initialState: {
    loading: Loading.IDLE,
  } as LoginState,
  reducers: {
    login(state, _: PayloadAction<{ email: string; password: string }>) {
      state.error = undefined
      state.loading = Loading.PENDING
    },
    loginSuccess(state, _: PayloadAction<Token>) {
      state.loading = Loading.IDLE
    },
    loginFailure(state, action: PayloadAction<ErrorResponse>) {
      state.loading = Loading.IDLE
      state.error = action.payload
    },
  },
})

export const { name, actions, reducer } = loginSlice
