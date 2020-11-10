import './App.css';
import Home from './components/Home';

import { BrowserRouter as Router, Route } from "react-router-dom";

import Talent from './components/Talent';

function App() {
  return (
    <div className="App">


      <Router>
        <Route path="/" exact component={Home} />
        <Route path="/talent/:id" exact component={Talent} />
      </Router>
    </div>
  );
}

export default App;


