const TriColumn = () => {
  return (
    <div className="tc-wrapper">
      <div className="tc-header">
        <p className="tc-heading">Header</p>
      </div>
      <div className="tc-content">
        <div className="tc-content-first">
          <img
            src="assets/create.png"
            alt="Create icon"
            className="tc-content-icons"
          />
          <div className="tc-group">
            <p className="tc-card-header">Create Assignments</p>
            <p className="tc-card-content">
              Lorem ipsum dolor sit amet, consectetur elit.
            </p>
            <p className="tc-card-cta">Read more {">>"}</p>
          </div>
        </div>
        <div className="tc-content-second">
          <img
            src="assets/submit.png"
            alt="Submit icon"
            className="tc-content-icons"
          />
          <div className="tc-group">
            <p className="tc-card-header">Submit Effortlessly</p>
            <p className="tc-card-content">
              Lorem ipsum dolor sit amet, consectetur elit.
            </p>
            <p className="tc-card-cta">Read more {">>"}</p>
          </div>
        </div>
        <div className="tc-content-third">
          <img
            src="assets/review.png"
            alt="review icon"
            className="tc-content-icons"
          />
          <div className="tc-group">
            <p className="tc-card-header">Expert Reviews</p>
            <p className="tc-card-content">
              Lorem ipsum dolor sit amet, consectetur elit.
            </p>
            <p className="tc-card-cta">Read more {">>"}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TriColumn;
