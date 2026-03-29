import React from 'react';
import bannerImg from '../../assets/bg-shadow.png';

const Banner = () => {
    return (
        <div className="min-h-[70vh] rounded-2xl bg-[#131313]" style={{ backgroundImage: `url(${bannerImg})`}}>
            Banner
        </div>
    );
};

export default Banner;