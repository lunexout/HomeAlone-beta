import React from 'react'
import img1 from './images/so_left1-660b28d697.jpg';
import img2 from './images/so_left2-00979d4640.jpg';
import img3 from './images/solution_bg7-f15c48d61f.jpg';
import img4 from './images/solution_bg5-febe4b3d08.jpg';
import img5 from './images/hotel.png';
import img6 from './images/home.png';
import img7 from './images/bank.png';


import './../news/News.css';
import { Footer } from '../footer/Footer';
import { NavLink } from 'react-router-dom';


export const SmartOffice = () => {
    return (
        <>
       <div>
         <section className="u-clearfix u-section-1" id="carousel_cceb">
           <div className="u-clearfix u-sheet u-sheet-1">
             <div className="u-clearfix u-expanded-width u-gutter-0 u-layout-wrap u-layout-wrap-1">
               <div className="u-gutter-0 u-layout">
                 <div className="u-layout-row">
                   <div className="u-size-26">
                     <div className="u-layout-col">
                       <div className="u-align-left u-container-style u-layout-cell u-left-cell u-size-60 u-layout-cell-1">
                         <div className="u-container-layout u-valign-middle-md u-valign-middle-xl u-valign-top-sm u-valign-top-xs u-container-layout-1" style={{backgroundColor: '#009073 !important'}}>
                           <div className="u-border-9 u-border-palette-1-base u-line u-line-vertical u-line-1" />
                           <h1 className="u-align-left-md u-text u-title u-text-1" style={{fontFamily: "Gowun Dodum",fontWeight:'bold'}}>Home Alone<br />intro
                           </h1>
                           <p className="u-align-left-md u-large-text u-text u-text-variant u-text-2" style={{fontFamily: "Gowun Dodum"}}>Green Office solution is designed for joint office, small and medium enterprises. It is a smart lighting and energy management system.

With the current protection and electricity usage monitoring function, it provides users the more convenient, comfortable and secure smart life.
</p>
                         </div>
                       </div>
                     </div>
                   </div>
                   <div className="u-size-34">
                     <div className="u-layout-col">
                       <div className="u-align-left u-container-style u-layout-cell u-right-cell u-size-20 u-size-20-md u-layout-cell-2">
                         <div className="u-container-layout">
                           <img src={img1} alt="Myimage" className="u-image u-image-default u-image-1" />
                         </div>
                       </div>
                       <div className="u-align-left u-container-style u-layout-cell u-right-cell u-size-20 u-size-20-md u-layout-cell-3">
                         <div className="u-container-layout">
                           <img src={img2} alt="Myimage" className="u-image u-image-default u-image-2" />
                         </div>
                       </div>
                       <div className="u-align-left u-container-style u-layout-cell u-right-cell u-size-20 u-size-20-md u-layout-cell-4">
                         <div className="u-container-layout">
                           <img src={img3} alt="Myimage" className="u-expanded-height-lg u-expanded-height-md u-expanded-height-xl u-expanded-height-xs u-image u-image-default u-image-3" />
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
             <img src={img4} alt="Myimage" className="u-align-left u-image u-image-1" />
             <div className="u-align-left u-container-style u-expanded-width-sm u-group u-right-0 u-group-1">
               <div className="u-container-layout u-container-layout-1">
                 <h2 className="u-align-left-md u-text u-text-1" style={{fontFamily: "Gowun Dodum",fontWeight:'bold'}}>Features</h2>
                 <p className="u-align-left-md u-text u-text-2">24-hour remote control and management.

Monitor the energy consumption by departments, districts and dates.

Automatically adjust the lighting and central A/C as per the environment.

Data recording and analysis by the cloud server, provide targeted energy-saving advice for companies.

User-friendly management backstage, raise the efficiency.
</p>
               </div>
             </div>
           </div>
         </section>
         <section className="u-clearfix u-section-5" id="carousel_af72">
           <div className="u-clearfix u-sheet u-sheet-1">
             <div className="u-clearfix u-expanded-width u-gutter-30 u-layout-wrap u-layout-wrap-1">
               <div className="u-layout">
                 <div className="u-layout-row">
                   <div className="u-size-20 u-size-30-md">
                     <div className="u-layout-col">
                       <div className="u-align-left u-container-style u-layout-cell u-left-cell u-size-36 u-layout-cell-1">
                         <div className="u-container-layout">
                           <div className="u-align-left u-expanded-width-md u-palette-1-light-2 u-shape u-shape-1" />
                           <img src={img5} alt="Myimage" className="u-align-left u-image u-image-1" />
                         </div>
                       </div>
                       <div className="u-align-left u-container-style u-layout-cell u-left-cell u-size-24 u-layout-cell-2">
                         <div className="u-container-layout u-container-layout-2">
                           <NavLink to="/services/smarthome" style={{textDecoration: 'none', color: 'black'}}><h4 className="u-custom-font u-heading-font u-text u-text-1">Smart Home System</h4></NavLink>
                         </div>
                       </div>
                     </div>
                   </div>
                   <div className="u-size-20 u-size-30-md">
                     <div className="u-layout-col">
                       <div className="u-align-left u-container-style u-layout-cell u-size-24 u-layout-cell-3">
                         <div className="u-container-layout u-container-layout-3">
                         <NavLink to="/services/smarthotel" style={{textDecoration: 'none', color: 'black'}}><h4 className="u-custom-font u-heading-font u-text u-text-2">Smart Hotel System</h4></NavLink>
                         </div>
                       </div>
                       <div className="u-align-left u-container-style u-layout-cell u-size-36 u-layout-cell-4">
                         <div className="u-container-layout">
                           <div className="u-align-left u-palette-1-light-2 u-shape u-shape-2" />
                           <img src={img6} alt="Myimage"className="u-align-left u-image u-image-2" />
                         </div>
                       </div>
                     </div>
                   </div>
                   <div className="u-size-20 u-size-60-md">
                     <div className="u-layout-col">
                       <div className="u-align-left u-container-style u-layout-cell u-right-cell u-size-36 u-layout-cell-5">
                         <div className="u-container-layout u-container-layout-5">
                           <div className="u-align-left u-palette-1-light-2 u-shape u-shape-3" />
                           <img src={img7} alt="Myimage" className="u-align-left u-image u-image-3" />
                         </div>
                       </div>
                       <div className="u-align-left u-container-style u-layout-cell u-right-cell u-size-24 u-layout-cell-6">
                         <div className="u-container-layout u-container-layout-6">
                         <NavLink to="/services/installment" style={{textDecoration: 'none', color: 'black'}}> <h4 className="u-custom-font u-heading-font u-text u-text-3">Installment</h4></NavLink>
                         </div>
                       </div>
                     </div>
                   </div>
                 </div>
               </div>
             </div>
           </div>
         </section>
       </div>
       <Footer/>
    </>
    )
}

