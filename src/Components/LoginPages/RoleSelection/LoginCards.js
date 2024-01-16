import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginAll.css";
import LOGOCEN from "../../images/Logo.png";
import Studentimg1 from "../../images/parent__5_-removebg-preview.png";
import Studentimg5 from "../../images/parent__1_-removebg-preview.png";
import Studentimg2 from "../../images/parent__4_-removebg-preview.png";
import Studentimg3 from "../../images/parent__3_-removebg-preview.png";
import Studentimg4 from "../../images/parent__2_-removebg-preview.png";
import Studentimg6 from "../../images/parent__6_-removebg-preview.png";
function LoginCards() {
  const [selectedRole, setSelectedRole] = useState(null);
  const navigate = useNavigate();

  const handleCardClick = (role) => {
    setSelectedRole(role);
  };

  const handleNext = () => {
    if (selectedRole) {
      // Navigate to the login page
      navigate('/Login');
    } else {
      alert('Please select a role first.');
    }
  };
  return (
    <div className="login-main">
      <div className="logo">
        <img src={LOGOCEN} />
        <h1>MYCENTRALITY</h1>
      </div>
      <div className="login-main-child">
        <div className="login-main-taxt">
          <h2>Login/Signup as</h2>
          <p>Tell Us About You</p>
        </div>
        <div className="login-main-card">
          <div className="card" onClick={() => handleCardClick('student')}>
            <img src={Studentimg1} />
            <h2>student</h2>
          </div>
          <div className="card">
            <img src={Studentimg5} />
            <h2>Teacher</h2>
          </div>
          <div className="card">
            <img src={Studentimg2} />
            <h2>Parent</h2>
          </div>
          <div className="card">
            <img src={Studentimg3} />
            <h2>Adminstrator</h2>
          </div>
          <div className="card">
            <img src={Studentimg4} />
            <h2>Vendor</h2>
          </div>
          <div className="card">
            <img src={Studentimg6} />
            <h2>Government</h2>
          </div>
        </div>
        <div className="login-main-button">
          <button onClick={handleNext}>Next</button>
        </div>
      </div>
    </div>
  );
}

export default LoginCards;
