import React from 'react';

const TuitionInfoCom = (props) => {
    return (
        <>
            <div className='TranscriptCom'>
            <table>
                <thead>
                    <tr>
                        <th>{props.th1}</th>
                        <th>{props.th2}</th>
                        <th>{props.th3}</th>
                        <th>{props.th4}</th>
                        <th>{props.th5}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{props.td1}</td>
                        <td>{props.td2}</td>
                        <td>{props.td3}</td>
                        <td>{props.td4}</td>
                        <td>{props.td5}</td>
                    </tr>
                    <tr>
                        <th>Total</th>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>$1200</td>
                        <td>$1200     <span>Paid</span></td>
                    </tr>
                </tbody>
            </table>
        </div>
        
        <div className='Printbtns'>
                <button>Print</button>
            </div>
        </>
    );
};

export  default TuitionInfoCom