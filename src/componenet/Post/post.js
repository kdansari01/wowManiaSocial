import "./post.scss"
import Profile from "../../assests/kd.png"
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CommentIcon from '@mui/icons-material/Comment';
import SendIcon from '@mui/icons-material/Send';


const Post = ({ title, image, createdAt, createdBy }) => {
  
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img className="postUserImg" src={Profile} alt="profile"/>
            <span className="postUserName">{createdBy.name}</span>
            <span className="postTime">{createdAt}</span>
          </div>
          <div className="postTopRight">
            <MoreVertIcon className="postHamburger"/>
          </div>
          
        </div>
        <div className="postCenter">
          <span className="postText">ksjdjk skjdksjdk ksjdks ksdjks dkjskdjk kskdks skdjsk dksjdk skdjksjd ksjdkj ksdksdhfk sdkf shkhkf sdhkh</span>
          <div className="postImgWrapper">
          <img className="postImg" src={image} alt="post"/>

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
