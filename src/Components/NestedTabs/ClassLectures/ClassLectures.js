import React, { useEffect, useState } from 'react'
import './ClassLectures.css'
import { ClassLecData } from './data/ClassLecData'
import axios from "axios";
import { baseURL } from '../../../constants';

function ClassLectures() {
    const [lectures,setLectures] = useState([]);
    const getLectures = async() =>{
        try{
            let response = await axios.get(`${baseURL}/lectures/getAllLectures/3`);
            console.log(response.data);
            setLectures(response.data);
        }catch(err) {
            console.log(err)
        }
    }
    useEffect(() =>{
        getLectures();
    },[]);
  return (
    <div className='ClassLectures-main'>
        <h2>Lectures</h2>
        {lectures.map((lecture,index) => {
    return (
        <div className='ClassLec-Card' key={index}>
            <div className='main-ClassLectures'>
                <div className='ClassLec-head'>
                    <p>{index+1}</p>
                    <h1>{lecture.title}</h1>
                </div>
                <div className='ClassLec-From-To'>
                    <button>
                        <a
                            href={lecture.downloadLink}
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            Downloads
                        </a>
                    </button>
                    <h6>
                        <span>
                            Date : {lecture.date}
                        </span>
                    </h6>
                    <hr/>
                    <h6>
                        <span>
                            From : {lecture.from}
                        </span>
                    </h6>
                    <hr/>
                    <h6>
                        <span>
                            To: {lecture.to}
                        </span>
                    </h6>
                </div>
            </div>
        </div>
    );
})}
    </div>
  )
}

export default ClassLectures