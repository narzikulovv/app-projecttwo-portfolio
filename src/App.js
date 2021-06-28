import "./sass/sardor.scss"
import "./sass/baxtiyor.scss"

import New from "./components/New";

import 'react-toastify/dist/ReactToastify.css';
import Navbar from "./components/Navbar";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
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
