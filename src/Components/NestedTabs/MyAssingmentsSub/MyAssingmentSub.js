import React, { useState, useEffect } from 'react'
import { ImRadioChecked } from "react-icons/im"
import './MyAssingmentSub.css'
import { assingmentsDataSub } from '../../data/MyscheduleData';
import Addimage from '../../AddimageModals/Addimage/Addimage';
import "../../AddimageModals/AddimageModal/AddimageModal.css";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import axios from "axios";
import { baseURL } from '../../../constants';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const colors = {
    "new Assignment": {
        bordercolor: "#00AFEF",
        backgroundcolor: "#00AFEF",
        descriptionColor: "#00AFEF",
        buttonBgColor: "#00AFEF",
        buttonTextColor: "#00AFEF",
        button: "Already submitted",
        spandotColor: "#00AFEF",
        bctextColor: "#4E5566",
    },
    "Due soon": {
        bordercolor: "#FF7E3E",
        backgroundcolor: "#FF7E3E",
        descriptionColor: "#FF7E3E",
        buttonTextColor: "#FF7E3E",
        button: "Already submitted",
        spandotColor: "#FF7E3E",
        bctextColorr: "#4E5566",
    },
    "OverDue Today": {
        bordercolor: "#F93333",
        backgroundcolor: "#F93333",
        descriptionColor: "#F93333",
        buttonTextColor: "#F93333",
        button: "Submit assignment",
        spandotColor: "#F93333",
        bctextColor: "#4E5566",
    },
    "submitted": {
        bordercolor: "#16D03B",
        background: "#16D03B",
        descriptionColor: "#16D03B",
        buttonTextColor: "#16D03B",
        button: "Already submitted",
        spandotColor: "#16D03B",
        bctextColor: "#4E5566",
    }
}



function MyAssingmentSub() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [assignments, setAssignments] = useState([]);

    useEffect(() => {
        const getAllAssignments = async () => {
            const generateMappedData = (inputData) => {
                const styles = {
                    "OverDue Today": {
                        bordercolor: "#F93333",
                        backgroundcolor: "rgba(249,51,51,0.11)",
                        buttonbackgroundcolor:"rgba(249,51,51,0.11)",
                        descriptionColor: "#F93333",
                        buttonTextColor: "#F93333",
                        button: "Submit assignment",
                        spandotColor: "#F93333",
                        bctextColor: "#F93333",
                    },
                    "Due soon": {
                        bordercolor: "#FF7E3E",
                        backgroundcolor: "rgba(22,208,59,1)",
                        buttonbackgroundcolor:"rgba(22,208,59,1)",
                        descriptionColor: "#FF7E3E",
                        buttonTextColor: "rgba(249, 51, 51, 1)",
                        button: "Submit assingment",
                        spandotColor: "#FF7E3E",
                        bctextColor: "#4E5566",
                    },
                    "submitted": {
                        bordercolor: "#16D03B",
                        backgroundcolor: "rgba(240,255,243,1)",
                        buttonbackgroundcolor:"rgba(240,255,243,1)",
                        descriptionColor: "#16D03B",
                        buttonTextColor: "#16D03B",
                        spandotColor: "#16D03B",
                        button: "Already submitted",
                        bctextColor: "#16D03B",
                    },
                    "new Assignment": {
                        bordercolor: "#00AFEF",
                        backgroundcolor: "rgba(0,175,239,0.15)",
                        buttonbackgroundcolor:"rgba(0,175,239,0.15)",
                        descriptionColor: "#00AFEF",
                        buttonBgColor: "#00AFEF",
                        buttonTextColor: "#00AFEF",
                        spandotColor: "#00AFEF",
                        bctextColor: "#00AFEF",
                    },
                };

                return inputData.map((item) => {
                    const style = styles[item.type] || {}; // Use the corresponding style based on the type
                    return { ...item, ...style };
                });
            };
            const getAllAssignmentsUrl = `${baseURL}/assignments/getAllAssignments`
            let response = await axios.get(getAllAssignmentsUrl);

            const newdata = generateMappedData(response.data);
            console.log(newdata);


            setAssignments(newdata);
        }

        getAllAssignments();
    }, []);


    return (
        <div className='myassingment-main'>
            <div className='myassingment-child-1'>
                <div className='myassingment-radio-btn'>
                    <span></span>
                    <p>OverDue</p>
                    <ImRadioChecked
                        style={{ color: "#f93333", width: "19px", height: "19px" }}
                    />
                </div>
                <div className='myassingment-radio-btn'>
                    <span></span>
                    <p>Due Soon</p>
                    <ImRadioChecked
                        style={{ color: "#ff7e3e", width: "19px", height: "19px" }}
                    />
                </div>
                <div className='myassingment-radio-btn'>
                    <span></span>
                    <p>Submitted</p>
                    <ImRadioChecked
                        style={{ color: "#16d03b", width: "19px", height: "19px" }}
                    />
                </div>
                <div className='myassingment-radio-btn'>
                    <span></span>
                    <p>New</p>
                    <ImRadioChecked
                        style={{ color: "#00afef", width: "19px", height: "19px" }}
                    />
                </div>
            </div>
            <div>
                {assignments && assignments.map((assignment, index) => {
                    return <div
                        className='myassingment-child-2'
                        key={index}
                        style={{ marginTop: "10px" }}
                    >
                        <div
                            className='myassingment-card'
                            style={{
                                backgroundColor: assignment?.backgroundcolor,
                                borderColor: assignment?.bordercolor,
                            }}
                        >
                            <div className='myassingment-card-child-1'>
                                <div className='myassingment-child'>
                                    <div className='myassingment-child-data'>
                                        <div
                                            className='myassingment-child-data'

                                        >
                                            <p className='date' style={{ colors: assignment?.bcColor, backgroundColor: assignment?.buttonTextColor }}>{assignment?.Date.slice(0, 2)}</p>
                                        </div>
                                        <div className='mychild-myassingment'>
                                            <h6 style={{ color: assignment?.descriptionColor }}>{assignment?.title}</h6 >
                                            <div className='myassingment-time'>
                                                <div className='myassingment-mother'>
                                                    <p>{assignment?.Date}</p>
                                                    <span style={{ color: assignment?.spandotColor }}>●</span>
                                                    <p>{assignment?.time}</p>
                                                </div>
                                                <p style={{ fontSize: "8px" }}></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='myassingment-card-child-2'>
                                <div className='description'>
                                    <h5 style={{ color: assignment?.buttonTextColor }}>
                                        {assignment?.description}
                                    </h5>
                                    <p>here is the Assingment Detail Description</p>
                                </div>
                                <div className='dov'>
                                    <h4 style={{ color: assignment?.buttonTextColor }}>{assignment?.type}</h4>

                                    <div>
                                        <button style={{
                                            borderColor:assignment?.bctextColor,
                                            color: assignment?.buttonTextColor,

                                            
                                            
                                        }} onClick={handleOpen}>{colors[assignment?.type]?.button}</button>
                                        <Modal
                                            open={open}
                                            onClose={handleClose}
                                            aria-labelledby="modal-modal-title"
                                            aria-describedby="modal-modal-description"
                                        >
                                            <Box sx={style}>
                                                <Typography id="modal-modal-title" variant="h6" component="h2">
                                                    Submit your assignment
                                                </Typography>
                                                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                                    <Addimage />

                                                </Typography>
                                            </Box>
                                        </Modal>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                })}
            </div>

        </div>
    )
}

export default MyAssingmentSub