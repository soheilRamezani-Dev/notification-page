import React from "react";
import "./notification.css";
import NotificationHeader from "./NotificationHeader";
import NotificationItem from "./NotificationItem";
import notificationContext from "../context/notificationContext";
import { useContext } from "react";

const Notification = () => {
  const notoficationsContext = useContext(notificationContext);
  const onclickItem = (id)=>{
    if(!notoficationsContext.notifications[id].isread){
      const notificationstate = [...notoficationsContext.notifications]
      notificationstate[id].isread = true;
      notoficationsContext.setNotifState(notificationstate);
    }
  }
  return (
    <div className="container">
      <div className="row d-flex justify-content-center mt-5">
        <div className="col-lg-7 p-2">
          <NotificationHeader />
          <ul className="list-group mt-3">
            {notoficationsContext.notifications.map((notification, key) => {
              return (
                <li onClick={()=>onclickItem(key)}
                 key={key}
                  className={`list-group-item ${
                    notification.isread ? "" : "has-read"
                  }`}
                >
                  <NotificationItem notification={notification} />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Notification;
