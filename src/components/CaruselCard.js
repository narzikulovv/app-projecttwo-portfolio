import React, {useState} from 'react';
import {Modal, ModalBody, ModalFooter} from "reactstrap";
import {toast} from "react-toastify";

const CaruselCard = () => {

    const [number, setNumber] = useState(110);
    const [noll, setNoll] = useState(0);
    const [open, setOpen] = useState(false);
    const [block, setBlock] = useState(false);

    const incrementNumber = () => setNoll(noll + number);
    const decrementNumber = () => noll > 0 ? setNoll(noll-number) : 0;




    const calculation = function () {
        setBlock(true)
    };


    const openModal = () => noll > 0 ? setOpen(!open) : "";

    const buy = () => {
        setOpen(!open);
        toast.success("Xaridingiz uchun raxmat");
        setNoll(0);
        setBlock(false)
    };

    return (
        <div className="col-12 col-sm-12 slic_col12">
            <div className="card slic_card">
                <img src="../images/prodcut.png" width="100%" alt=""/>
                <div className="write">
                    <h1>Clyde Core Foil</h1>
                    <h2>Women's Sneakers</h2>

                    {block ?
                        <div className="incrament  d-flex">
                            <button type="button" className="btn qq mr-2" onClick={incrementNumber}>+</button>
                            <button type="button" className="btn qq mr-2" onClick={decrementNumber}>-</button>
                            <h3 className="mt-3 text-white mr-3"><b>{noll} $</b></h3>
                            <h3 className="mt-3 text-white">${number}.00</h3>

                            <button type="button" className="btn ww btn-success ml-3"
                                    onClick={()=> openModal()}>BUY</button>


                            <Modal isOpen={open} toggle={()=> openModal({open: false})}>
                                <ModalBody className="d-flex">
                                    <h4><b>Haridingiz:</b></h4>
                                    <h4><i><b className="text-dark ml-3">{noll}.00 $</b></i></h4>
                                </ModalBody>
                                <ModalFooter>
                                    <button type="button" className="btn btn-primary"
                                            onClick={buy}>Xarid qilish</button>

                                    <button type="button" className="btn btn-danger"
                                            onClick={()=> openModal({open: false})}>Bekor qilish</button>
                                </ModalFooter>
                            </Modal>

                        </div>
                    : <button type="button" className="btn btn-light btn-block click"
                              onClick={calculation}>SHOP</button>
                    }




                </div>
            </div>
        </div>
    );
};

export default CaruselCard;