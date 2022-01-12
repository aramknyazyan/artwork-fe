import React from "react";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import { BrowserRouter as Router, Route } from "react-router-dom";

import HomePage from "./pages/HomePage/HomePage";
import SubmitWork from "./pages/SubmitPage/SubmitWork";
import BackOffice from "./pages/BackOffice/BackOffice";
import SubmissionDetails from "./pages/SubmissionDetails/SubmissionDetails";

import "./App.scss";
import "antd/dist/antd.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Route exact path="/" component={HomePage} />
        <Route path="/submit" component={SubmitWork} />
        <Route exact path="/backoffice" component={BackOffice} />
        <Route exact path="/backoffice/:id" component={SubmissionDetails} />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
