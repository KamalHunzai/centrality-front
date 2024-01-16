import React, { useEffect, useState } from 'react'
import "./Myprofile.css"
import profileimg from '../images/Shoaib.png'
import victor1 from './Group 1000006077.png'
import victor2 from './Group 1000006078.png'
import victor3 from './Group 1000006079.png'
import victor4 from './Group 1000006080.png'
import TwoTabs from './MyProfileTwoTabs/TwoTabs'
import axios from 'axios'
import { baseURL } from '../../constants';
const Myprofile = () => {
    const [profile,setProfile] = useState({});

    const getStudenProfile = async() =>{
        const studentProfileUrl = `${baseURL}/students/profile/1`
        let response = await axios.get(studentProfileUrl);
        console.log(response.data.student);
        setProfile(response.data.student);
    }
    useEffect(() =>{
        getStudenProfile();
    },[]);
    return (
        <div className='Myprofile-main'>
            <h1>My Profile</h1>
            <div className='Myprofile-main-1'>
                <div className='Myprofile-main-child-1'>
                    <div className='profile'>
                        <div className='profile-child-1'>
                            <img src={profileimg} alt='#' />
                        </div>
                        <div className='profile-child-2'>
                            <div className='profile-child-2-1'>
                                <h2>{profile?.firstName +" "+ profile?.lastName}</h2>
                            </div>
                            <div className='profile-child-2-2'>
                                <p>{profile && "BSSE"}</p>
                                <button> <span>●</span> {profile.online ? "Online" : "Offline"}</button>
                            </div>
                            <div className='profile-child-2-3'>
                                <p>{profile?.loggedInSince}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='Myprofile-main-child-2'>
                    <div className='Myprofile-main-child-2-1'>
                        <img src={victor1} alt='#' /> <h3>{new Date(profile?.joinedOn).toLocaleDateString()}</h3>
                    </div>
                    <div className='Myprofile-main-child-2-2'>
                        <div className='div-1'>
                            <img src={victor2} alt='#' />
                            <h3>Assignments <span>{profile && "200"}</span></h3>
                        </div>
                        <div className='div-2'>
                            <img src={victor3} alt='#' />
                            <h3>Completed <span>{profile && "192"}</span></h3>
                        </div>
                    </div>
                </div>
                <div className='Myprofile-main-child-3'>
                    <div className='Myprofile-main-child-3-card-1'>
                        <img src={victor4} />
                    </div>
                    <div className='Myprofile-main-child-3-card-2'>
                        <h3>Grade Score</h3>
                        <h1>{profile && 85}%</h1>
                    </div>
                </div>
            </div>
            <TwoTabs profile={profile}/>

            
        </div>
    )
}

export default Myprofile