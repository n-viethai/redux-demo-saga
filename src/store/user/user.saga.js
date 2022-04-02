import { call, put, takeLatest } from 'redux-saga/effects'
import { userActions } from './user.reducer'

function* userLogin (action){
    try {
       const res =  yield call (  APIservices ) //done
        // yield put 1 action lên reducer để làm gì tiếp theo
    }catch(err){
        console.log(err);
    }
}

export function* bookingSaga() {
    yield takeLatest(userActions.login, userLogin)
}
