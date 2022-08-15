import Post from "../Post/post"
import Share from "../share/Share"
import "./feed.scss"


const Feed = () => {
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share/>
        <Post/>
      </div>
    </div>
  )
}

export default Feed
