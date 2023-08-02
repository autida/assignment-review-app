import { useState } from "react";
import FadeInAfterScroll from "./components/FadeInAfterScroll";
import Login from "./modals/Login";
import What from "./components/What";
import Divider from "./components/Divider";
import Benefit from "./components/Benefit";
import TriColumn from "./components/TriColumn";
import TwoColumnLeftImg from "./components/TwoColumnLeftImg";
import TwoColumnRightImg from "./components/TwoColumnRightImg";
import FooterBar from "./components/FooterBar";

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
      {/* <What /> */}
      <TwoColumnLeftImg img="what.png" heading="What is ARA?">
        <p className="twc-text-content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida,
          metus ac consequat interdum, neque lectus eleifend mi, auctor faucibus
          mauris sapien id tellus. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Sed gravida, metus ac consequat interdum, neque
          lectus eleifend mi, auctor faucibus mauris sapien id tellus.Lorem
          ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida, metus
          ac consequat interdum, neque lectus eleifend mi, auctor faucibus
          mauris sapien id tellus. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Sed gravida, metus ac consequat interdum, neque
          lectus eleifend mi, auctor faucibus mauris sapien id tellus.
        </p>
      </TwoColumnLeftImg>
      <TriColumn />
      <TwoColumnLeftImg img="twoColumn.png" heading="Why use ARA?">
        <p className="twc-text-content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida,
          metus ac consequat interdum, neque lectus eleifend mi, auctor faucibus
          mauris sapien id tellus. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Sed gravida, metus ac consequat interdum, neque
          lectus eleifend mi, auctor faucibus mauris sapien id tellus.Lorem
          ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida, metus
          ac consequat interdum, neque lectus eleifend mi, auctor faucibus
          mauris sapien id tellus. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Sed gravida, metus ac consequat interdum, neque
          lectus eleifend mi, auctor faucibus mauris sapien id tellus.
        </p>
      </TwoColumnLeftImg>
      <TwoColumnRightImg img="tc-home.png" heading="Benefits of using ARA?">
        <p className="twc-text-content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida,
          metus ac consequat interdum, neque lectus eleifend mi, auctor faucibus
          mauris sapien id tellus. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Sed gravida, metus ac consequat interdum, neque
          lectus eleifend mi, auctor faucibus mauris sapien id tellus.Lorem
          ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida, metus
          ac consequat interdum, neque lectus eleifend mi, auctor faucibus
          mauris sapien id tellus. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Sed gravida, metus ac consequat interdum, neque
          lectus eleifend mi, auctor faucibus mauris sapien id tellus.
        </p>
      </TwoColumnRightImg>
      <FooterBar />

      {/* <Benefit /> */}
      <Login isOpen={isModalOpen} onClose={modalClose} />
    </div>
  );
};

export default Home;
