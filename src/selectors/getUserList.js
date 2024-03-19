import { createSelector } from "reselect";
import { getUserState } from "./getUserState";

export const getUserList = createSelector(getUserState, (userState) => {
  return userState?.Users || [];
});
