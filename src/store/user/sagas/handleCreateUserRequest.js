import { put, select } from "redux-saga/effects";
import { addUser, seterrorMessage } from "../slice";

export function* handleCreateUserRequest(action) {
  try {
    const currentUser = action.payload;
    const userState = yield select();
    const isUserExist = userState?.user?.Users?.some(
      (user) => user.email === currentUser.email
    );
    if (isUserExist) {
      yield put(seterrorMessage(currentUser.email + " already exists"));
      return;
    }
    yield put(addUser(currentUser));
  } catch (error) {}
}
