import React, { useEffect, useState } from 'react';
import HomeMenu from './HomeMenu/HomeMenu';
//Kết nối redux
import { useSelector, useDispatch } from 'react-redux';
import Film from '../../components/Film/Film';
import MultipleRowSlick from '../../components/RSlick/MultipleRowSlick';
import { layDanhSachPhimAction } from '../../redux/actions/QuanLyPhimActions';
import { layDanhSachHeThongRapAction } from '../../redux/actions/QuanLyRapActions';
import HomeCarousel from '../../templates/HomeTemplate/Layout/HomeCarousel/HomeCarousel';
import OwlCarousel from 'react-owl-carousel2';
import 'react-owl-carousel2/lib/styles.css';
import 'react-owl-carousel2/src/owl.theme.default.css';
import Mobile from '../Mobile.js/Mobile';
export default function Home(props) {

    const { arrFilm } = useSelector(state => state.QuanLyPhimReducer);
    const { heThongRapChieu } = useSelector(state => state.QuanLyRapReducer);
    const dispatch = useDispatch();
    console.log('propsHome', arrFilm);


    // props.match.params
    // const renderFilms = () => {
    //     return arrFilm.map((phim, index) => {
    //         return <Film key={index} />


    //     })
    // }
    const options = {
        items: 2,
        dots: false,
        loop: true,
        autoplay: true,
        autoplayHoverPause: true,
        responsive: {
            500: {
                items: 3
            },
            1280: {
                items: 4
            },
            1600: {
                items: 6
            }
        }
    };
    useEffect(() => {
        const action = layDanhSachPhimAction();
        dispatch(action); //dispatch function từ thunk

        dispatch(layDanhSachHeThongRapAction());

    }, []);
    // < section className = "text-gray-600 body-font" >
    //     <div className="container px-5 py-24 mx-auto " >

    //         <MultipleRowSlick arrFilm={arrFilm} />
    //         {/* <div className="flex flex-wrap  " style={{ justifyContent: 'center' }}>
    //                 {renderFilms()}
    //             </div> */}
    //     </div>
    //     </ >
    return (
        <div>
            <HomeCarousel />

            <div className="section">
                <div className="container">
                    <div className="section-header">
                        latest movies
                    </div>
                    <OwlCarousel options={options} className="movies-slide carousel-nav-center owl-carousel mr-5">
                        {/* MOVIE ITEM */}
                        <a href="#" className="movie-item ">
                            <img src="./images/movies/theatre-dead.jpg" alt />
                            <div className="movie-item-content">
                                <div className="movie-item-title">
                                    Theatre of the dead
                                </div>
                                <div className="movie-infos">
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
                            </div>
                        </a>
                        {/* END MOVIE ITEM */}
                        {/* MOVIE ITEM */}
                        <a href="#" className="movie-item">
                            <img src="./images/movies/transformer.jpg" alt />
                            <div className="movie-item-content">
                                <div className="movie-item-title">
                                    Transformer
                                </div>
                                <div className="movie-infos">
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
                            </div>
                        </a>
                        {/* END MOVIE ITEM */}
                        {/* MOVIE ITEM */}
                        <a href="#" className="movie-item">
                            <img src="./images/movies/resident-evil.jpg" alt />
                            <div className="movie-item-content">
                                <div className="movie-item-title">
                                    Resident Evil
                                </div>
                                <div className="movie-infos">
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
                            </div>
                        </a>
                        {/* END MOVIE ITEM */}
                        {/* MOVIE ITEM */}
                        <a href="#" className="movie-item">
                            <img src="./images/movies/captain-marvel.png" alt />
                            <div className="movie-item-content">
                                <div className="movie-item-title">
                                    Captain Marvel
                                </div>
                                <div className="movie-infos">
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
                            </div>
                        </a>
                        {/* END MOVIE ITEM */}
                        {/* MOVIE ITEM */}
                        <a href="#" className="movie-item">
                            <img src="./images/movies/hunter-killer.jpg" alt />
                            <div className="movie-item-content">
                                <div className="movie-item-title">
                                    Hunter Killer
                                </div>
                                <div className="movie-infos">
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
                            </div>
                        </a>
                        {/* END MOVIE ITEM */}
                        {/* MOVIE ITEM */}
                        <a href="#" className="movie-item">
                            <img src="./images/movies/blood-shot.jpg" alt />
                            <div className="movie-item-content">
                                <div className="movie-item-title">
                                    Bloodshot
                                </div>
                                <div className="movie-infos">
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
                            </div>
                        </a>
                        {/* END MOVIE ITEM */}
                        {/* MOVIE ITEM */}
                        <a href="#" className="movie-item">
                            <img src="./images/movies/call.jpg" alt />
                            <div className="movie-item-content">
                                <div className="movie-item-title">
                                    Call
                                </div>
                                <div className="movie-infos">
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
                            </div>
                        </a>
                        {/* END MOVIE ITEM */}
                    </OwlCarousel>
                </div>
            </div>


            <div className="mx-36">
                <HomeMenu heThongRapChieu={heThongRapChieu} />

            </div>
            <Mobile />
        </div>
    );
}
