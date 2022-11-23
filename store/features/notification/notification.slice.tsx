import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { NotificationState } from "./notification.interface";

const default_errors = {
    title: "Error",
    body: "Something went wrong",
    errorCTA: "Try again",
};


const initialState: NotificationState = {
    isNotificationVisible: false,
    notification: {
        notificationTitle: default_errors.title,
        notificationBody: default_errors.body,
        notificationButtonText: default_errors.errorCTA,
        routeTo: null,
        isVisible: false,
    },

};

const notificationSlice = createSlice({
    name: "notification",
    initialState,
    reducers: {
        setNotification(state: NotificationState, action: PayloadAction<NotificationState["notification"]>) {
            state.notification = action.payload;
            if (action.payload.isVisible) {
                state.isNotificationVisible = true;
            }
        },
        setStatusOfNotification(state: NotificationState, action: PayloadAction<boolean>) {
            state.isNotificationVisible = action.payload;
        },


    },
});
export default notificationSlice.reducer;
export const {
    setNotification,
    setStatusOfNotification,

} = notificationSlice.actions;
