import "./App.css";
import Home from "./home/Home";
import Photos from "./photos/Photos";
import About from "./about/About";
import Generational from "./generational/Generational";
import Contact from "./contact/Contact";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/photos" element={<Photos />} />
        <Route path="/about" element={<About />} />
        <Route path="/generational" element={<Generational />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
