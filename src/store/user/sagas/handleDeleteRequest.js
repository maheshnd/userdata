import { updateUser } from "../slice";
import { put, select } from "redux-saga/effects";
export function* handleDeleteRequest(action) {
  try {
    const userState = yield select();
    const updatedUsers = userState?.user?.Users.filter(
      (user) => user.email !== action.payload
    );

    yield put(updateUser(updatedUsers));
  } catch (error) {}
}
