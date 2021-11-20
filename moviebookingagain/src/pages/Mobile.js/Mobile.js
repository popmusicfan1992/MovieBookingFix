import React from 'react';
import { Carousel } from 'antd';

export default function Mobile() {


    const renderImg = () => {
        let arr = [];
        for (let i = 1; i <= 16; i++) {
            arr.push(<img src={`https://tix.vn/app/assets/img/icons/slide/slide${i}.jpg`} alt="123"></img>);

        }
        return arr.map((item, index) => {
            return <div className='w-full h-full overflow-hidden '>
                {item}
            </div>;
        });
    };

    return (
        <div id="homeApp" className="mt-20">
            <div className="main-mobile">
                <div className="grid md:grid-cols-2 gap-5 sm:grid-cols-1 text-white px-20">
                    <div className="left text-center">
                        <p className="textLeft">ỨNG DỤNG ĐẶT VÉ XEM PHIM TIỆN LỢI ĐÃ CÓ TRÊN SMARTPHONE</p>
                        <p className>Không chỉ đặt vé, bạn còn có thể bình luận phim, chấm điểm rạp và đổi quà hấp dẫn.</p>
                        <p>Tải ứng dụng ngay:</p>
                        <div className="grid lg:grid-cols-2 gap-5 md:grid-cols-1"><a href="https://play.google.com/store?utm_source=apac_med&utm_medium=hasem&utm_content=Oct0121&utm_campaign=Evergreen&pcampaignid=MKT-EDR-apac-vn-1003227-med-hasem-py-Evergreen-Oct0121-Text_Search_BKWS-BKWS%7cONSEM_kwid_43700063993334917_creativeid_524230520620_device_c&gclid=Cj0KCQiAys2MBhDOARIsAFf1D1curz5s_Vez9-L752IBeXgOBo3J4CBNUAMhGFPQ1Lbv3TUfULi8_MEaAsyWEALw_wcB&gclsrc=aw.ds" target="_blank" style={{ width: 300 }}><img src="https://eitguide.net/wp-content/uploads/2017/02/GetItOnGooglePlay-badge.png" alt={123} style={{ height: 100 }} /></a><a href="https://www.apple.com/vn/app-store/" target="_blank" style={{ width: 300 }}><img src="https://jobbertunity.com/wp-content/uploads/2020/02/apple-store-logo-4.png" alt={123} style={{ height: 100 }} /></a></div>
                    </div>
                    <div className="right" style={{ width: 450 }}>
                        <img className="img-responsive phone-img" src="https://tix.vn/app/assets/img/icons/mobile.png" alt="Loading..." />
                        <Carousel autoplay dots={false}>
                            {renderImg()}
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>

    );
}
