import { createSelector } from "reselect";
import { getCurrentAction } from "./getCurrentAction";

export const shouldOpenEditPopup = createSelector(
  getCurrentAction,
  (currentAction) => {
    return currentAction === "Edit";
  }
);
