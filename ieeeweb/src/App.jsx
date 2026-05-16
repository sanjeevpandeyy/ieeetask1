import { useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Img from "./components/Img";
import Events from "./components/Events";
import Contact from "./components/Contact";
import Members from "./components/Members";
import Footer from "./components/Footer";

function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [activeNav, setActiveNav] = useState("home");

  return (
    <>
      {/* NAVBAR */}
      <Navbar
        setActiveSection={setActiveSection}
        active={activeNav}
        setActive={setActiveNav}
      />

      {/* HOME */}
      {activeSection === "home" && (
        <>
          <Hero
            setActiveSection={setActiveSection}
            setActive={setActiveNav}
          />
          <About />
          <Img />
        </>
      )}

      {/* EVENTS */}
      {activeSection === "events" && <Events />}

      {/* CONTACT */}
      {activeSection === "contact" && <Contact />}

      {/* MEMBERS */}
      {activeSection === "members" && <Members />}

      {/* FOOTER */}
      <Footer />
    </>
  );
}

export default App;