import "./share.scss"
import Img from "../../assests/kd.png"
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import LabelIcon from '@mui/icons-material/Label';
import PlaceIcon from '@mui/icons-material/Place';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import { useState } from "react";
import { customFetch, METHODS } from "../../utils/customFetch";


const Share = () => {
  const [title, setTitle] = useState()
  const [image, setImage] = useState()

  const handleFile = (e)=>{
    const file = e.target.files[0]
    const url = URL.createObjectURL(file)
    setImage(url)
  } 

  const saveNewPost = async(e)=>{
    e.preventDefault()
    console.log(title, image)
    if(title && image){
      const data = await customFetch({
        url:'private/post',
        method:METHODS.POST,
        isPrivate:true,
        body : {
          title,
          image,
        }
      })
      console.log(data)
    }
  }

  return (
    <form className="share" onSubmit={saveNewPost}>
      <div className="shareWrapper">
        <div className="shareTop">
          <img src={Img} alt="" className="shareProfileImg"/>
          <input onChange={(e)=>setTitle(e.target.value)} type="text" className="shareInpt" placeholder="whats your mind today........."/>

        </div>
        <hr className="shareHrline"/>
        <div className="shareBottom">
          {/* <PermMediaIcon className="shareMedia"/> */}
          <IconButton color="primary" aria-label="upload picture" component="label">
         <input hidden accept="image" type="file" onChange={handleFile}/>
         <PhotoCamera className="shareMediaIcon" />
         </IconButton>
          <span className="shareMediaTxt">Photo & Video</span>
          <LabelIcon className="shareTag"/>
          <span className="shareTagTxt">Tag</span>
          <PlaceIcon className="shareLocationIcon"/>
          <span className="shareLocation">Location</span>
          <EmojiEmotionsIcon className="shareEmojiIcon"/>
          <span className="shareFeelTxt">feelings</span>
          <Button type='submit'  className="shareButton" variant="contained" endIcon={<SendIcon />}/>
        </div>
      </div>
    </form>
  )
}

export default Share
