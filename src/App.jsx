import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./component/home";
import About from "./component/about";
import Products from "./component/products";
import Services from "./component/services";
import Whatwedo from "./component/whatwedo";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />

        <Route path="/services" element={<Services />} />
        <Route path="/whatwedo" element={<Whatwedo />} />
      </Routes>
    </Router>
  );
}

export default App;
