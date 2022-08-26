import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Zakat from "./components/Zakat";
import Eligibilitty from "./components/Eligibility";
import reportWebVitals from "./reportWebVitals";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import About from "./components/About";
import Distribution from "./components/Distribution";
import Calculation from "./components/Calculation";
import SignIn from "./components/SignIn";
import SignUp from './components/SignUp'
import QuickCalc from "./components/QuickCalc";
import ZakatAssets from './components/ZakatAssets' 
import ZakatLiability from './components/ZakatLiabilities'
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" index element={<App />} />
        <Route path="/zakatMeaning" element={<Zakat />} />
        <Route path="/eligibility" element={<Eligibilitty />} />
        <Route path="/distribution" element={<Distribution />} />
        <Route path="/about" element={<About />} />
        <Route path="/calculation" element={<Calculation />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/quickCalc" element={<QuickCalc />} />
        <Route path="/zakatAssets" element={<ZakatAssets />}/>
        <Route path="/zakatLiability" element={<ZakatLiability />}/>
      </Routes>
    </Router>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
