import 'react-native-gesture-handler'
import '~/locales'
import * as React from 'react'
import { ActivityIndicator } from 'react-native'
import { Provider } from 'react-redux'

import { PersistGate } from 'redux-persist/es/integration/react'

import { ThemeProvider } from './contexts/theme.context'
import Navigator from './routes'
import { persistor, store } from './store'

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={<ActivityIndicator />} persistor={persistor}>
        <ThemeProvider>
          <Navigator />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  )
}

export default App
