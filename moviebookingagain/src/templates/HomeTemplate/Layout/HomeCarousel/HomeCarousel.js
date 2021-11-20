import React, { useEffect } from 'react';
import { Carousel } from 'antd';
import { useSelector, useDispatch } from 'react-redux';

import axios from 'axios';
import { getCarouselAction } from '../../../../redux/actions/CarouselActions';
import './HomeCarousel.css';
import OwlCarousel from 'react-owl-carousel2';
import 'react-owl-carousel2/lib/styles.css';
import 'react-owl-carousel2/src/owl.theme.default.css';


export default function HomeCarousel(props) {

    const { arrImg } = useSelector(state => state.CarouselReducer);

    const dispatch = useDispatch();

    //Sẽ tự kích hoạt khi component load ra 
    useEffect(() => {

        //1 action = {type:'',data}
        //2 (phải cài middleware): callBackFunction (dispatch)

        // const action = getCarouselAction(1);

        dispatch(getCarouselAction());



    }, []);
    let navText = [ "<i class='bx bx-chevron-left'></i>", "<i class='bx bx-chevron-right'></i>" ];

    const options = {
        items: 1,
        dots: false,
        loop: true,
        nav: true,
        navText: navText,
        autoplay: true,
        autoplayHoverPause: true
    };

    const renderImg = () => {
        return arrImg.map((item, index) => {

        });
    };

    return (
        <div class="hero-section">
            <div className="hero-slide">
                <OwlCarousel options={options} className="owl-carousel carousel-nav-center" id="hero-carousel">
                    {/* SLIDE ITEM */}
                    <div className="hero-slide-item">
                        <img src="./images/black-banner.png" alt />
                        <div className="overlay" />
                        <div className="hero-slide-item-content">
                            <div className="item-content-wraper">
                                <div className="item-content-title top-down">
                                    Black Panther
                                </div>
                                <div className="movie-infos top-down delay-2">
                                    <div className="movie-info">
                                        <i className="bx bxs-star" />
                                        <span>9.5</span>
                                    </div>
                                    <div className="movie-info">
                                        <i className="bx bxs-time" />
                                        <span>120 mins</span>
                                    </div>
                                    <div className="movie-info">
                                        <span>HD</span>
                                    </div>
                                    <div className="movie-info">
                                        <span>16+</span>
                                    </div>
                                </div>
                                <div className="item-content-description top-down delay-4">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.Quas, possimus eius.Deserunt non odit, cum vero reprehenderit laudantium odio vitae autem quam, incidunt molestias ratione mollitia accusantium, facere ab suscipit.
                                </div>
                                <div className="item-action top-down delay-6">
                                    <a href="#" className="btn btn-hover">
                                        <i className="bx bxs-right-arrow" />
                                        <span>Watch now</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* END SLIDE ITEM */}
                    {/* SLIDE ITEM */}
                    <div className="hero-slide-item">
                        <img src="./images/supergirl-banner.jpg" alt />
                        <div className="overlay" />
                        <div className="hero-slide-item-content">
                            <div className="item-content-wraper">
                                <div className="item-content-title top-down">
                                    Supergirl
                                </div>
                                <div className="movie-infos top-down delay-2">
                                    <div className="movie-info">
                                        <i className="bx bxs-star" />
                                        <span>9.5</span>
                                    </div>
                                    <div className="movie-info">
                                        <i className="bx bxs-time" />
                                        <span>120 mins</span>
                                    </div>
                                    <div className="movie-info">
                                        <span>HD</span>
                                    </div>
                                    <div className="movie-info">
                                        <span>16+</span>
                                    </div>
                                </div>
                                <div className="item-content-description top-down delay-4">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.Quas, possimus eius.Deserunt non odit, cum vero reprehenderit laudantium odio vitae autem quam, incidunt molestias ratione mollitia accusantium, facere ab suscipit.
                                </div>
                                <div className="item-action top-down delay-6">
                                    <a href="#" className="btn btn-hover">
                                        <i className="bx bxs-right-arrow" />
                                        <span>Watch now</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* END SLIDE ITEM */}
                    {/* SLIDE ITEM */}
                    <div className="hero-slide-item">
                        <img src="./images/wanda-banner.jpg" alt />
                        <div className="overlay" />
                        <div className="hero-slide-item-content">
                            <div className="item-content-wraper">
                                <div className="item-content-title top-down">
                                    Wanda Vision
                                </div>
                                <div className="movie-infos top-down delay-2">
                                    <div className="movie-info">
                                        <i className="bx bxs-star" />
                                        <span>9.5</span>
                                    </div>
                                    <div className="movie-info">
                                        <i className="bx bxs-time" />
                                        <span>120 mins</span>
                                    </div>
                                    <div className="movie-info">
                                        <span>HD</span>
                                    </div>
                                    <div className="movie-info">
                                        <span>16+</span>
                                    </div>
                                </div>
                                <div className="item-content-description top-down delay-4">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.Quas, possimus eius.Deserunt non odit, cum vero reprehenderit laudantium odio vitae autem quam, incidunt molestias ratione mollitia accusantium, facere ab suscipit.
                                </div>
                                <div className="item-action top-down delay-6">
                                    <a href="#" className="btn btn-hover">
                                        <i className="bx bxs-right-arrow" />
                                        <span>Watch now</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* END SLIDE ITEM */}
                </OwlCarousel>
            </div>
        </div>


        // <Carousel effect="fade" style={{width:'100%',padding:0,margin:0}} >
        //     {renderImg()}

        // </Carousel>

    );
}
