import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./ModalChat.css";
import NewMessage from "../images/Vector.png";
import { MdOutlineMessage } from "react-icons/md";


function ModalChat() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="ModalChat-main">
      <Button variant="primary" onClick={handleShow}>
      <MdOutlineMessage />RequetsChat
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Request For Message</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="New_main">
            <img src={NewMessage} />
          </div>
          <h2>Request Teacher for chat ticket</h2>
          <p>
            when Teacher will accept your request then <br />
            you will Chat Directly to teacher
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button className="CancelBtn" onClick={handleClose}>
          Cancel
          </Button>
          <Button className="ReqBtn" onClick={handleClose}>
          Request For message 
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ModalChat;
