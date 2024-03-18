import { all, fork } from "redux-saga/effects";
import { userSaga } from "./user/sagas/sagas";

function* rootSaga() {
  yield all([fork(userSaga)]);
}

export { rootSaga };
