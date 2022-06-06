import React from "react";
import "./Footer.css";
import { NavLink } from "react-router-dom";
import photo1 from "./../../assets/logo.png";
import { useTranslation } from "react-i18next";

export const Footer = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="pg-footer">
        <footer className="footer">
          
          <div className="footer-content">
            <div className="footer-content-column">
              <div className="footer-logo">
                <span className="hidden-link-text">LOGO</span>
                <img alt="home alone" src={photo1} width={200} />
              </div>
              <div className="footer-menu">
                <h2 className="footer-menu-name">{t("GetStarted")}</h2>
                <ul id="menu-get-started" className="footer-menu-list">
                  <li
                    id="menu-item-173730"
                    className="menu-item menu-item-type-post_type menu-item-object-product menu-item-173730"
                  >
                    <NavLink
                      className="insidemenu-nav-item"
                      activeClassName="nav-active"
                      exact
                      to="/"
                      style={{ textTransform: "lowercase" }}
                    >
                      <p>{t("HOME")}</p>
                    </NavLink>
                  </li>
                  <li
                    id="menu-item-173728"
                    className="menu-item menu-item-type-post_type menu-item-object-product menu-item-173728"
                  >
                    <NavLink
                      className="insidemenu-nav-item"
                      activeClassName="nav-active"
                      to="/products"
                      style={{ textTransform: "lowercase" }}
                    >
                      <p>{t("PRODUCTS")}</p>
                    </NavLink>
                  </li>
                  <li
                    id="menu-item-173727"
                    className="menu-item menu-item-type-post_type menu-item-object-product menu-item-173727"
                  >
                    <NavLink
                      className="insidemenu-nav-item"
                      activeClassName="nav-active"
                      to="/about/gallery"
                      style={{ textTransform: "lowercase" }}
                    >
                      <p>{t("Gallery")}</p>
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
            <div className="footer-content-column">
              <div className="footer-menu">
                <h2 className="footer-menu-name"> {t("Company")}</h2>
                <ul id="menu-company" className="footer-menu-list">
                  <li
                    id="menu-item-167408"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-167408"
                  >
                    <NavLink
                      className="insidemenu-nav-item"
                      activeClassName="nav-active"
                      to="/contact"
                    >
                      <p style={{ textTransform: "lowercase" }}>
                        {t("CONTACT")}
                      </p>
                    </NavLink>
                  </li>
                  <li
                    id="menu-item-167409"
                    className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-167409"
                  >
                    <NavLink
                      className="insidemenu-nav-item"
                      activeClassName="nav-active"
                      to="/about/partners"
                      style={{ textTransform: "lowercase" }}
                    >
                      <p>{t("Partners")}</p>
                    </NavLink>
                  </li>
                  <li
                    id="menu-item-171917"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-171917"
                  >
                    <NavLink
                      className="insidemenu-nav-item"
                      activeClassName="nav-active"
                      to="/services"
                      style={{ textTransform: "lowercase" }}
                    >
                      <p>{t("SERVICES")}</p>
                    </NavLink>
                  </li>
                </ul>
              </div>
              <div className="footer-menu">
                <h2 className="footer-menu-name">{t("FeedBack")}</h2>
                <ul id="menu-legal" className="footer-menu-list">
                  <li
                    id="menu-item-170434"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-privacy-policy menu-item-170434"
                  >
                    <NavLink
                      className="insidemenu-nav-item"
                      activeClassName="nav-active"
                      to="/about/showroom"
                      style={{ textTransform: "lowercase" }}
                    >
                      <p>{t("Showroom")}</p>
                    </NavLink>
                  </li>
                  <li
                    id="menu-item-179115"
                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-179115"
                  >
                    <NavLink
                      to="/about"
                      className="insidemenu-nav-item"
                      activeClassName="nav-active"
                      style={{ textTransform: "lowercase" }}
                    >
                      <p>{t("ABOUT")}</p>
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>

            <div className="footer-content-column">
              <div className="footer-menu">
                <h2 className="footer-menu-name">{t("Solutions")}</h2>
                <ul id="menu-quick-links" className="footer-menu-list">
                  <li
                    id="menu-item-168092"
                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-168092"
                  >
                    <NavLink
                      to="/services/smarthome"
                      className="insidemenu-nav-item"
                      activeClassName="nav-active"
                    >
                      <p>{t("Smart Home System")}</p>
                    </NavLink>
                  </li>
                  <li
                    id="menu-item-167418"
                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-167418"
                  >
                    <NavLink
                      to="/services/smarthotel"
                      className="insidemenu-nav-item"
                      activeClassName="nav-active"
                    >
                      <p>{t("Smart Hotel System")}</p>
                    </NavLink>
                  </li>
                  <li
                    id="menu-item-167954"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-167954"
                  >
                    <NavLink
                      to="/services/smartoffice"
                      className="insidemenu-nav-item"
                      activeClassName="nav-active"
                    >
                      <p>{t("Smart Office System")}</p>
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
            <div className="footer-content-column">
              <div className="footer-call-to-action">
                <h2 className="footer-call-to-action-title">
                  {t("Contact Us")}
                </h2>
                <p className="footer-call-to-action-description"> </p>
              </div>
            </div>
            <br />
            <div className="footer-social-links">
              {" "}
              <svg
                className="footer-social-amoeba-svg"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 236 54"
              >
                <path
                  className="footer-social-amoeba-path"
                  d="M223.06,43.32c-.77-7.2,1.87-28.47-20-32.53C187.78,8,180.41,18,178.32,20.7s-5.63,10.1-4.07,16.7-.13,15.23-4.06,15.91-8.75-2.9-6.89-7S167.41,36,167.15,33a18.93,18.93,0,0,0-2.64-8.53c-3.44-5.5-8-11.19-19.12-11.19a21.64,21.64,0,0,0-18.31,9.18c-2.08,2.7-5.66,9.6-4.07,16.69s.64,14.32-6.11,13.9S108.35,46.5,112,36.54s-1.89-21.24-4-23.94S96.34,0,85.23,0,57.46,8.84,56.49,24.56s6.92,20.79,7,24.59c.07,2.75-6.43,4.16-12.92,2.38s-4-10.75-3.46-12.38c1.85-6.6-2-14-4.08-16.69a21.62,21.62,0,0,0-18.3-9.18C13.62,13.28,9.06,19,5.62,24.47A18.81,18.81,0,0,0,3,33a21.85,21.85,0,0,0,1.58,9.08,16.58,16.58,0,0,1,1.06,5A6.75,6.75,0,0,1,0,54H236C235.47,54,223.83,50.52,223.06,43.32Z"
                />
              </svg>
              <a
                className="footer-social-link linkedin"
                href="https://www.facebook.com/homealoneltd"
                target="_blank"
                rel="noreferrer"
              >
                <span className="hidden-link-text">Facebook</span>
                {/* <svg
                  className="footer-social-icon-svg"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 30 30"
                >
                  <path
                    className="footer-social-icon-path"
                    d="M9,25H4V10h5V25z M6.501,8C5.118,8,4,6.879,4,5.499S5.12,3,6.501,3C7.879,3,9,4.121,9,5.499C9,6.879,7.879,8,6.501,8z M27,25h-4.807v-7.3c0-1.741-0.033-3.98-2.499-3.98c-2.503,0-2.888,1.896-2.888,3.854V25H12V9.989h4.614v2.051h0.065 c0.642-1.18,2.211-2.424,4.551-2.424c4.87,0,5.77,3.109,5.77,7.151C27,16.767,27,25,27,25z"
                  />
                </svg> */}
                <svg
                  className="footer-social-icon-svg"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 50 50"
                >
                  <path
                    fill="#fff"
                    d="M 25 3 C 12.861562 3 3 12.861562 3 25 C 3 36.019135 11.127533 45.138355 21.712891 46.728516 L 22.861328 46.902344 L 22.861328 29.566406 L 17.664062 29.566406 L 17.664062 26.046875 L 22.861328 26.046875 L 22.861328 21.373047 C 22.861328 18.494965 23.551973 16.599417 24.695312 15.410156 C 25.838652 14.220896 27.528004 13.621094 29.878906 13.621094 C 31.758714 13.621094 32.490022 13.734993 33.185547 13.820312 L 33.185547 16.701172 L 30.738281 16.701172 C 29.349697 16.701172 28.210449 17.475903 27.619141 18.507812 C 27.027832 19.539724 26.84375 20.771816 26.84375 22.027344 L 26.84375 26.044922 L 32.966797 26.044922 L 32.421875 29.564453 L 26.84375 29.564453 L 26.84375 46.929688 L 27.978516 46.775391 C 38.71434 45.319366 47 36.126845 47 25 C 47 12.861562 37.138438 3 25 3 z M 25 5 C 36.057562 5 45 13.942438 45 25 C 45 34.729791 38.035799 42.731796 28.84375 44.533203 L 28.84375 31.564453 L 34.136719 31.564453 L 35.298828 24.044922 L 28.84375 24.044922 L 28.84375 22.027344 C 28.84375 20.989871 29.033574 20.060293 29.353516 19.501953 C 29.673457 18.943614 29.981865 18.701172 30.738281 18.701172 L 35.185547 18.701172 L 35.185547 12.009766 L 34.318359 11.892578 C 33.718567 11.811418 32.349197 11.621094 29.878906 11.621094 C 27.175808 11.621094 24.855567 12.357448 23.253906 14.023438 C 21.652246 15.689426 20.861328 18.170128 20.861328 21.373047 L 20.861328 24.046875 L 15.664062 24.046875 L 15.664062 31.566406 L 20.861328 31.566406 L 20.861328 44.470703 C 11.816995 42.554813 5 34.624447 5 25 C 5 13.942438 13.942438 5 25 5 z"
                  />
                </svg>
              </a>
              <a
                className="footer-social-link twitter"
                href="https://www.instagram.com/ltdhome.alone/"
                target="_blank"
                rel="noreferrer"
              >
                <span className="hidden-link-text">Instagram</span>

                <svg
                  className="footer-social-icon-svg"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 50 50"
                >
                  <path
                    fill="#fff"
                    d="M 16 3 C 8.8324839 3 3 8.8324839 3 16 L 3 34 C 3 41.167516 8.8324839 47 16 47 L 34 47 C 41.167516 47 47 41.167516 47 34 L 47 16 C 47 8.8324839 41.167516 3 34 3 L 16 3 z M 16 5 L 34 5 C 40.086484 5 45 9.9135161 45 16 L 45 34 C 45 40.086484 40.086484 45 34 45 L 16 45 C 9.9135161 45 5 40.086484 5 34 L 5 16 C 5 9.9135161 9.9135161 5 16 5 z M 37 11 A 2 2 0 0 0 35 13 A 2 2 0 0 0 37 15 A 2 2 0 0 0 39 13 A 2 2 0 0 0 37 11 z M 25 14 C 18.936712 14 14 18.936712 14 25 C 14 31.063288 18.936712 36 25 36 C 31.063288 36 36 31.063288 36 25 C 36 18.936712 31.063288 14 25 14 z M 25 16 C 29.982407 16 34 20.017593 34 25 C 34 29.982407 29.982407 34 25 34 C 20.017593 34 16 29.982407 16 25 C 16 20.017593 20.017593 16 25 16 z"
                  />
                </svg>
              </a>
              <a
                className="footer-social-link youtube"
                href="https://wa.me/+995577410510"
                target="_blank"
                rel="noreferrer"
              >
                <span className="hidden-link-text">whatsapp</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  {" "}
                  <path
                    fill="#fff"
                    d="M 12.011719 2 C 6.5057187 2 2.0234844 6.478375 2.0214844 11.984375 C 2.0204844 13.744375 2.4814687 15.462563 3.3554688 16.976562 L 2 22 L 7.2324219 20.763672 C 8.6914219 21.559672 10.333859 21.977516 12.005859 21.978516 L 12.009766 21.978516 C 17.514766 21.978516 21.995047 17.499141 21.998047 11.994141 C 22.000047 9.3251406 20.962172 6.8157344 19.076172 4.9277344 C 17.190172 3.0407344 14.683719 2.001 12.011719 2 z M 12.009766 4 C 14.145766 4.001 16.153109 4.8337969 17.662109 6.3417969 C 19.171109 7.8517969 20.000047 9.8581875 19.998047 11.992188 C 19.996047 16.396187 16.413812 19.978516 12.007812 19.978516 C 10.674812 19.977516 9.3544062 19.642812 8.1914062 19.007812 L 7.5175781 18.640625 L 6.7734375 18.816406 L 4.8046875 19.28125 L 5.2851562 17.496094 L 5.5019531 16.695312 L 5.0878906 15.976562 C 4.3898906 14.768562 4.0204844 13.387375 4.0214844 11.984375 C 4.0234844 7.582375 7.6067656 4 12.009766 4 z M 8.4765625 7.375 C 8.3095625 7.375 8.0395469 7.4375 7.8105469 7.6875 C 7.5815469 7.9365 6.9355469 8.5395781 6.9355469 9.7675781 C 6.9355469 10.995578 7.8300781 12.182609 7.9550781 12.349609 C 8.0790781 12.515609 9.68175 15.115234 12.21875 16.115234 C 14.32675 16.946234 14.754891 16.782234 15.212891 16.740234 C 15.670891 16.699234 16.690438 16.137687 16.898438 15.554688 C 17.106437 14.971687 17.106922 14.470187 17.044922 14.367188 C 16.982922 14.263188 16.816406 14.201172 16.566406 14.076172 C 16.317406 13.951172 15.090328 13.348625 14.861328 13.265625 C 14.632328 13.182625 14.464828 13.140625 14.298828 13.390625 C 14.132828 13.640625 13.655766 14.201187 13.509766 14.367188 C 13.363766 14.534188 13.21875 14.556641 12.96875 14.431641 C 12.71875 14.305641 11.914938 14.041406 10.960938 13.191406 C 10.218937 12.530406 9.7182656 11.714844 9.5722656 11.464844 C 9.4272656 11.215844 9.5585938 11.079078 9.6835938 10.955078 C 9.7955938 10.843078 9.9316406 10.663578 10.056641 10.517578 C 10.180641 10.371578 10.223641 10.267562 10.306641 10.101562 C 10.389641 9.9355625 10.347156 9.7890625 10.285156 9.6640625 C 10.223156 9.5390625 9.737625 8.3065 9.515625 7.8125 C 9.328625 7.3975 9.131125 7.3878594 8.953125 7.3808594 C 8.808125 7.3748594 8.6425625 7.375 8.4765625 7.375 z"
                  />
                </svg>
              </a>
              <a
                className="footer-social-link github"
                href="https://www.tiktok.com/@ltd.home.alone"
                target="_blank"
                rel="noreferrer"
              >
                <span className="hidden-link-text">Tik Tok</span>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 45 45"
                  width="30px"
                  height="30px"
                >
                  <path
                    fill="#fff"
                    d="M20,37c2.761,0,5-2.239,5-5v-1v-1V6.07h5.208c-0.031-0.14-0.072-0.276-0.097-0.419H30.11 c-0.044-0.248-0.076-0.495-0.099-0.746V4.07H23V28v1v1c0,2.761-2.239,5-5,5c-0.864,0-1.665-0.239-2.375-0.625 C16.473,35.931,18.103,37,20,37z"
                  />
                  <path
                    fill="#fff"
                    d="M33.718,11.407c-0.797-1.094-1.364-2.367-1.607-3.756H32.11c-0.044-0.248-0.076-0.495-0.099-0.746 V6.07h-1.803C30.699,8.252,31.969,10.132,33.718,11.407z"
                  />
                  <path
                    fill="#fff"
                    d="M18,25c-2.761,0-5,2.239-5,5c0,1.897,1.069,3.527,2.625,4.375C15.239,33.665,15,32.864,15,32 c0-2.761,2.239-5,5-5c0.343,0,0.677,0.035,1,0.101v-7.05C20.669,20.023,20.338,20,20,20s-0.669,0.023-1,0.05v5.05 C18.677,25.035,18.343,25,18,25z"
                  />
                  <path
                    fill="#fff"
                    d="M36.257,13.783c0.867,0.541,1.819,0.908,2.806,1.131v-0.376v-0.002v-1.381 c-1.7,0.003-3.364-0.473-4.806-1.373c-0.186-0.116-0.361-0.247-0.538-0.376C34.406,12.351,35.263,13.163,36.257,13.783z"
                  />
                  <path
                    fill="#fff"
                    d="M19,20.05v-2C18.669,18.023,18.338,18,18,18c-6.627,0-12,5.373-12,12 c0,3.824,1.795,7.222,4.581,9.419C8.969,37.377,8,34.804,8,32C8,25.71,12.842,20.56,19,20.05z"
                  />
                  <path
                    fill="#fff"
                    d="M39.062,14.914v4.733c-3.375,0-6.501-1.071-9.052-2.894L30.013,30l-0.014-0.018 C29.999,29.988,30,29.994,30,30c0,6.627-5.373,12-12,12c-2.804,0-5.377-0.969-7.419-2.581C12.778,42.205,16.176,44,20,44 c6.627,0,12-5.373,12-12c0-0.006-0.001-0.012-0.001-0.018L32.013,32l-0.002-13.248c2.551,1.823,5.677,2.894,9.052,2.894v-5.108 v-0.002v-1.381C40.385,15.157,39.717,15.061,39.062,14.914z"
                  />
                  <path
                    fill="#fff"
                    d="M30,30c0-0.006-0.001-0.012-0.001-0.018L30.013,30l-0.002-13.248 c2.551,1.823,5.677,2.894,9.052,2.894v-4.733c-0.987-0.223-1.939-0.59-2.806-1.131c-0.994-0.62-1.851-1.432-2.538-2.376 c-1.75-1.275-3.019-3.155-3.51-5.337H25V30v1v1c0,2.761-2.239,5-5,5c-1.897,0-3.527-1.069-4.375-2.625 C14.069,33.527,13,31.897,13,30c0-2.761,2.239-5,5-5c0.343,0,0.677,0.035,1,0.101v-5.05C12.842,20.56,8,25.71,8,32 c0,2.804,0.969,5.377,2.581,7.419C12.623,41.031,15.196,42,18,42C24.627,42,30,36.627,30,30z"
                  />
                </svg>
              </a>
            </div>
          </div>

          <div className="footer-copyright">
            <div className="footer-copyright-wrapper">
              <p className="footer-copyright-text">
                <a
                  className="footer-copyright-link"
                  href="cyso.ge"
                  target="_self"
                >
                  {" "}
                  © Copyright - All Rights Reserved | Powered by Cyber Solution
                  LTD{" "}
                </a>
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};
