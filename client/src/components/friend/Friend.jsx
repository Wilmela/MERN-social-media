import './friend.css'

const Friend = ({user}) => {
  return (
    <li className="sideBarFriend">
      <img
        src={user.profilePicture}
        alt="profile"
        className="sideBarFriendImg"
      />
      <span className="sideBarFriendName">{user.username}</span>
    </li>
  );
}

export default Friend;