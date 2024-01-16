import React from 'react'
import Welcome from '../WelcomeBack/Welcome'
import RecentGrads from '../RecentGrads/Recentgrades'
import './Home.css'
import MySchedule from '../Myschedule/MySchedule'
import Classroom from '../classRooms/Classroom'
import GPAcalculatorHome from '../GPAcalculaters/GPAcalculatorHome'
import Chart from '../Chart/ChartComponent'

function HomePage() {
  return (
    <div className='Home-main'>
        <div className='Home-70'>
        <Welcome/>
        <Chart/>
        <Classroom/>
        
        </div>
        <div className='Home-30'>
            <MySchedule/>
            <RecentGrads/>
            <GPAcalculatorHome/>   
            <p className='Click'><span style={{color:'#00AFEF'}}><ins>Click</ins></span> here for detail</p> 
        </div>
        
    </div>
  )
}

export default HomePage