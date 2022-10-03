import React from "react";
import notificationContext from './../context/notificationContext'; 
import { useContext } from "react";

const NotificationHeader = () => {

  const notificationState = useContext(notificationContext);

  const markAll = ()=>{
    const notifications = [...notificationState.notifications];
    notifications.forEach((val)=>{
      return val.isread=true;
    })
    notificationState.setNotifState(notifications);
  }
  
  const notReadCount = notificationState.notifications.filter(val=>val.isread===false).length;

  return (
    <div className="notification-header d-flex justify-content-between">
      <h2>
        Notifications <span className="badge bg-primary">{notReadCount}</span>
      </h2>
      <span role="button" className="mt-2" onClick={markAll}>Mark all as read</span>
    </div>
  );
};

export default NotificationHeader;
