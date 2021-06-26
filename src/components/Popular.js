import React from 'react';
import Slider from "react-slick";

const Popular = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1
    };

    return (
        <div className="gradiend">
            <div className="container popular_con">
                <div className="row popular_row">
                    <div className="col-12 popular_col12">
                        <h1 className="popular_h1">Popular product</h1>
                    </div>
                    <div className="col-12 popular_col_slic">
                        <Slider {...settings}>
                            <div className="col-6">
                                <div className="card">
                                    <img src="" alt=""/>
                                </div>
                            </div>
                            <div className="col-6">
                                <h3>2</h3>
                            </div>
                            <div>
                                <h3>3</h3>
                            </div>
                            <div>
                                <h3>4</h3>
                            </div>
                            <div>
                                <h3>5</h3>
                            </div>
                            <div>
                                <h3>6</h3>
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Popular;