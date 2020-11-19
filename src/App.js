import './App.css';
import Home from './components/Home';

import { BrowserRouter as Router, Route } from "react-router-dom";

import Talent from './components/Talent';
import SignUp from "./components/SignUp";
import Login from "./components/Login";

function App() {
  return (
    <div className="App">


      <Router>
        <Route path="/" exact component={Home} />
        <Route path="/talent/:id" exact component={Talent} />
        <Route path="/signUp" exact component={SignUp} />
        <Route path="/login" exact component={Login} />
      </Router>
    </div>
  );
}

export default App;


