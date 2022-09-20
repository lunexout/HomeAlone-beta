/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios'
import React, { useEffect } from 'react'
import './prodcss.css'
import dataJSON from './../../../API.json'

import { Spinner } from '../../spinner/Spinner'

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"
import SwiperCore, {
    Pagination, Navigation
} from 'swiper/core';
import { ProductTypesCarousel } from '../../carousels/ProductTypesCarousel';
// import { SmartBanner } from '../../smartbanner/SmartBanner';
import { Footer } from '../../footer/Footer';
import { ProductBann } from '../ProductBann';
import { useTranslation } from "react-i18next";

SwiperCore.use([Pagination, Navigation]);

export const Singlemain = ({ match }) => {
    const width_proportion = '50%';
    const { t } = useTranslation();

    const [singleProd, setSingleProd] = React.useState({})
    const [relatedProducts, setRelatedProducts] = React.useState([])
    const [isSpinner, setSpinner] = React.useState(false)

    // const setTest = {}
    useEffect(() => {
        window.scrollTo(0, 0);
        setSpinner(true)
        axios.get(`${dataJSON.API_URL}api/getconcretprod/${match.params.id}`).then(result => {
            if (localStorage.getItem("lang") === "ru") {
                setSingleProd({ name: result.data.product.nameRU, description: result.data.product.descriptionRU, properties: result.data.product.propertiesRU, images: result.data.product.images, mainImage: result.data.product.mainImage })
            } else if (localStorage.getItem("lang") === "ge") {
                setSingleProd({ name: result.data.product.nameGE, description: result.data.product.descriptionGE, properties: result.data.product.propertiesGE, images: result.data.product.images, mainImage: result.data.product.mainImage })
            } else {
                setSingleProd(result.data.product)
            }


            
            // setTest({name: result.data.product.name, description: result.data.product.description})
            axios.get(`${dataJSON.API_URL}api/getconcrettypeprod/${result.data.productType}`).then(r => {
                r.data.map((item) => {
                    let newArr = item.products.map(item => {
                        let namer;
                        if (localStorage.getItem("lang") === "ru") {
                            namer=item.nameRU;
                        } else if (localStorage.getItem("lang") === "en") {
                          namer=item.name;
                        } else
                        namer=item.nameGE;
                        return {
                            mainImage: `${dataJSON.API_URL}public/images/` + item.mainImage,
                            name: namer,
                            type: result.data.productType,
                            single: true,
                            _id: item._id
                        }
                    });
                    setRelatedProducts([...newArr])
                    setSpinner(false)
                })
            })
        })
    }, [])


useEffect(()=>{
    let tabs = document.querySelectorAll(".tabscss li");
let tabsArray = Array.from(tabs);
let divs = document.querySelectorAll(".contentcss > div");
let divsArray = Array.from(divs);

// console.log(tabsArray);

tabsArray.forEach((ele) => {
  ele.addEventListener("click", function (e) {
    // console.log(ele);
    tabsArray.forEach((ele) => {
      ele.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
    divsArray.forEach((div) => {
      div.style.display = "none";
    });
    // console.log(e.currentTarget.dataset.cont);
    document.querySelector(e.currentTarget.dataset.cont).style.display = "block";
  });
});
})


    return (
        <>
            {singleProd && console.log(singleProd)}
            {isSpinner ? (
                <>
                    <div style={{ height: '100vh', backgroundColor: '#20232A', display: 'flex', justifyContent: 'center', alignItems: 'center', borderTop: '4px solid #32363E' }}>
                        <Spinner />
                    </div>
                </>
            ) : (
                <>
                    {/* <div style={{ display: 'flex', flexDirection: 'column', }}>
                        {singleProd.images && singleProd.images.map((el, eli) => {
                            return (
                                <>
                                    {singleProd.properties && singleProd.properties.map((ele, elei) => {
                                        return (
                                            <>
                                                {eli === elei && (
                                                    <>
                                                        {singleProd.description && singleProd.description.split('●').map((it, i) => {
                                                            return (
                                                                <>
                                                                    {elei === i && (<div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', alignItems: 'center', gap: 30, color: '#20232A' }}>
                                                                        <div style={{}}>
                                                                            <img src={`${dataJSON.API_URL}public/images/` + el.url} alt=""
                                                                                style={{ width: 900, height: 'auto', maxWidth: '100%' }} className="animate__animated animate__backInLeft" />
                                                                        </div>
                                                                        <div style={{ display: 'flex', flexDirection: 'column', fontSize: 30 }} >
                                                                            <p style={{ fontFamily: "Gowun Dodum", fontSize: 30, fontWeight: 'bold' }} className="animate__animated animate__backInUp">{ele.prop} {ele.value}</p>
                                                                            <p> {i > 0 && <><span style={{ color: '#009073' }}>●</span></>} {it}</p>
                                                                        </div>
                                                                    </div>)}
                                                                </>
                                                            )
                                                        })}

                                                    </>
                                                )}
                                            </>
                                        )
                                    })}
                                </>
                            )
                        })}
                    </div> */}
                    
                    <div className='single-div'>
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', gap: 30 }} className="single-prod-cont">
                            <Swiper style={{ display: 'flex', flex: 1.4 }} pagination={{
                                "type": "progressbar"
                            }} navigation={true} className="mySwiper">

                                {singleProd.images && singleProd.images.map(el => {
                                    return (
                                        <>
                                            <SwiperSlide>
                                                <img src={`${dataJSON.API_URL}public/images/` + el.url} alt="" style={{ width: 700, height: 'auto', maxWidth: '100%' }} />
                                            </SwiperSlide>
                                        </>
                                    )
                                })}
                            </Swiper>
                            <div style={{ display: 'flex', flex: 1, padding: 10 }} className='single-desc'>
                                <div style={{ dsiplay: 'flex', flexDirection: 'column', alignItems: 'left', textAlign: 'left' }}>
                                    <h1 className='single-prod-header'>{singleProd.name}</h1>
                                    {singleProd.description && singleProd.description.split('●').map((it, i) => {
                                        return (<><p> {i > 0 && <><span style={{ color: '#009073' }}>●</span></>} {it}</p></>)
                                    })}
                                </div>
                            </div>
                        </div>
                        <ul class="tabscss">
  <li class="active" data-cont=".one" style={{width: width_proportion, borderRadius:"100px"}}>{t("Properties")}</li>
  <li data-cont=".two" style={{width: width_proportion, borderRadius:"100px"}}>{t("Description")}</li>
</ul>
<div class="contentcss">
  <div class="one">
    
  <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '100%', margin: '30px auto' }}>
                            {singleProd.properties && singleProd.properties.map(i => {
                                return (
                                    <>
                                        <div style={{ display: 'flex' }} className='row-div'>
                                            <div style={{ width: '100%', maxWidth: '100%', padding: 8 }} className='prop-div'>
                                                {i.prop}:
                                            </div>
                                            <div style={{ width: '100%', maxWidth: '100%', padding: 8 }} className='value-div'>
                                                {i.value}
                                            </div>
                                        </div>
                                    </>
                                )
                            })}
                        </div>


  </div>
  <div class="two">
    

  <div style={{ display: 'flex', flexDirection: 'column', }}>
                        {singleProd.images && singleProd.images.map((el, eli) => {
                            return (
                                <>
                                    {singleProd.properties && singleProd.properties.map((ele, elei) => {
                                        return (
                                            <>
                                                {eli === elei && (
                                                    <>
                                                        {singleProd.description && singleProd.description.split('●').map((it, i) => {
                                                            return (
                                                                <>
                                                                    {elei === i && (<div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', alignItems: 'center', gap: 30, color: '#20232A' }}>
                                                                        <div style={{}}>
                                                                            <img src={`${dataJSON.API_URL}public/images/` + el.url} alt=""
                                                                                style={{ width: 900, height: 'auto', maxWidth: '100%' }} className="animate__animated animate__backInLeft" />
                                                                        </div>
                                                                        <div style={{ display: 'flex', flexDirection: 'column', fontSize: 30 }} >
                                                                            <p style={{ fontFamily: "Gowun Dodum", fontSize: 30, fontWeight: 'bold' }} className="animate__animated animate__backInUp">{ele.prop} {ele.value}</p>
                                                                            <p> {i > 0 && <><span style={{ color: '#009073' }}>●</span></>} {it}</p>
                                                                        </div>
                                                                    </div>)}
                                                                </>
                                                            )
                                                        })}

                                                    </>
                                                )}
                                            </>
                                        )
                                    })}
                                </>
                            )
                        })}
                    </div> 


  </div>
</div>
                        {/* <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '100%', margin: '30px auto' }}>
                            {singleProd.properties && singleProd.properties.map(i => {
                                return (
                                    <>
                                        <div style={{ display: 'flex' }} className='row-div'>
                                            <div style={{ width: '100%', maxWidth: '100%', padding: 8 }} className='prop-div'>
                                                {i.prop}:
                                            </div>
                                            <div style={{ width: '100%', maxWidth: '100%', padding: 8 }} className='value-div'>
                                                {i.value}
                                            </div>
                                        </div>
                                    </>
                                )
                            })}
                        </div> */}
                        <div>
                            <h1 style={{ textAlign: 'left', alignItems: 'left', fontFamily: "Gowun Dodum", borderLeft: '4px solid #009073', paddingLeft: 15 }}>{t("Related products")}</h1>
                        </div>
                        <ProductTypesCarousel ProductList={relatedProducts} />
                        <div style={{ marginBottom: 20 }}></div>
                        
                        <ProductBann />
                        <div style={{ marginBottom: 20 }}></div>
                    </div>

                   
                    <Footer />
                </>
            )}
        </>
    )
}
