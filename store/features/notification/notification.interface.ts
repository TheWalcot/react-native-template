export type NotificationState = {
  isNotificationVisible: boolean;
  notification: {
    notificationTitle: string;
    notificationBody: string | any;
    notificationButtonText: string | any;
    routeTo?: string | null;
    isVisible?: boolean;
  };
};
