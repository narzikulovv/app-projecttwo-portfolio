import React from 'react';
import Popular from '../components/Popular';
import New from '../components/New';
import Banner from '../components/Banner';
import {ToastContainer, toast} from "react-toastify";
import Reklama from '../components/Reklama';
import Tovar from '../components/Tovar';
import Shop from '../components/Shop';
import Footer from "../components/Footer";
const HomePages = () => {
    return (
        <div>
            <Banner />
            <Popular/>
            <New/>
            <Reklama />
            <Tovar />
            <Shop />
            <Footer/>
            <ToastContainer/>
    </div>
    )
}
export default HomePages;