import React from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store/store";

import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import HomePage from "./pages/HomePage/HomePage";
import SubmitWork from "./pages/SubmitPage/SubmitWork";
import BackOffice from "./pages/BackOffice/BackOffice";
import SubmissionDetails from "./pages/SubmissionDetails/SubmissionDetails";
import About from "./pages/About/About";
import Artists from "./pages/Artists/Artists";

import "./App.scss";
import "antd/dist/antd.css";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Header />
          <Route exact path="/" component={HomePage} />
          <Route path="/submit" component={SubmitWork} />
          <Route exact path="/backoffice" component={BackOffice} />
          <Route exact path="/backoffice/:id" component={SubmissionDetails} />
          <Route exact path="/about" component={About} />
          <Route exact path="/artists" component={Artists} />
          <Footer />
        </Router>
      </Provider>
    </div>
  );
}

export default App;
