import React from "react";
import "./Classroom.css";
import { HiOutlineDotsVertical } from "react-icons/hi";
import {cardsData} from '../data/MyscheduleData';
import { Link } from "react-router-dom";


const ClassRoomMain = () => {
    return (
        <div className="classroom-main">
          <div className="Classroom-child-1 Classroom-child-1s">
            <div>
              <p className="para">My <span>Classroom</span></p>
            </div>
          </div>
          <div className="Classroom-child-2-map Classroom-child-2-maps">
          {cardsData.map((card) => (
            <div className="Classroom-child-2 Classroom-child-2s" key={card.id}>
              <div className="Classroom-child-2-main Classroom-child-2-mains" style={{ background: card.backgroundColor }}>
                <span className="three-dot-icon" style={{ color: card.iconColor }}>
                  <HiOutlineDotsVertical />
                </span>
                <div className="classroom-child-2-img classroom-child-2-imgs" style={{ backgroundColor: card.imgBackgroundColor }}>
                  <img src={card.image} alt="" />
                </div>
                <p className="pra" style={{color: card.iconColor}}>{card.subject}</p>
               
            <Link className="Linkeded" to="/NestedTabs"><button className="btton" style={{ backgroundColor: card.buttonColor }}>view Class</button></Link>
              </div>
            </div>
          ))}
          </div>
        </div>
      );
}

export default ClassRoomMain