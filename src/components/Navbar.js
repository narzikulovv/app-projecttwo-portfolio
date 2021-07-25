import React from 'react';
import {FaBars, FaTimes} from "react-icons/fa";
import { useState } from 'react';
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { Link } from 'react-router-dom';
const Navbar = () => {
    
    const [click, setClick] = useState(false);
    const [profile, setProfile] = useState(false);
    const handleClick = () => {
        setClick(!click);
        setProfile(false);
        
    }
    const handProfile = () => {
        setProfile(!profile);
        setClick(false); 
    }
    const exitHomePage = () => {
        localStorage.setItem("surname", "");
        localStorage.setItem("email", "");
        localStorage.setItem("password", "");

        window.location.href = "/login"

    };
    return (
        // ********NAVBAR START*******//
        <nav>
            <div className="container px-0">
            <div className="content">
                {/* LEFT */}
            <div className="left">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-xl-10 col-lg-6 col-md-6 col-sm-2 col-3 px-0 ">
                                <button onClick={handleClick} type="button" className=" btn icon">
                                    {click ? <FaTimes/> : <FaBars />}
                                </button>
                                <ul className="navbar  pl-0">
                                    <li className="nav-item"><Link to="/women" className="nav-link ">Women</Link></li>
                                    <li className="nav-item"><Link to="/men" className="nav-link">Men</Link></li>
                                    <li className="nav-item"><Link to="/kids" className="nav-link">Kids</Link></li>
                                    <li className="nav-item"><Link to="/select" className="nav-link">Select</Link></li>
                                    <li className="nav-item "><Link to="/outlet" className="nav-link">Outlet</Link></li>
                                </ul>
                            </div>
                            <div className="col-xl-2 col-lg-6 col-md-6 col-sm-10 col-6">
                                <div className="logo"><Link to="/" className="brand d-block m-auto"><img src="/images/icon/logo.png" alt="Eror" className="w-50" /></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* RIGHT */}
                <div className="right">
                    <div className="container">
                        <div className="row">
                            <ul className="social">
                                <li className="social-item"><button className="btn" type="button">
                                <UncontrolledDropdown>
                                        <DropdownToggle caret>
                                                EN
                                        </DropdownToggle>
                                        <DropdownMenu>
                                        <DropdownItem>RU</DropdownItem>
                                        <DropdownItem>UZ</DropdownItem>
                                        </DropdownMenu>
                                    </UncontrolledDropdown>  
                                    </button></li>
                                <li className="social-item heart-none"><button className="btn" type="button"><img src="/images/icon/heart.svg" alt="" /></button></li>
                                <li className="social-item"><button className="btn" type="button"><img src="/images/icon/lock.svg" alt="" /></button></li>
                                <li className="social-item logo-none"><button
                                className="btn last-btn"
                                    type="button"
                                    onClick={handProfile}> 
                                    {/* {localStorage.getItem("name").length > 0 ? localStorage.getItem("name").substring(0, 1) : window.location.href = "/login"} */}
                                    <span className="admin"></span>
                                {profile ? <div className="profile">
                                    <div className="card">
                                        <div className="card-header">
                                            <h4 className="text-center user">
                                                User
                                            </h4>
                                        </div>
                                        <div className="card-body">
                                        <div className="card-photo">
                                                <span>
                                                {localStorage.getItem("name").length > 0 ? localStorage.getItem("name").substring(0, 1) :  window.location.href = "/login"}
                                                </span>
                                        </div>
                                        <div className="profile-status">
                                        <h5 className="data">Name : <span>{localStorage.getItem("name")}</span></h5>
                                        <h5 className="data">Surame :<span>{localStorage.getItem("surname")}</span></h5>
                                        <h5 className="data">Email : <span>{localStorage.getItem("email")}</span></h5>
                                        </div>
                                        </div>
                                        <div className="card-footer">
                                            <button type="button" className="btn btn-danger btn-block" onClick={exitHomePage} >Exit</button>
                                        
                                            {/* <button type="button" className="btn btn-danger btn-block" onClick={} >Exit</button> */}
                                            {/* <Modal isOpen={open} toggle={() =>toggle({open: false})}>
                                            <ModalBody>
                                                <h4><b>Sahifadan chiqmoqchimisiz?</b></h4> <br/>
                                                <i>Qayta kirish uchun Registratsiya sahifasidan o'tishingiz kerak bo'ladi</i>
                                            </ModalBody>
                                            <ModalFooter>
                                                <button type="button" className="btn btn-danger" onClick={exitHomePage}>Ha</button>
                                                <button type="button" className="btn btn-success" onClick={()=> toggle({open: false})}>Yoq</button>
                                            </ModalFooter>

                                        </Modal> */}
                                        </div>
                                    </div>
                                </div>
                                : ""}
                                </button></li>
                            </ul>
                        </div>
                    </div>
                </div>
                
                </div>
                {/* CONTENT END */}
                </div>
                {/* M0BILE UCHUN LINKLAR */}
                <div className="container-fluid px-0">
                    <div className="row">
                        <div className="col-lg-12">
                                    <ul className={click ? "d-block nav-menu" : "d-none"}>
                                    <li className="nav-item"><Link onClick={handleClick} to="/women" className="nav-link px-0">Women</Link></li>
                                    <li className="nav-item"><Link onClick={handleClick}  to="/men" className="nav-link px-0">Men</Link></li>
                                    <li className="nav-item"><Link onClick={handleClick}  to="/kids" className="nav-link px-0">Kids</Link></li>
                                    <li className="nav-item"><Link onClick={handleClick}  to="/select" className="nav-link px-0">Select</Link></li>
                                    <li className="nav-item "><Link onClick={handleClick}  to="/outlet" className="nav-link px-0">Outlet</Link></li>
                                </ul>
                        </div>
                    </div>
                </div>
            </nav>
    );
};
export default Navbar;