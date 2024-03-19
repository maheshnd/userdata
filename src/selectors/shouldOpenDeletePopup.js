import { createSelector } from "reselect";
import { getCurrentAction } from "./getCurrentAction";

export const shouldOpenDeletePopup = createSelector(
  getCurrentAction,
  (currentAction) => {
    return currentAction === "Delete";
  }
);
