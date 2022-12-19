import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Image, ImageState } from "./image.interface";

const initialState: ImageState = {
  images: [],
};

const imageSlice = createSlice({
  name: "imageSlice",
  initialState,
  reducers: {
    setImages(state, action: PayloadAction<Image[]>) {
      state.images = action.payload;
    },
  },
});
export default imageSlice.reducer;
export const { setImages } = imageSlice.actions;
