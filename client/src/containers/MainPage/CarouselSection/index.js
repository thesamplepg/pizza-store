import React from 'react';
import Swiper from 'swiper';

import './index.scss';

class CarouselSection extends React.Component {

    componentDidMount() {
        new Swiper('.main-page_carousel', {
            loop: true,
            autoplay: {
                delay: 5000
            }
        });
    }

    render () {
        return (
            <section className="main-page_carousel">
                <div className="swiper-wrapper">
                    {
                        this.props.promotions.map(item => {
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
}

export default CarouselSection;
