import React from 'react';
import {FaBars, FaTimes} from "react-icons/fa";
import { useState } from 'react';
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { Link } from 'react-router-dom';
const Navbar = () => {
    
    const [click, setClick] = useState(false);
    const handleClick = () => {
        setClick(!click);
        
    }
    
    return (
        // ********NAVBAR START*******//
        <nav>
            <div className="container">
            <div className="content">
                {/* LEFT */}
            <div className="left">
                  <div className="container">
                      <div className="row align-items-center">
                          <div className="col-xl-10 col-lg-6 col-md-6 col-sm-2 col-3 px-0 ">
                              <button onClick={handleClick} type="button" className=" btn icon">
                                {click ? <FaTimes/> : <FaBars />}
                              </button>
                              <ul className="navbar">
                                  <li className="nav-item"><Link to="/women" className="nav-link px-0">Women</Link></li>
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
                                             UZ
                                    </DropdownToggle>
                                    <DropdownMenu>
                                    <DropdownItem>RU</DropdownItem>
                                    <DropdownItem>EN</DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledDropdown>  
                                </button></li>
                              <li className="social-item heart-none"><button className="btn" type="button"><img src="/images/icon/heart.svg" alt="" /></button></li>
                              <li className="social-item"><button className="btn" type="button"><img src="/images/icon/lock.svg" alt="" /></button></li>
                              <li className="social-item logo-none"><button className="btn last-btn" type="button"><img class="w-100" src="/images/icon/logo.png" alt="" /></button></li>
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