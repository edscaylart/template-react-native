import { all } from 'redux-saga/effects'

import login from './modules/login/sagas'

export default function* rootSaga() {
  yield all([login])
}
