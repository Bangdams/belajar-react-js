import { useEffect, useRef } from "react";
import Message from "./Message";
import "./ChatMessage.css";

export default function ChatMessage({ chatMessages }) {
  const containerMessagesRef = useRef(null);

  useEffect(() => {
    const containerElem = containerMessagesRef.current;

    if (containerElem) {
      containerElem.scrollTop = containerElem.scrollHeight;
    }
  }, [chatMessages]);

  return (
    <div className={"chat-messages-container"} ref={containerMessagesRef}>
      {chatMessages.map((data) => {
        return (
          <Message sender={data.sender} message={data.message} key={data.id} />
        );
      })}
    </div>
  );
}
