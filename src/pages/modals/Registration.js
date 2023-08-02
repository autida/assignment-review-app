import React from "react";

const Registration = () => {
  return (
    <div>
      <ImageForm image="person-open-door.png" ctaTxt={"REGISTER"}>
        <input className="if-form-control" placeholder="Name"></input>
        <input className="if-form-control" placeholder="Username"></input>
        <input className="if-form-control" placeholder="Email"></input>
        <input className="if-form-control" placeholder="Password"></input>
        <input
          className="if-form-control"
          placeholder="Confirm Password"
        ></input>
      </ImageForm>
    </div>
  );
};

export default Registration;
