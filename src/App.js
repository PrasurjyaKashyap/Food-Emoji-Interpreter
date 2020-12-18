import React, { useState } from "react";
import "./styles.css";

//var username = prompt("Give me your name");
var emojiDictionary = {
  "🥐": "Croissants",
  "🥒": "Cucumber",
  "🧆": "Falafel",
  "🍛": "Curry Rice",
  "🥫": "Canned Food",
  "🥡": "Takeout Box",
  "🍜": "Bowl of Noodles",
  "🍢": "Oden",
  "🦞": "Lobster",
  "🦑": "Squid"
};
var emojisWeKnow = Object.keys(emojiDictionary);
export default function App() {
  var [meaning, setMeaning] = useState("");

  function emojiInputHandler() {
    //processing
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning =
        " We don't have this in our database or you have not provided an input";
    }
    setMeaning(meaning); //react call to show output
  }
  function emojiClickHandler(emoji) {
    //processing
    console.log(emoji);
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning); // react call to show output
  }

  return (
    <div className="App" style={{ backgroundColor: "lightGray" }}>
      <h1>Food Emoji Interpretor </h1>
      <h2>Input a Food Emoji to know it's meaning </h2>
      <input onChange={emojiInputHandler}></input>
      <div> {meaning} </div>

      {/* <h1>Meaning</h1> Output by react using useState */}
      <h3> Food Emojis in our database </h3>
      {emojisWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "1 rem", padding: "0.5 rem", cursor: "pointer" }}
            key={emoji}
          >
            {" "}
            {emoji}{" "}
          </span>
        );
      })}
    </div>
  );
}
