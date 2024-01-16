import React from 'react'
import { ImRadioChecked } from 'react-icons/im'
import {assingmentsDataSub} from '../data/MyscheduleData'

const MyassigmentMain = () => {
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
                {assingmentsDataSub.map((assingment, index) => (
                    <div
                        className='myassingment-child-2'
                        key={index}
                        style={{ marginTop: "10px" }}
                    >
                        <div
                            className='myassingment-card'
                            style={{
                                backgroundColor: assingment.bcColor,
                                borderColor: assingment.mainbordercolor,
                            }}
                        >
                            <div className='myassingment-card-child-1'>
                                <div className='myassingment-child'>
                                    <div className='myassingment-child-data'>
                                        <div className='myassingment-child-date'>
                                            <p className='date' style={{ backgroundColor: assingment.bgColor }}>
                                                {assingment.date}</p>
                                        </div>
                                        <div className='mychild-myassingment'>
                                            <h6>Assingment Title</h6>
                                            <div className='myassingment-time'>
                                                <div className='myassingment-mother'>
                                                    <p>{assingment.time}</p>
                                                    <span style={{ color: assingment.spandotColor }}>●</span>
                                                    <p>8 A.M - 9 A.M</p>
                                                </div>
                                                <p style={{ fontSize: "8px" }}></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='myassingment-card-child-2'>
                                <div className='description'>
                                    <h5 style={{ color: assingment.descriptionColor }}>
                                        Description
                                    </h5>
                                    <p>here is the Assingment Detail Description</p>
                                </div>
                                <div className='dov'>
                                    <button
                                        style={{
                                            color: assingment.bgColor,
                                            borderColor: assingment.buttonBgColor,
                                        }} >
                                        {assingment.button}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default MyassigmentMain