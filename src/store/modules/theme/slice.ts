import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface ThemeState {
  theme: string | null
  darkMode: boolean | null
}

const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    theme: 'default',
    darkMode: null,
  } as ThemeState,
  reducers: {
    setDefaultTheme(state, action: PayloadAction<string>) {
      state.theme = action.payload
      state.darkMode = action.payload === 'dark'
    },
    changeTheme(state, action: PayloadAction<string>) {
      state.theme = action.payload
      if (action.payload === 'default') {
        state.darkMode = null
      } else {
        state.darkMode = action.payload === 'dark'
      }
    },
  },
})

export const { name, actions, reducer } = themeSlice
