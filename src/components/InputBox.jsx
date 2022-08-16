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
      <div id="main">
        {/* Header Section */}
        <div className="container-fluid bg-primary text-white p-1 p-md-2 shadow">
          <div className="container">
            <span className="fs-2">
              <i class="fa-solid fa-robot"></i>
              <span className="mx-2">Encrypto AI</span>
            </span>
            Hides Your Secrets
          </div>
        </div>

        {/* Tools Section */}
        <div className="container tools-section">
          {/* Encryption Tool */}
          <div className="enc-box mt-4">
            <label htmlFor="user-enc-text">Text to Encrypt</label>
            <textarea
              name="user-enc-text"
              id="user-enc-text"
              cols="40"
              rows="4"
              className="rounded w-100"
              placeholder="Write text to encrypt..."
              value={userEncText}
              onChange={updateUserEncText}
            ></textarea>
            <button
              className="btn btn-primary w-100 my-2"
              onClick={encryptText}
            >
              <i className="fa-solid fa-lock mx-2"></i>
              Encrypt Text
            </button>
            <h5>Encrypted Text</h5>
            <div id="encoded-text" className="border-bottom w-100">
              {encText}
            </div>
          </div>

          {/* Decryption Tool */}
          <div className="dec-box mt-5">
            <label htmlFor="user-dec-text">Text to Decrypt</label>
            <textarea
              name="user-dec-text"
              id="user-dec-text"
              cols="40"
              rows="4"
              className="rounded w-100"
              placeholder="Write text to decrypt..."
              value={userDecText}
              onChange={updateUserDecText}
            ></textarea>
            <button
              className="btn btn-primary w-100 my-2"
              onClick={decryptText}
            >
              <i className="fa-solid fa-lock-open mx-2"></i> Decrypt Text
            </button>
            <h5>Decrypted Text</h5>
            <div id="encoded-text" className="border-bottom w-100">
              {decText}
            </div>
          </div>
        </div>
        {/* Footer */}
        <footer className="bg-secondary text-center p-2 mt-5 text-white">
          Made with{" "}
          <i className="fa-solid fa-heart-circle-bolt text-danger"></i> by Gul |
          Copyright <i className="fa-regular fa-copyright"></i> 2022
        </footer>
      </div>
    </>
  );
};

export default InputBox;
