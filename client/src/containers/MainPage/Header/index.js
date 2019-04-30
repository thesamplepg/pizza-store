import React from 'react';
import Swiper from 'swiper';

import './index.scss';

const Header = ({promotions}) => {

    React.useEffect(() => {
        new Swiper('.main-page_carousel', {
            loop: true,
            autoplay: {
                delay: 5000
            }
        });
    });

    return (
        <header className="main-page_carousel">
            <div className="swiper-wrapper">
                {
                    promotions.map(item => {
                        const itemStyles = {
                            background: `url('${item.image.url}')`
                        }

                        return (
                            <div  
                                key={item.image.id}
                                style={itemStyles}    
                                className="swiper-slide"
                            ></div>
                        )
                    })
                }
            </div>
        </header>
    );
}

export default Header;
