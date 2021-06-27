import React from 'react';
import Slider from "react-slick/lib";

const New = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4
    };

    return (
        <div className="gradiend">
            <div className="container new_container">
                <div className="row new_row">
                    <div className="col-12 new_col12">
                        <div className="container new_col_conteiner">
                            <h1>New  in RS</h1>
                        </div>
                    </div>
                    <div className="col-12 new_slic_col12">
                        <Slider {...settings}>
                            <div className="col-12 new_slic_col12">
                                <div className="card new_slic_card">
                                    <div className="card-body">
                                        <img src="../images/new1.png" width="100%" alt=""/>
                                    </div>
                                    <div className="card-footer d-flex align-items-center ">
                                        <div className="left1">
                                            <h6>RS-Fast INTL Game</h6>
                                            <h2>$110.00</h2>
                                        </div>
                                        <div className="right1">
                                            <button>
                                                <img src="./images/icon/lock.svg" className="rasm_qulf1 d-none" alt=""/>
                                                <img src="./images/icon/qulf-oq.svg" className="rasm_qulf2 d-block" alt=""/>
                                            </button>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="col-12 new_slic_col12">
                                <div className="card new_slic_card">
                                    <div className="card-body">
                                        <img src="../images/new2.png" width="100%" alt=""/>
                                    </div>
                                    <div className="card-footer d-flex align-items-center ">
                                        <div className="left1">
                                            <h6>RS-Fast INTL Game</h6>
                                            <h2>$110.00</h2>
                                        </div>
                                        <div className="right1">
                                            <button><img src="./images/icon/lock.svg" alt=""/></button>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="col-12 new_slic_col12">
                                <div className="card new_slic_card">
                                    <div className="card-body">
                                        <img src="../images/new3.png" width="100%" alt=""/>
                                    </div>
                                    <div className="card-footer d-flex align-items-center ">
                                        <div className="left1">
                                            <h6>RS-Fast INTL Game</h6>
                                            <h2>$110.00</h2>
                                        </div>
                                        <div className="right1">
                                            <button><img src="./images/icon/lock.svg" alt=""/></button>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="col-12 new_slic_col12">
                                <div className="card new_slic_card">
                                    <div className="card-body">
                                        <img src="../images/new4.png" width="100%" alt=""/>
                                    </div>
                                    <div className="card-footer d-flex align-items-center ">
                                        <div className="left1">
                                            <h6>RS-Fast INTL Game</h6>
                                            <h2>$110.00</h2>
                                        </div>
                                        <div className="right1">
                                            <button><img src="./images/icon/lock.svg" alt=""/></button>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="col-12 new_slic_col12">
                                <div className="card new_slic_card">
                                    <div className="card-body">
                                        <img src="../images/new1.png" width="100%" alt=""/>
                                    </div>
                                    <div className="card-footer d-flex align-items-center ">
                                        <div className="left1">
                                            <h6>RS-Fast INTL Game</h6>
                                            <h2>$110.00</h2>
                                        </div>
                                        <div className="right1">
                                            <button><img src="./images/icon/lock.svg" alt=""/></button>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="col-12 new_slic_col12">
                                <div className="card new_slic_card">
                                    <div className="card-body">
                                        <img src="../images/new2.png" width="100%" alt=""/>
                                    </div>
                                    <div className="card-footer d-flex align-items-center ">
                                        <div className="left1">
                                            <h6>RS-Fast INTL Game</h6>
                                            <h2>$110.00</h2>
                                        </div>
                                        <div className="right1">
                                            <button><img src="./images/icon/lock.svg" alt=""/></button>
                                        </div>
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

export default New;