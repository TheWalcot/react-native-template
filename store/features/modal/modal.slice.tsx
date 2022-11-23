import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LoadingModalState } from "./modal.interface";


const initialState = {
    isModalVisible: false,
    loadingModalTxt: "HEEM",
    customComponent: "",
};

const loadingModalSlice = createSlice({
    name: "loadingModal",
    initialState,
    reducers: {
        setLoadingModal(state: LoadingModalState, action: PayloadAction<LoadingModalState>) {
            const { isModalVisible, loadingModalTxt } = action.payload;
            state.isModalVisible = isModalVisible;
            state.loadingModalTxt = loadingModalTxt;
            if (action.payload?.customComponent) {
                state.customComponent = action.payload.customComponent;
            }
        },
    },
});
export default loadingModalSlice.reducer;
export const { setLoadingModal } = loadingModalSlice.actions;
