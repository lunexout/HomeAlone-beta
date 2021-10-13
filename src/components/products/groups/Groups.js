import axios from "axios";
import React from "react";
import { NavLink } from "react-router-dom";
import { Footer } from "../../footer/Footer";
import { Spinner } from "../../spinner/Spinner";

import apiJSON from './../../../API.json'
import { ProductTypesCarousel } from '../../carousels/ProductTypesCarousel';

import logoprod1 from './../../../assets/audio.png';
import logoprod2 from './../../../assets/interact.png';
import logoprod3 from './../../../assets/light.png';
import logoprod4 from './../../../assets/security.png';
import logoprod5 from './../../../assets/Curtain_4ae1b6b39b529.png';
import logoprod6 from './../../../assets/hvac.png';
import logoprod7 from './../../../assets/Iynque-Flurry-Extras-9-Apple-Remote-1_80x80.png';
import logoprod8 from './../../../assets/home.png';

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
                { mainImage: logoprod1, name: 'Audio Products', type: 'Audio_Products' },
                { mainImage: logoprod2, name: 'Interaction Center', type: 'Interaction_Center' },
                { mainImage: logoprod3, name: 'Smart Lighting', type: 'Smart_Lighting' },
                { mainImage: logoprod4, name: 'Home Security', type: 'Home_Security' },
                { mainImage: logoprod5, name: 'Smart Curtain', type: 'Smart_R+T' },
                { mainImage: logoprod6, name: 'Home Entertaiment', type: 'Home_Entertaiment' },
                { mainImage: logoprod7, name: 'Smart HVAC', type: 'Smart_HVAC' },
                { mainImage: logoprod8, name: 'Domestic Appliances', type: 'Domestic_Appliances' },
            ]} />
            <div style={{ marginBottom: 20 }}></div>
            <Footer />
        </>
    )
}