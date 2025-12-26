import robotPng from "../assets/robot-assistant.png";
import userPng from "../assets/user.png";
import "./Message.css";

export default function Message({ message, sender }) {
  return (
    <div className={sender === "user" ? "messageUser" : "messageRobot"}>
      {sender === "robot" && (
        <img src={robotPng} alt="profile" className="profilUser" />
      )}

      <div className="responseText">
        <p>{message}</p>
      </div>

      {sender === "user" && (
        <img src={userPng} alt="profile" className="profilUser" />
      )}
    </div>
  );
}
