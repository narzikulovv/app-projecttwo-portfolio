import React from 'react';
import Popular from '../components/Popular';
import New from '../components/New';
import Banner from '../components/Banner';
import {ToastContainer, toast} from "react-toastify";
import Footer from "../components/Footer";

const HomePages = () => {
    return (
        <div>
            <Banner />
            <Popular/>
            <New/>
            <Footer/>
           <ToastContainer/>
    </div>
    )
}

export default HomePages;