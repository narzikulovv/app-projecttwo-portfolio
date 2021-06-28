import "./sass/sardor.scss"
import "./sass/baxtiyor.scss"
import Popular from "./components/Popular";
import New from "./components/New";
import {ToastContainer, toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <Popular/>
        <ToastContainer/>
      <New/>


    </div>
  );
}

export default App;
