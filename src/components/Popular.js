import React, {useState} from 'react';
import Slider from "react-slick";
import {Modal, ModalBody, ModalFooter} from "reactstrap";
import {toast, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Popular = (props) => {
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

    const [number, setNumber] = useState(110);
    const [noll, setNoll] = useState(0);
    const [open, setOpen] = useState(false);

    const incrementNumber = () => setNoll(noll + number);
    const decrementNumber = () => noll > 0 ? setNoll(noll-number) : 0;




    const calculation = function () {
        const click = document.querySelector('.click');
        const sardor = document.querySelector(".incrament");

        click.classList.add('d-none');
        sardor.classList.add("d-block")
    };

    const openModal = () => noll > 0 ? setOpen(!open) : "";

    const buy = () => {
        setOpen(!open);
        toast.success("Xaridingiz uchun raxmat");
        setNoll(noll === 0)

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
                            <div className="col-12 col-sm-12 slic_col12">
                                <div className="card slic_card">
                                    <img src="../images/prodcut.png" width="100%" alt=""/>
                                    <div className="write">
                                        <h1>Clyde Core Foil</h1>
                                        <h2>Women's Sneakers</h2>
                                        <button type="button" className="btn btn-light btn-block click" id="q123"  onClick={calculation}>SHOP</button>
                                        <div className="incrament  d-flex">
                                            <button type="button" className="btn qq mr-2" onClick={incrementNumber}>+</button>
                                            <button type="button" className="btn qq mr-4" onClick={decrementNumber}>-</button>
                                            <h3 className="mt-3 text-white mr-3"><b>{noll} $</b></h3>
                                            <h3 className="mt-3 text-white">${number}.00</h3>

                                            <button type="button" className="btn ww btn-success ml-3" onClick={openModal}>BUY</button>


                                            <Modal isOpen={open} toggle={()=> openModal({open: false})}>
                                                <ModalBody className="d-flex"><h4><b>Haridingiz:</b></h4> <h4><i><b className="text-dark ml-3">{noll}.00 $</b></i></h4></ModalBody>
                                                <ModalFooter>
                                                    <button type="button" className="btn btn-primary" onClick={buy}>Xarid qilish</button>

                                                    <button type="button" className="btn btn-danger"
                                                            onClick={()=> openModal({open: false})}>Bekor qilish</button>
                                                </ModalFooter>
                                            </Modal>

                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-12 slic_col12">
                                <div className="card slic_card">
                                    <img src="../images/product2.png" width="100%" alt=""/>
                                    <div className="write">
                                        <h1>Clyde Core Foil</h1>
                                        <h2>Women's Sneakers</h2>
                                        <button type="button" className="btn btn-light btn-block click" id="q123"  onClick={calculation}>SHOP</button>
                                        <div className="incrament  d-flex">
                                            <button type="button" className="btn qq mr-2" onClick={incrementNumber}>+</button>
                                            <button type="button" className="btn qq mr-4" onClick={decrementNumber}>-</button>
                                            <h3 className="mt-3 text-white mr-3"><b>{noll} $</b></h3>
                                            <h3 className="mt-3 text-white">${number}.00</h3>

                                            <button type="button" className="btn ww btn-success ml-3" onClick={openModal}>BUY</button>


                                            <Modal isOpen={open} toggle={()=> openModal({open: false})}>
                                                <ModalBody className="d-flex"><h4><b>Haridingiz:</b></h4> <h4><i><b className="text-dark ml-3">{noll}.00 $</b></i></h4></ModalBody>
                                                <ModalFooter>
                                                    <button type="button" className="btn btn-primary" onClick={buy}>Xarid qilish</button>

                                                    <button type="button" className="btn btn-danger"
                                                            onClick={()=> openModal({open: false})}>Bekor qilish</button>
                                                </ModalFooter>
                                            </Modal>

                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-12 slic_col12">
                                <div className="card slic_card">
                                    <img src="../images/prodcut.png" width="100%" alt=""/>
                                    <div className="write">
                                        <h1>Clyde Core Foil</h1>
                                        <h2>Women's Sneakers</h2>
                                        <button type="button" className="btn btn-light">SHOP</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-12 slic_col12">
                                <div className="card slic_card">
                                    <img src="../images/product2.png" width="100%" alt=""/>
                                    <div className="write">
                                        <h1>RS-Fast INTL </h1>
                                        <h2>men's Sneakers</h2>
                                        <button type="button" className="btn btn-light">SHOP</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-12 slic_col12">
                                <div className="card slic_card">
                                    <img src="../images/prodcut.png" width="100%" alt=""/>
                                    <div className="write">
                                        <h1>Clyde Core Foil</h1>
                                        <h2>Women's Sneakers</h2>
                                        <button type="button" className="btn btn-light">SHOP</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-12 slic_col12">
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