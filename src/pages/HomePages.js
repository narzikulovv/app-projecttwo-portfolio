import React from 'react';
import Popular from '../components/Popular';
import New from '../components/New';
import Banner from '../components/Banner';
import {ToastContainer, toast} from "react-toastify";
const HomePages = () => {
    return (
        <div>
            <Banner />
            <Popular/>
            <New/>
           <ToastContainer/>
        </div>
    );
};

export default HomePages;