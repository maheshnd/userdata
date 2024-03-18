import { updateUser } from "../slice";
import { put, select } from "redux-saga/effects";
export function* handleUpdateRequest(action) {
  try {
    const userState = yield select();
    const updatedUsers = userState?.user?.Users.map((user) => {
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
  } catch (error) {}
}
