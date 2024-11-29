import "./App.css";
import { Routes, Route } from "react-router";
import Header from "./components/Header";

import Home from "./pages/Home";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
