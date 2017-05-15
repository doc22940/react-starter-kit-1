import { take, call, put} from 'redux-saga/effects'
import { LOGIN_REQUEST, SET_AUTH, AUTH_FAILED } from '../actions/constants'
import Auth from '../client/auth'

/*
function* authenticate(email, password) {
  return { token: 'abcd', ...{ email, password } }
}
*/

export function* loginFlow() {
  while (true) {
    let request = yield take(LOGIN_REQUEST)
    let { email, password } = request

    const response = yield call(Auth.login, email, password)

    if (response.authToken) {
      yield put({ type: SET_AUTH, payload: response })
    } else {
      yield put({type: AUTH_FAILED, payload: response})
    }
  }
}