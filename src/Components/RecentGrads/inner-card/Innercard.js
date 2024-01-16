import './Innercard.css';
import React, { useState, useEffect } from 'react';

const Innercard = (props) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Update progress based on the props
    setProgress(props.progress);
  }, [props.progress]);

  return (
    <div className='Innercard-main' style={{backgroundColor:props.backgroundColor}} >
      <div className='Innercard-main-child-1'>
        <img src={props.imageSrc} alt="" />
      </div>
      <div className='Innercard-main-child-2'>
        <div className='title'>
          <div>
            <h2>{props.title}</h2>
            <h3>
              <span>{props.day}</span> <span>{props.time}</span>
            </h3>
          </div>
          <h5>{progress}%</h5>
        </div>
        <div className='persentage-outer-div'>
          <div className="progress-bar">
            <div className="progress-bar-inner" style={{ width: `${progress}%`,  backgroundColor: props.progressColor }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Innercard;
