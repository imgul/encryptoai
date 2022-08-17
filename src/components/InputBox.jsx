import React, { useState } from "react";
import { encKey, decKey } from "./config/secretKeys";

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

  const encryptText = () => {
    let encryptedText = userEncText.replace(
      /[a-z|A-Z|0-9|!|@|#|%|&|*|_|-|+|<|>|.|:|;|,|?|`]/g,
      function (m) {
        return encKey[m];
      }
    );
    setEncText(encryptedText);
    setUserDecText(encryptedText);
  };

  const decryptText = () => {
    let decryptedText = userDecText.replace(
      /[a-z|A-Z|0-9|!|@|#|%|&|*|_|-|+|<|>|.|:|;|,|?|`]/g,
      function (m) {
        return decKey[m];
      }
    );
    setDecText(decryptedText);
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
            Hides Secrets
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
