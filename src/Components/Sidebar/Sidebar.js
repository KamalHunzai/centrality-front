import React, { useState } from 'react';
import { Link, useLocation } from "react-router-dom";
import './Sidebar.css'
import { NavLink } from 'react-router-dom'
import GridView from '@mui/icons-material/GridView'
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import WebhookIcon from '@mui/icons-material/Webhook';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import CalculateOutlinedIcon from '@mui/icons-material/CalculateOutlined';
import Logo from '../images/Logo.png'
import IdImg from '../images/Shoaib.png'
import Wifi from '../images/filled.png'
import newimg from '../images/man.png'
import clasgirl from "../images/clasgirl.png"
import Calendar from "../images/Calendar.png"
import Cartoon from "../images/cartoon.png"
import myappccess from "../images/myappccess.png"
import Transcripts from "../images/Transcripts.png"
import Attendence from "../images/Attendence.png"
import { IoCaretForwardOutline, IoCaretDownOutline } from "react-icons/io5";

const Sidebar = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const location = useLocation();

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const menuItem = [
        {
            path: '/Home',
            name: 'Home',
            icon: <GridView />,
            imgSrc: newimg
        },
        {
            path: '/ClassRoomPage',
            name: 'Classroom',
            icon: <MenuBookOutlinedIcon />,
            imgSrc: clasgirl
        },
        {
            path: '/Transcripts',
            name: 'Transcripts',
            icon: <BusinessCenterOutlinedIcon />,
            imgsrc: Transcripts
        },
        {
            path: '/Calender',
            name: 'Calendar',
            icon: <CalendarMonthIcon />,
            imgSrc: Calendar
        },
        {
            path: '/MyAppAccess',
            name: 'My apps Access',
            icon: <WebhookIcon />,
            imgSrc: myappccess
        },
        {
            path: '/Attendence',
            name: 'Attendance',
            icon: <ArticleOutlinedIcon />,
            imgSrc: Attendence,
            arrow: dropdownOpen ? <IoCaretDownOutline /> : <IoCaretForwardOutline />,
            subMenu: [
                { path: '/Attendance/Report1', name: 'Chemistry Attendance' },
                { path: '/Attendance/Report2', name: 'Biology Attendance' },
                { path: '/Attendance/Report3', name: 'Mathematics Attendance' },
                // ... add more submenu items here
            ],
            onClick: toggleDropdown,
        },
        {
            path: '/CalculatorPage',
            name: 'Calculator',
            icon: <CalculateOutlinedIcon />,
        },
        
    ];

    // Find the active menu item based on the current path
    const activeMenuItem = menuItem.find(item => location.pathname === item.path);

    // Use the image from the active menu item, fallback to a default if none is active
    const sidebarImage = activeMenuItem && activeMenuItem.imgSrc ? activeMenuItem.imgSrc : Cartoon;

    return (
        <>
            <div className='dashboardewrapper'>
                <div className={`sidebar ${isOpen ? 'active' : ''}`}>
                    <div className='top_section'>
                        <div className='Logo'>
                            <img src={Logo} alt='#' className='Main-Logo-Dashboard' />
                            <h4>MYCENTRALITY</h4>
                        </div>
                        <hr />
                        <div className='IdImg'>
                            <img src={IdImg} alt='#' />
                            <h4>Good Morning Shuaib</h4>
                            <p>BSGIS & Remote Sensing</p>
                        </div>
                        <div>
                            <button className='IdImgBtn'><img src={Wifi} alt='#' />My Points: 32 </button>
                        </div>
                    </div>
                    <div className='menubar'>
                        <div style={{ display: 'flex', flexDirection: 'column' }} className='Fullwidth'>
                            {menuItem.map((item, index) => (
                                <div key={index} className='Full-Width'>
                                    <NavLink
                                        to={item.path}
                                        className="Sidebar-link"
                                        activeClassName="active"
                                        onClick={item.onClick}
                                    >
                                        <div className='icon'>{item.icon}</div>
                                        <div className='link_text ms-3  d-sm-inline'>
                                            {item.name}
                                            {item.arrow}
                                        </div>
                                    </NavLink>
                                    {item.subMenu && dropdownOpen && item.subMenu.map((subItem, subIndex) => (
                                        <NavLink
                                            to={subItem.path}
                                            key={subIndex}
                                            className="Sidebar-sublink"
                                        >
                                            <div className='link_text ms-3  d-sm-inline done'>
                                                <li><Link to={subItem.path}>{subItem.name}</Link></li>
                                            </div>
                                        </NavLink>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>
                    <img src={sidebarImage} alt='Sidebar Illustration' className='CartoonImg' />
                </div>

                <div className={`navbar-toggle ${isOpen ? 'open' : ''}`} onClick={toggleNavbar}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <main>{children}</main>
            </div>
        </>
    );
}

export default Sidebar;
