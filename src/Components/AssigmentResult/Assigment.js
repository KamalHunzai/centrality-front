import React, { useState, useEffect } from "react";
import { IoArrowBack, IoCheckmarkDone  } from "react-icons/io5";
import { RiFileExcel2Line } from "react-icons/ri";
import { FaRegCalendarAlt } from "react-icons/fa";
import { LuClock4 } from "react-icons/lu";
import ProgressBar from "react-bootstrap/ProgressBar";
import ProfilePic from "../images/Shoaib.png";
import Quizet from "../images/Quizlet-Logo-2021-present 1.png";
import lines from "../images/lines-removebg-preview.png";
import RequestChatModal from "../RequetsChatModal/ModalChat";
import "./Assigment.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom"; 
import { useLocation } from "react-router-dom";

function Assigment() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [currentDate, setCurrentDate] = useState(new Date());
  const navigate = useNavigate(); // Initialize useNavigate
  const location = useLocation();
  const {state} = location;
    // Now 'state' should contain your 'gradecard' data
  const gradecard = state && state.gradecard;


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDate(new Date());
    }, 60000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const formattedDate = currentDate.toLocaleDateString();

  const passingPercentage = 30;
  const totalMarks = 50;
  const percentage = (passingPercentage / 100) * totalMarks;
  const passingFraction = `${passingPercentage / 10}/10`;
 
  const handleGoBack = () => {
    navigate(-1); 
  };

  return (
    <div className="Assingment-main">
      <div className="BackArrowTop" onClick={handleGoBack}>
        <IoArrowBack />
        <h2>Assigment Result Details</h2>
      </div>
      <div className="ToomanyBtns">
        <div className="ProfileName">
          <img src={ProfilePic} alt="Profile" />
          <span>
            <h4>Shoaib Karim</h4>
            <h5>Student ID : TIPSG5682</h5>
          </span>
        </div>
        <div className="ToomanyBtns-main">
          <button className="ToomanyBtns-one same">
            Result Declared on 12:30 AM | 22 September 2023 <IoCheckmarkDone  />
          </button>
          <div className="LinesFOurBtns">
            <button className="SHARE same">Share</button>
            <button className="EXPORT same">
              <RiFileExcel2Line />
              Export Data
            </button>
            <button className="Parent same">Signature Parent</button>
            <button className="FillDown">Download</button>
          </div>
          <RequestChatModal />
        </div>
      </div>
      <h6>Artificial Intelligence with python Quiz.</h6>
      <div className="BSGIS-SECtion">
        <div className="BSGIS-SECtion-child1">
          <button className="STATUS">Status : Failed</button>
          <button className="BATCHCO">Batch 3CO - JVY</button>
          <button className="ACtiveCLock">
            <LuClock4 />
            <span>{currentTime.toLocaleDateString()}</span>
          </button>{" "}
          <button className="ActiveCalndr">
            <FaRegCalendarAlt />
            <span>{formattedDate}</span>
          </button>
          <p className="PARAGRAPG">
            Course :{" "}
            <span className="PARAGRAPGSPan">
              Artificial Intelligence with python in Semester 1
            </span>
          </p>
          <p>
            Subject : <span>Python Programming</span>
          </p>
          <hr />
        </div>
        <div className="BSGIS-SECtion-child2">
          <h3>Improvement your Grade on </h3>
          <img src={Quizet} alt="Quizet Logo" />
          <button>Access app</button>
        </div>
      </div>
      <div className="TotalMarks-Main">
        <div>
          <h2>Total Marks : {totalMarks}</h2>
          <h4>Passing Percentage</h4>
          <div className="progress-container">
            <div className="progress-label top-left">{passingPercentage}%</div>
            <ProgressBar variant="danger" now={passingPercentage} />
            <div className="progress-label2">{passingFraction}</div>
          </div>
        </div>
        <div>
        <div className="Req_moQuest">
            <Link to="/Request" >REQUEST A MOKE-UPS</Link>
            </div>
        </div>
      </div>
      <div className="QuizPaper">
        <div className="Paper">
          <p>Quiz Paper</p>
          <button>Advance Remote Sem Question Paper.pdf</button>
          <h3>Result</h3>
          <p>Student’s Submission</p>
          <button>Networking Mid Sem Question Paper.pdf</button>
        </div>
        <div className="notification">
          <div className="cards">
            <div className="card1">
              <img src={ProfilePic} alt="Ellie Jolieas" />
              <div className="imginfo">
                <h4>Ellie Jolieas</h4>
                <p className="para">04 Dec, 2023 | 04:00 PM</p>
              </div>
            </div>
            <div className="card1 card2">
              <img src={ProfilePic} alt="Teacher Feedback" />
              <div className="imginfo">
                <span>Teacher Feedback</span>
                <h4>Dear Student</h4>
                <p>Need to be more Improve your Assignment in Next Time </p>
              </div>
              <img src={lines} alt="Line" className="lineImage" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Assigment;
