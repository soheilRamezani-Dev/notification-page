import React from "react";

const SendMessageNotification = ({notification}) => {
  return (
      <div className="row">
        <div className="col-2">
          <img
            className="rounded-circle avatar"
            src={"images/"+notification.img}
            alt="Mark Webber picture"
          />
        </div>
        <div className="col-10 p-3">
          <span className="user-name fw-bold">{notification.name + " "}</span>
          <span className="action fw-light">send you a private message </span>
          <span className="description">{notification.post} </span>
          {notification.isread ? "" : <span className="dot"></span>}
          <div className="date text-secondary">{notification.time}</div>
          {notification.isread&&<div className="date text-secondary alert alert-primary mt-4">{notification.message}</div>}
        </div>
      </div>
  );
};

export default SendMessageNotification;
