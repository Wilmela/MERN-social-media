import { useState} from "react";
import "./post.css";
import { MoreVert } from "@mui/icons-material";

import { Users } from "../../dummyData";

const Post = ({ post }) => {
  const [likes, setLikes] = useState(post.like);
  const [liked, setLiked] = useState(false);

  
  const handleLike = () => {
    setLiked((prev) => !prev);

    liked ? setLikes((prev) => prev - 1) : setLikes((prev) => prev + 1);
  };

  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              src={
                Users.filter((user) => user.id === post.userId)[0]
                  .profilePicture
              }
              alt="profile"
              className="postProfileImg"
            />
            <span className="postUserName">
              {Users.filter((user) => user.id === post.userId)[0].username}
            </span>
            <span className="postDate">{post.date}</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post?.desc}</span>
          <img src={post.photo} alt="post" className="postImg" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img
              onClick={handleLike}
              src="/assets/like.png"
              alt="like"
              className="likeIcon"
            />
            <img src="/assets/heart.png" alt="like" className="likeIcon" />
            <span className="postLikeCounter">{likes} People like it</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{post?.comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
