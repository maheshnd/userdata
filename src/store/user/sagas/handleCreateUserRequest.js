import { put, select } from "redux-saga/effects";
import { addUser, setMessage } from "../slice";
import { getUserList } from "../../../selectors/getUserList";

export function* handleCreateUserRequest(action) {
  try {
    const currentUser = action.payload;
    const userData = yield select(getUserList);
    const isUserExist = userData?.some(
      (user) => user.email === currentUser.email
    );
    if (isUserExist) {
      yield put(setMessage(` "${currentUser.email}" already exists `));
      return;
    }
    yield put(addUser(currentUser));
  } catch (error) {}
}
