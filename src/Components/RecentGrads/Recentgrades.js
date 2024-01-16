import React,{useState,useEffect} from 'react'
import './Recentgrades.css'
import Innercarddata from '../RecentGrads/inner-card/Innercarddata'
import Innercard from './inner-card/Innercard'
import axios from "axios";
import Design from "../../Components/images/Design.png";
import { baseURL } from '../../constants';
const Recentgrades = () => {
  const [grades,setGrades] = useState([]);
  const getRecentGrades = async() =>{
    try{
      let response = await axios.get(`${baseURL}/students/recentGrades/1/1`);
      setGrades(response.data);
    }catch(err) {
      console.log(err);
    }
  }

  useEffect(() =>{
    getRecentGrades();
  },[]);

  return (
    <div className='Recentgrades-main'>
    <div className='Recentgrades-main-child-1'>
        <h1>Recent Grades</h1>
       <a href='../' className='anker'>See all</a>
    </div>
    <div className='Recentgrades-main-child-2'>
    {grades.map((card, index) => (
        <Innercard
          key={index}
          imageSrc={Design}
          title={card.title}
          day={card.day}
          time={card.time}
          progress={card.progress}
          backgroundColor={card.backgroundColor}
          progressColor={card.progressColor}
        />
      ))}
    </div>
</div>
  )
}

export default Recentgrades;