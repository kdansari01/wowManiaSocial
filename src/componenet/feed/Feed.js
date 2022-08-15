import { useEffect, useState } from "react";
import { customFetch } from "../../utils/customFetch";
import Post from "../Post/post";
import Share from "../share/Share";
import "./feed.scss";

const Feed = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false)

  const getPosts = async () => {
    try {
      setIsLoading(true)
      const post = await customFetch({
        url: "private/post",
        isPrivate: true,
      });
      setPosts(post.data);
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

export default Feed;
