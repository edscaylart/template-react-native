/* eslint-disable @typescript-eslint/no-unused-vars */
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Token } from '~/models/token'

import { actions as loginAction } from '../login/slice'

export type AuthState = {
  isLoggedIn: boolean
  token?: Token
}

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isLoggedIn: false,
  } as AuthState,
  reducers: {
    logout(state) {
      state.isLoggedIn = false
      state.token = undefined
    },
  },
  extraReducers: {
    [loginAction.loginSuccess.type]: (state, action: PayloadAction<Token>) => {
      state.token = action.payload
      state.isLoggedIn = true
    },
  },
})

export const { name, actions, reducer } = authSlice
