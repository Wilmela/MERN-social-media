import "./topBar.css";
import { Search, Person, Chat, Notifications } from "@mui/icons-material";

const TopBar = () => {
  return (
    <div className="topBar">
      <div className="topBarLeft">
        <span className="logo">MERN-Social</span>
      </div>
      <div className="topBarCenter">
        <Search className="topBarSearch" />
        <input
          placeholder="Find a friend, post or video"
          className="topBarInput"
        />
      </div>
      <div className="topBarRight">
        <div className="topBarLinks">
          <div className="topBarLinkItem">Homepage</div>
          <div className="topBarLinkItem">Timeline</div>
        </div>
        <div className="topBarRightIcons">
          <div className="topBarRightIcon">
            <Person />
            <div className="topBarRightCounter">1</div>
          </div>
          <div className="topBarRightIcon">
            <Chat />
            <div className="topBarRightCounter">3</div>
          </div>
          <div className="topBarRightIcon">
            <Notifications />
            <div className="topBarRightCounter">1</div>
          </div>
        </div>
        <img src="/assets/person/1.jpeg" alt="" className="topBarProfileImg" />
      </div>
    </div>
  );
};

export default TopBar;
