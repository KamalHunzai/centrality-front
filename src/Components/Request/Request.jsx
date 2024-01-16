import React from 'react';
import { MdOutlineNavigateNext, MdOutlineLocalPhone,MdKeyboardBackspace, MdOutlineMailOutline } from "react-icons/md";
import Shoaib from "../images/Shoaib.png";
import "./Request.css";
import { useNavigate } from "react-router-dom"; 


const Request = () => {
    const navigate = useNavigate(); 
    const handleGoBack = () => {
        navigate(-1); 
      };
    return (
        <div className='Request-Min'>
              <div className="MakeRequest">
                <h2>Make up request</h2>
                <div className='ClassRoom'>
                    <p>Home</p>
                    <span>
                        <MdOutlineNavigateNext />
                    </span>
                    <p>Classroom</p>   
                    <span>
                        <MdOutlineNavigateNext />
                    </span>        
                    <p className="span">Make up request</p>
                </div>
            </div>
        <div className='Request'>                                               
                
            <div className="backBtton">
                <span onClick={handleGoBack}><MdKeyboardBackspace /></span>
                <h3>Make-Up Time Request For Quiz</h3>
            </div>
            <div className="profile">
                <div className="img">
                    <img src={Shoaib} alt="userImge" />
                    <div className="info">
                        <h4>Shoaib Karim</h4>
                        <p>Student ID : TIPSG5682</p>
                    </div>
                </div>
                <div className="imgInFo">
                    <h5>Center Contact</h5>
                    <p><MdOutlineLocalPhone />12345 69870</p>
                    <p><MdOutlineMailOutline />shuaibkarim302@gmail.com</p>
                </div>
            </div>
            <form action="">
                <div className="inputs">
                    <div className="input">
                        <label htmlFor="text">Student Name</label>
                        <input type="text" placeholder='Name....'/>
                    </div>
                    <div className="input">
                        <label htmlFor="text">Department</label>
                        <input type="text" placeholder='Department/class....'/>
                    </div>
                    <div className="input">
                        <label htmlFor="text">Subject</label>
                        <input type="text" placeholder='English......'/>
                    </div>
                </div>
                
                <div className="inputs">
                    <div className="input">
                        <label htmlFor="day">Day</label>
                        <input type="day" placeholder='Label'/>
                    </div>
                    <div className="input">
                        <label htmlFor="time">Time</label>
                        <input type="time" placeholder='12:30'/>
                    </div>
                    <div className="input">
                        <label htmlFor="hours">Hours</label>
                        <input type="hours" placeholder='1 Hours'/>
                    </div>
                </div>
                <div className="Details">
                    <label htmlFor="Details">Details</label>
                    <textarea name="Details" id="Details" cols="30" rows="10" placeholder='Detail Why You Mis the Assignment/Quiz........'></textarea>
                </div>
            </form>
            <div className="understand">
                <h2>I understand that:</h2>
                <ul>
                    <li>Any make-up time I work will not be paid at an overtime rate.</li>
                    <li>A separate written request is rquest for each quiz that I request make-up time</li>
                    <li>Any make-up time I work will not be paid at an overtime rate.</li>
                    <li>A separate written request is rquest for each quiz that I request make-up time</li>
                    <li>Any make-up time I work will not be paid at an overtime rate.</li>
                    <li>A separate written request is rquest for each quiz that I request make-up time</li>
                </ul>
            </div>
            <div className="inputs">
                <div className="input inputss">
                    <input type="text" />
                    <input type="text" />
                </div>
                <div className="label">
                <label htmlFor="">Student Signature</label>
                <div className="btnS">
                    <button className='BtnsCancel'>Cancel</button>
                    <button className='BtnsSend'>Send a request</button>
                </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Request;