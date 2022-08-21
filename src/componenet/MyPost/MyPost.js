import "./myPost.scss";
import Profile from "../../assests/kd.png"
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CommentIcon from '@mui/icons-material/Comment';
import SendIcon from '@mui/icons-material/Send';
import BackgroundImg from "../../assests/background.jpg"
import Feed from "../feed/Feed";
import { customFetch } from "../../utils/customFetch";
import { useEffect } from "react";
// import { customFetch } from "../../utils/customFetch";
// import { useEffect, useState } from "react";




const MyPost = () => {

  // getUser
  useEffect(()=>{
    async function getUser (){
      const user = await customFetch({
        url: `private/user/getUser`,
        isPrivate: true,
      });
      console.log(user)
    }
    getUser()
    
  }, [])


  return (
    <div className="myPost">
      <div className="myPostWrapper">
        <div className="myPostBody">

          <div className="myPostTopBar">
            <div className="myPostTopBarSection">
                <div className="backgroundImg">
                    <img src={BackgroundImg} alt="/" className="profilebackgroundImg"/>
                </div>
                <div className="myPostTopBarProfile">
                    <div className="myPostTopBarProfileBG">
                    <img src={Profile} alt="/" className="myPostTopBarProfileImg"/>
                    <div className="myPostTopBarUserName">KD Ansari</div>
                    <div className="myPostTopBarProfileAbout">
                    {/* “Think in the morning. Act in the noon. Eat in the evening. Sleep in the night.” */}

                    </div>
                    </div>
                </div>
            </div>
          </div>
          <div className="myPostLeftBar">
            

          </div>
          <Feed feedName={'post/myPost'}/>
        </div>
      </div>
    </div>
  );
};

export default MyPost;
