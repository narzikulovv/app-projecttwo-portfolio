import React, { useState } from 'react';
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
const RegisterPaeges = (props) => {
    const inputValue = (e) =>{
        e.preventDefault();
        let name = e.target.ism.value;
        let password = e.target.parol.value;
        let email = e.target.email.value;
        let familya = e.target.familya.value
        localStorage.setItem("name", name);
        localStorage.setItem("surname", familya);
        localStorage.setItem("password", password);
        localStorage.setItem("email", email);
        
        if(name.length > 0 && password.length > 0 && email.length > 0 && familya.length > 0){
            props.history.push("/")
        }
        else{
           alert("Ma'lumotlarni to'liq kiriting")
        }
      
    }
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
  
    return (
        <section className="form-content">
          
            <div className="container">
            <div className="row">
                <div className=" col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">
               <div className="content-register">
               <h1 className="title text-center mb-1">Welcome to Hero</h1>
                <p className="text-center mb-1">For entering Hero you have to register or you can enter via email</p>
                <button type="button" className=" d-block m-auto btn lang">
            <UncontrolledDropdown>
                                <DropdownToggle caret>
                                             UZ
                                    </DropdownToggle>
                                    <DropdownMenu>
                                    <DropdownItem>RU</DropdownItem>
                                    <DropdownItem>EN</DropdownItem>
                                </DropdownMenu>
            </UncontrolledDropdown>  
            </button>
                    <div className="card">
                    <button type="button" onClick = {handleClick} className={`btn  register`}>Register</button>
                  
                  <form onSubmit={inputValue} className={`d-none ${click ? "d-block" : "d-none"}`}>
                        <input className="form-control input-text" type="text" placeholder=" enter your name" name="ism" />
                        <input className="form-control input-text" type="text" placeholder="enter your surname" name="familya" />
                        <input className="form-control input-text" type="email" placeholder=" enter your email" name="email" />
                        <input className="form-control input-text" type="password" placeholder=" enter your password" name="parol" />
                        <button type="submit" className="btn sign btn-block mb-2">Sign in</button>
                  </form>
                  <button type="button" className={`btn btn-danger gmail `}>Email adress</button>
                    </div>
                    <p className="copyright">CopyRight&copy; 2021 Simple Classic Login page. All rights reserved | Design by <span>HERO</span></p>
               </div>
                </div>
             
            </div>
            
        </div>
        </section>
    );
};

export default RegisterPaeges;