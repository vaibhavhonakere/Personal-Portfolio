import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { siteContent } from "./data/siteContent";
import { ContactPage } from "./pages/ContactPage";
import { HomePage } from "./pages/HomePage";
import { ProjectsPage } from "./pages/ProjectsPage";
import { ResumePage } from "./pages/ResumePage";

function App() {
  useEffect(() => {
    const handlePointerMove = (event) => {
      document.documentElement.style.setProperty("--pointer-x", `${event.clientX}px`);
      document.documentElement.style.setProperty("--pointer-y", `${event.clientY}px`);
    };

    window.addEventListener("pointermove", handlePointerMove);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
    };
  }, []);

  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <div className="app-shell">
        <div className="ambient ambient-one" aria-hidden="true" />
        <div className="ambient ambient-two" aria-hidden="true" />

        <Header identity={siteContent.identity} navigation={siteContent.navigation} />

        <main className="route-main">
          <Routes>
            <Route path="/" element={<HomePage siteContent={siteContent} />} />
            <Route path="/resume" element={<ResumePage siteContent={siteContent} />} />
            <Route path="/projects" element={<ProjectsPage siteContent={siteContent} />} />
            <Route path="/contact" element={<ContactPage siteContent={siteContent} />} />
          </Routes>
        </main>

        <Footer identity={siteContent.identity} />
      </div>
    </BrowserRouter>
  );
}

export default App;
