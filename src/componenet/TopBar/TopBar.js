import React from "react";
import Search from "@mui/icons-material/Search";
// import Person from "@mui/icons-material/Person";
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import Button from '@mui/material/Button';
import Chat from "@mui/icons-material/Chat";
import Notification from "@mui/icons-material/Notifications";
import "./TopBar.scss";
import "./offCanvas.scss";
import Profile from "../../assests/kd.png"
import GroupsIcon from '@mui/icons-material/Groups';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import DescriptionIcon from '@mui/icons-material/Description';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import BloodtypeIcon from '@mui/icons-material/Bloodtype';
import SettingsIcon from '@mui/icons-material/Settings';
import LanguageIcon from '@mui/icons-material/Language';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import InfoIcon from '@mui/icons-material/Info';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import CoPresentIcon from '@mui/icons-material/CoPresent';
import HomeIcon from '@mui/icons-material/Home';
import logo from "/home/kdansari/WOW/social/src/assests/logo.png";
import { NavLink } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import { useSelector } from "react-redux";

const TopBar = () => {
  const user = useSelector(state=>state.login.user)

  return (
    <div className="topBarContainer py-5">
      <div className="topBarLeft">
      <div className="hamburger d-flex ">
      <MenuIcon className="hamburgerIcon"/>
      </div>
        <span className="logo">
          <img className="logo1" src={logo} alt="logo" />
        </span>
      </div>
      <div className="topBarCenter">
        <div className="searchBar">
          <Search className="searchIcon" />
          <input className="searchInput" placeholder="search here..." />
        </div>
      </div>
      <div className="topBarRight">
        <ul className="topBarRightWrap" >
          <li className="topBarlinks">
            <a href="/">Home</a>
          </li>
          <li className="topBarlinks">
            <a href="/">Timeline</a>
          </li>
        </ul>
      </div>
      <div className="topBarIcons">
        <div className="iconWrappers">
        <div className="topbarIconItem">
        <HomeIcon className="homeIcon"/>
        </div>
        <div className="topbarIconItem">
          <Chat className="profileIcons" />
          <span className="notificationBadge">1</span>
        </div>
        <div className="topbarIconItem">
          <Notification className="profileIcons" />
          <span className="notificationBadge">1</span>
        </div>
        <div className="topbarIconItem">
          <PersonAddIcon className="profileIcons" />
          <span className="notificationBadge">12</span>

        </div>
        </div>
        <div className="profileSection">
          <img className="profile-pic" src={Profile} alt="logo"  type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasRight"
            aria-controls="offcanvasRight" />
            {/* 
          <button
            className="btn btn-primary"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasRight"
            aria-controls="offcanvasRight"
          >
            Toggle right offcanvas
          </button> */}

          <div
            className="offcanvas offcanvas-end"
            tabindex="-1"
            id="offcanvasRight"
            aria-labelledby="offcanvasRightLabel"
          >
            <div className="offcanvas-header">
             <img className="profilePicOffCanvas" src={Profile} alt="logo"/>
              
              <h5 className="offcanvas-title" id="offcanvasRightLabel">
                {user.name}
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <div className="profileList">
              <NavLink className="profilelistWrap text-decoration-none d-flex" to="/MyPost">
                <CoPresentIcon className="profileIcons" />
                <span> My post</span>
                </NavLink>
                <div className="profilelistWrap">
                <Chat className="profileIcons" />
                <span> Messages</span>
                </div>
                <div className="profilelistWrap">
                <GroupsIcon className="profileIcons" />
                <span> Group</span>
                </div>
                <div className="profilelistWrap">
                <PlayCircleIcon className="profileIcons" />
                <span> Video</span>
                </div>
                
                <div className="profilelistWrap">
                <AccessTimeIcon className="profileIcons" />
                <span> Memories</span>
                </div>
               
                <div className="profilelistWrap">
                <SettingsIcon className="profileIcons" />
                <span> Setting</span>
                </div>
                <div className="profilelistWrap">
                <LanguageIcon className="profileIcons" />
                <span> Language</span>
                </div>
                <div className="profilelistWrap">
                <QuestionMarkIcon className="profileIcons" />
                <span> Help</span>
                </div>
                <div className="profilelistWrap">
                <InfoIcon className="profileIcons" />
                <span> About</span>
                </div>
                <div className="profilelistWrap">
                <ReportProblemIcon className="profileIcons" />
                <span> Report a problem</span>
                </div>
                <Button className='mx-3 mt-2' onClick={()=>{
                  localStorage.removeItem('token')    
                  window.location.reload()
                }} variant="outlined">Log out</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
     
    </div>
  );
};

export default TopBar;
