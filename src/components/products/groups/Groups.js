/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import React from "react";
import { NavLink } from "react-router-dom";
import { Footer } from "../../footer/Footer";
import { Spinner } from "../../spinner/Spinner";

import apiJSON from './../../../API.json'
import { ProductTypesCarousel } from '../../carousels/ProductTypesCarousel';


export const Groups = ({ match }) => {
    const [spinner, setSpinner] = React.useState(false)
    const [data, setData] = React.useState([])
    React.useEffect(() => {
        window.scrollTo(0, 0);
        setSpinner(true);
        axios.get(`${apiJSON.API_URL}api/getconcrettypeprod/${match.params.group_id}`).then(r => {
            setData(r.data);
            setSpinner(false);
        })
    }, [match.params.group_id])
    const listItems = data.map((item) =>
        item.products.length > 0 ? (
            item.products.map(item => {
                item.unicProduct && console.log(item.unicProduct)
                return (
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
                )
            })
        ) : (
            <h1 style={{ color: '#fff', fontSize: 70, textAlign: 'center' }}>We dont have products in this section yet.</h1>
        )
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
                        {console.log(data)}
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
                { mainImage: 'http://homealone.ge/wp-content/uploads/2021/07/curtain.png', name: 'Smart R+T', type: 'Smart_R+T' },
                { mainImage: 'http://homealone.ge/wp-content/uploads/2021/07/hvac.png', name: 'Home Entertaiment', type: 'Home_Entertaiment' },
                { mainImage: 'http://homealone.ge/wp-content/uploads/2021/07/Iynque-Flurry-Extras-9-Apple-Remote-1_80x80.png', name: 'Smart HVAC', type: 'Smart_HVAC' },
                { mainImage: 'http://homealone.ge/wp-content/uploads/2021/07/home.png', name: 'Domestic Appliances', type: 'Domestic_Appliances' },
            ]} />
            <div style={{ marginBottom: 20 }}></div>
            <Footer />
        </>
    )
}