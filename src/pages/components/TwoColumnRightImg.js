const TwoColumnRightImg = ({ img, heading, children }) => {
  return (
    <div className="twc-wrapper">
      <div className="twc-text">
        <p className="twc-text-heading">{heading}</p>
        {children}
      </div>
      <img src={"assets/" + img} alt="Create icon" className="twc-img" />
    </div>
  );
};

export default TwoColumnRightImg;
