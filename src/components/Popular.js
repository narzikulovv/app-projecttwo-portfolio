import React from 'react';
import Slider from "react-slick";
import 'react-toastify/dist/ReactToastify.css';
import CaruselCard from "./CaruselCard";
import CaruselCard2 from "./CaruselCard2";


const Popular = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };



    return (
        <div className="gradiend">
            <div className="container popular_con ">
                <div className="row popular_row">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 popular_col12 ">
                        <div className="container">
                            <h1 className="popular_h1">Popular product</h1>
                        </div>
                    </div>
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 popular_col_slic">
                        <Slider {...settings}>
                            <CaruselCard/>

                            <CaruselCard2/>

                            <CaruselCard/>

                            <CaruselCard2/>

                            <CaruselCard/>

                            <CaruselCard2/>

                        </Slider>
                    </div>

                </div>
            </div>



        </div>
    );
};

export default Popular;