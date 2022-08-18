import React, { useState } from "react";
import { encKey, decKey } from "../config/secretKeys";
import InputBox from "../common/InputBox";

const GulCipher = () => {
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

  const pattern = /[a-z|A-Z|0-9|!|@|#|%|&|*|_|-|+|<|>|.|:|;|,|?|`]/g;

  const encryptText = () => {
    let encryptedText = userEncText.replace(pattern, function (m) {
      return encKey[m];
    });
    setEncText(encryptedText);
    setUserDecText(encryptedText);
  };

  const decryptText = () => {
    let decryptedText = userDecText.replace(pattern, function (m) {
      return decKey[m];
    });
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
          <InputBox
            id={"enc"}
            textareaValue={userEncText}
            onTextareaChange={updateUserEncText}
            onBtnClick={encryptText}
            btnIcon={"fa-solid fa-lock"}
            encText={encText}
          />
          {/* Decryption Tool */}
          <InputBox
            id={"dec"}
            textareaValue={userDecText}
            onTextareaChange={updateUserDecText}
            onBtnClick={decryptText}
            btnText={"Decrypt Text"}
            btnIcon={"fa-solid fa-lock-open"}
            encText={decText}
          />
        </div>
        {/* Footer */}
        <footer className="text-center p-2 mt-5">
          Made with
          <i className="fa-solid fa-heart-circle-bolt text-danger"></i> by Gul |
          Copyright <i className="fa-regular fa-copyright"></i> 2022
        </footer>
      </div>
    </>
  );
};

export default GulCipher;
