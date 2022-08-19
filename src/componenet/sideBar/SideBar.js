import "./sideBar.scss"
import RssFeedIcon from '@mui/icons-material/RssFeed';
import Chat from "@mui/icons-material/Chat";
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import GroupIcon from '@mui/icons-material/Group';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import WorkIcon from '@mui/icons-material/Work';
import EventIcon from '@mui/icons-material/Event';
import SchoolIcon from '@mui/icons-material/School';
import Button from '@mui/material/Button';

import Img from "../../assests/kd.png"






const SideBar = () => {
  return (
    <div className="containerBox">
    <div className="sideBar">
        <div className="sideBarWrapper">
            <ul className="sideBarlist">
                <li className="sideBarListItem">
                    <RssFeedIcon className="sideBarIcon"/>
                    <span className="sideBarText">Feed</span>
                </li>
                <li className="sideBarListItem">
                    <Chat className="sideBarIcon"/>
                    <span className="sideBarText">Chat</span>
                </li>
                <li className="sideBarListItem">
                    <PlayCircleIcon className="sideBarIcon"/>
                    <span className="sideBarText">Video</span>
                </li>
                <li className="sideBarListItem">
                    <GroupIcon className="sideBarIcon"/>
                    <span className="sideBarText">Group</span>
                </li>
                <li className="sideBarListItem">
                    <BookmarkIcon className="sideBarIcon"/>
                    <span className="sideBarText">Bookmarks</span>
                </li>
                <li className="sideBarListItem">
                    <HelpOutlineIcon className="sideBarIcon"/>
                    <span className="sideBarText">Question</span>
                </li>
                <li className="sideBarListItem">
                    <WorkIcon className="sideBarIcon"/>
                    <span className="sideBarText">Job</span>
                </li>
                <li className="sideBarListItem">
                    <EventIcon className="sideBarIcon"/>
                    <span className="sideBarText">Events</span>
                </li>
                <li className="sideBarListItem">
                    <SchoolIcon className="sideBarIcon"/>
                    <span className="sideBarText">Course</span>
                </li>
            </ul>
            <Button variant="outlined" className="sideBarShowBtn">Show more</Button>
            <hr className="sideBarhr"/>
            <ul className="sideBarFriendLists">
              <li className="sideBarFriend">
                <img src={Img} alt="friends" className="sideBarfriendImage"/>
                <span className="sideBarFriendName">KD Ansari</span>

              </li>
            </ul>
            <ul className="sideBarFriendLists">
              <li className="sideBarFriend">
                <img src={Img} alt="friends" className="sideBarfriendImage"/>
                <span className="sideBarFriendName">KD Ansari</span>

              </li>
            </ul>
            <ul className="sideBarFriendLists">
              <li className="sideBarFriend">
                <img src={Img} alt="friends" className="sideBarfriendImage"/>
                <span className="sideBarFriendName">KD Ansari</span>

              </li>
            </ul>
            <ul className="sideBarFriendLists">
              <li className="sideBarFriend">
                <img src={Img} alt="friends" className="sideBarfriendImage"/>
                <span className="sideBarFriendName">KD Ansari</span>

              </li>
            </ul>
            <ul className="sideBarFriendLists">
              <li className="sideBarFriend">
                <img src={Img} alt="friends" className="sideBarfriendImage"/>
                <span className="sideBarFriendName">KD Ansari</span>

              </li>
            </ul>
            <ul className="sideBarFriendLists">
              <li className="sideBarFriend">
                <img src={Img} alt="friends" className="sideBarfriendImage"/>
                <span className="sideBarFriendName">KD Ansari</span>

              </li>
            </ul>
            <ul className="sideBarFriendLists">
              <li className="sideBarFriend">
                <img src={Img} alt="friends" className="sideBarfriendImage"/>
                <span className="sideBarFriendName">KD Ansari</span>

              </li>
            </ul>
        </div>
     
    </div>
   
    </div>
  )
  
}

export default SideBar
