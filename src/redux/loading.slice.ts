import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: true,
  assetsImported: false,
  bubblesMounted: false,
  resizing: false,

};

const loadingSlice = createSlice({
  name: "loading",
  initialState,
  reducers: {
    assetsImported : (state, action) => {
      state.assetsImported = action.payload;
    },
    bubblesMounted: (state, action) => {
      state.bubblesMounted = action.payload;
    },
    isLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    reSizing: (state, action) => {
      state.resizing = action.payload;
    },

  },
});

export const { assetsImported, bubblesMounted, isLoading, reSizing } = loadingSlice.actions;
export default loadingSlice.reducer;