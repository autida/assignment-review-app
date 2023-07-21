import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import "./Modal.css";
// import "bootstrap/dist/css/bootstrap.min.css";

const Login = ({ isOpen, onClose }) => {
  // const { setAuth } = useAuth();
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSucess] = useState(false);
  const [isAlertOpen, setIsAlertOpen] = useState(false);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd]);

  if (!isOpen || success) {
    return null; // If modal is not open, render nothing
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Make an HTTP POST request to the login endpoint
      const response = await axios.post(
        "http://localhost:8080/api/auth/login",
        {
          username: user,
          password: pwd,
        }
      );

      // Check if the login was successful
      if (response.status === 200) {
        const accessKey = response.data.accessKey;
        const role = response.data.roles;

        // setAuth({ role, accessKey });
        setUser("");
        setPwd("");
        // showAlert(role, accessKey);
      } else {
        setErrMsg("Unauthorized!");
      }
    } catch (error) {
      if (error.response.status === 400) {
        setErrMsg("Missing Username or Password.");
      } else if (error.response.status === 401) {
        setErrMsg("Unauthorized!");
      } else {
        setErrMsg("Login Failed!");
      }
      errRef.current.focus();
    }
  };

  return (
    <>
      <div className="modal-container">
        <div onClick={onClose} className="modal-overlay"></div>
        <div className="modal-content">
          <div className="modal-header">
            <h2 className="modal-title">Login</h2>
          </div>
          <div className="modal-body">
            <form>
              <p
                ref={errRef}
                className={errMsg ? "errmsg" : "offscreen"}
                aria-live="assertive"
              >
                {errMsg}
              </p>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Username
                </label>
                <input
                  className="form-control"
                  type="text"
                  id="username"
                  ref={userRef}
                  autoComplete="off"
                  onChange={(e) => setUser(e.target.value)}
                  value={user}
                  required
                />
                <div id="emailHelp" className="form-text"></div>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="modalOpen"
                  onChange={(e) => setPwd(e.target.value)}
                  value={pwd}
                />
              </div>
            </form>
          </div>
          <div className="modal-footer">
            {/* {children} */}
            <button className="btn modal-btn" onClick={onClose}>
              Login
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
