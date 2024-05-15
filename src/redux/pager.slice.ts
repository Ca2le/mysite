import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentPage: 0,
  pageIsActive: false,
  pageSize: 3,
};

const Pager = createSlice({
  name: "pager",
  initialState,
  reducers: {
    setPage: (state, action) => {
      state.currentPage = action.payload;
      state.pageIsActive = true;
    },
    setIsActive: (state, action) => {
        console.log(action)
      state.pageIsActive = action.payload;
    },
  },
});

export const { setPage, setIsActive } = Pager.actions;

export default Pager.reducer;
