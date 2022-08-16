import React, { useState } from "react";

const InputBox = () => {
  const [userEncText, setUserEncText] = useState("");
  const [encText, setEncText] = useState("");

  const [userDecText, setUserDecText] = useState("");
  const [decText, setDecText] = useState("");

  const updateUserEncText = (event) => {
    const userEncInput = event.target.value;
    setUserEncText(userEncInput);
  };

  const updateUserDecText = (event) => {
    const userDecInput = event.target.value;
    setUserDecText(userDecInput);
  };

  const encryptText = (event) => {
    const enc = {
      a: "e",
      e: "i",
      i: "o",
      o: "u",
      u: "a",
      b: "d",
      c: "n",
      d: "p",
      f: "t",
      g: "q",
      h: "k",
      j: "y",
      k: "h",
      l: "r",
      m: "z",
      n: "c",
      p: "b",
      q: "g",
      r: "l",
      s: "x",
      t: "f",
      v: "w",
      w: "v",
      x: "s",
      y: "j",
      z: "m",
      A: "E",
      E: "I",
      I: "O",
      O: "U",
      U: "A",
      B: "D",
      C: "N",
      D: "P",
      F: "T",
      G: "Q",
      H: "K",
      J: "Y",
      K: "H",
      L: "R",
      M: "Z",
      N: "C",
      P: "B",
      Q: "G",
      R: "L",
      S: "X",
      T: "F",
      V: "W",
      W: "V",
      X: "S",
      Y: "J",
      Z: "M",
      0: 6,
      1: 9,
      2: 5,
      3: 8,
      4: 7,
      5: 2,
      6: 0,
      7: 4,
      8: 3,
      9: 1,
      "!": "/",
      "@": "&",
      _: "-",
      "-": "_",
      "&": "@",
      "+": "*",
      "*": "+",
      "/": "!",
      "%": "#",
      "#": "%",
      ">": ":",
      ":": "<",
      "<": ";",
      ";": ".",
      ".": ">",
      ",": "`",
      "`": "?",
      "?": ",",
      "=": "|",
      "|": "=",
    };
    let encText = userEncText.replace(
      /[a-z|A-Z|0-9|!|@|#|%|&|*|_|-|+|<|>|.|:|;|,|?|`]/g,
      function (m) {
        return enc[m];
      }
    );
    setEncText(encText);
    setUserDecText(encText);
  };

  const decryptText = (event) => {
    const enc = {
      e: "a",
      i: "e",
      o: "i",
      u: "o",
      a: "u",
      d: "b",
      n: "c",
      p: "d",
      t: "f",
      q: "g",
      k: "h",
      y: "j",
      h: "k",
      r: "l",
      z: "m",
      c: "n",
      b: "p",
      g: "q",
      l: "r",
      x: "s",
      f: "t",
      w: "v",
      v: "w",
      s: "x",
      j: "y",
      m: "z",
      E: "A",
      I: "E",
      O: "I",
      U: "O",
      A: "U",
      D: "B",
      N: "C",
      P: "D",
      T: "F",
      Q: "G",
      K: "H",
      Y: "J",
      H: "K",
      R: "L",
      Z: "M",
      C: "N",
      B: "P",
      G: "Q",
      L: "R",
      X: "S",
      F: "T",
      W: "V",
      V: "W",
      S: "X",
      J: "Y",
      M: "Z",
      6: 0,
      9: 1,
      5: 2,
      8: 3,
      7: 4,
      2: 5,
      0: 6,
      4: 7,
      3: 8,
      1: 9,
      "/": "!",
      "&": "@",
      "-": "_",
      _: "-",
      "@": "&",
      "*": "+",
      "+": "*",
      "!": "/",
      "#": "%",
      "%": "#",
      ":": ">",
      "<": ":",
      ";": "<",
      ".": ";",
      ">": ".",
      "`": ",",
      "?": "`",
      ",": "?",
      "|": "=",
      "=": "|",
    };
    let dec = userDecText.replace(
      /[a-z|A-Z|0-9|!|@|#|%|&|*|_|-|+|<|>|.|:|;|,|?|`]/g,
      function (m) {
        return enc[m];
      }
    );
    setDecText(dec);
  };

  return (
    <>
      <div className="text-center">
        <h1>Encrypto AI</h1>
        {/* Encryption Tool */}
        <div className="input-container">
          <textarea
            name="user-text"
            id="user-text"
            cols="40"
            rows="5"
            className="w-100"
            value={userEncText}
            onChange={updateUserEncText}
          ></textarea>
          <button className="btn btn-primary w-100 my-2" onClick={encryptText}>
            Encode Text
          </button>
          <div id="encoded-text" className="border w-100">
            {encText}
          </div>
        </div>

        {/* Decryption Tool */}
        <div className="input-container mt-3">
          <textarea
            name="user-text"
            id="user-text"
            cols="40"
            rows="5"
            className="w-100"
            value={userDecText}
            onChange={updateUserDecText}
          ></textarea>
          <button className="btn btn-primary w-100 my-2" onClick={decryptText}>
            Decode Text
          </button>
          <div id="encoded-text" className="border w-100">
            {decText}
          </div>
        </div>
      </div>
    </>
  );
};

export default InputBox;
