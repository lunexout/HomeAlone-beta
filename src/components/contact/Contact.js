import React from "react";
import { Footer } from "./../footer/Footer";
import "./contact.css";
import { MdLocationPin } from "react-icons/md";
import { MdMarkunreadMailbox } from "react-icons/md";
import { MdPermPhoneMsg } from "react-icons/md";

import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

import { FaTiktok } from "react-icons/fa";

import { FaWhatsapp } from "react-icons/fa";
import { useTranslation } from "react-i18next";

import "./constacts.scss";
export const Contact = () => {
  const { t } = useTranslation();

  return (
    <>
      <div>
        <header>
          <div style={{ marginTop: "10px" }}>
            <div className="page-banner">
              <div className="row justify-content-center align-items-center h-100">
                <div className="col-md-6">
                  <h1 className="text-center">{t("ContactUs")}</h1>
                </div>
              </div>
            </div>
          </div>
        </header>
        <main>
          <div className="page-section">
            <div className="container">
              <div className="row align-items-center">
                <div class="grid-containercont">
                  <div>
                    <div className="col-lg-6 py-3">
                      <h2 className="title-section"> {t("GetinTouch")}</h2>
                      <div className="divider" />
                      <br />
                      <br />
                      <div className="social-icons">
                        <a
                          className="social-icon social-icon--instagram"
                          href="https://www.instagram.com/ltdhome.alone/"
                          target="blank"

                        >
                          <FaInstagram fontSize="20px" />
                          <div className="tooltip">{t("Instagram")}</div>
                        </a>
                        <a
                          className="social-icon social-icon--facebook"
                          href="https://www.facebook.com/homealoneltd"
                          target="blank"

                        >
                          <FaFacebookF fontSize="20px" />
                          <div className="tooltip">{t("Facebook")}</div>
                        </a>
                        <a
                          className="social-icon social-icon--facebook"
                          href="https://www.tiktok.com/@ltd.home.alone"
                          target="blank"
                        >
                          <FaTiktok fontSize="20px" />
                          <div className="tooltip">{t("TikTok")}</div>
                        </a>
                        <a
                          className="social-icon social-icon--facebook"
                          href="https://wa.me/+995577410510"
                          target="blank"

                        >
                          <FaWhatsapp fontSize="20px" />
                          <div className="tooltip">{t("Whatsapp")}</div>
                        </a>
                      </div>
                      <br />
                      <br />
                      <p>
                      Tell us about your project ideas or just say hello. Whether 
                      <br />you’ve got a big idea or need some inspiration with a smart 
                      <br />system project, we are here to create perfect Smart Systems. 
                      <br />From concept to creation, let us inspire you.
                        </p>
                        <ul className="contact-list">
                        <li>
                          <MdLocationPin fontSize="30px" />
                          <div className="content1" style={{color: "black"}}>{t("addressline")}</div>
                        </li>
                        <li>
                          <MdMarkunreadMailbox fontSize="30px" />
                          <div className="content1" style={{color: "black"}}>info@homealone.ge<br/>ltd.homealone@gmail.com</div>
                        </li>
                        <li>
                          <MdPermPhoneMsg fontSize="30px" />
                          <div className="content1" style={{color: "black"}}>+995 577 410 510</div>
                          <div className="content1" style={{color: "black"}}>+995 577 77 00 90</div>
                        </li>
                      </ul>   
                      
                      
                    </div>
                  </div>
                  <div>
                    {" "}
                    <div className="col-lg-6 py-3">
                      <h2 className="title-section">{t("mapsline")}</h2>
                      <div className="divider" />
                      <iframe
                        title="Map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d383.68060312146974!2d41.61195937457422!3d41.63275298935509!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406785e12d768d4d%3A0x215791348a2a253b!2zNzMg4YOi4YOR4YOU4YOaLeGDkOGDkeGDo-GDoeGDlOGDoOGDmOGDq-GDmOGDoSDhg6Xhg6Phg6nhg5AsIOGDkeGDkOGDl-GDo-GDm-GDmA!5e0!3m2!1ska!2sge!4v1654782523742!5m2!1ska!2sge"
                        width={570}
                        height={525}
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
};
