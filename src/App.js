import "./App.css";
import { Routes, Route } from "react-router";

import Home from "./pages/Home";
import Features from "./pages/Features";
import Faq from "./pages/Faq";
import Contact from "./pages/Contact";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import NotFound from "./pages/NotFound";
import VerifyAccount from "./components/VerifyAccount";
import ForgetPassword from "./components/ForgetPassword";
import VerifyConfirm from "./components/VerifyConfirm";
import ResetPassword from "./components/ResetPassword";
import PasswordReset from "./components/PasswordReset";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<Features />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/verifyaccount" element={<VerifyAccount />} />
        <Route path="/forgetpassword" element={<ForgetPassword />} />
        <Route path="/verifyconfirm" element={<VerifyConfirm />} />
        <Route path="/resetpassword" element={<ResetPassword />} />
        <Route path="/passwordreset" element={<PasswordReset />} />
        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
