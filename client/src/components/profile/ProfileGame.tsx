import { Link } from "react-router-dom";
import "./ProfileGame.css";
import Statistics from "./Statistics";
function ProfileGame() {
  return (
    <div className="profile-game">
      {/* profile game user  */}
      <div className="profile-game-user">
        <div className="profile-user-avatar">
          <img src="https://i.pravatar.cc/300" alt="avatar" />
        </div>
        <div className="profile-game-user-info">
          <div className="profile-user-info-username">
            <span>username</span>
          </div>
          <div className="profile-user-info-links">
            <Link className="link-profile" to={"/friends"}>
              Friends
            </Link>
          </div>
          <div></div>
        </div>
      </div>
      {/* profile game description */}
      <div className="profile-game-description">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
          repellendus incidunt debitis sapiente, voluptatum nulla ipsum
        </p>
      </div>
      {/* profile game info */}
      <div className="profile-game-user-game-info">
        <div className="profile-user-game-info-1">
          <span>partidas jugadas</span> <span>190</span>
        </div>
        <div className="profile-user-game-info-2">
          <div>
            <span className="cyan">partidas ganadas</span>
            <span className="cyan">50</span>
          </div>
          <div>
            <span className="red">partidas perdidas</span>
            <span className="red">50</span>
          </div>
        </div>
      </div>
      <Statistics />
    </div>
  );
}

export default ProfileGame;
