import React from 'react';
import './Attendence.css';
import Mycard from '../mycard/Mycard';
import { IoIosContacts } from 'react-icons/io';
import { MdOutlineSlowMotionVideo } from "react-icons/md";
import { PiChartBarHorizontal } from 'react-icons/pi';
import { PiNotebookDuotone } from "react-icons/pi";
import BarChartComponent from '../Chart/BarChartComponent';
import Bydate from '../DatePicker/Bydate';
import { CiSearch } from "react-icons/ci";
import Order from "../order/Order";
import { useEffect,useState } from 'react';
import axios from 'axios';
import { baseURL } from '../../constants';

const Mycarddata = [
  {
    icon: <IoIosContacts className="icons" color="#FF5733" />,
    cardtitle: "Total",
    // cardpara: "18",
    backgroundColor: "#FFF0F0",
  },
  {
    icon: <MdOutlineSlowMotionVideo className="icons" color="#00AFEF" />,
    cardtitle: "present",
    // cardpara: "2",
    backgroundColor: "rgba(0, 175, 239,0.20)",
  },
  {
    icon: <PiChartBarHorizontal className="icons" color="#23BD33" />,
    cardtitle: "Absent",
    // cardpara: "32",
    backgroundColor: "#E1F7E3",
  },
  {
    icon: < PiNotebookDuotone className="icons" color="#FD8E1F" />,
    cardtitle: "Excused",
    // cardpara: "7",
    backgroundColor: "#FFF2E5",
  },
]
function Attendence() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getAttendances() {
      try {
        const getAttendanceAnalyticsUrl = `${baseURL}/attendances/getAttendanceAnalytics/1/2/01-01-2023`
        console.log("getAttendanceAnalyticsUrl" + getAttendanceAnalyticsUrl)
        const response = await axios.get(getAttendanceAnalyticsUrl);
        console.log("API Response:", response.data);

        if (Array.isArray(response.data)) {

          for(let i = 0; i< Mycarddata?.length; i++) {
            Mycarddata[i].value = response.data[i]
          }
        
        } else {
          console.error("Data is not an array:", response.data);
          setData([]);
        }

        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setData([]);
        setLoading(false);
      }
    }

    getAttendances();
  }, [Mycarddata]);

  
  return (
    <>
      <div className='Attendence-card-main'>
        {Mycarddata.map((data, index) => (
          <Mycard
            key={index}
            icon={data.icon}
            cardtitle={data.cardtitle}
            value={data.value}
            backgroundColor={data.backgroundColor}
            textColor={data.color}
          />
        ))}

      </div>
      <div className='Attendence-card-main-chart'>
        <BarChartComponent />

      </div>
      <div className='ByDate'>
        <h3>Attendance Summery</h3>
        <div className='Main'>
          <div className='input'><CiSearch /><input placeholder='Search' type='text' /></div>
          <div className='datePicker'>

            <div className='DaTe'>
              <input type='date' />
            </div>

          </div>
         <div className='mAin'> <Bydate /></div>
        </div>
      </div>
      <Order/>
    </>
  );
}

export default Attendence;
