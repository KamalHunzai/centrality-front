import React, { useState } from 'react';
import './TopSearchBar.css';
import { IoSearch } from 'react-icons/io5';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import Notification from '../notification/Notification';
import LogoutModal from '../LogoutModal/LogoutModal';

function TopSearchBar() {
  const [notificationClicked, setNotificationClicked] = useState(false);

  return (
    <div className='TopSearchBar-main'>
      <div className='TopSearchBar-one'>
        <IoSearch />
        <input placeholder='Search Courses, Documents, Activities... ' />
      </div>
      <div className='TopSearchBar-two'>
        <div className='TopSearchBar-Alpha'>
          <div className="icon-container">
            <ChatOutlinedIcon />
          </div>
          <div className={`icon-container1 ${notificationClicked ? 'clicked' : ''}`} onClick={() => setNotificationClicked(true)}>
            <Notification />
          </div>
          <LogoutModal />
        </div>
      </div>
    </div>
  );
}

export default TopSearchBar;
