import "./right.css";
import { Users } from "../../dummyData";
import OnlineFriends from "../onlineFriends/OnlineFriends";

const RightBar = ({ profile }) => {
  const HomeRightBar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <img src="/assets/gift.png" alt="birthday" className="birthdayImg" />
          <span className="birthdayText">
            <b>Mack</b> and<b> 2 other friends</b> have a birthday today
          </span>
        </div>
        <img src="/assets/ad.png" alt="ad" className="rightBarAd " />
        <h4 className="rightBarTitle">Online Friends</h4>
        <ul className="rightBarFriendsList">
          {Users.map((user) => (
            <OnlineFriends key={user.id} user={user} />
          ))}
        </ul>
      </>
    );
  };
  const ProfileRightBar = () => {
    return (
      <>
        <h1 className="rightBarTitle">User information</h1>
        <div className="rightBarInfo">
          <div className="rightBarInfoItem">
            <span className="rightBarInfoKey">City: </span>
            <span className="rightBarInfoValue">Port-Harcourt</span>
          </div>
          <div className="rightBarInfoItem">
            <span className="rightBarInfoKey">From: </span>
            <span className="rightBarInfoValue">Omoku</span>
          </div>
          <div className="rightBarInfoItem">
            <span className="rightBarInfoKey">Relationship: </span>
            <span className="rightBarInfoValue">Married</span>
          </div>
        </div>
        <h1 className="rightBarTitle">User Friends</h1>
        <div className="rightBarFollowings">
          <div className="rightBarFollowing">
            <img src="assets/person/2.jpeg" alt="profile" className="rightBarFollowingImg" />
            <span className="rightBarFollowingName">Perl Jerry</span>
          </div>
          <div className="rightBarFollowing">
            <img src="assets/person/2.jpeg" alt="profile" className="rightBarFollowingImg" />
            <span className="rightBarFollowingName">Perl Jerry</span>
          </div>
          <div className="rightBarFollowing">
            <img src="assets/person/2.jpeg" alt="profile" className="rightBarFollowingImg" />
            <span className="rightBarFollowingName">Perl Jerry</span>
          </div>
          <div className="rightBarFollowing">
            <img src="assets/person/2.jpeg" alt="profile" className="rightBarFollowingImg" />
            <span className="rightBarFollowingName">Perl Jerry</span>
          </div>
          <div className="rightBarFollowing">
            <img src="assets/person/2.jpeg" alt="profile" className="rightBarFollowingImg" />
            <span className="rightBarFollowingName">Perl Jerry</span>
          </div>
          <div className="rightBarFollowing">
            <img src="assets/person/2.jpeg" alt="profile" className="rightBarFollowingImg" />
            <span className="rightBarFollowingName">Perl Jerry</span>
          </div>
        </div>
      </>
    );
  };

  return (
    <div className="rightBar">
      <div className="rightBarWrapper">
        {profile  ? <ProfileRightBar /> : <HomeRightBar/>}
      </div>
    </div>
  );
};

export default RightBar;
