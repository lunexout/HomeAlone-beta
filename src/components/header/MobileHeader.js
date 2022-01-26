import React, { useState } from "react";
import "./mobile-header.css";

import logo from "./../../assets/logo.png";
import menu from "./../../assets/burger.png";
import close from "./../../assets/close.svg";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

export const MobileHeader = () => {
  const { t } = useTranslation();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isAudioOpen, setIsAudioOpen] = useState(false);
  const [isServiceOpen, setIsServiceOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const closeMenu = () => {
    document
      .getElementById("mob-menu")
      .classList.remove("animate__fadeInRight");
    document.getElementById("mob-menu").classList.add("animate__fadeOutRight");
    isProductsOpen && closeProdMenu();
    isAudioOpen && closeAudioMenu();
    isServiceOpen && closeServiceMenu();
    isAboutOpen && closeAboutMenu();
    setTimeout(() => {
      setIsMenuOpen(false);
    }, 600);
  };

  const closeProdMenu = () => {
    document
      .getElementById("prodc-menu")
      .classList.remove("animate__fadeInRight");
    document
      .getElementById("prodc-menu")
      .classList.add("animate__fadeOutRight");
    setTimeout(() => {
      setIsProductsOpen(false);
    }, 600);
  };

  const closeAudioMenu = () => {
    document
      .getElementById("aud-menu")
      .classList.remove("animate__fadeInRight");
    document.getElementById("aud-menu").classList.add("animate__fadeOutRight");
    setTimeout(() => {
      setIsAudioOpen(false);
    }, 600);
  };

  const closeServiceMenu = () => {
    document
      .getElementById("serv-menu")
      .classList.remove("animate__fadeInRight");
    document.getElementById("serv-menu").classList.add("animate__fadeOutRight");
    setTimeout(() => {
      setIsServiceOpen(false);
    }, 600);
  };

  const closeAboutMenu = () => {
    document
      .getElementById("about-menu")
      .classList.remove("animate__fadeInRight");
    document
      .getElementById("about-menu")
      .classList.add("animate__fadeOutRight");
    setTimeout(() => {
      setIsAboutOpen(false);
    }, 600);
  };
  const changeLanguageHandler = (lang) => {
    localStorage.setItem("lang", lang);
    window.location.reload();
  };
  return (
    <>
      <div className="mobile-header">
        <NavLink to="/">
          <div>
            <img
              src={logo}
              className="App-logo"
              style={{ height: "18vmin" }}
              alt="logo"
            />
          </div>
        </NavLink>
        <div>
          {!isMenuOpen ? (
            <img
              src={menu}
              onClick={() => setIsMenuOpen(true)}
              style={{ height: "12vmin" }}
              alt="burgermenu"
            />
          ) : (
            <img
              src={close}
              onClick={() => closeMenu()}
              style={{ height: "11vmin" }}
              alt="burgermenu"
            />
          )}
        </div>
      </div>

      {isMenuOpen && (
        <>
          <div
            id="mob-menu"
            className="product-box animate__animated animate__fadeInRight"
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <NavLink
                className="nav-item"
                activeClassName="nav-active"
                exact
                to="/"
              >
                <p>{t("HOME")}</p>
              </NavLink>
              <NavLink
                onClick={() => setIsProductsOpen(true)}
                className="nav-item"
                activeClassName="nav-active"
                to="/products"
              >
                <p>{t("PRODUCTS")}</p>
              </NavLink>
              <NavLink
                onClick={() => setIsServiceOpen(true)}
                className="nav-item"
                activeClassName="nav-active"
                to="/services"
              >
                <p>{t("SERVICES")}</p>
              </NavLink>
              <NavLink
                onClick={() => setIsAboutOpen(true)}
                className="nav-item"
                activeClassName="nav-active"
                to="/about"
              >
                <p>{t("ABOUT")}</p>
              </NavLink>
              <NavLink
                className="nav-item"
                activeClassName="nav-active"
                to="/news"
              >
                <p>{t("NEWS")}</p>
              </NavLink>
              <NavLink
                className="nav-item"
                activeClassName="nav-active"
                to="/contact"
              >
                <p>{t("CONTACT")}</p>
              </NavLink>
              <span style={{ display: "flex" }}>
                <p
                  style={{ border: "none", margin: "20px" }}
                  className="nav-item-lang-mobile"
                  onClick={() => changeLanguageHandler("en")}
                >
                  EN
                </p>
                <p
                  style={{ border: "none", margin: "20px" }}
                  className="nav-item-lang-mobile"
                  onClick={() => changeLanguageHandler("ge")}
                >
                  GE
                </p>
                <p
                  style={{ border: "none", margin: "20px" }}
                  className="nav-item-lang-mobile"
                  onClick={() => changeLanguageHandler("ru")}
                >
                  RU
                </p>
              </span>
            </div>
          </div>
        </>
      )}
      {isProductsOpen && (
        <>
          <div
            id="prodc-menu"
            className="product-box1 animate__animated animate__fadeInRight"
          >
            <h5 style={{ color: "#fff" }} onClick={() => closeProdMenu()}>
              {t("Back")}
            </h5>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                flexDirection: "row",
                marginTop: 40,
                marginBottom: 40,
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "flex-start",
                  flexDirection: "column",
                }}
              >
                <NavLink
                  className="nav-item"
                  activeClassName="nav-active"
                  to="/products/group/all-Audio"
                  style={{ textDecoration: "none" }}
                >
                  <p>{t("Audio Products")}</p>
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
                <NavLink
                  className="nav-item"
                  activeClassName="nav-active"
                  to="/products/group/Home_Security"
                  style={{ textDecoration: "none" }}
                >
                  <p>{t("Home Security")}</p>
                </NavLink>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
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
                  to="/products/group/hotel_system"
                  style={{ textDecoration: "none" }}
                >
                  <p>{t("Hotel System")}</p>
                </NavLink>
              </div>
            </div>
          </div>
        </>
      )}
      {isAudioOpen && (
        <>
          <div
            id="aud-menu"
            className="product-box2 animate__animated animate__fadeInRight"
          >
            <h5 style={{ color: "#fff" }} onClick={() => closeAudioMenu()}>
              {t("Back")}
            </h5>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                flexDirection: "row",
                marginTop: 40,
                marginBottom: 40,
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "flex-start",
                  flexDirection: "column",
                }}
              >
                <NavLink
                  className="nav-item"
                  activeClassName="nav-active"
                  to="/products/group/Flush_Mount_Ceiling_Speaker"
                  style={{ textDecoration: "none" }}
                >
                  <p>{t("Flush Mount Ceiling Speaker")}</p>
                </NavLink>
                <NavLink
                  className="nav-item"
                  activeClassName="nav-active"
                  to="/products/group/Coaxial_Ceiling_Speaker"
                  style={{ textDecoration: "none" }}
                >
                  <p>{t("Coaxial Ceiling Speaker")}</p>
                </NavLink>
                <NavLink
                  className="nav-item"
                  activeClassName="nav-active"
                  to="/products/group/Two-Way_Ceiling_Speaker"
                  style={{ textDecoration: "none" }}
                >
                  <p>{t("Two-Way Ceiling Speaker")}</p>
                </NavLink>
                <NavLink
                  className="nav-item"
                  activeClassName="nav-active"
                  to="/products/group/Fireproof_Ceiling_Speaker"
                  style={{ textDecoration: "none" }}
                >
                  <p>{t("Fireproof Ceiling Speaker")}</p>
                </NavLink>
                <NavLink
                  className="nav-item"
                  activeClassName="nav-active"
                  to="/products/group/EN54_Ceiling_Speaker"
                  style={{ textDecoration: "none" }}
                >
                  <p>{t("EN54 Ceiling Speaker")}</p>
                </NavLink>
                <NavLink
                  className="nav-item"
                  activeClassName="nav-active"
                  to="/products/group/Surface_Mount_Ceiling_Speaker"
                  style={{ textDecoration: "none" }}
                >
                  <p>{t("Surface Mount Ceiling Speaker")}</p>
                </NavLink>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <NavLink
                  className="nav-item"
                  activeClassName="nav-active"
                  to="/products/group/Mini_Smart_Music_Host"
                  style={{ textDecoration: "none" }}
                >
                  <p>{t("Mini Smart Music Host")}</p>
                </NavLink>
                <NavLink
                  className="nav-item"
                  activeClassName="nav-active"
                  to="/products/group/Network_Smart_Music_Sys"
                  style={{ textDecoration: "none" }}
                >
                  <p>{t("Network Smart Music Sys")}</p>
                </NavLink>
                <NavLink
                  className="nav-item"
                  activeClassName="nav-active"
                  to="/products/group/Smart_Central_Music_Sys"
                  style={{ textDecoration: "none" }}
                >
                  <p>{t("Smart Central Music Sys")}</p>
                </NavLink>
                <NavLink
                  className="nav-item"
                  activeClassName="nav-active"
                  to="/products/group/Economic_Music_Sys"
                  style={{ textDecoration: "none" }}
                >
                  <p>{t("Economic Music Sys")}</p>
                </NavLink>
                <NavLink
                  className="nav-item"
                  activeClassName="nav-active"
                  to="/products/group/Speaker"
                  style={{ textDecoration: "none" }}
                >
                  <p>{t("Speaker")}</p>
                </NavLink>
              </div>
            </div>
          </div>
        </>
      )}
      {isServiceOpen && (
        <>
          <div
            id="serv-menu"
            className="product-box1 animate__animated animate__fadeInRight"
          >
            <h5 style={{ color: "#fff" }} onClick={() => closeServiceMenu()}>
              {t("Back")}
            </h5>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                flexDirection: "row",
                marginTop: 40,
                marginBottom: 40,
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "flex-start",
                  flexDirection: "column",
                }}
              >
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
            </div>
          </div>
        </>
      )}
      {isAboutOpen && (
        <>
          <div
            id="about-menu"
            className="product-box1 animate__animated animate__fadeInRight"
          >
            <h5 style={{ color: "#fff" }} onClick={() => closeAboutMenu()}>
              {t("Back")}
            </h5>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                flexDirection: "row",
                marginTop: 40,
                marginBottom: 40,
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "flex-start",
                  flexDirection: "column",
                }}
              >
                <NavLink
                  className="insidemenu-nav-item"
                  activeClassName="nav-active"
                  to="/about/partners"
                >
                  <p>{t("Partners")}</p>
                </NavLink>
                <NavLink
                  className="insidemenu-nav-item"
                  activeClassName="nav-active"
                  to="/showroom/showroom"
                >
                  <p>{t("Showroom")}</p>
                </NavLink>
                <NavLink
                  className="insidemenu-nav-item"
                  activeClassName="nav-active"
                  to="/about/gallery"
                >
                  <p>{t("Gallery")}</p>
                </NavLink>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};
