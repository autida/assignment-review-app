import BgImage from "./components/BgImage";
import FooterBar from "./components/FooterBar";
import TwoColumn from "./components/TwoColumn";
import TwoColumnLeftImg from "./components/TwoColumnLeftImg";
import TwoColumnRightImg from "./components/TwoColumnRightImg";

const Service = () => {
  return (
    <div className="service">
      <BgImage pageName="Service" />
      <TwoColumn heading="Heading">
        <p>
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
        <p>
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
      </TwoColumn>
      <TwoColumnLeftImg img="services-img.png" heading="Heading">
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
      <TwoColumnRightImg img="services-img2.png" heading="Heading">
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
      <TwoColumnLeftImg img="services-img3.png" heading="Heading">
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
      <FooterBar />
    </div>
  );
};

export default Service;
