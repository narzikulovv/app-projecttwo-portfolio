import React, {useState, useEffect} from 'react';
import axios from 'axios'
const Shop = () => {
    const [data, setData] = useState([]); 
    useEffect(() =>{
        axios.get('https://60b4ecd1fe923b0017c83204.mockapi.io/user')
        .then((res) =>{
            setData({
            data: res.data,
            })
        })
        
        }, [])
    console.log(data);
    return (
        <div className="container-fluid shop">
        <div className="container">
        <h1 className="title_shop">WINTER WONDERLAND</h1>
        <p className="title_bottom_shop"></p>
        <button type="button" className="btn btn-shop">SHOP BOYS</button>
        <button type="button" className="btn btn-shop2 ml-3">SHOP GIRLS</button>
        </div>
    </div>
    );
};

export default Shop;