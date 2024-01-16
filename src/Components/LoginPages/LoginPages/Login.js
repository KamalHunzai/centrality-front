import React, {useEffect, useState } from 'react';
import './Login.css'
import LoginCrtn from '../../images/Saly-10.png'
import Logo from '../../images/Logo.png'
import { MdOutlineMailOutline } from "react-icons/md";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import NOTrobot from '../../../Components/images/google_recaptcha-official 2.png'
import { FcGoogle } from "react-icons/fc";
import Loginmodal from '../RoleSelection/LoginModal/Loginmodal';
import axios from 'axios';
import { baseURL } from '../../../constants';

function Login() {
    const [username,setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [user,setUser] = useState();

    
        const login = async() =>{
            try{
                const studentSignInUrl = `${baseURL}/students/signin`;
            let response= await axios.post(studentSignInUrl,{username,password});
                window.location.href = "/Home";
                console.log(response);
                // localStorage.setItem('token',response.data.token);
                setUser(response.data);
            }catch(err) {
               console.error(err);
            }
        }
     
  

    const handleTogglePassword = () => {
        setShowPassword(!showPassword);
    };
    return (
        <>
            <div className='LoginLOGO'>
                <img src={Logo} alt='#' />
                <h2>MyCentrality</h2>
            </div>
            <div className='LOgin-MAIN'>
                <div className='CRTN-IMG'>
                    <img src={LoginCrtn} alt='#' />
                </div>
                <div className='LOgin_page'>
                    <div className='Login-Head-LOgo'>
                        <img src={Logo} alt='#' />
                        <h2>MyCentrality</h2>
                    </div>
                    <h4>Sign In with MyCentrality</h4>
                    <p>Welcome back! please enter your detail</p>
                    <div className='LoginUsername'>
                        <MdOutlineMailOutline />
                        <input placeholder='Username' value={username} onChange={(e) =>{
                            setUsername(e.target.value)
                        }} />
                    </div>
                    <div className="password-container">
                        <LockOutlinedIcon />
                        <div className="password-input">
                            <input
                                type={showPassword ? 'text' : 'password'}
                                id="password"
                                name="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                minLength="8"
                                placeholder='Password'
                                required
                            />
                            <span className="toggle-password" onClick={handleTogglePassword}>
                                <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} />
                            </span>
                        </div>
                    </div>
                    <div className='CheckBox-input'>
                        <span><input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                            <label for="vehicle1">Remember me</label><br></br></span>
                        <h5>Forgot Password?</h5>
                    </div>
                    <div className='TermsAndPolicy'>
                        <h3>I hereby agree to the Website <ins>Terms of Use</ins><br /> and the <ins>Privacy Policy</ins></h3>
                        <input type='checkbox' />
                    </div>
                    {/* <div className='ImNotRobot'>
                        <div >
                            <input type='checkbox' />
                            <label>I’m not a robot</label>
                        </div>
                        <img src={NOTrobot} alt='#' />
                    </div> */}
                    <button className='LoginButton' onClick={(e) =>{
                        e.preventDefault();
                        login();
                    }}>
                        <Loginmodal/>
                    </button>
                    <button className='GoogleButn'>
                        <FcGoogle />
                        Sign In with Google
                    </button>
                    <button className='SS0Btn'>
                    Sign In with SSO
                    </button>
                </div>
            </div>
        </>
    )
}

export default Login;