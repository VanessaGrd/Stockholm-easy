import React, { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import styles from "./ChatBot.module.scss";
import logo from "../assets/logo2.svg";

export default function ChatBot() {
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);

  const handleSendMessage = () => {
    setChat((prevChat) => [...prevChat, { content: message, sender: "user" }]);
    setMessage("");

    setTimeout(() => {
      let botResponse = "Je ne comprends pas. Pouvez-vous répéter ?";
      const userMessage = message.toLowerCase();

      const pattern = /^(.+?)$/; // Regular expression to match the desired pattern
      const match = userMessage.match(pattern);

      if (match) {
        const word = match[1].trim(); // Extract the word from the user message
        // eslint-disable-next-line no-use-before-define
        botResponse = getTranslation(word); // Get the translation for the extracted word
      }

      setChat((prevChat) => [
        ...prevChat,
        { content: botResponse, sender: "bot" },
      ]);
    }, 1000);
  };

  const getTranslation = (word) => {
    // Ajoutez ici un dictionnaire avec les traductions en suédois pour les mots de la vie courante
    const translations = {
      bonjour: "hej",
      merci: "tack",
      oui: "ja",
      non: "nej",
      pardon: "ursäkta",
      maison: "hus",
      chat: "katt",
      chien: "hund",
      eau: "vatten",
      nourriture: "mat",
      voiture: "bil",
    };

    const translation = translations[word];
    if (translation) {
      return `En suédois, "${word}" se dit "${translation}".`;
    }
    return `Désolé, je ne connais pas la traduction de "${word}" en suédois.`;
  };

  return (
    <div className={styles.chatbot}>
      <div className={styles.header}>
        <div className={styles.logo}>
          <img src={logo} alt="logo" />
        </div>
      </div>
      <h1>Traducteur</h1>
      <div className={styles.chatbox}>
        {chat.map((messages, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <p key={index} className={messages.sender}>
            {messages.content}
          </p>
        ))}
      </div>
      <div>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button
          className={styles.buttonHandle}
          type="button"
          onClick={handleSendMessage}
        >
          Envoyer
        </button>
      </div>
    </div>
  );
}
