import React,{useEffect, useState} from "react";
import "./MySchedule.css";
import { GrFormNext } from "react-icons/gr";
import { Link } from "react-router-dom";
import axios from "axios";
import { baseURL } from "../../constants";
const MySchedule = () => {
const [schedule,setSchedule] = useState([]);
  const getMySchedule = async() =>{
    try{
    let response = await axios.get(`${baseURL}/students/schedule/1/1`);
     setSchedule(response.data);
    }catch(err) {
      console.log(err);
    }
  }
  useEffect(() =>{
    getMySchedule();
  },[]);

  const MyscheduleData = [
    {
      dateText: "8",
      heading: "Assessment Test",
      time: "8th - 10th Dec 2023",
      spanColor: "#00AFEF",
      dateTextColor: "#00AFEF",
      backgroundColor: "#F0F7FF",
    },
    {
      dateText: "13",
      heading: "Assessment Quiz",
      time: "8th - 10th Dec 2023",
      spanColor: "#FF1D86",
      dateTextColor: "#FF1D86",
      backgroundColor: "#FFF0F7",
    },
    {
      dateText: "18",
      heading: "Assessment Quiz",
      time: "8th - 10th Dec 2023",
      spanColor: "#16D03B",
      dateTextColor: "#16D03B",
      backgroundColor: "#F0FFF3",
  
    },
    {
      dateText: "23",
      heading: "Assessment Quiz",
      time: "8th - 10th Dec 2023",
      spanColor: "#FF7E3E",
      dateTextColor: "#FF7E3E",
      backgroundColor: "#FFF5F0",
      lasttext: "Edulog Tutorial College, Blk 56, Pak State."
    },
  
  ];
  return (
    <div className="myschedule-main">
      <div className="myschedule-heading">
        <h1>My Schedule</h1>
        <Link to="/MyAssingmentSub"><span>See All</span></Link>
      </div>
      {schedule.map((item, index) => (
        <div key={index} className="myschedule-child" style={{ marginTop: "19px", backgroundColor: item.backgroundColor }}>
          <div className="myschedule-child-data">
            <div className="myschedule-child-date" style={{ background: item.dateTextColor }}>
              <p>{item.date.slice(0,1)}</p>
            </div>
            <div className="mychild-myschedule">
              <h6>{item.title}</h6>
              <div className="myschedule-time">
                <div className="myschedule-mother">
                  <p>{item.time}</p>
                  <span style={{ color: item.spanColor }}>●</span>
                  <p>8 A.M - 9 A.M </p>
                </div>
                <p style={{ fontSize: "8px" }}>{item.lasttext}</p>
              </div>
            </div>
            <div className="myschedule-icon">
              <Link to="/MyAssingmentSub"><GrFormNext style={{ width: "18px", height: "18px" }} /></Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MySchedule;
