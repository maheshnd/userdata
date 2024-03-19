import { createSelector } from "reselect";
import { getUserState } from "./getUserState";

export const getCurrentSelectedUser = createSelector(
  getUserState,
  (userState) => {
    return userState?.currentSelectedUser;
  }
);
