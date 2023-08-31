import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
//   const response = await fetch("https://jsonplaceholder.typicode.com/users");
//   const users = await response.json();
//   return users;
// });

const tasksSlice = createSlice({
  name: "books",
  initialState: {
    entities: [],
    loading: false,
  },
  reducers: {
    addBooks(state, action) {
      state.push(action.payload);
    },
    userUpdated(state, action) {
      const { id, name, email } = action.payload;
      const existingUser = state.find((user) => user.id === id);
      if (existingUser) {
        existingUser.name = name;
        existingUser.email = email;
      }
    },
    userDeleted(state, action) {
      const { id } = action.payload;
      const existingUser = state.find((user) => user.id === id);
      if (existingUser) {
        state = state.filter((user) => user.id !== id);
      }
    },
  },
  // extraReducers: {
  //   [fetchUsers.pending]: (state, action) => {
  //     state.loading = true;
  //   },
  //   [fetchUsers.fulfilled]: (state, action) => {
  //     state.loading = false;
  //     state.entities = [...state.entities, ...action.payload];
  //   },
  //   [fetchUsers.rejected]: (state, action) => {
  //     state.loading = false;
  //   },
  // },
});

export const { userAdded, userUpdated, userDeleted } = tasksSlice.actions;

export default tasksSlice.reducer;
