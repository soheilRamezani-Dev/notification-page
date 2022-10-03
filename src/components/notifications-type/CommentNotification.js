import React from "react";

const CommentNotification = ({ notification }) => {
  return (
    <div className="row">
      <div className="col-2">
        <img
          className="rounded-circle avatar"
          src={"images/"+notification.img}
          alt="Mark Webber picture"
        />
      </div>
      <div className="col-10 p-3 d-flex justify-content-between">
        <div>
          <span className="user-name fw-bold">{notification.name + " "}</span>
          <span className="action fw-light">commented on your picture </span>
          {notification.isread ? "" : <span className="dot"></span>}
          <div className="date text-secondary">{notification.time}</div>
        </div>
        <div><img className="post-img" src={"images/"+ notification.postImg} /></div>
      </div>
    </div>
  );
};

export default CommentNotification;
