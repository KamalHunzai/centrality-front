
import React from 'react';
import "./App.css";
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import AppAcessChart from './Components/Chart/AppAcessChart';
// import GroupModal from './Components/GroupPurposeModal/GroupModal';
// import Login from './Components/LoginPages/LoginPages/Login'
// import LoginCards from './Components/LoginPages/RoleSelection/LoginCards';
import CalculatorPage from './Components/pages/CalculatorPage';
import Assigment from './Components/AssigmentResult/Assigment';
// import Request from './Components/Request/Request';
import MyAppAccess from "./Components/pages/MyAppAccess";
import MyProfile from "./Components/MyProfile/Myprofile";
import Sidebar from './Components/Sidebar/Sidebar';
import TopSearchBar from "./Components/TopSearchBar/TopSearchBar";
import HomePage from '../src/Components/pages/HomePage';
import ClassRoomPage from './Components/pages/ClassRoomPage';
import NestedTabs from './Components/NestedTabs/NestedTabs';
import Attendence from './Components/pages/Attendence';
import Transcripts from './Components/Transcripts/Transcripts';
import MyAssingmentSub from './Components/NestedTabs/MyAssingmentsSub/MyAssingmentSub';
import Request from "./Components/Request/Request";
// import Myprofile from './Components/Myprofile/Myprofile'; 
import Setting from './Components/setting/Setting';
import Login from './Components/LoginPages/LoginPages/Login';
import LoginCards from './Components/LoginPages/RoleSelection/LoginCards'
import Calender from './Components/CalenderPage/Calender'
import Calanderwork from './Components/calanderwork/Calanderwork';
import Readmore from "./Components/readmore/Readmore";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LoginCards />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/Home' element={<PrivateRoute component={<HomePageWithSidebar />} />} />
          <Route path='/ClassRoomPage' element={<PrivateRoute component={<ClassRoomPageWithSidebar />} />} />
          <Route path='/NestedTabs' element={<PrivateRoute component={<NestedTabsWithSidebar />} />}  />
          <Route path='/Attendence' element={<AttendenceWithSidebar />} />
          <Route path='/Transcripts' element={<TranscriptsWithSidebar />} />
          <Route path='/MyAssingmentSub' element={<MyAssingmentSubWithSidebar />} />
          <Route path='/Request' element={<RequestWithSidebar />} />
          <Route path='/Myprofile' element={<MyProfileWithSidebar />} />
          <Route path='/Setting' element={<SettingWithSidebar />} />
          <Route path='/CalculatorPage' element={<CalculatorPageWithSidebar />} />
          <Route path='/Assigment' element={<AssigmentWithSidebar />} />
          <Route path='/MyAppAccess' element={<MyAppAccessWithSidebar />} />
          <Route path='/Calender' element={<CalenderWithSidebar />} />
          <Route path='/Calanderwork' element={<CalanderworkWithSidebar />} />
          <Route path='/Readmore' element={<ReadmoreWithSidebar />} />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

function PrivateRoute({ component }) {
  const isAuthenticated = true;

  if (isAuthenticated) {
    return component;
  } else {
    return <Navigate to="/Login" replace />;
  }
}

function HomePageWithSidebar() {
  return (
    <Sidebar>
      <TopSearchBar />
      <HomePage />
    </Sidebar>
  );
}

function ClassRoomPageWithSidebar() {
  return (
    <Sidebar>
      <TopSearchBar />
      <ClassRoomPage />
    </Sidebar>
  );
}

function NestedTabsWithSidebar() {
  return (
    <Sidebar>
      <TopSearchBar />
      <NestedTabs />
    </Sidebar>
  );
}
function AttendenceWithSidebar() {
  return (
    <Sidebar>
      <TopSearchBar />
      <Attendence />
    </Sidebar>
  );
}
function TranscriptsWithSidebar(){
  return(
    <Sidebar>
      <TopSearchBar/>
      <Transcripts/>
    </Sidebar>
  )
}
function MyAssingmentSubWithSidebar() {
  return (
    <Sidebar>
      <TopSearchBar />
      <MyAssingmentSub />
    </Sidebar>
  );
}function RequestWithSidebar() {
  return (
    <Sidebar>
      <TopSearchBar />
      <Request />
    </Sidebar>
  );
}function MyProfileWithSidebar() {
  return (
    <Sidebar>
      <TopSearchBar />
      <MyProfile />
    </Sidebar>
  );
}function SettingWithSidebar() {
  return (
    <Sidebar>
      <TopSearchBar />
      <Setting />
    </Sidebar>
  );
}function CalculatorPageWithSidebar() {
  return (
    <Sidebar>
      <TopSearchBar />
      <CalculatorPage />
    </Sidebar>
  );
}function AssigmentWithSidebar() {
  return (
    <Sidebar>
      <TopSearchBar />
      <Assigment />
    </Sidebar>
  );
}
function MyAppAccessWithSidebar() {
  return (
    <Sidebar>
      <TopSearchBar />
      <MyAppAccess />
    </Sidebar>
  );
}

function CalenderWithSidebar() {
  return (
    <Sidebar>
      <TopSearchBar />
      <Calender />
    </Sidebar>
  );
}
function CalanderworkWithSidebar() {
  return (
    <Sidebar>
      <TopSearchBar />
      <Calanderwork />
    </Sidebar>
  );
}
function ReadmoreWithSidebar() {
  return (
    <Sidebar>
      <TopSearchBar />
      <Readmore />
    </Sidebar>
  );
}
export default App;
