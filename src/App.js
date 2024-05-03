import "./App.css";
import Home from "./home/Home";
import Contact from "./contact/Contact";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="/properties" element={<Header />} />
        <Route path="/forsale" element={<Header />} />
        <Route path="/meet" element={<Header />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
