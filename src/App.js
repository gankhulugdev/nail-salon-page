import Contact from "./components/contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout";
import Home from "./components/home";
import Career from "./components/career";
import Services from "./components/service";
import About from "./components/about";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="service" element={<Services />} />
          <Route path="about" element={<About />} />
          <Route path="booking" element={<Contact />} />

          <Route path="contact" element={<Contact />} />
          <Route path="giftcard" element={<Contact />} />
          <Route path="career" element={<Career />} />
          {/* <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
