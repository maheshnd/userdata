import { createSelector } from "reselect";
import { getUserState } from "./getUserState";

export const getCurrentAction = createSelector(getUserState, (userState) => {
  return userState?.currentAction || "";
});
