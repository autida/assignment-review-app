import { NavLink, Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div className="root-layout">
      <div className="header-wrapper">
        <header>
          <nav>
            <div className="brandName">
              <img src="assets/logo.png" alt="Ara-logo" className="logo" />
            </div>
            <div className="navLink">
              <NavLink to="/">Home</NavLink>
              <NavLink to="about">About</NavLink>
              <NavLink to="service">Service</NavLink>
              <NavLink to="contact">Contact</NavLink>
            </div>
            <div className="register-login">
              <button className="try-now-button">Try now</button>
            </div>
          </nav>
          {/* <Breadcrumbs /> */}
        </header>
      </div>
      <main>
        <Outlet />
      </main>

      <footer>
        <div className="footer">
          <img
            src="assets/logo.png"
            alt="Create icon"
            className="footer-logo"
          />
        </div>
        <p className="sideText">
          Design with love © ARAStudio 2020. All right reserved
        </p>
      </footer>
    </div>
  );
};

export default RootLayout;
