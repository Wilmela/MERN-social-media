import './onlineFriends.css'

const OnlineFriends = ({user}) => {
  return (
    <li className="rightBarFriend">
      <div className="rightBarProfileImgContainer">
        <img
          src={user.profilePicture}
          alt="profile"
          className="rightBarProfileImg"
        />
        <span className="rightBarOnline"></span>
      </div>
      <span className="rightBarUserName">{user.username}</span>
    </li>
  );
}

export default OnlineFriends