import React from "react";

const TwoColumn = ({ heading, children }) => {
  const modifiedChildren = React.Children.map(children, (child) => {
    return React.cloneElement(child, { className: "two-col-text-content" });
  });
  return (
    <div className="two-col-wrapper">
      <p className="two-col-text-heading">{heading}</p>
      <div className="two-col-text-wrapper">{modifiedChildren}</div>
    </div>
  );
};

export default TwoColumn;
