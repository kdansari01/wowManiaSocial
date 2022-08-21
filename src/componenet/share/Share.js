import "./share.scss";

import Img from "../../assests/kd.png";
import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import PermMediaIcon from "@mui/icons-material/PermMedia";

import SendIcon from "@mui/icons-material/Send";
import { useEffect, useState , useRef} from "react";
import { customFetch, METHODS } from "../../utils/customFetch";
import { useUploadImage } from "../../Hooks/useImageUploader";
import { Fab } from "@mui/material";
import { useDispatch } from "react-redux";
import { setPost } from "../feed/action";

const Share = () => {
  const [title, setTitle] = useState("");
  const [previewUrl, setPreview] = useState(null)
  const { handleUpload, url, loading, percentage } = useUploadImage();
  const closeRef= useRef(null)
  const dispatch = useDispatch()
  const preview = previewUrl ? URL.createObjectURL(previewUrl) : null
  const handleFile = (e) => {
    const file = e.target.files[0];
    // handleUpload({ file });
    setPreview(file)

  };
  const savePost = async(title, image)=>{
  const data =  await customFetch({
      url: "private/post",
      method: METHODS.POST,
      isPrivate: true,
      body: {
        title,
        ...(image && { image }),
      },
    });
    dispatch(setPost(data))
    closeRef.current.click()
  }

  console.log({ loading, url, percentage });
  useEffect(() => {
    if (!loading && url && percentage===100) {
      savePost(title, url)
    }
  }, [loading, percentage]);

  

  const saveNewPost = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (title) {
      if(previewUrl){
       return handleUpload({file : previewUrl})
      }
     return savePost(title)
    }
  };

  return (
    <form className="share" onSubmit={saveNewPost}>
      <div className="shareWrapper">
        <div className="shareTop">
          <img src={Img} alt="" className="shareProfileImg" />
          <input
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            className="shareInpt"
            placeholder="whats your mind today........."
          />
        </div>
        <hr className="shareHrline" />
        <div className="shareBottom">
          {/* <IconButton
            aria-label="upload picture"
            component="label"
          >
            <PhotoCamera className="shareMediaIcon" />
            <input hidden accept="file" type="file" onChange={handleFile} />
            Upload media
          </IconButton>  */}
          <div>
            <button
              type="button"
              className="btn btn-modal "
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop"
            >
              <div className="picAndVidUpl">
                <IconButton aria-label="upload picture" component="label">
                  <PhotoCamera className="shareMediaIcon" />
                </IconButton>
                <span className="shareMediaTxt">Photo & Video</span>
              </div>
            </button>

            <div
              className="modal fade modal-size"
              id="staticBackdrop"
              data-bs-backdrop="static"
              data-bs-keyboard="false"
              tabindex="-1"
              aria-labelledby="staticBackdropLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <img src={Img} alt="" className="shareProfileImg" />

                    <span className="modal-title" id="staticBackdropLabel">
                      Share your mood...
                    </span>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                      ref={closeRef}
                    ></button>
                  </div>
                  <div className="modal-body">
                    <div className="modalInputSec">
                      <input
                        type="text"
                        className="modalInput"
                        placeholder="Type here somethings........"
                        onChange={(e) => setTitle(e.target.value)}
                      />
                      <hr />
                    </div>
                    <div className="modalIconsWrapper">
                      {!preview &&  <div className="modalUploadingItems">
                        <Fab component="span" className="button">
                          <IconButton
                            color="primary"
                            aria-label="upload picture"
                            component="label"
                          >
                            <input
                              hidden
                              accept="file"
                              type="file"
                              onChange={handleFile}
                              className="mediaUpload"
                            />
                            <PermMediaIcon className="shareMediaIcon" />
                          </IconButton>
                        </Fab>
                        <span className="text-danger modalTxt m-3">
                          Photo & Video{" "}
                        </span>
                      </div>}
                      {loading && <div class="progress">
                        <div className="progress-bar" role="progressbar" style={{width: `${percentage}%`}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>  }
                      
                    </div>
                   {preview &&  <div className="row mt-3 col-6 preview-container">
                      <img src={preview} className='h-50'/>
                      <span onClick={()=>setPreview(null)}>X</span>
                    </div>}
                    <div className="shareButton w-23 mt-3">
                      <button type='button' onClick={saveNewPost} className="shareButton" >
                        <SendIcon className="sendIcon w-100" />
                        </button>                   
                       </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <button type="submit" onClick={saveNewPost} className="shareButton outside">
            <SendIcon className="sendIcon m-1" />
          </button> */}
        </div>
      </div>
    </form>
  );
};

export default Share;
