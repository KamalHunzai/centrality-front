import React, { useEffect, useState } from "react";
import { FaCalendar } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa";
import "./MyGrade.css";
import { Link } from "react-router-dom";
import axios from "axios";
import '../data/MyscheduleData'
import { baseURL } from '../../constants';

const Mygrade = () => {
  const gradeStyles = [
    {
      result: 'failed',
      labelColor:'#f93333',
      buttonColor: '#f93333',
      progressbarColor:'#f93333',
      gradebc: '#ffefef',
    },
    {
      result: 'missed',
      buttonColor: '#9A9A9A',
      labelColor:'#9A9A9A',
      progressbarColor:'#9A9A9A',
      gradebc: '#E6E6E6',
    },
    {
      result: 'passed',
      buttonColor: '#11A529',
      labelColor:'#11A529',
      progressbarColor:'#11A529',
      gradebc: '#Effff5',
    },
  ];
  const mapGradeData = (originalData, gradeStyles) => {
    return originalData.map((item) => {
      const style = gradeStyles.find((gradeStyle) => gradeStyle.result === item.result) || {};
      return { ...item, ...style };
    });
  };
  const [gradeData, setGradeData] = useState();
  useEffect(() =>{
    const getAllGrades = async() =>{
      const allStudentGradesUrl = `${baseURL}/grades/allStudentGrades`
    let response = await axios.get(allStudentGradesUrl);
        const gradadedData = mapGradeData(response.data,gradeStyles);
        console.log(gradadedData);
        setGradeData(gradadedData);
    } 
    getAllGrades();  
},[]);

  const updateScoredPercentage = (id, newScore) => {
    const updatedData = gradeData.map((gradecard) => {
      if (gradecard.id === id) {
        return { ...gradecard, scoredPercentage: newScore };
      }
      return gradecard;
    });
    setGradeData(updatedData);
  };

  return (
    <div className="MyGrade-main-Map" >
      { gradeData && gradeData.map((gradecard,index) => (
        <div
          className="mygrade-main"
          key={index}
          style={{ marginTop:"1px", backgroundColor: gradecard?.gradebc}}>
          <span style={{ color: gradecard?.labelColor}}>
            {gradecard.result}
          </span>
          <div className="mygrade-child">
            <div className="mygrade-child-1">
              <h2>{gradecard.gradeTitle}</h2>
              <p>Subject : {gradecard.subject}</p>
            </div>
            <div className="mygrade-time">
              <div className="calander-icon">
                <FaCalendar style={{ marginTop: "3px" }} />
                <p>{gradecard.date}</p>
              </div>
              <div className="time-icon">
                <FaRegClock style={{ marginTop: "4px" }} />
                <p>{gradecard.time}</p>
              </div>
            </div>
            <div className="mygrade-percentage">
              <p className="mygrade-percentage-test">{gradecard.gradetype}</p>
              <div className="Passing-Percentage">
                <h6>Passing Percentage</h6>
                <p>{gradecard.passingPercentage}%</p>
              </div>
              <div className="Scored-Percentage">
                <h6>Scored Percentage</h6>
                <p style={{ color: "#f93333" }}>
                {gradecard.scoringPercentage}%
                </p>
              </div>
            </div>
            <div className="progress-bar-line">
              {console.log(gradecard?.progressbarColor)}
              <progress
                     className="mygrade-process-line"
                     id={`file-${gradecard.id}`}
                     value={gradecard.scoringPercentage}
                     max="100"
                     onChange={(e) =>
                       updateScoredPercentage(
                         gradecard.id,
                         parseInt(e.target.value)
                       )
                     }
                     style={{ '--progressbar-color': gradecard?.progressbarColor }}
                   >
                     {gradecard.scoredPercentage}%
            </progress>
            </div>
            <div className="mygrade-btn">
              <button style={{ backgroundColor: gradecard?.buttonColor }}>
              <Link to={{ pathname: "/Assigment", state: gradecard }}>View Details</Link>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Mygrade;