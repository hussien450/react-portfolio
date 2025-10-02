import "./App.css";
import { useEffect, useState } from "react";
import useMediaQuery from "./hooks/useMediaQuery";
import Navbar from "./scenes/Navbar";
import DotGroup from "./scenes/DotGroup";
import Landing from "./scenes/Landing";
import LineGradient from "./components/LineGradient";
import MySkills from "./scenes/MySkills";
import Projects from "./scenes/Projects";
import Testimonials from "./scenes/Testimonials";
import Contact from "./scenes/Contact";
import Footer from "./scenes/Footer";

function App() {
  const [selectedPage, setSelectedPage] = useState("home");
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);

      // Get all sections
      const sections = [
        { id: "home", element: document.getElementById("home") },
        { id: "skills", element: document.getElementById("skills") },
        { id: "projects", element: document.getElementById("projects") },
        {
          id: "testimonials",
          element: document.getElementById("testimonials"),
        },
        { id: "contact", element: document.getElementById("contact") },
      ];

      // Find which section is currently in view
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section.element) {
          const sectionTop = section.element.offsetTop;
          if (scrollPosition >= sectionTop) {
            setSelectedPage(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="app bg-background min-h-screen text-text-primary">
        <Navbar
          isTopOfPage={isTopOfPage}
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
        />
        <div className="w-5/6 mx-auto md:h-full">
          {isAboveMediumScreens && (
            <DotGroup
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          )}
          <Landing setSelectedPage={setSelectedPage} />
        </div>
        <LineGradient />
        <div className="w-5/6 mx-auto md:h-full">
          <MySkills />
        </div>

        <div className="w-5/6 mx-auto pb-0">
          <Projects />
        </div>
        <LineGradient />
        <div className="w-5/6 mx-auto ">
          <Testimonials />
        </div>
        <LineGradient />

        <div className="w-5/6 mx-auto ">
          <Contact />
        </div>
        <LineGradient />

        <div className="w-5/6 mx-auto ">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
