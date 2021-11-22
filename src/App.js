import React from "react";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import { BrowserRouter as Router, Route } from "react-router-dom";

import HomePage from "./pages/HomePage/HomePage";
import SubmitPage from "./pages/SubmitPage/SubmitPage";

import "./App.scss";
import "antd/dist/antd.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Route exact path="/" component={HomePage} />
        <Route path="/Submit" component={SubmitPage} />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
