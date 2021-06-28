import React from 'react';
import Popular from '../components/Popular';
import New from '../components/New';
import {ToastContainer} from "react-toastify";
const HomePages = () => {
    return (
        <div>
            <Popular/>
            <New/>
            <ToastContainer/>
        </div>
    );
};

export default HomePages;