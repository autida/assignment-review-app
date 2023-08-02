import BgImage from "./components/BgImage";
import FooterBar from "./components/FooterBar";

const Contact = () => {
  return (
    <div className="contact">
      <BgImage pageName="Contact" />
      <div className="some-paragraph">
        <p className="two-col-text-heading">Heading</p>
        <div className="ctxt">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            gravida, metus ac consequat interdum, neque lectus eleifend mi,
            auctor faucibus mauris sapien id tellus. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Sed gravida, metus ac consequat
            interdum, neque lectus eleifend mi, auctor faucibus mauris sapien id
            tellus.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            gravida, metus ac consequat interdum, neque lectus eleifend mi,
            auctor faucibus mauris sapien id tellus. Fusce consectetur ac ex id
            scelerisque. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Sed gravida, metus ac consequat interdum, neque lectus
            eleifend mi, auctor faucibus mauris sapien id tellus.
          </p>
        </div>
        <div className="c-contacts">
          <div className="c-icons">
            <img src="assets/cellnum.png" alt="socials" className="c-img" />
            <img src="assets/c-email.png" alt="socials" className="c-img" />
            <img src="assets/socials.png" alt="socials" className="c-img" />
          </div>
        </div>
      </div>

      <FooterBar />
    </div>
  );
};

export default Contact;
