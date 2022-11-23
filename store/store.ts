import { configureStore } from "@reduxjs/toolkit";
import notificationSlice from "./features/notification/notification.slice";
import userSlice from "./features/user/user.slice";
import loadingModalSlice from "./features/modal/modal.slice";
import { deliveryApi } from "./features/api/api";
import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
  reducer: {
    [deliveryApi.reducerPath]: deliveryApi.reducer,
    user: userSlice,
    notification: notificationSlice,
    loadingModal: loadingModalSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(deliveryApi.middleware),
});

export type RootState = ReturnType<typeof store["getState"]>;
export type AppDispatch = typeof store["dispatch"];

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch);
