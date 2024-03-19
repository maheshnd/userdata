import { getCurrentSelectedUser } from "../../../selectors/getCurrentSelectedUser";
import { getUserList } from "../../../selectors/getUserList";
import {
  setCurrentAction,
  setCurrentSelectedUser,
  setMessage,
  updateUser,
} from "../slice";
import { put, select } from "redux-saga/effects";
export function* handleDeleteRequest(action) {
  try {
    const userData = yield select(getUserList);
    const currentSelectedUser = yield select(getCurrentSelectedUser);
    const updatedUsers = userData?.filter(
      (user) => user.email !== currentSelectedUser
    );

    yield put(updateUser(updatedUsers));
    yield put(setMessage(`"${currentSelectedUser}" has been deleted`));
    yield put(setCurrentAction(""));
    yield put(setCurrentSelectedUser(""));
  } catch (error) {}
}
