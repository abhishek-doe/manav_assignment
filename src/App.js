import "./App.css";
import Home from "./Home";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Signup from "./components/Signup"
import Login from "./components/Login"
import About from "./components/About";

function App() {
  return (
    <div className="select-none">
      <Header />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/signup" exact element={<Signup />} />
        <Route path="/login" exact element={<Login />} />
        <Route path="/about" exact element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
