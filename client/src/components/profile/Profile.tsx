import { Link } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import { AiFillSave } from "react-icons/ai";
function Profile() {
  let isConfig = window.location.pathname === "/profile-config";
  console.log(isConfig);

  return (
    <div className="profile-section-component">
      <div className="profile">
        <div className="profile-user">
          <div className="profile-user-avatar">
            <img src="https://i.pravatar.cc/300" alt="avatar" />
          </div>
          <div className="profile-user-info">
            <div className="profile-user-info-username">
              {!isConfig ? (
                <span>username</span>
              ) : (
                <input
                  className="input-profile-user-config"
                  value={"username"}
                />
              )}
            </div>
            <div className="profile-user-info-links">
              {isConfig ? (
                <span className="link-profile-span">Friends</span>
              ) : (
                <Link className="link-profile" to={"/friends"}>
                  Friends
                </Link>
              )}
            </div>
            <div>
              {!isConfig ? (
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
                  repellendus incidunt debitis sapiente, voluptatum nulla ipsum
                </p>
              ) : (
                <textarea
                  className="text-area-profile-config"
                  name=""
                  value={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
                  repellendus incidunt debitis sapiente, voluptatum nulla ipsum
                `}
                  id="hola"
                />
              )}
            </div>
          </div>
          <Link
            to={isConfig ? "/p/username" : "/profile-config"}
            className="profile-user-config"
          >
            <div className="profile-user-config-icon">
              {isConfig ? (
                <AiFillSave size={30} color="#7ff" />
              ) : (
                <FiSettings size={30} color="#faf" />
              )}
            </div>
          </Link>
        </div>
      </div>
      <div className="profile-user-game-info">
        <div className="profile-user-game-info-1">
          <span>partidas jugadas</span> <span>190</span>
        </div>
        <div className="profile-user-game-info-2">
          <div>
            <span>partidas ganadas</span>
            <span>50</span>
          </div>
          <div>
            <span>partidas perdidas</span>
            <span>50</span>
          </div>
        </div>
      </div>
      <div className="profile-user-game-statics"></div>
    </div>
  );
}

export default Profile;