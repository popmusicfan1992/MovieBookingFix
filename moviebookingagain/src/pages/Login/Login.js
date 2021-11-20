import { useFormik } from 'formik';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { dangNhapAction } from '../../redux/actions/QuanLyNguoiDungAction';
import { history } from '../../App';
export default function Login(props) {

    const dispatch = useDispatch();

    const { userLogin } = useSelector(state => state.QuanLyNguoiDungReducer);

    console.log('userLogin', userLogin);

    const formik = useFormik({
        initialValues: {
            taiKhoan: '',
            matKhau: '',
        },
        onSubmit: values => {

            const action = dangNhapAction(values);
            dispatch(action);

            console.log('values', values);
        },
    });


    return (
        <div className="login-wrapper">
            <img className="signin--header" src="https://tix.vn/app/assets/img/login/group@2x.png" />
            <form className="font-sans">
                <h2 className="text-center text-4xl text-blue-300 font-display font-semibold  xl:text-2xl
      xl: text-bold">Đăng Nhập</h2>
                <div>
                    <div className="mb-4">
                        <label className="block text-white text-sm font-display font-semibold mb-2 text-left" htmlFor="username">Tài Khoản</label><input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline " name="taiKhoan" type="text" placeholder="NguyenVanA" />
                        <p className="text-red-500 text-xs italic mb-0" />
                    </div>
                    <div className="mb-2">
                        <label className="block  text-sm font-display font-semibold mb-2 text-left text-white" htmlFor="password">Mật Khẩu</label><input name="matKhau" className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />
                        <p className="text-red-500 text-xs italic mb-0" />
                    </div>
                    <div className="text-sm font-display font-semibold text-white text-center mb-5">Nếu bạn chưa có tài khoản?<a className="cursor-pointer text-indigo-600 hover:text-indigo-800" onClick={() => {
                        history.push('/register');
                    }}>Đăng Ký</a></div>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-display font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline mb-5" type="submit" >Đăng Nhập</button>
                </div>
            </form>
            <div className="signin--message">Đăng nhập để được nhiều ưu đãi, mua vé<br />và bảo mật thông tin!</div>
            <div className="signin-close" onClick={() => {
                history.push('/');
            }} />
        </div>

    );
}
