import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Shop from "./components/Shop";
import AboutUs from "./components/AboutUs";
import Nav from "./components/Nav";
const RouteSwitch = () => {
  return (
    <section className="main">
      <BrowserRouter>
      <Nav />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about-us" element={<AboutUs />} />
        </Routes>
      </BrowserRouter>
    </section>

  );
};

export default RouteSwitch;