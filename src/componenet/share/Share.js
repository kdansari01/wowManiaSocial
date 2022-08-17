import "./share.scss";

import Img from "../../assests/kd.png";
import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import LabelIcon from "@mui/icons-material/Label";
import PlaceIcon from "@mui/icons-material/Place";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import AddPhotoAlternateIcon from "@mui/icons-material/EmojiEmotions";
import PermMediaIcon from "@mui/icons-material/PermMedia";

import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import { useEffect, useState } from "react";
import { customFetch, METHODS } from "../../utils/customFetch";
import { useUploadImage } from "../../Hooks/useImageUploader";
import { Fab, Icon } from "@mui/material";

const Share = () => {
  const [title, setTitle] = useState();
  const [image, setImage] = useState();
  const { handleUpload, url, loading } = useUploadImage();

  const handleFile = (e) => {
    const file = e.target.files[0];
    handleUpload({ file });
  };

  console.log({ loading, url });
  useEffect(() => {
    if (!loading && url) {
      setImage(url);
    }
  }, [loading, url]);

  const saveNewPost = async (e) => {
    e.preventDefault();
    console.log(title, image);
    if (title && image) {
      const data = await customFetch({
        url: "private/post",
        method: METHODS.POST,
        isPrivate: true,
        body: {
          title,
          image,
        },
      });
      console.log(data);
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
              <IconButton aria-label="upload picture" component="label">
                <PhotoCamera className="shareMediaIcon" />
              </IconButton>
              Photo & Video
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
                    ></button>
                  </div>
                  <form className="modal-body">
                    <div className="modalInputSec">
                      <input
                        type="text"
                        className="modalInput"
                        placeholder="Type here somethings........"
                      />
                      <hr />
                    </div>
                    <div className="modalUploadingItems">
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
                      <span className="text-danger m-3"> Photo & Video </span>
                    </div>

                    <div className="modalUploadingItems">
                      <Fab component="span" className="button">
                        <LabelIcon className="shareMediaIcon text-primary" />
                      </Fab>
                      <span className="text-primary m-3"> Tag friend </span>
                    </div>
                    <div className="modalUploadingItems">
                      <Fab component="span" className="button">
                        <PlaceIcon className="shareMediaIcon text-success" />
                      </Fab>
                      <span className="text-success m-3 my-2"> Location </span>
                    </div>

                    <div className="modalUploadingItems">
                      <Fab component="span" className="button">
                        <EmojiEmotionsIcon className="shareMediaIcon text-warning" />
                      </Fab>
                      <span className="text-danger m-3 mt-2"> Emoji </span>
                    </div>
                    <div className="shareButton w-23">
                    <button
                      type="submit"
                      className="shareButton w-23"
                    ><SendIcon className="sendIcon m-1"/></button>
                    </div>

                  </form>
                </div>
              </div>
            </div>
          </div>

          <LabelIcon className="shareTag" />
          <span className="shareTagTxt">Tag</span>
          <PlaceIcon className="shareLocationIcon" />
          <span className="shareLocation">Location</span>
          <EmojiEmotionsIcon className="shareEmojiIcon" />
          <span className="shareFeelTxt">feelings</span>
        </div>
      </div>
    </form>
  );
};

export default Share;
