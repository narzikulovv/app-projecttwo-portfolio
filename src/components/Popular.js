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
                        <div className="container">
                            <h1 className="popular_h1">Popular product</h1>
                        </div>
                    </div>
                    <div className="col-12 popular_col_slic">
                        <Slider {...settings}>
                            <div className="col-12 slic_col12">
                                <div className="card slic_card">
                                    <img src="../images/prodcut.png" width="100%" alt=""/>
                                    <div className="write">
                                        <h1>Clyde Core Foil</h1>
                                        <h2>Women's Sneakers</h2>
                                        <button type="button" className="btn btn-light">SHOP</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 slic_col12">
                                <div className="card slic_card">
                                    <img src="../images/product2.png" width="100%" alt=""/>
                                    <div className="write">
                                        <h1>RS-Fast INTL </h1>
                                        <h2>men's Sneakers</h2>
                                        <button type="button" className="btn btn-light">SHOP</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 slic_col12">
                                <div className="card slic_card">
                                    <img src="../images/prodcut.png" width="100%" alt=""/>
                                    <div className="write">
                                        <h1>Clyde Core Foil</h1>
                                        <h2>Women's Sneakers</h2>
                                        <button type="button" className="btn btn-light">SHOP</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 slic_col12">
                                <div className="card slic_card">
                                    <img src="../images/product2.png" width="100%" alt=""/>
                                    <div className="write">
                                        <h1>RS-Fast INTL </h1>
                                        <h2>men's Sneakers</h2>
                                        <button type="button" className="btn btn-light">SHOP</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 slic_col12">
                                <div className="card slic_card">
                                    <img src="../images/prodcut.png" width="100%" alt=""/>
                                    <div className="write">
                                        <h1>Clyde Core Foil</h1>
                                        <h2>Women's Sneakers</h2>
                                        <button type="button" className="btn btn-light">SHOP</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 slic_col12">
                                <div className="card slic_card">
                                    <img src="../images/product2.png" width="100%" alt=""/>
                                    <div className="write">
                                        <h1>RS-Fast INTL </h1>
                                        <h2>men's Sneakers</h2>
                                        <button type="button" className="btn btn-light">SHOP</button>
                                    </div>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Popular;