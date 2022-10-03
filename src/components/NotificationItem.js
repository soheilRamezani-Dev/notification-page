import React from "react";
import ReactNotification from "./notifications-type/ReactNotification";
import FollowNotification from "./notifications-type/FollowNotification";
import JoinGroupNotification from "./notifications-type/JoinGroupNotification";
import SendMessageNotification from "./notifications-type/SendMessageNotification";
import CommentNotification from "./notifications-type/CommentNotification";
import LeftGroupNotification from "./notifications-type/LeftGroupNotification";

const NotificationItem = ({notification}) => {
  switch(notification.type){
    case 'react' : return <ReactNotification notification={notification} />
    case 'follow' : return <FollowNotification notification={notification} />
    case 'join' : return <JoinGroupNotification notification={notification} />
    case 'message' : return <SendMessageNotification notification={notification} />
    case 'comment' : return <CommentNotification notification={notification} />
    case 'left' : return <LeftGroupNotification notification={notification} />
    default : return '';
  }
};

export default NotificationItem;
