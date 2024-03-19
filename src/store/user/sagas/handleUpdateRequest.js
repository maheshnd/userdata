import { getUserList } from "../../../selectors/getUserList";
import { setMessage, updateUser } from "../slice";
import { put, select } from "redux-saga/effects";
export function* handleUpdateRequest(action) {
  try {
    const userData = yield select(getUserList);
    const updatedUsers = userData.map((user) => {
      if (user.email === action.payload.email) {
        return {
          ...user,
          firstName: action.payload.firstName,
          lastName: action.payload.lastName,
        };
      }

      return user;
    });
    yield put(updateUser(updatedUsers));
    yield put(setMessage(` "${action.payload.email}"  has been updated `));
  } catch (error) {}
}
