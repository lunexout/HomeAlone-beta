import React from "react";
import img1 from "./../../assets/Bank-of-Georgia-1280x720.jpg";
import img2 from "./../../assets/TBC.jpg";

import "./../news/News.css";
import { Footer } from "../footer/Footer";

import { useTranslation } from "react-i18next";

export const Installment = () => {
  const { t } = useTranslation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
    <style
        dangerouslySetInnerHTML={{
          __html: `
          .img-border {
            position: relative;
            height: 100%;
            min-height: 400px;
          }
      
          .img-border::before {
            position: absolute;
            content: "";
            top: 0;
            left: 0;
            right: 3rem;
            bottom: 3rem;
            border: 5px solid #2EB872;
          }
      
          .img-border img {
            position: absolute;
            top: 3rem;
            left: 3rem;
            width: calc(100% - 3rem);
            height: calc(100% - 3rem);
            object-fit: cover;
          }
      
          *,
          *::before,
          *::after {
            box-sizing: border-box
          }
      
          @media (prefers-reduced-motion: no-preference) {
            :root {
              scroll-behavior: smooth
            }
          }
      
          body {
            margin: 0;
            font-family: "Open Sans", sans-serif;
            font-size: 1rem;
            font-weight: 400;
            line-height: 1.5;
            color: #555;
            background-color: #fff;
            -webkit-text-size-adjust: 100%;
            -webkit-tap-highlight-color: rgba(0, 0, 0, 0)
          }
      
          h1 {
            margin-top: 0;
            margin-bottom: .5rem;
            font-family: "Quicksand", sans-serif;
            font-weight: 600;
            line-height: 1.2;
            color: #282F34
          }
      
          h1 {
            font-size: calc(1.375rem + 1.5vw)
          }
      
          @media (min-width: 1200px) {
            h1 {
              font-size: 2.5rem
            }
          }
      
          p {
            margin-top: 0;
            margin-bottom: 1rem
          }
      
          img {
            vertical-align: middle
          }
      
          .display-5 {
            font-size: calc(1.425rem + 2.1vw);
            font-weight: 700;
            line-height: 1.2
          }
      
          @media (min-width: 1200px) {
            .display-5 {
              font-size: 3rem
            }
          }
      
          .img-fluid {
            max-width: 100%;
            height: auto
          }
      
          .container,
          .container-xxl {
            width: 100%;
            padding-right: var(--bs-gutter-x, .75rem);
            padding-left: var(--bs-gutter-x, .75rem);
            margin-right: auto;
            margin-left: auto
          }
      
          @media (min-width: 576px) {
            .container {
              max-width: 540px
            }
          }
      
          @media (min-width: 768px) {
            .container {
              max-width: 720px
            }
          }
      
          @media (min-width: 992px) {
            .container {
              max-width: 960px
            }
          }
      
          @media (min-width: 1200px) {
            .container {
              max-width: 1140px
            }
          }
      
          @media (min-width: 1400px) {
      
            .container,
            .container-xxl {
              max-width: 1320px
            }
          }
      
          .row {
            --bs-gutter-x: 1.5rem;
            --bs-gutter-y: 0;
            display: flex;
            flex-wrap: wrap;
            margin-top: calc(var(--bs-gutter-y) * -1);
            margin-right: calc(var(--bs-gutter-x) / -2);
            margin-left: calc(var(--bs-gutter-x) / -2)
          }
      
          .row>* {
            flex-shrink: 0;
            width: 100%;
            max-width: 100%;
            padding-right: calc(var(--bs-gutter-x) / 2);
            padding-left: calc(var(--bs-gutter-x) / 2);
            margin-top: var(--bs-gutter-y)
          }
      
          .g-5 {
            --bs-gutter-x: 3rem
          }
      
          .g-5 {
            --bs-gutter-y: 3rem
          }
      
          @media (min-width: 992px) {
            .col-lg-6 {
              flex: 0 0 auto;
              width: 50%
            }
          }
      
          .form-control[type="file"]:not(:disabled):not(:read-only) {
            cursor: pointer
          }
      
          .form-control::file-selector-button {
            padding: .375rem .75rem;
            margin: -.375rem -.75rem;
            margin-inline-end: .75rem;
            color: #555;
            background-color: #e9ecef;
            pointer-events: none;
            border-color: inherit;
            border-style: solid;
            border-width: 0;
            border-inline-end-width: 1px;
            border-radius: 0;
            transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out
          }
      
          @media (prefers-reduced-motion: reduce) {
            .form-control::file-selector-button {
              transition: none
            }
          }
      
          .form-control:hover:not(:disabled):not(:read-only)::file-selector-button {
            background-color: #dde0e3
          }
      
          .form-control:hover:not(:disabled):not(:read-only)::-webkit-file-upload-button {
            background-color: #dde0e3
          }
      
          .form-control-sm::file-selector-button {
            padding: .25rem .5rem;
            margin: -.25rem -.5rem;
            margin-inline-end: .5rem
          }
      
          .form-control-lg::file-selector-button {
            padding: .5rem 1rem;
            margin: -.5rem -1rem;
            margin-inline-end: 1rem
          }
      
          .form-control-color:not(:disabled):not(:read-only) {
            cursor: pointer
          }
      
          .visually-hidden-focusable:not(:focus):not(:focus-within) {
            position: absolute !important;
            width: 1px !important;
            height: 1px !important;
            padding: 0 !important;
            margin: -1px !important;
            overflow: hidden !important;
            clip: rect(0, 0, 0, 0) !important;
            white-space: nowrap !important;
            border: 0 !important
          }
      
          .me-2 {
            margin-right: .5rem !important
          }
      
          .mb-4 {
            margin-bottom: 1.5rem !important
          }
      
          .py-5 {
            padding-top: 3rem !important;
            padding-bottom: 3rem !important
          }
      
          .text-primary {
            color: #2EB872 !important
          }        `,
        }}
      />
 <div className="container-xxl py-5">
    <div className="container">
      <div className="row g-5">
        <div className="col-lg-6 wow fadeInUp">
          <p><span className="text-primary me-2">#</span>Welcome To Home Alone</p>
          <h1 className="display-5 mb-4">
          {t("bankname1")}
          </h1>
          <p className="mb-4">
          {t("banktext1")}
          </p>

        </div>
        <div className="col-lg-6 wow fadeInUp">
          <div className="img-border">
            <img className="img-fluid" src={img1} alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="container-xxl py-5">
    <div className="container">
      <div className="row g-5">
        <div className="col-lg-6 wow fadeInUp">
          <p><span className="text-primary me-2">#</span>Welcome To Home Alone</p>
          <h1 className="display-5 mb-4">
          {t("bankname2")}
          </h1>
          <p className="mb-4">
          {t("banktext1")}
          </p>

        </div>
        <div className="col-lg-6 wow fadeInUp">
          <div className="img-border">
            <img className="img-fluid" src={img2} alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
      {/* <div>
        <div className="we-are-block">
          <div id="about-us-section">
            <div className="about-us-image">
              <img src={img1} width="808" height="458" alt="" />
            </div>

            <div className="about-us-info">
              <h2>{t("bankname1")}</h2>

              <p>{t("banktext1")}</p>
            </div>
          </div>

          <div id="history-section">
            <div className="history-image">
              <img src={img2} width="808" height="460" alt="Building Pic" />
            </div>

            <div className="history-info">
              <h2>{t("bankname2")}</h2>

              <p>{t("banktext2")}</p>
            </div>
          </div>
        </div>
      </div> */}
      <Footer />
    </>
  );
};
