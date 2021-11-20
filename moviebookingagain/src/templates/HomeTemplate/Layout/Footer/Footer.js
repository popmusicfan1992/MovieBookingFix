import { AppleOutlined, FacebookOutlined } from '@ant-design/icons';
import _ from 'lodash';
import React from 'react';
import { useSelector } from 'react-redux';

export default function Footer(props) {

    const { heThongRapChieu } = useSelector(state => state.QuanLyRapReducer);

    const arrHeThongRap = _.map(heThongRapChieu, (heThongRap) => _.pick(heThongRap, [ 'maHeThongRap', 'tenHeThongRap', 'logo' ]));


    return (
        <footer className="footer-movie pt-20" style={{ backgroundColor: 'rgb(253, 183, 59)' }}>
            <div className="footer-content px-20">
                <div className="footer-top grid md:grid-cols-4 sm:grid-cols-2 gap-5">
                    <div className="footer-tix">
                        <a href="#" className="font-bold text-xl">
                            <h3>TIX</h3>
                        </a>
                        <a href="#">
                            <p>FAQ</p>
                        </a>
                        <a href="#">
                            <p>Điều khoản TIX</p>
                        </a>
                        <a href="#">
                            <p>Thỏa thuận sử dụng</p>
                        </a>
                        <a href="#">
                            <p>Chính sách bảo mật</p>
                        </a>
                        <a href="#">
                            <p>Giấy phép bản quyền</p>
                        </a>
                    </div>
                    <div className="footer-rap">
                        <h3 className="font-bold text-xl">Đối tác</h3>
                        <div className="footer-rap-img grid grid-cols-4 text-center"><img src="http://movieapi.cyberlearn.vn/hinhanh/bhd-star-cineplex.png" alt={123} style={{ width: 40, height: 40 }} /><img src="http://movieapi.cyberlearn.vn/hinhanh/cgv.png" alt={123} style={{ width: 40, height: 40 }} /><img src="http://movieapi.cyberlearn.vn/hinhanh/cinestar.png" alt={123} style={{ width: 40, height: 40 }} /><img src="http://movieapi.cyberlearn.vn/hinhanh/galaxy-cinema.png" alt={123} style={{ width: 40, height: 40 }} /><img src="http://movieapi.cyberlearn.vn/hinhanh/lotte-cinema.png" alt={123} style={{ width: 40, height: 40 }} /><img src="http://movieapi.cyberlearn.vn/hinhanh/megags.png" alt={123} style={{ width: 40, height: 40 }} /><img src="https://tix.vn/app/assets/img/icons/cnx.jpg" className="rounded-full" alt={123} style={{ width: 40, height: 40 }} /><img src="https://tix.vn/app/assets/img/icons/TOUCH.png" className="rounded-full" alt={123} style={{ width: 40, height: 40 }} /><img src="https://tix.vn/app/assets/img/icons/dongdacinema.png" className="rounded-full" alt={123} style={{ width: 40, height: 40 }} /><img src="https://tix.vn/app/assets/img/icons/bt.jpg" className="rounded-full" alt={123} style={{ width: 40, height: 40 }} /><img src="https://tix.vn/app/assets/img/icons/STARLIGHT.png" className="rounded-full" alt={123} style={{ width: 40, height: 40 }} /><img src="https://tix.vn/app/assets/img/icons/dcine.png" className="rounded-full" alt={123} style={{ width: 40, height: 40 }} /><img src="https://tix.vn/app/assets/img/icons/zalopay_icon.png" className="rounded-full" alt={123} style={{ width: 40, height: 40 }} /></div>
                    </div>
                    <div className="footer-mobile">
                        <h3 className="font-bold text-xl">Ứng dụng trên điện thoại</h3>
                        <a href="#">
                            <div className="mb-5"><img src="data:image/png;base64,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" style={{ width: 100 }} /></div>
                        </a>
                        <a href="#">
                            <div><img src="data:image/png;base64,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" alt={123} style={{ width: 100 }} /></div>
                        </a>
                    </div>
                    <div className="footer-contact">
                        <h3>KẾT NỐI VỚI CHÚNG TÔI</h3>
                        <div className="footer-social ">
                            <div className="flex"><a href="https://www.facebook.com/profile.php?id=100006352638655" target="_blank" className="mr-2 "><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Facebook_icon_2013.svg/1200px-Facebook_icon_2013.svg.png" alt={123} className="rounded-lg" style={{ width: 30, height: 30 }} /></a><a href="https://www.instagram.com/xiaoyangyang00000/" target="_blank" className="mr-2 "><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png" alt={123} style={{ width: 30, height: 30 }} /></a><a href="https://chat.zalo.me/" target="_blank" className="mr-2 "><img src="https://inkythuatso.com/uploads/thumbnails/800/2021/09/zalo-logo-inkythuatso-14-15-05-01.jpg" alt={123} className="rounded-lg" style={{ width: 30, height: 30 }} /></a><a href="https://twitter.com/YushuangLOL" target="_blank" className="mr-2 "><img src="https://upload.wikimedia.org/wikipedia/sco/thumb/9/9f/Twitter_bird_logo_2012.svg/1200px-Twitter_bird_logo_2012.svg.png" alt={123} style={{ width: 30, height: 30 }} /></a></div>
                            <div className="footer_myseft mt-2">
                                <h3>Liên hệ</h3>
                                <p className="text-sm font-semibold"><i className="bx bxs-map mr-2" />Đại học sư phạm , 459 Tôn Đức Thắng , TP.Đà Nẵng</p>
                                <p className="text-sm font-semibold">
                                    <span role="img" aria-label="mail" className="anticon anticon-mail mr-2">
                                        <svg viewBox="64 64 896 896" focusable="false" data-icon="mail" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                                            <path d="M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 110.8V792H136V270.8l-27.6-21.5 39.3-50.5 42.8 33.3h643.1l42.8-33.3 39.3 50.5-27.7 21.5zM833.6 232L512 482 190.4 232l-42.8-33.3-39.3 50.5 27.6 21.5 341.6 265.6a55.99 55.99 0 0068.7 0L888 270.8l27.6-21.5-39.3-50.5-42.7 33.2z" />
                                        </svg>
                                    </span>
                                    popmusicfan1992@gmail.com
                                </p>
                                <p className="text-sm font-semibold"><i className="bx bxs-phone mr-2" />0869067195</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom text-center">
                    <div>
                        <p>Huỳnh Văn Phú 18CNTT2</p>
                        <p>Mọi liên lạc vui lòng liên hệ qua email</p>
                        <p>© 2020. All Rights Reserved.</p>
                    </div>
                </div>
            </div>
        </footer>


    );
}
