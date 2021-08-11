import React from 'react'
import product_card from "./product_data";
import './product.css'
import {Footer} from './../footer/Footer'
export const Products = () => {
    const listItems = product_card.map((item) =>
        <div className="card" key={item.id}>
            <div className="card_img">
                <img src={item.thumb} alt="" />
            </div>
            <div className="card_header">
                <h2>{item.product_name}</h2>
                <p>{item.description}</p>
                <p className="price">{item.price}<span>{item.currency}</span></p>
            </div>
        </div>

    );
    return (
        <>
        <div className='prod-div-center'>
            <div className="main_content">
                {listItems}
            </div>
        </div>
        <Footer/>
        </>
    )
}