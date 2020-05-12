import React from "react";
import { BrowserRouter as Router, Route}  from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Employees from "./pages/Employees";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import './App.css';

const App = () =>
  <Router>
    <div className="App">
        <Navbar/>
        <Wrapper>
          <Route exact path="/" component={About}/>
          <Route path="/about" component={About}/>
          <Route path="/employees" component={Employees}/>
        </Wrapper>
        <Footer />
      </div>
  </Router>;

export default App;
