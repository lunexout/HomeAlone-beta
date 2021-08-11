import React from 'react'
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const options = {
  0: {
      items: 2,
  },
  450: {
      items: 2.95,
  },
  800: {
      items: 4.85,
  },
  1200: {
      items: 6,
  },
  1400: {
      items: 7
  }
}

export const ProductTypesCarousel = () => {
  const ProductList = [
    {img: 'http://homealone.ge/wp-content/uploads/2021/07/audio.png', name: 'Audio Products'},
    {img: 'http://homealone.ge/wp-content/uploads/2021/07/interact.png', name: 'Interaction Center'},
    {img: 'http://homealone.ge/wp-content/uploads/2021/07/light.png', name: 'Smart Lighting'},
    {img: 'http://homealone.ge/wp-content/uploads/2021/07/security.png', name: 'Home Security'},
    {img: 'http://homealone.ge/wp-content/uploads/2021/07/curtain.png', name: 'Smart R+T'},
    {img: 'http://homealone.ge/wp-content/uploads/2021/07/hvac.png', name: 'Home Entertaiment'},
    {img: 'http://homealone.ge/wp-content/uploads/2021/07/Iynque-Flurry-Extras-9-Apple-Remote-1_80x80.png', name: 'Smart HVAC'},
    {img: 'http://homealone.ge/wp-content/uploads/2021/07/home.png', name: 'Domestic Appliances'},
  ]
  const RenderProductTypeCarousel = () => {
    return(
      ProductList.map((el, index) => {
        return (
          <>
            <div
              className="prod-circle"
              key={el.img + el.name + index}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <div className="prod-item">
                <img alt={el.name} className="slider-img" src={el.img} />
              </div>
              <div>
                <p style={{ fontWeight: 700 }}>{el.name}</p>
              </div>
            </div>
          </>
        )
      })
    )
  }
    return(
        <>
          <div className='owl-prod-cont'>
          <OwlCarousel
            className="owl-theme"
            responsive={options}
          >
            {RenderProductTypeCarousel()}
          </OwlCarousel>
          </div>
        </>
    )
}