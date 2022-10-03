import React from "react";

const ReactNotification = ({notification}) => {


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
          <span className="user-name fw-bold">{notification.name+' '}</span>
          <span className="action fw-light">reacted to your recent post </span>
          <span className="description">{notification.post} </span>
          {notification.isread?'':<span className="dot"></span>}
          <div className="date text-secondary">{notification.time}</div>
        </div>
      </div>
  );
};

export default ReactNotification;
