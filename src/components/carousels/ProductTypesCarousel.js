import React from 'react'
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const options = {
  0: {
      items: 2,
  },
  450: {
      items: 2,
  },
  800: {
      items: 4,
  },
  1200: {
      items: 9,
  },
  1400: {
      items: 9
  }
}

export const ProductTypesCarousel = ({ProductList}) => {
  const {t} = useTranslation()
  const RenderProductTypeCarousel = ProductList.map((el, index) => {
        return (
          <>
            <NavLink className='nav-item' activeClassName="nav-active" to={el.single ? `/products/${el._id}` : `/products/group/${el.type}`} style={{textDecoration: 'none',color: '#000'}}>
            <div
              className="prod-circle"
              key={el.mainImage + el.name + index}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <div className="prod-item">
                <img alt={el.name} className="slider-img" src={el.mainImage} />
              </div>
              <div>
                <p style={{ textDecoration: 'none',fontWeight: 700 }}>{t(`${el.name}`)}</p>
              </div>
            </div>
            </NavLink>
          </>
        )
      })
  
    return(
        <>
          <div className='owl-prod-cont'>
          <OwlCarousel
            className="owl-theme"
            responsive={options}
          >
            {RenderProductTypeCarousel}
          </OwlCarousel>
          </div>
        </>
    )
}