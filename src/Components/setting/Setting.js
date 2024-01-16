import React, { useState } from "react";
import "./Setting.css";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { LuUpload } from "react-icons/lu";
import uploadImage from "../images/SettingProfile.png";
import { FiEye } from "react-icons/fi";
import {FiEyeOff} from "react-icons/fi";
import axios from "axios";
import { baseURL } from "../../constants";


const Setting = () => {
  //input number //
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleOnChange = (value) => {
    setPhoneNumber(value);
  };

  // upload img //
  const [selectedFile, setSelectedFile] = useState(null);
  const [imageUrl, setImageUrl] = useState("");


  const handleFileInputChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      if (file.size > 1024 * 1024) {
        // If the file size is greater than 1MB (1024 * 1024 bytes)
        alert("Image size should be less than 1MB.");
        return;
      }
      setSelectedFile(file);
      const objectUrl = URL.createObjectURL(file);
      setImageUrl(objectUrl);
      console.log(imageUrl)
    }
  };

  const updateProfile = async() => { 
    try{
    const formData = new FormData();
    selectedFile && formData.append('profilePicture',selectedFile);
    firstName && formData.append("firstName",firstName);
    lastName && formData.append("lastName",lastName);
    title && formData.append("title",title);
    biography && formData.append("biography",biography);
    phoneNumber && formData.append("phoneNumber",phoneNumber)
    console.log(formData)
    let response = axios.put(`${baseURL}/students/updateProfile/2`,formData,{
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    console.log(response)
    }catch(err) {
      console.log(err);
    }
  };

  // /title function/
  const [inputText, setInputText] = useState("");

  const countWords = (text) => {
    const words = text.trim().split(/\s+/); // Split the input text into words
    const wordCount = words.length;

    if (wordCount <= 50) {
      return `${wordCount}/50`;
    } else {
      const truncatedText = words.slice(0, 50).join(" ");
      setInputText(truncatedText);
      return "50/50 (Max reached)";
    }
  };

  const handleInputChange = (event) => {
    const text = event.target.value;
    const countDisplay = countWords(text);
    setInputText(text);
    setWordCountDisplay(countDisplay);
  };

  const [wordCountDisplay, setWordCountDisplay] = useState("0/50");


  // svae changes//
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');

  const handleSaveChangess = () => {
    // Check if any of the input fields are empty
    if (!firstName || !lastName || !username) {
      alert('Please fill all input fields.');
      return;
    }

    // Perform actions with the gathered values (e.g., make API requests to save changes)
    alert('Changes saved successfully!');
    // You can handle the updated values as needed (e.g., make API calls to save changes)
  };

  //new password  //
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showCurrentPassword, setShowCurrentPassword] = useState(false);
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [passwordChanged, setPasswordChanged] = useState(false);
    const [passwordsMatch, setPasswordsMatch] = useState(true); // Added state for passwords match
    const [title,setTitle] = useState('');
    const [biography,setBioGraphy] = useState('');

    const updatePassword = async() =>{
      try{
      let response = await axios.put('baseURL/students/updatePassword/1',{
        currentPassword,
        newPassword,
        confirmPassword
      });
      setPasswordChanged(true);
    }catch(err) {
        alert(err);
      }

      
  }

    const togglePasswordVisibility = (field) => {
      switch (field) {
        case 'current':
          setShowCurrentPassword(!showCurrentPassword);
          break;
        case 'new':
          setShowNewPassword(!showNewPassword);
          break;
        case 'confirm':
          setShowConfirmPassword(!showConfirmPassword);
          break;
        default:
          break;
      }
    };
  
    const handleSaveChanges = () => {
  // Check if any required fields are empty
  if ( !currentPassword || !newPassword) {
  alert('Please fill in all required fields: Password, Current Password, and New Password.');
  return;
}

  // Reset passwordsMatch state
  setPasswordsMatch(true);

  // Check if passwords match
  if (newPassword !== confirmPassword) {
    setPasswordsMatch(false);
    return;
  }

  // Perform actions with the gathered values (e.g., make API requests to save changes)
  setPasswordChanged(true);
  setTimeout(() => {
    setPasswordChanged(false);
  }, 5000);
};


  return (
    <div className="Setting-main">
      <div className="setting-child-1">
        <div className="setting-account-setting">
          <h6>Account Settings</h6>
          {/* name */}
          <div className="account-setting-input-name">
            <label htmlFor="Full name">Full name</label>
            <div className="first-name">
              <input
                type="text"
                id="text"
                placeholder="First name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <input
                type="text"
                id="text"
                placeholder="Last name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
          </div>
          {/* username */}
          <div className="account-setting-input-username">
            <label htmlFor="Full name">Username</label>
            <div>
              <input
                type="text"
                id="text"
                placeholder="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
          </div>
       {/* phone numbe */}
          <div className="account-setting-input-number">
            <label htmlFor="Full name">Phone Number</label>
            <div className="account-setting-input-number2">
            <PhoneInput
  type="number"
  placeholder="Your Phone number..."
  country={"us"} 
  value={phoneNumber}
  onChange={(value) => setPhoneNumber(value)}
  className="account-setting-input-number2"
/>
            </div>
          </div>
        </div>
        <div className="setting-account-upload">
          <div className="upload-profile">
            {!imageUrl ? (
              <img
                src={uploadImage}
                alt="Default"
                style={{ width: "200px", height: "200px" }}
              />
            ) : (
              <img
                src={imageUrl}
                alt="Uploaded"
                style={{ width: "200px", height: "200px" }}
              />
            )}
            {/* <img className="upload-img" src={uploadImage} alt="" /> */}
            <div className="chose-file-btn">
              <LuUpload className="Aiout-icon" />
              <div className="mno">
                <input
                  type="file"
                  id="source-file"
                  onChange={handleFileInputChange}
                />
                <label
                  className="source-file"
                  htmlFor="source-file"
                >
                  Upload Photo
                </label>
              </div>
            </div>
            <p className="image-size">
              Image size should be under 1MB and image ratio needs to be 1:1
            </p>
          </div>
        </div>
      </div>

      {/*div2  title */}
      <div className=" setting-child-2">
        <label htmlFor="Tittle">Tittle</label>
        <div className="account-setting-input-title">
          <input
            type="text"
            value={title}
            name="text"
            id="text"
            onChange={(e) =>{
              setTitle(e.target.value);
            }}
            placeholder="Your tittle, proffesion or small biography"
          />
          <p>{wordCountDisplay}</p>
        </div>
        {/* Bio Graphy */}
        <div className="account-setting-biography">
          <label htmlFor="Biography">Biography</label>
          <textarea
            name="text"
            id="tex"
            value={biography}
            onChange={(e) =>{
              setBioGraphy(e.target.value)
            }}
            placeholder="Your tittle, proffesion or small biography"
          ></textarea>
        </div>
      </div>
      <div className="account-setting-btn">
        <button onClick={(e) =>{
          e.preventDefault();
          updateProfile();
        }}>Save Changes</button>
  
      </div>

      {/* div3 */}
      <div className="setting-child-3">
        <div className="Account-setting-notification">
          <h5>Notifications</h5>
          <div className="Notifications-checkboxes">
            <li>
              <input type="checkbox" id="checkbox" />
            </li>
            <p>I want to know Student mack-up time request.</p>
          </div>
          <div className="Notifications-checkboxes">
            <li>
              <input type="checkbox" id="checkbox" />
            </li>
            <p>I want to know when any message me.</p>
          </div>
          <div className="Notifications-checkboxes">
            <li>
              <input type="checkbox" id="checkbox" />
            </li>
            <p>I want to know when any message me.</p>
          </div>
          <div className="Notifications-checkboxes">
            <li>
              <input type="checkbox" id="checkbox" />
            </li>
            <p>I want to know when any message me.</p>
          </div>
          <div className="Notifications-checkboxes">
            <li>
              <input type="checkbox" id="checkbox" />
            </li>
            <p>I want to know daily how many people visited my profile.</p>
          </div>
          <div className="Notifications-checkboxes">
            <li>
              <input type="checkbox" id="checkbox" />
            </li>
            <p>I want to know when any message me.</p>
          </div>
          <div className="setting-notification-btn">
            <button>Save changes</button>
          </div>
        </div>

        {/* change password */}

        <div className="Account-setting-Change-password">
      <h5>Change password</h5>

      <div className="Account-setting-Current-Password">
        <label htmlFor="Current Password">Current Password</label>
        <div className="Change-password-input">
          <input
            type={showCurrentPassword ? 'text' : 'password'}
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
            placeholder="Current Password"
          />
          {showCurrentPassword ? (
            <FiEyeOff onClick={() => togglePasswordVisibility('current')} />
          ) : (
            <FiEye onClick={() => togglePasswordVisibility('current')} />
          )}
        </div>
      </div>

      <div className="Account-setting-New-Password">
        <label htmlFor="New Password">New Password</label>
        <div className="New-Password-input">
          <input
            type={showNewPassword ? 'text' : 'password'}
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            placeholder="New Password"
          />
          {showNewPassword ? (
            <FiEyeOff onClick={() => togglePasswordVisibility('new')} />
          ) : (
            <FiEye onClick={() => togglePasswordVisibility('new')} />
          )}
        </div>
      </div>

      <div className="Account-setting-Confirm-Password">
        <label htmlFor="Confirm-Password">Confirm Password</label>
        <div className="Confirm-password-input">
          <input
            type={showConfirmPassword ? 'text' : 'password'}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm Password"
          />
          {showConfirmPassword ? (
            <FiEyeOff onClick={() => togglePasswordVisibility('confirm')} />
          ) : (
            <FiEye onClick={() => togglePasswordVisibility('confirm')} />
          )}
        </div>
      </div>
      {!passwordsMatch && (
        <div style={{ color: 'red', marginTop: '10px' }}>
          Passwords don't match!
        </div>
      )}  
      
      {passwordChanged && (
        <div style={{ color: 'green', marginTop: '10px' }}>
          Password changed successfully!
        </div>
      )}

      <div className="setting-password-btn">
        <button onClick={() =>{
          updatePassword();
        }}>Save changes</button>
      </div>
    </div>

      </div>
    </div>
  );
};

export default Setting;
