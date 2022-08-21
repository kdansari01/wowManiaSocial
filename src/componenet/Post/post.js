import "./post.scss"
import Profile from "../../assests/kd.png"
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CommentIcon from '@mui/icons-material/Comment';
import SendIcon from '@mui/icons-material/Send';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useState } from "react";
import moment from 'moment'


const options = [
  'Save post',
  'Share',
  'Delete post',
  'Unfollow',
  'Report the post',
];


const getFormattedTime = (time)=>{
  return moment(new Date(time)).startOf('minute').fromNow();  
}


const Post = ({ title, image, createdAt, createdBy }) => {

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img className="postUserImg" src={Profile} alt="profile"/>
            <span className="postUserName">{createdBy.name}</span>
            <span className="postTime">{getFormattedTime(createdAt)}</span>
          </div>
          <div className="postTopRight">
          
       
       
        <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? 'long-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon className="postHamburger" />
      </IconButton>
      <Menu
        direction='left'
        id="long-menu"
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: "ITEM_HEIGHT * 4.5",
            width: '20ch',
          
            
          },
        }}
      >
        {options.map((option) => (
          <MenuItem key={option} selected={option === 'Pyxis'} onClick={handleClose}>
            {option}
          </MenuItem>
        ))}
        </Menu>
      </div>
        </div>
        <div className="postCenter">
          <span className="postText">{title}</span>
          <div className="postImgWrapper">
            {image && <img className="postImg" src={image} alt="post"/>}
      
          

          </div>
        </div>
        <div className="postBottom">
          <FavoriteBorderIcon className="postLikeHert"/>
          <CommentIcon className="postComment"/>
          <SendIcon className="postSend"/>

          <div className="postLikePeople">32 like & 10 comment</div>
        </div>
      </div>
      
    </div>
  )
}

export default Post
