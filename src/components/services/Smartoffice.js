import React from "react";
// import img1 from "./../../assets/so_left1-660b28d697.jpg";
// import img2 from "./../../assets/so_left2-00979d4640.jpg";
// import img3 from "./../../assets/solution_bg7-f15c48d61f.jpg";
// import img4 from "./../../assets/solution_bg5-febe4b3d08.jpg";



import img1 from "./../../assets/icon-2.png";
import img2 from "./../../assets/icon-3.png";
import img3 from "./../../assets/icon-4.png";
import img4 from  "./../../assets/so_left1-660b28d697.jpg";
import img5 from  "./../../assets/so_left2-00979d4640.jpg";
import { BrowserView, MobileView } from "react-device-detect";
import { Footer } from "./../footer/Footer";

import "./../news/News.css";

import { useTranslation } from "react-i18next";

export const SmartOffice = () => {
  const { t } = useTranslation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
    <style
        dangerouslySetInnerHTML={{
          __html: `
          *,*::before,*::after{
            box-sizing:border-box
        }
        @media (prefers-reduced-motion: no-preference){
            :root{
                scroll-behavior:smooth
            }
        }
        body{
            margin:0;
            font-family:"Open Sans",sans-serif;
            font-size:1rem;
            font-weight:400;
            line-height:1.5;
            color:#777;
            background-color:#fff;
            -webkit-text-size-adjust:100%;
            -webkit-tap-highlight-color:rgba(0,0,0,0)
        }
        h1,h3,h4{
            margin-top:0;
            margin-bottom:.5rem;
            font-family:"Teko",sans-serif;
            font-weight:500;
            line-height:1.2;
            color:#252525
        }
        h1{
            font-size:calc(1.375rem + 1.5vw)
        }
        @media (min-width: 1200px){
            h1{
                font-size:2.5rem
            }
        }
        h3{
            font-size:calc(1.3rem + .6vw)
        }
        @media (min-width: 1200px){
            h3{
                font-size:1.75rem
            }
        }
        h4{
            font-size:calc(1.275rem + .3vw)
        }
        @media (min-width: 1200px){
            h4{
                font-size:1.5rem
            }
        }
        p{
            margin-top:0;
            margin-bottom:1rem
        }
        img{
            vertical-align:middle
        }
        button:focus:not(:focus-visible){
            outline:0
        }
        button:not(:disabled),[type="button"]:not(:disabled),[type="reset"]:not(:disabled),[type="submit"]:not(:disabled){
            cursor:pointer
        }
        ::-moz-focus-inner{
            padding:0;
            border-style:none
        }
        ::-webkit-datetime-edit-fields-wrapper,::-webkit-datetime-edit-text,::-webkit-datetime-edit-minute,::-webkit-datetime-edit-hour-field,::-webkit-datetime-edit-day-field,::-webkit-datetime-edit-month-field,::-webkit-datetime-edit-year-field{
            padding:0
        }
        ::-webkit-inner-spin-button{
            height:auto
        }
        ::-webkit-search-decoration{
            -webkit-appearance:none
        }
        ::-webkit-color-swatch-wrapper{
            padding:0
        }
        ::file-selector-button{
            font:inherit
        }
        ::-webkit-file-upload-button{
            font:inherit;
            -webkit-appearance:button
        }
        .display-1{
            font-size:calc(1.625rem + 4.5vw);
            font-weight:600;
            line-height:1.2
        }
        @media (min-width: 1200px){
            .display-1{
                font-size:5rem
            }
        }
        .display-5{
            font-size:calc(1.425rem + 2.1vw);
            font-weight:600;
            line-height:1.2
        }
        @media (min-width: 1200px){
            .display-5{
                font-size:3rem
            }
        }
        .img-fluid{
            max-width:100%;
            height:auto
        }
        .container,.container-fluid,.container-xxl{
            width:100%;
            padding-right:var(--bs-gutter-x, .75rem);
            padding-left:var(--bs-gutter-x, .75rem);
            margin-right:auto;
            margin-left:auto
        }
        @media (min-width: 576px){
            .container{
                max-width:540px
            }
        }
        @media (min-width: 768px){
            .container{
                max-width:720px
            }
        }
        @media (min-width: 992px){
            .container{
                max-width:960px
            }
        }
        @media (min-width: 1200px){
            .container{
                max-width:1140px
            }
        }
        @media (min-width: 1400px){
            .container,.container-xxl{
                max-width:1320px
            }
        }
        .row{
            --bs-gutter-x: 1.5rem;
            --bs-gutter-y: 0;
            display:flex;
            flex-wrap:wrap;
            margin-top:calc(var(--bs-gutter-y) * -1);
            margin-right:calc(var(--bs-gutter-x) / -2);
            margin-left:calc(var(--bs-gutter-x) / -2)
        }
        .row>*{
            flex-shrink:0;
            width:100%;
            max-width:100%;
            padding-right:calc(var(--bs-gutter-x) / 2);
            padding-left:calc(var(--bs-gutter-x) / 2);
            margin-top:var(--bs-gutter-y)
        }
        .col-12{
            flex:0 0 auto;
            width:100%
        }
        .g-4{
            --bs-gutter-x: 1.5rem
        }
        .g-4{
            --bs-gutter-y: 1.5rem
        }
        .g-5{
            --bs-gutter-x: 3rem
        }
        .g-5{
            --bs-gutter-y: 3rem
        }
        @media (min-width: 992px){
            .col-lg-6{
                flex:0 0 auto;
                width:50%
            }
        }
        .form-control[type="file"]:not(:disabled):not(:read-only){
            cursor:pointer
        }
        .form-control::file-selector-button{
            padding:.375rem .75rem;
            margin:-.375rem -.75rem;
            margin-inline-end:.75rem;
            color:#777;
            background-color:#e9ecef;
            pointer-events:none;
            border-color:inherit;
            border-style:solid;
            border-width:0;
            border-inline-end-width:1px;
            border-radius:0;
            transition:color 0.15s ease-in-out,background-color 0.15s ease-in-out,border-color 0.15s ease-in-out,box-shadow 0.15s ease-in-out
        }
        @media (prefers-reduced-motion: reduce){
            .form-control::file-selector-button{
                transition:none
            }
        }
        .form-control:hover:not(:disabled):not(:read-only)::file-selector-button{
            background-color:#dde0e3
        }
        .form-control:hover:not(:disabled):not(:read-only)::-webkit-file-upload-button{
            background-color:#dde0e3
        }
        .form-control-sm::file-selector-button{
            padding:.25rem .5rem;
            margin:-.25rem -.5rem;
            margin-inline-end:.5rem
        }
        .form-control-lg::file-selector-button{
            padding:.5rem 1rem;
            margin:-.5rem -1rem;
            margin-inline-end:1rem
        }
        .form-control-color:not(:disabled):not(:read-only){
            cursor:pointer
        }
        .visually-hidden-focusable:not(:focus):not(:focus-within){
            position:absolute !important;
            width:1px !important;
            height:1px !important;
            padding:0 !important;
            margin:-1px !important;
            overflow:hidden !important;
            clip:rect(0, 0, 0, 0) !important;
            white-space:nowrap !important;
            border:0 !important
        }
        .d-flex{
            display:flex !important
        }
        .flex-shrink-0{
            flex-shrink:0 !important
        }
        .align-items-start{
            align-items:flex-start !important
        }
        .mb-0{
            margin-bottom:0 !important
        }
        .mb-4{
            margin-bottom:1.5rem !important
        }
        .mb-5{
            margin-bottom:3rem !important
        }
        .ms-4{
            margin-left:1.5rem !important
        }
        .py-5{
            padding-top:3rem !important;
            padding-bottom:3rem !important
        }
        .text-white{
            color:#fff !important
        }
         :root {
             --primary: #B78D65;
             --light: #F8F8F8;
             --dark: #252525;
        }
         h1 {
             font-weight: 600 !important;
        }
         h3, h4 {
             font-weight: 500 !important;
        }
        
         .page-header {
             background: linear-gradient(rgba(0, 0, 0, .5), rgba(0, 0, 0, .5)), url(../img/carousel-1.jpg) center center no-repeat;
             background-size: cover;
        }
         .section-title {
             color: var(--primary);
             font-weight: 600;
             letter-spacing: 5px;
             text-transform: uppercase;
        }
         .feature-img {
             position: relative;
             height: 100%;
             min-height: 400px;
        }
         .feature-img img {
             position: absolute;
             width: 60%;
             height: 80%;
             object-fit: cover;
        }
         .feature-img img:last-child {
             margin: 20% 0 0 -40%;
        }
         .feature-img::before {
             position: absolute;
             content: "";
             width: 60%;
             height: 80%;
             top: 10%;
             left: 20%;
             border: 5px solid var(--primary);
             z-index: -1;
        }
                `,
        }}
      />
      <MobileView>
        <div className="wrap">
          <div className="blog">
            <div className="conteudo">
              <img alt="home alone" src={img2} />
              <hr />
              <p>{t("officesoltxt1")} </p>
            </div>

            <div className="conteudo">
              <img alt="home alone" src={img1} />
              <hr />
              <p>{t("officesoltxt2")}</p>
            </div>
          </div>
        </div>
      </MobileView>
      <BrowserView>
      <>
      <div class="container-fluid page-header py-5 mb-5 wow fadeIn">
        <div class="container py-5">
            <h1 class="display-1 text-white animated slideInDown">{t("Smart Office System")}</h1>
        </div>
    </div>


    <div class="container-xxl py-5">
        <div class="container">
            <div class="row g-5">
                <div class="col-lg-6 wow fadeInUp">
                    <h4 class="section-title">Why Choose Us!</h4>
                    <h1 class="display-5 mb-4">Why You Should Trust Us?</h1>
                    <p class="mb-4"> {t("officesoltxt1")}</p>
                    <div class="row g-4">
                        <div class="col-12">
                            <div class="d-flex align-items-start">
                                <img class="flex-shrink-0" src={img1} alt="Icon"/>
                                <div class="ms-4">
                                    <h3>Design Approach</h3>
                                    <p class="mb-0">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-12">
                            <div class="d-flex align-items-start">
                                <img class="flex-shrink-0" src={img2}  alt="Icon"/>
                                <div class="ms-4">
                                    <h3>Innovative Solutions</h3>
                                    <p class="mb-0">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-12">
                            <div class="d-flex align-items-start">
                                <img class="flex-shrink-0" src={img3}  alt="Icon"/>
                                <div class="ms-4">
                                    <h3>Project Management</h3>
                                    <p class="mb-0">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 wow fadeInUp">
                    <div class="feature-img">
                        <img class="img-fluid" src={img4}  alt=""/>
                        <img class="img-fluid" src={img5}  alt=""/>
                    </div>
                </div>
            </div>
        </div>
    </div>      </>
        {/* <div>
          <section className="u-clearfix u-section-1" id="carousel_cceb">
            <div className="u-clearfix u-sheet u-sheet-1">
              <div className="u-clearfix u-expanded-width u-gutter-0 u-layout-wrap u-layout-wrap-1">
                <div className="u-gutter-0 u-layout">
                  <div className="u-layout-row">
                    <div className="u-size-26">
                      <div className="u-layout-col">
                        <div className="u-align-left u-container-style u-layout-cell u-left-cell u-size-60 u-layout-cell-1">
                          <div
                            className="u-container-layout u-valign-middle-md u-valign-middle-xl u-valign-top-sm u-valign-top-xs u-container-layout-1"
                            style={{ backgroundColor: "#009073 !important" }}
                          >
                            <div className="u-border-9 u-border-palette-1-base u-line u-line-vertical u-line-1" />
                            <h1
                              className="u-align-left-md u-text u-title u-text-1"
                              style={{
                                fontFamily: "Gowun Dodum",
                                fontWeight: "bold",
                              }}
                            >
                              {t("INTRODUCTION")}
                            </h1>
                            <p
                              className="u-align-left-md u-large-text u-text u-text-variant u-text-2"
                              style={{ fontFamily: "Gowun Dodum" }}
                            >
                              {t("officesoltxt1")}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="u-size-34">
                      <div className="u-layout-col">
                        <div className="u-align-left u-container-style u-layout-cell u-right-cell u-size-20 u-size-20-md u-layout-cell-2">
                          <div className="u-container-layout">
                            <img
                              src={img1}
                              alt="Myimage"
                              className="u-image u-image-default u-image-1"
                            />
                          </div>
                        </div>
                        <div className="u-align-left u-container-style u-layout-cell u-right-cell u-size-20 u-size-20-md u-layout-cell-3">
                          <div className="u-container-layout">
                            <img
                              src={img2}
                              alt="Myimage"
                              className="u-image u-image-default u-image-2"
                            />
                          </div>
                        </div>
                        <div className="u-align-left u-container-style u-layout-cell u-right-cell u-size-20 u-size-20-md u-layout-cell-4">
                          <div className="u-container-layout">
                            <img
                              src={img3}
                              alt="Myimage"
                              className="u-expanded-height-lg u-expanded-height-md u-expanded-height-xl u-expanded-height-xs u-image u-image-default u-image-3"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="u-clearfix u-section-4" id="carousel_207b">
            <div className="u-clearfix u-sheet u-sheet-1">
              <div className="u-opacity u-opacity-25 u-palette-2-light-1 u-shape u-shape-rectangle u-shape-1" />
              <div className="u-align-left u-left-0 u-palette-1-base u-shape u-shape-2" />
              <img
                src={img4}
                alt="Myimage"
                className="u-align-left u-image u-image-1"
              />
              <div className="u-align-left u-container-style u-expanded-width-sm u-group u-right-0 u-group-1">
                <div className="u-container-layout u-container-layout-1">
                  <h2
                    className="u-align-left-md u-text u-text-1"
                    style={{ fontFamily: "Gowun Dodum", fontWeight: "bold" }}
                  >
                    {t("Features")}
                  </h2>
                  <p className="u-align-left-md u-text u-text-2">
                    {t("officesoltxt2")}
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div> */}
      </BrowserView>
      <Footer />

    </>
  );
};
