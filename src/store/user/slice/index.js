import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  Users: [],
  popupAction: "",
  currentSelectedUser: "",
  errorMessage: "",
  currentUser: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    handleCreateUser(state, action) {},
    addUser(state, action) {
      state.Users.push(action.payload);
    },
    setPopupAction(state, action) {
      state.popupAction = action.payload;
    },
    setCurrentSelectedUser(state, action) {
      state.currentSelectedUser = action.payload;
    },
    seterrorMessage(state, action) {
      state.errorMessage = action.payload;
    },
    handleUpdate(state, action) {},
    handleDelete(state, action) {},
    updateUser(state, action) {
      state.Users = [];
      state.Users = action.payload;
    },
  },
});

export const {
  addUser,
  setPopupAction,
  setCurrentSelectedUser,
  handleCreateUser,
  seterrorMessage,
  handleUpdate,
  updateUser,
  handleDelete,
} = userSlice.actions;

export default userSlice.reducer;
