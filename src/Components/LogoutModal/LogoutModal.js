import React,{ useState } from "react";
// import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./LogoutModal.css";
import { FaRegChartBar } from "react-icons/fa";
import { MdOutlineLocalActivity } from "react-icons/md";
import { MdBarChart } from "react-icons/md";
import { MdOutlineGridOn } from "react-icons/md";
import Shoaib from '../images/Shoaib.png'
import { Link } from "react-router-dom";

const LogoutModal = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const handleLogout = () => {

    localStorage.removeItem("authToken");

    window.location.href = "/login";

    console.log("User logged out");
    setShow(false);
  };


  return (
    <>
      <div className="LogoutModal">
        <div className="mainModal">
          <div className="Logo" onClick={handleShow}>
            <img src={Shoaib} alt="#" />
          </div>
          <div className="modalContainer">
            <Modal
              show={show}
              onHide={handleClose}
              animation={false}
              className="custom-modal"
            >
              <div className="devSqur"></div>
              <Modal.Header closeButton>
                <Link to="/Myprofile" className="MyProfile_link">
                  <Modal.Title className="title">My Profile</Modal.Title>
                </Link>
              </Modal.Header>
              <Modal.Body className="detlas">
                <ul>
                  <li>
                    <FaRegChartBar />
                    App Access/Analytics
                  </li>
                  <li>
                    <MdOutlineLocalActivity />
                    Purchase Accessories
                  </li>
                  <li><MdOutlineGridOn />My Report Card</li>
                  <li className="upGrade"><MdBarChart />Upgrade Your Avatar</li>
                  <Link to="/Setting" className="AccountSettig">
                  Account Setting
                  </Link>
                  <li onClick={handleLogout}>Log Out</li>
                </ul>
              </Modal.Body>
            </Modal>
          </div>
        </div>
      </div>
    </>
  );
};

export default LogoutModal;