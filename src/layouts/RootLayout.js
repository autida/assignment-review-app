import { NavLink, Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div className="root-layout">
      <div className="header-wrapper">
        <header>
          <nav>
            <div className="brandName">
              <h1>ARA</h1>
            </div>
            <div className="navLink">
              <NavLink to="/">Home</NavLink>
              <NavLink to="about">About</NavLink>
              <NavLink to="help">Help</NavLink>
              <NavLink to="careers">Careers</NavLink>
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
        <p>Contact us at: contact@example.com</p>
        <p>&copy; 2023 Your Website Name</p>
      </footer>
    </div>
  );
};

export default RootLayout;
