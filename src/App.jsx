import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrolltotop.jsx";
import Home from "./component/home";
import About from "./component/about";
import Products from "./component/products";
import Services from "./component/services";
import Contact from "./component/contact";
import Portfolio from "./component/portfolio";
import Nav from "./component/nav";
import Footer from "./component/footer";
import Homehero from "./component/homehero";
import Eg from "./component/services.jsx";
import Servicedetailed from "./component/servicedetailed";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/nav" element={<Nav />} />

        <Route path="/homehero" element={<Homehero />} />
        <Route path="/eg" element={<Eg />} />
        <Route path="/svc" element={<Servicedetailed />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
