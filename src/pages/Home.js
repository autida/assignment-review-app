import FadeInAfterScroll from "./components/FadeInAfterScroll";

const Home = () => {
  return (
    <div className="home">
      <div className="hero-wrapper">
        <div className="overlay"></div>
        <img
          src="assets/image8.jpg"
          alt="Jumbotron Background"
          className="jumbotronBackground"
        />
        <div className="slogan-container">
          {/* <img
          src="assets/image1.jpg"
          alt="Jumbotron Background"
          className="jumbotronBackground"
        /> */}
          <div className="slogan">
            <h3>Simplify, Learn, Excel:</h3>
            <h1>Your Assignment Review App!</h1>
          </div>
          <div className="sub-slog">
            <h4>
              Discover a seamless way to organize, manage, and <br /> review
              your assignments effortlessly.
            </h4>
            <button className="card-button">Create an Account now</button>
          </div>
        </div>
      </div>
      <FadeInAfterScroll />
    </div>
  );
};

export default Home;
