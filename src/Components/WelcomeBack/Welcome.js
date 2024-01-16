import React from 'react'
import './Welcome.css'
import Teacher from '../images/image 1.png'
import Hand from '../images/image 296.png'

function Welcome() {
    return (
        <div className='Welcome-main'>
            <div className='Welcome-div1'>
                <h1>Welcome back, Shuaib<span><img src={Hand} alt='#' /></span></h1>
                <p>You’ve learned <span style={{fontWeight:'700'}}>70%</span>  of your goal this week! <br/>
                    Keep it up and improve your Grades.</p>
            </div>
            <div className='Welcome-div2'>
                <img src={Teacher} alt='#' />
            </div>
        </div>
    )
}

export default Welcome