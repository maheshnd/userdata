import { createSelector } from "reselect";
import { getUserState } from "./getUserState";

export const getMessage = createSelector(getUserState, (userState) => {
  return userState?.message || "";
});
