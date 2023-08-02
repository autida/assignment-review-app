import React from "react";

const ImageForm = ({ image, ctaTxt, children }) => {
  return (
    <div className="img-form">
      <div className="img-frame">
        <img
          src={"assets/" + image}
          alt="Person opening door"
          className="if-img"
        />
      </div>
      <div className="form-frame">
        <div className="welcome-ara">
          <h2>Welcom to </h2>
          <img
            src={"assets/logo.png"}
            alt="Person opening door"
            className="if-logo"
          />
        </div>
        <div className="if-form">
          {children}
          <div className="if-cta">
            <button className="if-cta">{ctaTxt}</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageForm;
