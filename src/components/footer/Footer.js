import React from "react";
import "./Footer.css";
import logo from "./../../assets/logo.png";
export const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer-main">
          <div className="container1">
            <div className="row">
              <div className="col-lg-4 col-md-12 m-md-auto align-self-center">
                <div className="block">
                  <a href="index.html">
                    <img
                      src={logo}
                      alt="footer-logo"
                      style={{ width: "150px" }}
                    />
                  </a>
                  <ul className="social-icon list-inline">
                    <li className="list-inline-item">
                      <img
                        alt="phone"
                        src="https://uxwing.com/wp-content/themes/uxwing/download/37-communication-chat-call/accept-call.png"
                        width={38}
                        style={{ width: '"38px"' }}
                      />
                    </li>
                    <li className="list-inline-item">
                      <img
                        alt="phone"
                        src="https://www.freepnglogos.com/uploads/logo-gmail-png/logo-gmail-png-gmail-icon-download-png-and-vector-1.png"
                        width={38}
                        style={{ width: '"38px"' }}
                      />
                    </li>
                    <li className="list-inline-item">
                      <img
                        alt="phone"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/768px-Facebook_f_logo_%282019%29.svg.png"
                        width={38}
                        style={{ width: '"38px"' }}
                      />
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-2 col-md-3 col-6 mt-5 mt-lg-0">
                <div className="block-2">
                  <h6>Services</h6>
                  <ul>
                    <li>
                      <a>Smart Office Solutions</a>
                    </li>
                    <li>
                      <a>Smart Hotel Solutions</a>
                    </li>
                    <li>
                      <a>Smart Home Solutions</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-2 col-md-3 col-6 mt-5 mt-lg-0">
                <div className="block-2">
                  <h6>About</h6>
                  <ul>
                    <li>
                      <a>Partners</a>
                    </li>
                    <li>
                      <a>Showroom</a>
                    </li>
                    <li>
                      <a>Gallery</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-2 col-md-3 col-6 mt-5 mt-lg-0">
                <div className="block-2">
                  <h6>Company</h6>
                  <ul>
                    <li>
                      <a>Home</a>
                    </li>
                    <li>
                      <a>Contact</a>
                    </li>
                    <li>
                      <a>News</a>
                    </li>
                    <li>
                      <a>Products</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-2 col-md-3 col-6 mt-5 mt-lg-0">
                <div className="block-2">
                  <h6>Inovations</h6>
                  <ul>
                    <li>
                      <a>Installment</a>
                    </li>
                    <li>
                      <a>Packs</a>
                    </li>
                    <li>
                      <a>Team</a>
                    </li>
                    <li>
                      <a>Solutions</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center bg-dark py-4">
          <small className="text-secondary">
            © Copyright - All Rights Reserved | Powered by Cyber Solution LTD
          </small>
        </div>
      </footer>
    </>
  );
};
