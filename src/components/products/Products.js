import React, { useEffect } from 'react'
import './product.css'
import { Footer } from './../footer/Footer'

import { Spinner } from './../spinner/Spinner'
import axios from 'axios';

import apiJSON from './../../API.json'
import { NavLink } from 'react-router-dom';

import { ProductTypesCarousel } from '../carousels/ProductTypesCarousel';


export const Products = () => {
    const [spinner, setSpinner] = React.useState(false)
    const [data, setData] = React.useState([])
    useEffect(() => {
        window.scrollTo(0, 0);
        setSpinner(true);
        axios.get(`${apiJSON.API_URL}api/getallprod`).then(r => {
            console.log(r.data)
            // setData(r.data)
            if (localStorage.getItem("lang") === "ru") {
                setData(r.data.filter((item) => [item, item.name = item.nameRU, item.description = item.descriptionRU]))
            } else if (localStorage.getItem("lang") === "en") {
                setData(r.data)
            } else (
                setData(r.data.filter((item) => [item, item.name = item.nameGE, item.description = item.descriptionGE]))
            )
            setSpinner(false);
        })

    }, [])

    const listItems = data.map((item) =>
        <NavLink to={`/products/${item._id}`} style={{ textDecoration: 'none' }}>
            <div className="card" key={item.id}>
                <div className="card_img">
                    <img src={`${apiJSON.API_URL}public/images/` + item.mainImage} alt="" />
                </div>
                <div className="card_header">
                    <h2>{item.name}</h2>
                    <p>{item.description}</p>
                </div>
            </div>
        </NavLink>
    );
    return (
        <>
            <div className='prod-div-center'>
                {spinner ? (
                    <>
                        <div style={{ height: 500 }}>
                        </div>
                        <Spinner />
                    </>
                ) : (
                    <div className="main_content">
                        {listItems}
                    </div>
                )}
            </div>



            <div>
                <h1 style={{ textAlign: 'left', alignItems: 'left', fontFamily: "Gowun Dodum", borderLeft: '4px solid #009073', paddingLeft: 15 }}>Other type of products</h1>
            </div>
            <ProductTypesCarousel ProductList={[
                { mainImage: 'http://homealone.ge/wp-content/uploads/2021/07/audio.png', name: 'Audio Products', type: 'Audio_Products' },
                { mainImage: 'http://homealone.ge/wp-content/uploads/2021/07/interact.png', name: 'Interaction Center', type: 'Interaction_Center' },
                { mainImage: 'http://homealone.ge/wp-content/uploads/2021/07/light.png', name: 'Smart Lighting', type: 'Smart_Lighting' },
                { mainImage: 'http://homealone.ge/wp-content/uploads/2021/07/security.png', name: 'Home Security', type: 'Home_Security' },
                { mainImage: 'http://homealone.ge/wp-content/uploads/2021/07/curtain.png', name: 'Smart Curtain', type: 'Smart_R+T' },
                { mainImage: 'http://homealone.ge/wp-content/uploads/2021/07/hvac.png', name: 'Temperature Control', type: 'Smart_HVAC' },
                { mainImage: 'http://homealone.ge/wp-content/uploads/2021/07/Iynque-Flurry-Extras-9-Apple-Remote-1_80x80.png', name: 'Home Entertaiment', type: 'Home_Entertaiment' },
                { mainImage: 'http://homealone.ge/wp-content/uploads/2021/07/home.png', name: 'Domestic Appliances', type: 'Domestic_Appliances' },
            ]} />
            <div style={{ marginBottom: 20 }}></div>

            <Footer />
        </>
    )
}