import "./myPost.scss";
import Profile from "../../assests/kd.png"
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CommentIcon from '@mui/icons-material/Comment';
import SendIcon from '@mui/icons-material/Send';
import BackgroundImg from "../../assests/background.jpg"
// import { customFetch } from "../../utils/customFetch";
// import { useEffect, useState } from "react";




const MyPost = () => {

  // const [posts, setPosts] = useState([]);
  // const [isLoading, setIsLoading] = useState(false)

  // const getPosts = async () => {
  //   try {
  //     setIsLoading(true)
  //     const post = await customFetch({
  //       url: "private/post",
  //       isPrivate: true,
  //     });
  //     setPosts(post.data);
  //   } catch {
  //     alert("Something went wrong");
  //   }finally{
  //     setIsLoading(false)
  //   }
  // };

  // useEffect(() => {
  //   getPosts();
  // }, []);



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
          <div className="myPostListSections">
           
             <div className="myPostItem">

              <div className="postTop">
                <div className="postTopLeft">

                  <img className="postUserImg" src={Profile} alt="profile" />
                  <span className="postUserName"></span>
                  <span className="postTime"></span>
                </div>
                <div className="postTopRight">
                  <MoreVertIcon className="postHamburger " />
                </div>
              </div>
              <div className="postCenter">
                <span className="postText">kdansari</span>
                <div className="postImgWrapper">
                {/* {isLoading && "loding..."}
            {posts.map((post)=>{
              <ul>
              <li> {post.title}</li>
              <li> {post.createdA}</li>

              </ul>
            })} */}
                  <img className="postImg" src={Profile}alt="post" />
                </div>
              </div>
              <div className="postBottom">
                <FavoriteBorderIcon className="postLikeHert" />
                <CommentIcon className="postComment" />
                <SendIcon className="postSend" />

                <div className="postLikePeople">32 like & 10 comment</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPost;
