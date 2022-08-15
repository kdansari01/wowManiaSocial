import "./share.scss"
import Img from "../../assests/kd.png"
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import LabelIcon from '@mui/icons-material/Label';
import PlaceIcon from '@mui/icons-material/Place';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';


const Share = () => {
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img src={Img} alt="" className="shareProfileImg"/>
          <input type="text" className="shareInpt" placeholder="whats your mind today........."/>

        </div>
        <hr className="shareHrline"/>
        <div className="shareBottom">
          {/* <PermMediaIcon className="shareMedia"/> */}
          <IconButton color="primary" aria-label="upload picture" component="label">
         <input hidden accept="image/*" type="file" />
         <PhotoCamera className="shareMediaIcon" />
         </IconButton>
          <span className="shareMediaTxt">Photo & Video</span>
          <LabelIcon className="shareTag"/>
          <span className="shareTagTxt">Tag</span>
          <PlaceIcon className="shareLocationIcon"/>
          <span className="shareLocation">Location</span>
          <EmojiEmotionsIcon className="shareEmojiIcon"/>
          <span className="shareFeelTxt">feelings</span>
          <Button className="shareButton" variant="contained" endIcon={<SendIcon />}/>

        </div>
      </div>
    </div>
  )
}

export default Share
