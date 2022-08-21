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
import { customFetch } from "../../utils/customFetch";
import { setAllPost } from "../feed/action";
import { useDispatch , useSelector} from "react-redux";





const getFormattedTime = (time)=>{
  return moment(new Date(time)).startOf('minute').fromNow();  
}


const Post = ({id, title, image, createdAt, createdBy }) => {
  const dispatch = useDispatch()
  const [anchorEl, setAnchorEl] = useState(null);
  const user = useSelector(state=>state.login.user)
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDelete = async ()=>{
    handleClose()
    const data = await customFetch({
      method:'DELETE',
      url:`private/post?id=${id}`,
      isPrivate:true,
    })
    dispatch(setAllPost(data.remainingPosts))
  }

  console.log(user, createdBy)

  const options = [
    {name:"Share", onClick:handleClose},
    ...(user.id===createdBy.id ?  [{name:"Delete", onClick:handleDelete}] : []),
    {name:"Share", onClick:handleClose},
];

  
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
        {options.map(({ name, onClick}) => (
          <MenuItem key={name} onClick={onClick}>
            {name}
          </MenuItem>
        ))}
        </Menu>
      </div>
        </div>
        <div className="postCenter">
          <span className="postText mt-4 d-block">{title}</span>
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
