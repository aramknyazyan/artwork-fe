import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store/store";

import AppLayout from "./Components/Layout/Layout";
import HomePage from "./pages/HomePage/HomePage";
import SubmitWork from "./pages/SubmitPage/SubmitWork";
import BackOffice from "./pages/BackOffice/BackOffice";
import SubmissionDetails from "./pages/SubmissionDetails/SubmissionDetails";
import About from "./pages/About/About";
import Artists from "./pages/Artists/Artists";
import SuccessPage from "./pages/SuccessPage/SuccessPage";

import "./App.scss";
import "antd/dist/antd.css";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <AppLayout
            children={
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/submit" element={<SubmitWork />} />
                <Route
                  path="/e2899344-0676-11ed-b939-0242ac120002"
                  element={<BackOffice />}
                />
                <Route path="/backoffice/:id" element={<SubmissionDetails />} />
                <Route path="/about" element={<About />} />
                <Route path="/artists" element={<Artists />} />
                <Route path="/success" element={<SuccessPage />} />
              </Routes>
            }
          />
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
