import React, { useState } from "react";
import "./header.css";
import logo from "./../../assets/logo.png";
import TBC_LOGO from "./../../assets/TBC_Bank_logo.png";

import PARTNER1 from "./../partners/images/al mare batumi.jpg";
import PARTNER2 from "./../partners/images/citron.jpg";
import PARTNER3 from "./../partners/images/like house.jpg";
import imagefb from "./Facebook-logo.png";
import imageins from "./Symbol-Instagram.png";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
export const Header = () => {
  const { t } = useTranslation();
  const [ProductsBox, setProductsBox] = useState(false);
  const [ServicesBox, setServicesBox] = useState(false);
  const [AboutBox, setAboutBox] = useState(false);
  const changeLanguageHandler = (lang) => {
    localStorage.setItem("lang", lang);
    window.location.reload();
  };
  const OpenBox = (arg) => {
    if (arg === 2) {
      setProductsBox(true);
      setServicesBox(false);
      setAboutBox(false);
    } else if (arg === 3) {
      setProductsBox(false);
      setServicesBox(true);
      setAboutBox(false);
    } else if (arg === 4) {
      setProductsBox(false);
      setServicesBox(false);
      setAboutBox(true);
    } else {
      setProductsBox(false);
      setServicesBox(false);
      setAboutBox(false);
    }
  };

  return (
    <>
      <div className="header">
        <div
          className="animate__animated animate__fadeInLeft"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div onMouseEnter={() => OpenBox(0)}>
            <NavLink
              className="nav-item"
              activeClassName="nav-active"
              exact
              to="/"
            >
              <p>{t("HOME")}</p>
            </NavLink>
          </div>
          <div onMouseEnter={() => OpenBox(2)}>
            <NavLink
              className="nav-item"
              activeClassName="nav-active"
              to="/products"
              onClick={() => OpenBox(5)}
            >
              <p>{t("PRODUCTS")}</p>
            </NavLink>
          </div>
          <div onMouseEnter={() => OpenBox(3)}>
            <NavLink
              className="nav-item"
              activeClassName="nav-active"
              to="/services"
              onClick={() => OpenBox(5)}
            >
              <p>{t("SERVICES")}</p>
            </NavLink>
          </div>
          <div onMouseEnter={() => OpenBox(4)}>
            <NavLink
              className="nav-item"
              activeClassName="nav-active"
              to="/about"
              onClick={() => OpenBox(5)}
            >
              <p style={{ borderRight: "none" }}>{t("ABOUT")}</p>
            </NavLink>
          </div>
        </div>
        <NavLink className="nav-item" activeClassName="nav-active" exact to="/">
          <div
            onMouseEnter={() => OpenBox(0)}
            className="animate__animated animate__zoomIn"
          >
            <img src={logo} className="App-logo" alt="logo" />
          </div>
        </NavLink>

        <div
          className="animate__animated animate__fadeInRight"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {/* <div onMouseEnter={() => OpenBox(4)}>
                        <NavLink className='nav-item' activeClassName="nav-active" to='/about' onClick={() => OpenBox(5)}>
                            <p>{t('ABOUT')}</p>
                        </NavLink>
                    </div> */}
          <div onMouseEnter={() => OpenBox(0)}>
            <NavLink
              className="nav-item"
              activeClassName="nav-active"
              to="/news"
            >
              <p>{t("NEWS")}</p>
            </NavLink>
          </div>
          <div onMouseEnter={() => OpenBox(0)}>
            <NavLink
              className="nav-item"
              activeClassName="nav-active"
              to="/contact"
            >
              <p>{t("CONTACT")}</p>
            </NavLink>
          </div>
          <div style={{ display: "flex" }}>
            <p
              style={{ borderRight: "none" }}
              className="nav-item-lang"
              onClick={() => changeLanguageHandler("en")}
            >
              EN
            </p>
            <p
              style={{ borderRight: "none" }}
              className="nav-item-lang"
              onClick={() => changeLanguageHandler("ge")}
            >
              GE
            </p>
            <p
              style={{ borderRight: "none" }}
              className="nav-item-lang"
              onClick={() => changeLanguageHandler("ru")}
            >
              RU
            </p>
          </div>
        </div>
        <div>
          <a
            className="socialphoto"
            href="https://www.facebook.com/homealoneltd"
          >
            <img
              src={imagefb}
              style={{
                height: 30,
                width: "auto",
                marginLeft: "20px",
                lineHeight: "30",
                verticalAlign: "middle",
              }}
              alt=""
            />
          </a>

          <a
            className="socialphoto"
            href="https://www.instagram.com/ltdhome.alone/"
          >
            {" "}
            <img
              src={imageins}
              style={{
                height: 30,
                width: "auto",
                marginLeft: 0,
                lineHeight: "30",
                verticalAlign: "middle",
              }}
              alt=""
            />
          </a>
        </div>
      </div>
      <div>
        {ProductsBox && (
          <>
            <div
              onMouseLeave={() => setProductsBox(false)}
              className="product-box animate__animated animate__fadeInRight"
            >
              <div className="full-box-div">
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <NavLink
                    className="nav-item"
                    activeClassName="nav-active"
                    to="/products/group/hotel_system"
                    style={{ textDecoration: "none" }}
                  >
                    <p>{t("Hotel System")}</p>
                  </NavLink>

                  <NavLink
                    className="nav-item"
                    activeClassName="nav-active"
                    to="/products/group/Interaction_Center"
                    style={{ textDecoration: "none" }}
                  >
                    <p>{t("Interaction Center")}</p>
                  </NavLink>
                  <NavLink
                    className="nav-item"
                    activeClassName="nav-active"
                    to="/products/group/Smart_Lighting"
                    style={{ textDecoration: "none" }}
                  >
                    <p>{t("Smart Lighting")}</p>
                  </NavLink>
                </div>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <NavLink
                    className="nav-item"
                    activeClassName="nav-active"
                    to="/products/group/Home_Security"
                    style={{ textDecoration: "none" }}
                  >
                    <p>{t("Home Security")}</p>
                  </NavLink>
                  <NavLink
                    className="nav-item"
                    activeClassName="nav-active"
                    to="/products/group/Smart_R+T"
                    style={{ textDecoration: "none" }}
                  >
                    <p>{t("Smart R+T")}</p>
                  </NavLink>
                  <NavLink
                    className="nav-item"
                    activeClassName="nav-active"
                    to="/products/group/Smart_HVAC"
                    style={{ textDecoration: "none" }}
                  >
                    <p>{t("Smart HVAC")}</p>
                  </NavLink>
                </div>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <NavLink
                    className="nav-item"
                    activeClassName="nav-active"
                    to="/products/group/Home_Entertaiment"
                    style={{ textDecoration: "none" }}
                  >
                    <p>{t("Home Entertaiment")}</p>
                  </NavLink>
                  <NavLink
                    className="nav-item"
                    activeClassName="nav-active"
                    to="/products/group/Domestic_Appliances"
                    style={{ textDecoration: "none" }}
                  >
                    <p>{t("Domestic Appliances")}</p>
                  </NavLink>
                  <NavLink
                    className="nav-item"
                    activeClassName="nav-active"
                    to="/products/group/all-Audio"
                    style={{ textDecoration: "none" }}
                  >
                    <p>{t("Audio Products")}</p>
                  </NavLink>
                </div>
                <div
                  className="products-right"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    padding: 0,
                    borderRadius: 25,
                  }}
                ></div>
              </div>
            </div>
          </>
        )}
        {ServicesBox && (
          <>
            <div
              onMouseLeave={() => setServicesBox(false)}
              className="product-box animate__animated animate__fadeInRight"
            >
              <div className="full-box-div">
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <NavLink
                    className="nav-item"
                    activeClassName="nav-active"
                    to="/services/smarthome"
                    style={{ textDecoration: "none" }}
                  >
                    <p>{t("Smart Home System")}</p>
                  </NavLink>
                  <NavLink
                    className="nav-item"
                    activeClassName="nav-active"
                    to="/services/smarthotel"
                    style={{ textDecoration: "none" }}
                  >
                    <p>{t("Smart Hotel System")}</p>
                  </NavLink>
                </div>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <NavLink
                    className="nav-item"
                    activeClassName="nav-active"
                    to="/services/smartoffice"
                    style={{ textDecoration: "none" }}
                  >
                    <p>{t("Smart Office System")}</p>
                  </NavLink>

                  <NavLink
                    className="nav-item"
                    activeClassName="nav-active"
                    to="/services/installment"
                    style={{ textDecoration: "none" }}
                  >
                    <p>{t("Installment")}</p>
                  </NavLink>
                </div>
                <div>
                  <NavLink
                    className="nav-item"
                    activeClassName="nav-active"
                    to="/services/installment"
                    style={{ textDecoration: "none" }}
                  >
                    <img src={TBC_LOGO} alt="" style={{ height: 120 }} />{" "}
                  </NavLink>
                </div>
                {/* <div style={{marginTop: 30}}>
                                    <img src={Right2} alt =''/>
                                </div> */}
              </div>
            </div>
          </>
        )}
        {AboutBox && (
          <>
            <div
              onMouseLeave={() => setAboutBox(false)}
              className="product-box animate__animated animate__fadeInRight"
            >
              <div className="full-box-div">
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <p>
                    <NavLink
                      className="insidemenu-nav-item"
                      activeClassName="nav-active"
                      to="/about/partners"
                    >
                      {t("Partners")}
                    </NavLink>
                  </p>
                  <NavLink
                    className="insidemenu-nav-item"
                    activeClassName="nav-active"
                    to="/showroom/showroom"
                  >
                    <p>{t("Showroom")}</p>
                  </NavLink>
                  <p>
                    <NavLink
                      className="insidemenu-nav-item"
                      activeClassName="nav-active"
                      to="/about/gallery"
                    >
                      {t("Gallery")}
                    </NavLink>
                  </p>

                  <p>
                    <NavLink
                      className="insidemenu-nav-item"
                      activeClassName="nav-active"
                      to="/about/faq"
                    >
                      FAQ
                    </NavLink>
                  </p>
                </div>
                <div
                  className="partners"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    gap: 10,
                    alignItems: "center",
                  }}
                >
                  <NavLink to="/about/partners/0">
                    <img
                      src={PARTNER1}
                      style={{ height: 130, width: "auto" }}
                      alt=""
                    />
                  </NavLink>
                  <NavLink to="/about/partners/6">
                    <img src={PARTNER2} style={{ height: 130 }} alt="" />
                  </NavLink>
                  <NavLink to="/about/partners/9">
                    <img src={PARTNER3} style={{ height: 130 }} alt="" />
                  </NavLink>
                  <div
                    style={{
                      height: 130,
                      padding: 10,
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <p>
                      <NavLink
                        className="insidemenu-nav-item"
                        activeClassName="nav-active"
                        to="/about/partners"
                      >
                        {t("See More")}
                      </NavLink>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};
