import React, {useState} from "react";
import Navbar from "../global-components/navbar";
import Footer from "../global-components/footer-v2";
import Banner from "./banner-v2";
import Page_header from "../global-components/page-header";

const LoginPage = () => {
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('');

  const login = (e) => {
    e.preventDefault()
    if (!userName || !password) {
     setError('Username and password cannot be empty');
    }
    // Perform login logic here
    setError('Wrong details')
  }

  return (
    <>
      <Navbar />
      <Page_header headertitle="Sign In" />
      <div className="login-register-popup-wrap pd-top-80 pd-bottom-70">
        <div className="row no-gutters">
          <div className="col-lg-6 align-self-center">
            <div className="thumb">
              <img
                style={{ paddingLeft: "30px", borderRadius: "10px" }}
                src="assets/img/others/signup.png"
                alt="img"
              />
            </div>
          </div>
          <div className="col-lg-6 align-self-center">
            <div className="shape-thumb">
              <img src="assets/img/others/signup-shape.png" alt="img" />
            </div>
            <form className="login-form-wrap">
              <h4 className="text-center">Sign In</h4>
              {error && (
                <div style={{color: 'red', textAlign: 'center'}} className="sign-in-btn">
                {error}
              </div>
              )}
              <div className="single-input-wrap style-two">
                <input input type="text" placeholder="Username" value={userName} onChange={e => setUserName(e.target.value)} />
                <span className="single-input-title">
                  <i className="fa fa-user" />
                </span>
              </div>
              {/* <div className="single-input-wrap style-two">
              <input type="text" placeholder="Email" />
              <span className="single-input-title">
                <i className="fa fa-envelope" />
              </span>
            </div> */}
              <div className="single-input-wrap style-two">
                <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
                <span className="single-input-title">
                  <i className="fa fa-lock" />
                </span>
              </div>
              <label className="checkbox">
                <input type="checkbox" />
                <span>Remember me</span>
              </label>
              <div className="single-input-wrap style-two">
                <button onClick={login} className="btn btn-yellow w-100">Sign Up</button>
              </div>
              <div className="sign-in-btn">
                I already have an account. <a href="#">Sign In</a>
              </div>
              <div className="social-wrap">
                <p>Or Continue With</p>
                <ul className="social-icon">
                  <li>
                    <a className="facebook" href="#" target="_blank">
                      <i className="fa fa-facebook  " />
                    </a>
                  </li>
                  <li>
                    <a className="twitter" href="#" target="_blank">
                      <i className="fa fa-twitter  " />
                    </a>
                  </li>
                  <li>
                    <a className="pinterest" href="#" target="_blank">
                      <i className="fa fa-pinterest" />
                    </a>
                  </li>
                </ul>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default LoginPage;
