import React from 'react';
import Slider from "react-slick/lib";

const New = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    return (
        <div  className="gradiend">
            <div className="container new_container">
                <div className="row new_row">
                    <div className="col-12 new_col12">
                        <div className="container new_col_conteiner">
                            <h1>New in RS</h1>
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
                                                <img src="./images/icon/lock.svg" className="rasm_qulf1 " alt=""/>
                                                <img src="./images/icon/qulf-oq.svg" className="rasm_qulf2" alt=""/>
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
                                            <button>
                                                <img src="./images/icon/lock.svg" className="rasm_qulf1 " alt=""/>
                                                <img src="./images/icon/qulf-oq.svg" className="rasm_qulf2" alt=""/>
                                            </button>
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
                                            <button>
                                                <img src="./images/icon/lock.svg" className="rasm_qulf1 " alt=""/>
                                                <img src="./images/icon/qulf-oq.svg" className="rasm_qulf2" alt=""/>
                                            </button>
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
                                            <button>
                                                <img src="./images/icon/lock.svg" className="rasm_qulf1 " alt=""/>
                                                <img src="./images/icon/qulf-oq.svg" className="rasm_qulf2" alt=""/>
                                            </button>
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
                                            <button>
                                                <img src="./images/icon/lock.svg" className="rasm_qulf1 " alt=""/>
                                                <img src="./images/icon/qulf-oq.svg" className="rasm_qulf2" alt=""/>
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
                                            <button>
                                                <img src="./images/icon/lock.svg" className="rasm_qulf1 " alt=""/>
                                                <img src="./images/icon/qulf-oq.svg" className="rasm_qulf2" alt=""/>
                                            </button>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </Slider>
                    </div>

                    {/*////////////// sm  card //////////////////*/}

                    <div className="col-sm-12 new_sm_col col-12 mt-5">
                        <div className="container">
                            <div className="card new_sm_card">
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
                                            <img src="./images/icon/lock.svg" className="rasm_qulf1 " alt=""/>
                                            <img src="./images/icon/qulf-oq.svg" className="rasm_qulf2" alt=""/>
                                        </button>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 mt-4 new_sm_col col-12">

                        <div className="container">
                            <div className="card new_sm_card">
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
                                            <img src="./images/icon/lock.svg" className="rasm_qulf1 " alt=""/>
                                            <img src="./images/icon/qulf-oq.svg" className="rasm_qulf2" alt=""/>
                                        </button>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                    <div className="col-sm-12 mt-4 new_sm_col col-12">

                        <div className="container">
                            <div className="card new_sm_card">
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
                                            <img src="./images/icon/lock.svg" className="rasm_qulf1 " alt=""/>
                                            <img src="./images/icon/qulf-oq.svg" className="rasm_qulf2" alt=""/>
                                        </button>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>

                </div>
            </div>

        </div>
    );
};

export default New;