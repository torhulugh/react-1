import Desktop_Header from "./components/header/desktopMenu";
import Mobile_Header from "./components/header/mobileMenu";
import Profile_Intro from "./components/profileIntro";
import Footer from "./components/footer";
import Recent from "./components/capsuleCard/recentActivities";

import "./App.css";

function App() {
  return (
    <>
      <Desktop_Header />
      <Mobile_Header />
      <main>
        <Profile_Intro />
        <Recent/>
      </main>
      <Footer/>
    </>
  );
}

export default App;
