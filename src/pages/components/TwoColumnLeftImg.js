const TwoColumnLeftImg = ({ img, heading, children }) => {
  return (
    <div className="twc-wrapper">
      <img src={"assets/" + img} alt="Create icon" className="twc-img" />
      <div className="twc-text">
        <p className="twc-text-heading">{heading}</p>
        {children}
      </div>
    </div>
  );
};

export default TwoColumnLeftImg;
