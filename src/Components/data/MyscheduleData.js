import { IoIosContacts } from 'react-icons/io';
import { MdOutlineSlowMotionVideo } from "react-icons/md";
import { PiChartBarHorizontal } from 'react-icons/pi';
import { PiNotebookDuotone } from "react-icons/pi";
import React from "react";

export const MyscheduleData = [
  {
    dateText: "8",
    heading: "Assessment Test",
    time: "8th - 10th Dec 2023",
    spanColor: "#00AFEF",
    dateTextColor: "#00AFEF",
    backgroundColor: "#F0F7FF",
  },
  {
    dateText: "13",
    heading: "Assessment Quiz",
    time: "8th - 10th Dec 2023",
    spanColor: "#FF1D86",
    dateTextColor: "#FF1D86",
    backgroundColor: "#FFF0F7",
  },
  {
    dateText: "18",
    heading: "Assessment Quiz",
    time: "8th - 10th Dec 2023",
    spanColor: "#16D03B",
    dateTextColor: "#16D03B",
    backgroundColor: "#F0FFF3",

  },
  {
    dateText: "23",
    heading: "Assessment Quiz",
    time: "8th - 10th Dec 2023",
    spanColor: "#FF7E3E",
    dateTextColor: "#FF7E3E",
    backgroundColor: "#FFF5F0",
    lasttext: "Edulog Tutorial College, Blk 56, Pak State."
  },

];


export const cardsData = [
  {
    id: 1,
    image: require("../images/Teacher and Student Learning Chemistry1.png"),
    subject: "Chemistry",
    backgroundColor: "#fff",
    iconColor: "#6CD8CD",
    imgBackgroundColor: "#6CD8CD",
    buttonColor: "#6CD8CD",

  },
  {
    id: 2,
    image: require("../images/Schoolgirl Online Learning with Teacher2.png"),
    subject: "Chemistry",
    backgroundColor: "#fff",
    iconColor: "#5960B8",
    imgBackgroundColor: "#5960B8",
    buttonColor: "#5960B8",
  },
  {
    id: 3,
    image: require("../images/Students Discussion Together 3.png"),
    subject: "Chemistry",
    backgroundColor: "#fff",
    iconColor: "#658BEB",
    imgBackgroundColor: "#658BEB",
    buttonColor: "#658BEB",
  },
  {
    id: 4,
    image: require("../images/Students Discussion Together4.png"),
    subject: "Chemistry",
    backgroundColor: "#fff",
    iconColor: "#B1C1DF",
    imgBackgroundColor: "#B1C1DF",
    buttonColor: "#B1C1DF",
  },
  {
    id: 5,
    image: require("../images/Two Students Study Together5.png"),
    subject: "Chemistry",
    backgroundColor: "#fff",
    iconColor: "#B798E0",
    imgBackgroundColor: "#B798E0",
    buttonColor: "#B798E0",
  },
  {
    id: 6,
    image: require("../images/Girl Study With Laptop6.png"),
    subject: "Chemistry",
    backgroundColor: "#fff",
    iconColor: "#EC927E",
    imgBackgroundColor: "#EC927E",
    buttonColor: "#EC927E",
  },
];

// My Assingments Submitted Data //


export const assingmentsDataSub = [
  {
    type: "OverDue today",
    typecolor: "#F93333",
    description: "Description",
    descriptionColor: "#F93333",
    bgColor: "#F93333",
    buttonBgColor: "#F933331C",
    buttonTextColor: "#F93333",
    button: "Submit Assignment",
    time: "13th Dec 2023",
    spandotColor: "#F93333",
    date: "13",
    bcColor: "#F933331C"

  },
  {
    descriptionColor: "#16D03B",
    bgColor: "#16D03B",
    buttonBgColor: "#16D03B",
    buttonTextColor: "#16D03B",
    button: "Already submitted",
    time: "13th Dec 2023",
    spandotColor: "#16D03B",
    date: "13",
    bcColor: "#F0FFF3",
    mainbordercolor: "#16D03B"


  },
  {
    type: "OverDue today",
    typecolor: "#FF7E3E",
    descriptionColor: "#FF7E3E",
    bgColor: "#FF7E3E",
    buttonBgColor: "#FF7E3E",
    buttonTextColor: "#16D03B",
    button: "Submit assignment",
    time: "13th Dec 2023",
    spandotColor: "#FF7E3E",
    date: "13",
    bcColor: "#FFF5F0",
    mainbordercolor: "#FF7E3E"

  },
  {
    type: "New assigments",
    typecolor: "#00AFEF",
    radioColor: "#00AFEF",
    descriptionColor: "#00AFEF",
    bgColor: "#00AFEF",
    buttonBgColor: "#00AFEF",
    buttonTextColor: "#00AFEF",
    button: "Already submitted",
    time: "13th Dec 2023",
    spandotColor: "#00AFEF",
    date: "13",
    bcColor: "#00AFEF26",
    mainbordercolor: "#00AFEF"
  },

];

// cardsdata

export const Mycarddata = [
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

// /MYgradeCard/
export const MygradeData = [
  {
    id: 1,
    gradeTitle: "Articulate structue of C++ and java in Semester 1",
    result: "failed",
    subject: "Gis Programming",
    date: "3-01-2032",
    time: "12:30 AM - 01:40 PM",
    gradetype: "Test",
    passingPercentage: 70,
    scoredPercentage: 65,
    buttonColor: "#f93333",
    gradebc: "#ffefef",
  },
  {
    id: 2,
    gradeTitle: "Articulate structue of C++ and java in Semester 1",
    result: "Missed",
    subject: "Gis Programming",
    date: "3-01-2032",
    time: "12:30 AM - 01:40 PM",
    gradetype: "Assigment",
    passingPercentage: "70",
    scoredPercentage: 78,
    buttonColor: "#9A9A9A",
    gradebc: "#E6E6E6"
  },
  {
    id: 3,
    gradeTitle: "Articulate structue of C++ and java in Semester 1",
    result: "passed",
    subject: "Gis Programming",
    date: "3-01-2032",
    time: "12:30 AM - 01:40 PM",
    gradetype: "Presentation",
    passingPercentage: 70,
    scoredPercentage: 55,
    buttonColor: "#11A529",
    gradebc: "#Effff5"

  },
  {
    id: 4,
    gradeTitle: "Articulate structue of C++ and java in Semester 1",
    result: "Failed",
    subject: "Gis Programming",
    date: "3-01-2032",
    time: "12:30 AM - 01:40 PM",
    passingPercentage: 70,
    scoredPercentage: 85,
    buttonColor: "#F93333",
    gradebc: "#ffefef",
  },
  {
    id: 5,
    gradeTitle: "Articulate structue of C++ and java in Semester 1",
    result: "Failed",
    subject: "Gis Programming",
    date: "3-01-2032",
    time: "12:30 AM - 01:40 PM",
    passingPercentage: 70,
    scoredPercentage: 75,
    buttonColor: "#9A9A9A",
    gradebc: "#E6E6E6",
  },
  {
    id: 6,
    gradeTitle: "Articulate structue of C++ and java in Semester 1",
    result: "Passed",
    subject: "Gis Programming",
    date: "3-01-2032",
    time: "12:30 AM - 01:40 PM",
    passingPercentage: 70,
    scoredPercentage: 71,
    buttonColor: "#11A529",
    gradebc: "#Effff5"
  }

]