import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HeroSection from "./components/HeroSection";
import TalentPoolSection from "./components/TalentPoolSection";
import AboutUsSection from "./components/AboutUsSection";
import CoreSection from "./components/CoreSection";
import LocationsSection from "./components/LocationsSection";
import Toolbar from "./components/ToolBar";
import ContactFormSection from "./components/ContactFormSection";
import SkillsSection from "./components/SkillsSection";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Toolbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <TalentPoolSection />
              <SkillsSection />
              <AboutUsSection />
              <CoreSection />
              <LocationsSection />
            </>
          }
        />
        <Route path="/jobs" element={<div>Jobs Page</div>} />
        <Route path="/community" element={<div>Community Page</div>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
