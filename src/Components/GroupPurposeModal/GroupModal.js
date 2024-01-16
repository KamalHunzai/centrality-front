import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import './GroupModal.css'


function GroupModal() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div className='GroupModal-main'>
            <Button variant="primary" onClick={handleShow}>
                Launch demo modal
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                </Modal.Header>
                <Modal.Body>
                    <label className='ModalLABEL-MAin'>Group Purpose</label>
                    <br/>
                    <input placeholder='(issue Title)' className='ModalINPUT'/>
                    <br/>
                    <label className='ModalLABEL'>Name Of  Group</label>
                    <br/>
                    <input className='ModalINPUT'/>
                    <br/>
                    <label className='ModalLABEL'>Add Teacher</label>
                    <br/>
                    <Form.Select aria-label="Default select example" className='SELECT'>
                        <option></option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </Form.Select>
                    <br/>
                    <label className='ModalLABEL-MAin'>Add Student</label>
                    <br/>
                    <input className='ModalINPUT'/>
                    <br/>
                    <label className='ModalLABEL'>Add  Parent</label>
                    <br/>
                    <input className='ModalINPUT'/>

                </Modal.Body>
                <Modal.Footer>
                    <button onClick={handleClose} className='GropuModalBTN'>
                        Save Changes
                    </button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default GroupModal