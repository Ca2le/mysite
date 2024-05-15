import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState = {
    height: window.innerHeight,
    width: window.innerWidth,
    unitWidth: window.innerWidth * 0.01,
    unitHeight: window.innerHeight  * 0.01,
    device: ""
};

const loadingSlice = createSlice({
    name: "windowSize",
    initialState,
    reducers: {
        setSize: (state, action: PayloadAction<{ width: number, height: number }>) => {
            const {width, height} = action.payload
            state.width = width
            state.height = height
            state.unitWidth = width  * 0.01
            state.unitHeight = height  * 0.01
        },
        setDevice: (state, action: PayloadAction<string>) => {
            state.device = action.payload
        }
    },
});

export const { setSize, setDevice } = loadingSlice.actions;
export default loadingSlice.reducer;