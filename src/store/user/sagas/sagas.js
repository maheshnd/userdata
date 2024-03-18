import { takeEvery } from "redux-saga/effects";
import { handleCreateUser, handleDelete, handleUpdate } from "../slice";
import { handleCreateUserRequest } from "./handleCreateUserRequest";
import { handleUpdateRequest } from "./handleUpdateRequest";
import { handleDeleteRequest } from "./handleDeleteRequest";
export const userSaga = function* watcher() {
  yield takeEvery(handleCreateUser.type, handleCreateUserRequest);
  yield takeEvery(handleUpdate.type, handleUpdateRequest);
  yield takeEvery(handleDelete.type, handleDeleteRequest);
};
