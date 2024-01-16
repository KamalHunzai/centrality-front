import React from 'react'
import "../Transcripts/Transcripts.css";
import TuitionInfoCom from "./TuitionInfoCom";
import TuitionInfoData from "./TuitionInfoData";

function Transcripts() {
    // function tran(val) {
    //     return <TranscriptCom th1={val.th1} th2={val.th2} th3={val.th3} th4={val.th4} td1={val.td1} td2={val.td2} td3={val.td3} td4={val.td4} />
    // }
    return (
        <div className='Transcripts-main'>
            <div className='table tableone'>
                <h3>Semester 1</h3>
                <div className='tableMap'>
                    {TuitionInfoData.map((data, index) => (
                        <TuitionInfoCom key={index} {...data} />
                    ))}
                </div>
            </div>
            <div className='table tableone'>
                <h3>Semester 2</h3>
                <div className='tableMap'>
                    {TuitionInfoData.map((data, index) => (
                        <TuitionInfoCom key={index} {...data} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Transcripts