import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  members: [],
  Doing: [],
};

const Reducer = createSlice({
  name: "Contacts",
  initialState,
  reducers: {
    addMember: (state, { payload }) => {
      state.members.push({ ...payload });
    },
    addDoing: (state, { payload }) => {
      state.Doing = state.members.push({ ...payload });
    },
  },
});

export const { addMember, addDoing } = Reducer.actions;
export default Reducer.reducer;
