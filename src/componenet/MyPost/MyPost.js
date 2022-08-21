import "./myPost.scss";
import Profile from "../../assests/kd.png"

import BackgroundImg from "../../assests/background.jpg"
import Feed from "../feed/Feed";
import { useSelector } from "react-redux";




const MyPost = () => {

 const user = useSelector(state=>state.login.user)
  

  return (
    <div className="myPost row">
      <div className="myPostWrapper col-12">
        <div className="myPostBody ">

          <div className="myPostTopBar">
            <div className="myPostTopBarSection">
                <div className="backgroundImg">
                    <img src={BackgroundImg} alt="/" className="profilebackgroundImg"/>
                </div>


                <div className="row col-12 justify-content-center">
                    <div className="profile-card col-lg-6 col-12 col-md-6 d-flex justify-content-center">
                      <div className="d-flex align-items-center flex-column">
                      <img src={Profile} alt="/" className="profile-image"/>
                      <span className="mt-4">Name : {user.name}</span>
                      <span className="mt-2">Email : {user.email}</span>
                      </div>
                    </div>
                </div>

            </div>
          </div>
          {/* <div className="myPostLeftBar">
          </div> */}
          <div className="d-flex col-12 justify-content-center">
            <div className="col-12 col-md-12 col-lg-6">
              <Feed feedName={'post/myPost'}/>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPost;
