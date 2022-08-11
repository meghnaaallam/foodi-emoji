import "./styles.css";
import { useState } from "react";

const dictionary = {
  "🍉": "Watermelon",
  "🥑": "Avocado",
  "🥨": "Pretzel",
  "🥯": "Bagel",
  "🥞": "Pancakes",
  "🧇": "Waffle",
  "🥓": "Bacon",
  "🍔": "Hamburger",
  "🍟": "French Fries",
  "🍕": "Pizza",
  "🌭": "Hot Dog"
};

var emojisWeKnow = Object.keys(dictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");
  function emojiHandler(event) {
    var userInput = event.target.value;
    var meaning = dictionary[userInput];
    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = dictionary[emoji];
    setMeaning(meaning);
  }
  return (
    <div className="App">
      <h1>Foodi-emoji</h1>
      <label>
        please enter any emoji you like:
        <input type="text" name="name" onChange={emojiHandler} />
      </label>
      <div>
        <h2>{meaning} </h2>
      </div>
      <h3 style={{ color: "red" }}>emojis we know</h3>
      {emojisWeKnow.map(function (emoji) {
        return <span onClick={() => emojiClickHandler(emoji)}>{emoji}</span>;
      })}
    </div>
  );
}
