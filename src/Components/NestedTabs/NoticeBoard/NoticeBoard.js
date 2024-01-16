import React, { useEffect, useState } from 'react'
import Accordion  from 'react-bootstrap/Accordion'
import './NoticeBoard.css';
import axios from "axios";
import { baseURL } from '../../../constants';

function NoticeBoard() {
    const [notices,setNotices] = useState();
    useEffect(() =>{
        const getAllNotices = async() =>{
            const getAllNoticesUrl = `${baseURL}/notices/getAllNotices`
        let response = await axios.get(getAllNoticesUrl);
            setNotices(response.data);
        } 
        getAllNotices();  
    },[]);
  return (
    <div className='notis'>
        {  notices?.map((notice,index) =>{
            return (
        <Accordion defaultActiveKey="0" key={index}>
            <Accordion.Item eventKey='0'>
                <Accordion.Header>Announcement</Accordion.Header>
                <Accordion.Body>
                    <span>“ Notice:</span>
                    <p>
                        Sub: {notice.subject} <br/>
                        {notice.description} 
                        <span>”</span><span className='span-2'>{notice.dateTime}</span>
                    </p>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
        )
        })
        }
       
    </div>
  )
}

export default NoticeBoard