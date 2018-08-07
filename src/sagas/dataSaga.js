import { call, put, takeEvery} from 'redux-saga/effects'
import { getData } from "../utils/dataProcessing";

function* fetchData(action) {
    try {
        const data = yield call(getData, action.query.dataQuery);
        yield put({type: "DATA_FETCH_SUCCEEDED", data});
    } catch (e) {
       yield put({type: "DATA_FETCH_FAILED", message: e});
    }
 }

 function* dataSaga() {
    yield takeEvery("DATA_FETCH_REQUESTED", fetchData);
  }

  export default dataSaga;

  