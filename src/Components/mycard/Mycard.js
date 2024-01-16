import React, { useState, useEffect } from "react";
import axios from "axios";
import './Mycard.css';

const Mycard = (props) => {

console.log(props.value)
  return (
    <div className='Mycard-main'>
      <div className='Mycard-main-child-1'>
        <div className="my-icon" style={{backgroundColor: props.backgroundColor}}>
          {props.icon}
        </div>
      </div>
      <div className='Mycard-main-child-2'>
        <h2>{props.cardtitle}</h2>
            <p>{props.value}</p>
      </div>
    </div>
  );
}

export default Mycard;
