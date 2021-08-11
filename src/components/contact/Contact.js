import React from 'react'
import {Footer} from './../footer/Footer'
import './contact.css'
export const Contact = () => {
    return(
        <>
            <section className='contact'>
            <div className='map' style={{margin: '0 auto', maxWidth: '1566px'}}>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d10784.188505644011!2d19.053119335158936!3d47.48899529453826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1543907528304" allowfullscreen title='mapp'></iframe></div>
            </section>
            <Footer/>
        </>
    )
}