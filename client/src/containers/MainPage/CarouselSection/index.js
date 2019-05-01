import React from 'react';
import Swiper from 'swiper';

import './index.scss';

const CarouselSection = ({promotions}) => {

    React.useEffect(() => {
        new Swiper('.main-page_carousel', {
            loop: true,
            autoplay: {
                delay: 5000
            }
        });
    });

    return (
        <section className="main-page_carousel">
            <div className="swiper-wrapper">
                {
                    promotions.map(item => {
                        return (
                            <div  
                                key={item.image.id} 
                                className="swiper-slide"
                            >
                                <img src={item.image.url} alt="promtion"/>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    );
}

export default CarouselSection;
