import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Aboutus from "./pages/Aboutus";
import Services from "./pages/Services";
import Service from "./pages/Service";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Aboutus" element={<Aboutus />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Service" element={<Service />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
        <Route path="/Footer" element={<Footer />} />
      </Routes>
    </Router>
  );
}

export default App;
