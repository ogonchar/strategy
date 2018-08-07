import dataSaga from "./dataSaga";
import loginSaga from "./loginSaga";
import signupSaga from "./signupSaga";

export default function* superSaga () {
    yield [
        dataSaga(),
        loginSaga(),
        signupSaga(),
    ]
}
  