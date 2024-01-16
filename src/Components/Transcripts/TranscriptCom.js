import React from 'react';

const TranscriptCom = (props) => {
    return (
        <div className='TranscriptCom'>
            <table>
                <thead>
                    <tr>
                        <th><input type='checkbox'/> {props.th1}</th>
                        <th>{props.th2}</th>
                        <th>{props.th3}</th>
                        <th>{props.th4}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><input type='checkbox'/>{props.td1}</td>
                        <td>{props.td2}</td>
                        <td>{props.td3}</td>
                        <td>{props.td4}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export  default TranscriptCom