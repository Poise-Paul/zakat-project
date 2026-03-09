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
import SignUp from "./components/SignUp";
import QuickCalc from "./components/QuickCalc";
import ZakatAssets from "./components/ZakatAssets";
import ZakatLiability from "./components/ZakatLiabilities";
import VerifyOTP from "./components/VerifyOtp";
import { Provider } from "react-redux";
import { persistor, store } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import ForgotPassword from "./components/ForgotPassword";
import ResetPassword from "./components/ResetPassword";
import Profile from "./components/Profile";
import ZakatQualification from "./components/QualifyForZakat";
import ZakatCalculations from "./components/MainCalculations";
import ZakatDistribution from "./components/ZakatDistribution";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
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
            <Route path="/zakatAssets" element={<ZakatAssets />} />
            <Route path="/zakatLiability" element={<ZakatLiability />} />
            <Route path="/qualifyForZakat" element={<ZakatQualification />} />
            <Route path="/mainCalculations" element={<ZakatCalculations />} />
            <Route path="/zakatDistribution" element={<ZakatDistribution />} />
            <Route path="/verifyOtp" element={<VerifyOTP />} />
            <Route path="/forgotPassword" element={<ForgotPassword />} />
            <Route path="/resetPassword" element={<ResetPassword />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </Router>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
);

reportWebVitals();
