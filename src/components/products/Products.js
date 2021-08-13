import React, { useEffect } from 'react'
import './product.css'
import {Footer} from './../footer/Footer'

import {Spinner} from './../spinner/Spinner'
import axios from 'axios';

import apiJSON from './../../API.json'

export const Products = () => {
    const [spinner, setSpinner] = React.useState(false)
    const [data, setData] = React.useState([])
    useEffect(() => {
        setSpinner(true);
        axios.get(`${apiJSON.API_URL}api/getallprod`).then(r => {
            console.log(r.data)
            setData(r.data)
            setSpinner(false);
        })

    }, [])

    const listItems = data.map((item) =>
        <div className="card" key={item.id}>
            <div className="card_img">
                <img src={`${apiJSON.API_URL}` + item.mainImage} alt="" />
            </div>
            <div className="card_header">
                <h2>{item.name}</h2>
                <p>{item.description}</p>
            </div>
        </div>
    );
    return (
        <>
        <div className='prod-div-center'>
        {spinner ? (
            <>
                <div style={{height: 500}}>
                </div>
                <Spinner/>
            </>
        ) : (
            <div className="main_content">
                {listItems}
            </div>
        )}
        </div>
        <Footer/>
        </>
    )
}