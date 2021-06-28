import "./sass/sardor.scss"
import "./sass/baxtiyor.scss"
import Popular from "./components/Popular";
import New from "./components/New";
<<<<<<< HEAD
import {ToastContainer, toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <Popular/>
        <ToastContainer/>
      <New/>


=======
import Navbar from "./components/Navbar";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { Component } from "react";
import HomePages from "./pages/HomePages";
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={HomePages}></Route>
          <Route path="/women" exact component={New}></Route>
        </Switch>
      </Router>
>>>>>>> 2996981057f2d4ef099f245322c0025c62c692f2
    </div>
  );
}

export default App;
