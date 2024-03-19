import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  Users: [],
  currentSelectedUser: "",
  message: "",
  currentUser: "",
  currentAction: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    handleCreateUser(state, action) {},
    addUser(state, action) {
      state.Users.push(action.payload);
      state.message = ` "${action.payload.email}"  has been added`;
    },
    setCurrentSelectedUser(state, action) {
      state.currentSelectedUser = action.payload;
    },
    setMessage(state, action) {
      state.message = action.payload;
    },
    handleUpdate(state, action) {},
    handleDelete(state, action) {},
    updateUser(state, action) {
      state.Users = [];
      state.Users = action.payload;
      state.message = ` "${action.payload.email}"  has been updated`;
    },
    setCurrentAction(state, action) {
      state.currentAction = action.payload;
    },
  },
});

export const {
  addUser,
  setCurrentSelectedUser,
  handleCreateUser,
  setMessage,
  handleUpdate,
  updateUser,
  handleDelete,
  setCurrentAction,
} = userSlice.actions;

export default userSlice.reducer;
