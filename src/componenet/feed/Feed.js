import { useEffect, useState } from "react";
import { customFetch } from "../../utils/customFetch";
import {useDispatch, useSelector} from 'react-redux'
import Post from "../Post/post";
import Share from "../share/Share";
import "./feed.scss";
import { setAllPost } from "./action";

const Feed = ({feedName }) => {
  const [isLoading, setIsLoading] = useState(false)
  const dispatch = useDispatch();
  const posts = useSelector(state=>state.post.posts);

  const getPosts = async () => {
    try {
      setIsLoading(true)
      const post = await customFetch({
        url: `private/${feedName}`,
        isPrivate: true,
      });
      dispatch(setAllPost(post.data))
    } catch {
      alert("Something went wrong");
    }finally{
      setIsLoading(false)
    }
  };

  useEffect(() => {
    getPosts();
  }, []);


  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        {isLoading && "Loading..."}
        {posts.map(post=>(
          <Post key={post.id} {...post} />
        ))}
      </div>
    </div>
  );
};

Feed.defaultProps = {
  feedName: "post",
}


export default Feed;
