import { useState } from "react";
import { Chatbot } from "supersimpledev";
import "./ChatInput.css";

export default function ChatInput({ chatMessages, setChatMessages }) {
  const [inputText, setInputText] = useState("");
  const [loading, setLoading] = useState(false);

  function isLoading(message) {
    setChatMessages([
      ...message,
      { sender: "robot", message: "loading..", id: crypto.randomUUID() },
    ]);

    setLoading(true);
  }

  async function sendMessage() {
    const message = [
      ...chatMessages,
      { sender: "user", message: inputText, id: crypto.randomUUID() },
    ];

    setChatMessages(message);
    setInputText("");
    isLoading(message);

    const response = await Chatbot.getResponseAsync(inputText);

    setChatMessages([
      ...message,
      { sender: "robot", message: response, id: crypto.randomUUID() },
    ]);

    setLoading(false);
  }

  function changeInput(event) {
    setInputText(event.target.value);
  }

  function keyDown(e) {
    {
      e.key == "Enter" && !loading && inputText != "" && sendMessage();
    }

    {
      e.key == "Escape" && setInputText("");
    }
  }

  return (
    <>
      <div className="inputUserContainer">
        <input
          type="text"
          className="inputUser"
          placeholder="Masukan Pesan Disini"
          onChange={changeInput}
          value={inputText}
          onKeyDown={keyDown}
        />
        <button onClick={sendMessage} disabled={inputText === "" || loading}>
          Kirim
        </button>
      </div>
    </>
  );
}
