import { useState } from "react";
import ChatMessage from "./ChatMessage";
import ChatInput from "./ChatInput";
import "./HomePage.css";

export default function HomePage() {
  const [chatMessages, setChatMessages] = useState([
    { sender: "user", message: "halo", id: "1" },
    { sender: "robot", message: "halo juga", id: "2" },
    { sender: "user", message: "selamat pagi", id: "3" },
    { sender: "robot", message: "pagi", id: "4" },
  ]);

  return (
    <>
      <div className="container">
        <ChatMessage chatMessages={chatMessages} />

        <ChatInput
          chatMessages={chatMessages}
          setChatMessages={setChatMessages}
        />
      </div>
    </>
  );
}
