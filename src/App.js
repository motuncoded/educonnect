import "./App.css";
import { Routes, Route } from "react-router";

import Home from "./pages/Home";
import Features from "./pages/Features";
import Faq from "./pages/Faq";
import Contact from "./pages/Contact";
import Signup from "./pages/Signup";

function App() {
  return (
    <>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<Features />} />
        <Route path="/faqs" element={<Faq />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
}

export default App;
