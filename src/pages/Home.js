import { useState } from "react";
import FadeInAfterScroll from "./components/FadeInAfterScroll";
import Login from "./modals/Login";
import What from "./components/What";
import Divider from "./components/Divider";
import Benefit from "./components/Benefit";

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  //create a function to close the modal
  const modalClose = () => {
    setIsModalOpen(false);
  };

  const modalOpen = () => {
    setIsModalOpen(true);
  };
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
          <div className="slogan">
            <h3>Simplify, Learn, Excel:</h3>
            <h1>Your Assignment Review App!</h1>
          </div>
          <div className="sub-slog">
            <h4>
              Discover a seamless way to organize, manage, and review your
              assignments effortlessly.
            </h4>
            <button onClick={modalOpen} className="card-button">
              Create an Account now
            </button>
          </div>
        </div>
      </div>
      <FadeInAfterScroll />
      <div className="divider">
        <h1 className="raindrop-text">
          "You are capable of more than you know. Choose a goal that seems right
          for you and strive to be the best, however hard the path."
        </h1>
        <h3>- E. O. Wilson</h3>
      </div>
      <What />
      <Benefit />
      <Login isOpen={isModalOpen} onClose={modalClose} />
    </div>
  );
};

export default Home;
