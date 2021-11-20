import React from 'react';
import { history } from '../../App';

export default function Register(props) {
    return (

        <div className="register-wrapper">
            <img className="signin--header ml-auto mr-auto" src="https://tix.vn/app/assets/img/login/group@2x.png" />
            <form className="font-sans">
                <h2 className="text-center text-4xl text-blue-300 font-display font-semibold  xl:text-2xl
         xl:text-bold">Đăng Ký</h2>
                <div className="grid grid-cols-2 gap-3">
                    <div className="mb-4">
                        <label className="block text-white text-sm font-display font-semibold mb-2 text-left" htmlFor="username">Email</label><input name="email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline  " id="username" type="text" placeholder="abc@gmail.com...." />
                        <p className="text-red-500 text-xs italic mb-0" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-white text-sm font-display font-semibold mb-2 text-left" htmlFor="username">Số điện thoại</label><input name="soDt" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline&quot; " type="text" placeholder="+84............" />
                        <p className="text-red-500 text-xs italic mb-0" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-white text-sm font-display font-semibold mb-2 text-left" htmlFor="username">Họ tên</label><input name="hoTen" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline " id="username" type="text" placeholder="Nguyễn Văn A....." />
                        <p className="text-red-500 text-xs italic mb-0" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-white text-sm font-display font-semibold mb-2 text-left" htmlFor="username">Tài Khoản</label><input name="taiKhoan" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline " id="username" type="text" placeholder="Username" />
                        <p className="text-red-500 text-xs italic mb-0" />
                    </div>
                    <div className="mb-2">
                        <label className="block  text-sm font-display font-semibold mb-2 text-left text-white" htmlFor="password">Mật Khẩu</label><input name="matKhau" className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />
                        <p className="text-red-500 text-xs italic mb-0" />
                    </div>
                    <div className="mb-2">
                        <label className="block  text-sm font-display font-semibold mb-2 text-left text-white" htmlFor="password">Xác nhận mật khẩu</label><input name="xacNhanMatKhau" className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" type="password" placeholder="******************" />
                        <p className="text-red-500 text-xs italic mb-0" />
                    </div>
                    <div className="text-sm font-display font-semibold text-white text-center mb-5 col-span-2">Bạn đã có tài khoản ? <a className="cursor-pointer text-indigo-600 hover:text-indigo-800" onClick={() => {
                        history.push('/login');
                    }}>Đăng Nhập</a></div>
                </div>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-display font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline mb-5" type="submit">Đăng ký</button>
            </form>
            <div className="signin-close" onClick={() => {
                history.push('/');
            }} /></div>


    );
}
