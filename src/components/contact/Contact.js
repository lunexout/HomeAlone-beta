import React from 'react'
import {Footer} from './../footer/Footer'
import './contact.css'
export const Contact = () => {
    return(
        <>
            <section className='contact'>
            <div className='map' style={{margin: '0 auto', maxWidth: '1566px'}}>
                {/* <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d10784.188505644011!2d19.053119335158936!3d47.48899529453826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1543907528304" allowfullscreen title='mapp'></iframe> */}
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d295.7177902427156!2d41.63571950105126!3d41.647843441387096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406786156492435b%3A0xcaba587799c5e969!2zNjYg4YOk4YOQ4YOg4YOc4YOQ4YOV4YOQ4YOWIOGDm-GDlOGDpOGDmOGDoSDhg6Xhg6Phg6nhg5AsIOGDkeGDkOGDl-GDo-GDm-GDmA!5e0!3m2!1ska!2sge!4v1631260872897!5m2!1ska!2sge" allowfullscreen title='mapp'></iframe>
             </div>
            </section>
            <Footer/>
        </>
    )
}