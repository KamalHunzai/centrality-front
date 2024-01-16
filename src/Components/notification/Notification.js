import React, { useEffect, useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import '../notification/Notification.css';
import NotificationdataCard from '../notificationCard/NotificationdataCard';
import NotificationData from '../notificationCard/NotificationData';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import axios from "axios";
import { baseURL } from '../../constants';

const notifiactionDot =  "●";

function OffCanvasExample({ name, ...props }) {
  const [show, setShow] = useState(false);
  const [notifications, setNotifications] = useState([]);
  const getNotifications = async () =>{
    try{
      let response = await axios.get(`${baseURL}/notifications/getAllNotifications/1`);
      console.log(response)
      setNotifications(response.data);
    }catch(err) {
      console.log(err)
    }
  }
  useEffect(() =>{
    getNotifications();
  },[]);

  const handleClose = () => setShow(false);

  const handleShow = () => setShow(true);

  function notcard(val) {
    return <NotificationdataCard key={val.id} image={val.image} name={val.name} time={val.time} body={val.body} dotIcons={notifiactionDot} />;
  }

  const handleClearAll = async() => {
    // try{

    // await axios.delete(`${baseURL}/notifications/removeNotifications/1`);
    // setNotifications([]);
    // }catch(err) {
    //   console.log(err);
    // }
    setNotifications([])
  };

  const handleShowUnread = () => {
    const unreadNotifications = NotificationData.filter((notification) => notification.type === 'unread');
    // setNotificationData(unreadNotifications);
  };

  const handleShowAllNotifications = () => {
    // setNotificationData(NotificationData);
  };

  return (
    <>
      <div className="row notiFication">
        <div onClick={handleShow} >
          <NotificationsNoneOutlinedIcon />
        </div>
        <Offcanvas show={show} onHide={handleClose} {...props}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Notification</Offcanvas.Title>
          </Offcanvas.Header>
          <hr className="Noti-hr" />
          <Offcanvas.Body>
            
            <div className="notifications-btn">
              <button className="all-notification-btn" onClick={handleShowAllNotifications}>All Notification</button>
              <button className="unread-btn" onClick={handleShowUnread}>Unread</button>
            </div>
            <h1 className="notification-heading">TODAY</h1>
            {
             notifications && <div className="notification-map">{notifications && notifications["today"]?.map(notcard)}</div>
            } 
            <div className="notification-yesterday">
              <h6>yesterday</h6>
            </div>
            {
             notifications && <div className="notification-map2">{notifications && notifications["yesterday"]?.map(notcard)}</div>
            }
            <div className="notification-clean-btn">
              <button onClick={(e) =>{
                e.preventDefault();
                handleClearAll();
              }}>Clear all</button>
            </div>
            
          </Offcanvas.Body>
        </Offcanvas>
      </div>
    </>
  );
}

function Example() {
  return (
    <>
      {['end'].map((placement, idx) => (
        <OffCanvasExample key={idx} placement={placement} name={placement} />
      ))}
    </>
  );
}


export default Example;
