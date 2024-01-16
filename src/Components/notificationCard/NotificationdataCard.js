import React from 'react';
import "./NotificationdataCard.css";

const NotificationdataCard = (props) => {
  return (
    <>
      <div className="notification-main">
        <div className="IMG">
          <img style={{objectFit:'cover'}} src={props.image} alt="#" />
        </div>

        <div className="notification-child">
          <div class="notification-new">
            <h6>{props.name}</h6>
            <p>{props.body}</p>
          </div>
          <div class="notifaction-para">
            <p>{props.time}</p>
            <div class="notification-dot"><p>{props.dotIcons}</p> </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotificationdataCard;
