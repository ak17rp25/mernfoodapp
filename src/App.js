import "./App.css";
import Home from "./screens/Home";
import Login from "./screens/Login";
import SignUp from "./screens/Signup.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";

function App() {
  return (
    <Router>
      <div>
      <Routes>
        <Route exact path="/" element ={<Home></Home>}></Route>
        <Route exact path="/loginuser" element = {<Login></Login>}></Route>
        <Route exact path="/createuser" element = {<SignUp></SignUp>}></Route>

      </Routes>
        
      </div>
    </Router>
  );
}

export default App;
