import { Loading } from '~/constants/loading'
import { ErrorResponse } from '~/services/api'

export type BaseReducerState = {
  loading: Loading
  error?: ErrorResponse
}
