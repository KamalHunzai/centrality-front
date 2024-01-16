import React from 'react'
import './Transcripts.css'
import TranscriptData from './TranscriptData'
import TranscriptCom from './TranscriptCom'
import { FaLeaf } from "react-icons/fa";
import { FaBook } from "react-icons/fa";

function Transcripts() {
    // function tran(val) {
    //     return <TranscriptCom th1={val.th1} th2={val.th2} th3={val.th3} th4={val.th4} td1={val.td1} td2={val.td2} td3={val.td3} td4={val.td4} />
    // }
    return (
        <div className='Transcripts-main'>
            <h1 className='Transcripts-Head'>School Transcripts</h1>
            <div className='transcitps'>
                <div className='Transcripts-First-inputs'>
                    <div className='SCHOOLNAME'>
                        <label>SCHOOL NAME</label>
                        <input style={{ marginLeft: '33px' }} />
                        <br />
                        <label>SCHOOL ADDRESS</label>
                        <input />
                        <br />
                        <label>SCHOOL PHONE</label>
                        <input className='First-input' />
                    </div>
                    <div className='school-Logo'>
                        <p>SCHOOL <br />LOGO</p>
                    </div>
                </div>
                <div className='Transcripts-Second'>
                    <div className='Transcripts-child1'>
                        <div className='inputts'>
                            <div className='inputt'>
                                <label>
                                    Student Name
                                </label>
                                <input />
                            </div>
                            <div className='inputt'>
                                <label>
                                    Student Id
                                </label>
                                <input />
                            </div>
                            <div className='inputt '>
                                <label>
                                    Anticipated Graduation Date
                                </label>
                                <input className='mainInput'/>
                            </div>
                        </div>
                    </div>
                    <div className='Transcripts-child1 Inputts'>
                        <div className='inputts '>
                            <div className='inputt'>
                                <label>Credits Earned</label>
                                <input />
                            </div>
                            <div className='inputt'>
                                <label>Cumulative GPA</label>
                                <input />
                            </div>
                            <div className='inputt'>
                                <label>Date of birth</label>
                                <input />
                            </div>
                        </div>
                    </div>
                </div>
                <h3>Test Scores</h3>
                <div className='TestScore_div'>
                    <div className='inputts'>
                        <div className='inputt'>
                            <label>PSAT Date</label>
                            <input />
                        </div>
                        <div className='inputt'>
                            <label>SAT Date</label>
                            <input />
                        </div>
                        <div className='inputt'>
                            <label>ACT Date</label>
                            <input className='ACTDaTe'/>
                        </div>
                    </div>
                </div>
            </div>
            <div className='table tableone'>
                <h3>Ninth Grade Year</h3>
                <div className='tableMap'>
                    {TranscriptData.map((data, index) => (
                        <TranscriptCom key={index} {...data} />
                    ))}
                </div>
            </div>
            <div className='table tableone'>
                <h3>Tenth Grade Year</h3>
                <div className='tableMap'>
                    {TranscriptData.map((data, index) => (
                        <TranscriptCom key={index} {...data} />
                    ))}
                </div>
            </div>
            <div className='indicatesCommunity'>
                <p>*indicates community college courses for college credit - see college transcript <br />
                    ********** END OF ACADEMIC TRANSCRIPT **********</p>
                <div className='Issued'>
                    <label>Date Issued</label>
                    <input type='date' />
                </div>
                <p className='transcript'>This transcript is provided in accordance with the State of North Canada Department of Education regulations for graduation. I do hereby <br /> acknowledge that all information provided herein is accurate.</p>
                <div className='Issued AdminisTrator'>
                    <label className='SignaTure'>Signature of the Administrator of High School Date</label>
                    <div className='input'>
                        <span><FaLeaf /></span> <input type='text' placeholder='Signature' />
                    </div>
                </div>
                <div className='Issued'>
                    <label>Date</label>
                    <input type='text' />
                </div>
            </div>
            <div className='btnNs'>
                <button>Share</button>
                <button><span><FaBook /></span> Export Data</button>
                <button className='Print'>Print Transcript</button>
            </div>
        </div>
    )
}

export default Transcripts