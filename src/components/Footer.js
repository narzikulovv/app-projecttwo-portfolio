import React from 'react';

const Footer = () => {
    return (
        <div className="footer">
            <div className="container footer_con">
                <div className="row footer_row">
                    <div className="col-lg-3 col-xl-3 col-md-6  footer_col">
                        <div className="container footer_col_con">
                            <ul className="nav navbar-nav footer_navbar_nav">
                                <li className="nav-item"><a href="#!">Customer service</a></li>
                                <li className="nav-item"><a href="#!">Customer service</a></li>
                                <li className="nav-item"><a href="#!">Customer service</a></li>
                                <li className="nav-item"><a href="#!">Customer service</a></li>
                                <li className="nav-item"><a href="#!">Customer service</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 col-xl-3 col-md-6 footer_col">
                        <div className="container footer_col_con">
                            <ul className="nav navbar-nav footer_navbar_nav">
                                <li className="nav-item"><a href="#!">Customer service</a></li>
                                <li className="nav-item"><a href="#!">Customer service</a></li>
                                <li className="nav-item"><a href="#!">Customer service</a></li>
                                <li className="nav-item"><a href="#!">Customer service</a></li>
                                <li className="nav-item"><a href="#!">Customer service</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 col-xl-3 col-md-6 footer_col">
                        <div className="container footer_col_con">
                            <ul className="nav navbar-nav footer_navbar_nav">
                                <li className="nav-item"><a href="#!">Customer service</a></li>
                                <li className="nav-item"><a href="#!">Customer service</a></li>
                                <li className="nav-item"><a href="#!">Customer service</a></li>
                                <li className="nav-item"><a href="#!">Customer service</a></li>
                                <li className="nav-item"><a href="#!">Customer service</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 col-xl-3 col-md-6 footer_col">
                        <div className="container footer_col_con">
                            <ul className="nav navbar-nav footer_navbar_nav_right">
                                <li className="nav-item footer_navItem"><a href="#!">Join PUMA</a></li>
                                <li className="nav-item footer_nav">
                                    <a href="#!">
                                        Sign up for emails to get special news
                                        and exclusive Puma offers.
                                    </a>
                                </li>
                                <input type="text" placeholder="Email Address" className="form-control"/>
                                
                                <li className="social">
                                    <img src="" alt=""/>

                                </li>

                            </ul>

                        </div>
                    </div>

                </div>
            </div>

            <div className="line">
            </div>

            <div className="row footer_row2">
                <div className="col-12 footer_col12">
                    <div className="container footer_col12_con d-flex align-items-center justify-content-between">
                        <div className="footer_left d-flex">
                            <a href="#!">United States</a>
                            <p>© PUMA SE, 2020. All Rights Reserved.</p>
                        </div>
                        <div className="footer_right">
                            <img src="./images/icon/amex.svg" alt=""/>
                            <img src="./images/icon/master-card.svg" alt=""/>
                            <img src="./images/icon/pay-pal.svg" alt=""/>
                            <img src="./images/icon/pay.svg" alt=""/>
                            <img src="./images/icon/visa.svg" alt=""/>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Footer;