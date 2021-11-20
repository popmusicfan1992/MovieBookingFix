import React, { Fragment, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { history } from '../../../../App';
import { Select } from 'antd';

//Hook đa ngôn ngữ
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import _ from 'lodash';
import { TOKEN, USER_LOGIN } from '../../../../util/settings/config';

const { Option } = Select;


export default function Header(props) {

    const { userLogin } = useSelector(state => state.QuanLyNguoiDungReducer);
    const [ isToggle, setToggle ] = useState(false);
    const { t, i18n } = useTranslation();


    const handleChange = (value) => {
        i18n.changeLanguage(value);
    };


    const renderLogin = () => {
        if (_.isEmpty(userLogin)) {
            return <Fragment>
                <button onClick={() => {
                    history.push('/login');
                }} className="self-center px-8 py-3 rounded">{t('signin')}</button>
                <button onClick={() => {
                    history.push('/register');
                }} className="self-center px-8 py-3 font-semibold rounded bg-violet-600 text-coolGray-50">{t('register')}</button>

            </Fragment>;
        }


        return <Fragment> <button onClick={() => {
            history.push('/profile');
        }} className="self-center px-8 py-3 rounded">Hello ! {userLogin.taiKhoan}</button>
            <button onClick={() => {
                localStorage.removeItem(USER_LOGIN);
                localStorage.removeItem(TOKEN);
                history.push('/home');
                window.location.reload();
            }} className="text-yellow-500 mr-5">Đăng xuất</button>
        </Fragment>;
    };
    let activeClass = isToggle ? 'active' : '';
    return (
        <header className="nav-wrapper">
            <div className="container">
                <div className="nav">
                    <a href="#" className="logo"><i className="bx bx-movie-play bx-tada main-color" />T<span className="main-color">i</span>x</a>
                    <ul className={`nav-menu pt-5 ${activeClass}`} id="nav-menu">
                        <li><a>home</a></li>
                        <li><a href="#movie_hot">Movies</a></li>
                        <li><a href="#theater">Theaters</a></li>
                        <li><a href="https://www.facebook.com/profile.php?id=100006352638655" target="_blank">Contact</a></li>
                        <li><a className="btn btn-hover"><span>Sign in</span></a></li>
                        <li><a className="btn btn-hover"><span>Sign up</span></a></li>
                        <li>
                            <select className="select-language">
                                <option value="vietnam" selected>Tiếng Việt</option>
                                <option value="china"> chinese</option>
                                <option value="english"> EngLish</option>
                            </select>
                        </li>
                    </ul>
                    <div className={`hamburger-menu ${activeClass}`} id="hamburger-menu" onClick={() => {
                        setToggle(!isToggle);
                    }}>
                        <div className="hamburger" /></div>
                </div>
            </div>
        </header>


    );
}
