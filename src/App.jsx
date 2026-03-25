import { BrowserRouter, Routes, Route } from "react-router-dom";
import Desktop_Header from "./components/header/desktopMenu";
import Home from "./pages/home";
import Profile_Intro from "./components/profileIntro";
import Footer from "./components/footer";
import Recent from "./components/capsuleCard/recentActivities";
import MyWorks from "./pages/myworks";
import Gallery from "./pages/gallery";
import AboutMe from "./pages/AboutMe";
import ContactMe from "./pages/contactMe";
import Profile from "./pages/profile";
import Freebies from "./pages/freebies";
import CoffeeWithJesus from "./pages/coffee-with-the-king";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/coffee-with-jesus" element={<CoffeeWithJesus />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/contact" element={<ContactMe />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/freebies" element={<Freebies />} />

        </Routes>
        {/* <Freebies /> */}
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
