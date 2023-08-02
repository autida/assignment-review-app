import BgImage from "./components/BgImage";
import FooterBar from "./components/FooterBar";
import TwoColumnLeftImg from "./components/TwoColumnLeftImg";
import TwoColumnRightImg from "./components/TwoColumnRightImg";

const About = () => {
  return (
    <div className="about">
      <BgImage pageName="About" />
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
    </div>
  );
};

export default About;
