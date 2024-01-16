import React from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { FaEdit } from "react-icons/fa";
import { MdOutlinePhone } from "react-icons/md";
import { MdOutlineEmail } from "react-icons/md";
import '../Myprofile.css';
import TuitionInfo from "../../Tuition/TuitionInfo";

function TwoTabs({profile}) {
  return (
    <div className='TwoTabs-Main'>
     <Tabs
      defaultActiveKey="profile"
      id="uncontrolled-tab-example"
      className="mb-3 profileTabs"
    >
      <Tab eventKey="home" title="Profile" className='profileTab'>
      <div className='Myprofile-main-2'>
                <div className='edit-icon'>
                    <FaEdit />
                </div>
                <div className='Personal-Details'>
                    <div className='Personal-Details-child-1'>
                        <h1>Personal Details</h1>
                        <h3>Name : <span>{profile?.firstName +" "+profile?.lastName}</span> </h3>
                        <h3>Date of Joining: <span>{profile?.joinedOn}</span> </h3>
                        <h3>Date of Birth  : <span>{profile?.dateOfBirth}</span> </h3>
                        <h3>Contact Number  : <span>{profile?.phoneNumber}</span> </h3>
                        <h3>Emergency Contact Number : <span>{profile?.emergencyPhoneNumber}</span> </h3>
                        <h3>Email Address : <span>{profile?.email}</span> </h3>
                        <h2>Education Details</h2>
                    </div>
                    <div className='Personal-Details-child-2'>
                        <h1>Center Contact</h1>
                        <h3><MdOutlinePhone /> <span>{profile?.centerContact}</span> </h3>
                        <h3><MdOutlineEmail /> <span>{profile?.centerEmail}</span> </h3>
                        <h2>Address Details</h2>
                        <h3>Pincode : <span>{profile && 2239}</span> </h3>
                        <h3>District: <span>{profile && "District 7 Cityville"}</span> </h3>
                        <h3>State : <span>{profile && "New York"}</span> </h3>
                        <h3>Address : <span>{profile && "John Doe 123 Main Street Apt 4B Citytown, ST 12345 USA"}</span> </h3>
                    </div>
                </div>
                <hr className='line-hr-two' />
                <div className='edit-icon' style={{ paddingTop: '5px' }}>
                    <FaEdit />
                </div>
                <div className='Personal-Details-child-3'>
                    <h3>Highest Qualification : <span>{profile?.highestQualification}</span> </h3>
                    <h3>Name of institution : <span>{profile?.nameOfInstitution}</span> </h3>
                    <h3>Year of Qualification : <span>{profile?.yearOfQualification}</span> </h3>
                    <h3>Batch : <span>{profile?.batch}</span> </h3>
                    <h1>Family Details</h1>
                </div>
                <hr className='line-hr-two' />
                <div className='edit-icon' style={{ paddingTop: '5px' }}>
                    <FaEdit />
                </div>
                <div className='Personal-Details-child-4'>
                    <h3>Father Name : <span>{profile?.fatherName}</span> </h3>
                    <h3>Profession : <span>{profile?.fatherProfession}</span> </h3>
                    <h3>Name of Organization: <span>{profile?.nameOfOrganization}</span> </h3>
                    {/* <h3>Date of Birth  : <span>{profile.fatherDateOfBirth}</span> </h3> */}
                    <h3>Contact Number  : <span>{profile?.fatherContact}</span> </h3>
                    <h3>WhatsApp Number  : <span>{profile?.fatherWhatsApp}</span> </h3>
                    <h3>Email Address : <span>{profile?.fatherEmail}</span> </h3>
                    <h3>Mother Name : <span>{profile?.motherName}</span> </h3>
                    <h3>Profession : <span>{profile?.motherProfession}</span> </h3>
                </div>
            </div>
      </Tab>
      <Tab eventKey="profile" title="Tution info" className='profileTab'>
        <TuitionInfo/>
      </Tab>
    </Tabs></div>
  )
}

export default TwoTabs