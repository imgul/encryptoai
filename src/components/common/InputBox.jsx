import React from "react";

const InputBox = (props) => {
  const { id, textareaValue, onTextareaChange, onBtnClick, btnIcon, encText } =
    props;
  let text;
  id === "enc" ? (text = "Encrypt") : (text = "Decrypt");
  return (
    <div className={`${id}-box mt-4`}>
      <label htmlFor={`user-${id}-text`}>Text to {text}</label>
      <textarea
        name={`user-${id}-text`}
        id={`user-${id}-text`}
        cols="40"
        rows="4"
        className="rounded w-100"
        placeholder={`Write text to ${text}...`}
        value={textareaValue}
        onChange={onTextareaChange}
      ></textarea>
      <button className="btn btn-primary w-100 my-2" onClick={onBtnClick}>
        <i className={`${btnIcon} mx-2`}></i>
        {text} Text
      </button>
      <h5>{text}ed Text</h5>
      <div id="encoded-text" className="border-bottom w-100">
        {encText}
      </div>
    </div>
  );
};

export default InputBox;
