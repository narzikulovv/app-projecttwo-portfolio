import "./sass/sardor.scss"
import "./sass/baxtiyor.scss"
import Popular from "./components/Popular";
import New from "./components/New";
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
    </div>
  );
}

export default App;
