import "./sass/sardor.scss"
import "./sass/baxtiyor.scss"

import New from "./components/New";
import 'react-toastify/dist/ReactToastify.css';
import Navbar from "./components/Navbar";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import HomePages from "./pages/HomePages";
import RegisterPaeges from "./pages/RegisterPages";
import Banner from "./components/Banner";
import Reklama from "./components/Reklama";
import Tovar from "./components/Tovar";
import Shop from "./components/Shop";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/login" exact component={RegisterPaeges}></Route>
          <Route path="/" exact component={HomePages}></Route>
          <Route path ="/shop" exact component={Banner}></Route>
          <Route path="/women" exact component={New}></Route>
          <Route path ="/reklama" exact component ={Reklama}></Route>
          <Route path="/tovar" exact component ={Tovar}></Route>
          <Route path="/shop" exact component ={Shop}></Route>
          <Route path ="/footer" exat component ={Footer}></Route>
          
        </Switch>
      </Router>
    </div>
  );
}

export default App;
