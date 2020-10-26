import React from 'react';

import './about-us.styles.scss';


const AboutUsPage = () => (
    <div className='container'>
        <div className='aboutus'>
            <p className='headername'>THE FLOOF STORE</p>
            <p className='content'>"This a a luxurious brand known for its 
            edgy and stylish fashion statements."</p>
        </div>
        <br/>
        <div className='icons'>
            <a href='https://www.instagram.com/' target="_blank"><div className='social'><img className='social1' src='https://i.ibb.co/ZVWZHZ3/insta-logo.png'/></div></a>
            <a href='https://twitter.com/' target="_blank"><div className='social'><img className='social1' src='https://i.ibb.co/vPgkTJB/twitter-logo.png'/></div></a>
            <a href='https://www.facebook.com/' target="_blank"><div className='social'><img className='social1' src='https://www.transparentpng.com/thumb/facebook-logo-png/image-black-facebook-logo-png-26.png'/></div></a>
        </div>
    </div>
    
);

export default AboutUsPage;