import React from "react";
import "./Classroom.css";
import { HiOutlineDotsVertical } from "react-icons/hi";
import {cardsData} from '../data/MyscheduleData';
import { Link } from "react-router-dom";

const Classroom = () => {
  return (
    <div className="classroom-main">
      <div className="Classroom-child-1">
        <div>
          My <span>Classroom</span>
        </div>
        <p>View All</p>
      </div>
      <div className="Classroom-child-2-map">
      {cardsData.map((card) => (
        <div className="Classroom-child-2" key={card.id}>
          <div className="Classroom-child-2-main" style={{ background: card.backgroundColor }}>
            <span className="three-dot-icon" style={{ color: card.iconColor }}>
              <HiOutlineDotsVertical />
            </span>
            <div className="classroom-child-2-img" style={{ backgroundColor: card.imgBackgroundColor ,}}>
              <img src={card.image} alt="" />
            </div>
            <p style={{color: card.iconColor}}>{card.subject}</p>
            <Link className="Linkeded" to="/ClassRoomPage"><button style={{ backgroundColor: card.buttonColor }}>view Class</button></Link>
          </div>
        </div>
      ))}
      </div>
    </div>
  );
};

export default Classroom;