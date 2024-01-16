import React, { useEffect, useState } from "react";
import AppImg from "../../images/1195025-education-apps 1.png";
import Appimg from "../../images/1195025-education-apps 2.png";
import appIMG from "../../images/1195025-education-apps 3.png";
import APPimg from "../../images/1195025-education-apps 4.png";
import ApPImg from "../../images/1195025-education-apps 5.png";
import StarOutlineRoundedIcon from "@mui/icons-material/StarOutlineRounded";
import "./RecentlyApp.css";
import ProgressBar from "react-bootstrap/ProgressBar";
import { baseURL } from "../../../constants";
import axios from "axios";

function RecentlyApp() {
    const appData = [
        {Img:AppImg,label: 'Camera', timeSpent: 5 * 60 * 60 }, 
        {Img:Appimg,label: 'Calendar', timeSpent: 5 * 60 * 60 },
        {Img:appIMG ,label: 'Gallery', timeSpent: 10 * 60 * 60 },
        {Img:APPimg ,label: 'Message', timeSpent: 7 * 60 * 60 },
      ];
      const [apps,setApps] = useState([]);
      const getApps = async() =>{
        try{
          let response = await axios.get(`${baseURL}/apps/mostUsedApps`);
          console.log(response)
          setApps(response.data);
        }catch(err) {
          console.log(err)
        }
      }
      useEffect(() =>{
        getApps();
      },[])
  return (
    <div className="RecentlyApp-main">
      <div className="APPSIcon">
        <div className="AppFlex">
          <img src={AppImg} alt="" />
          <StarOutlineRoundedIcon />
        </div>
        <div className="AppFlex">
          <img src={Appimg} alt="" />
          <StarOutlineRoundedIcon />
        </div>
        <div className="AppFlex">
          <img src={appIMG} alt="" />
          <StarOutlineRoundedIcon />
        </div>
        <div className="AppFlex">
          <img src={APPimg} alt="" />
          <StarOutlineRoundedIcon />
        </div>
        <div className="AppFlex">
          <img src={ApPImg} alt="" />
          <StarOutlineRoundedIcon />
        </div>
        <div className="AppFlex">
          <img src={ApPImg} alt="" />
          <StarOutlineRoundedIcon />
        </div>
      </div>
      <h4>Most used App</h4>

       <div className="RecentlyApp-ProgressBars">
      {apps && apps.map((app, index) => (
        <div className="ProgressFlex">
          <img style={{objectFit:'cover'}} src={app.logo} alt=""  key={index}/>
          <label htmlFor={`file${index}`}>{app.appName}</label>
          <div className="ProgressBarWrapper">
            <ProgressBar
              now={((parseInt(app.time )* 60 * 60) / (24 * 60 * 60)) * 100} 
              className="ProgressBar"
            />
            <span className="ProgressBarTime">
              {`${((parseInt(app.time) * 60 * 60) / 3600).toFixed(2)}h`} 
            </span>
          </div>
        </div>
        
      ))}
    </div>
    </div>
  );
}

export default RecentlyApp;
