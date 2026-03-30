import { useEffect } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Marquee } from "./components/Marquee";
import { ExperienceSection } from "./components/ExperienceSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { StrengthsSection } from "./components/StrengthsSection";
import { EducationSection } from "./components/EducationSection";
import { ContactSection } from "./components/ContactSection";
import { siteContent } from "./data/siteContent";

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
    <div className="app-shell">
      <div className="ambient ambient-one" aria-hidden="true" />
      <div className="ambient ambient-two" aria-hidden="true" />

      <Header identity={siteContent.identity} navigation={siteContent.navigation} />

      <main>
        <Hero
          identity={siteContent.identity}
          links={siteContent.links}
          highlights={siteContent.highlights}
        />
        <Marquee items={siteContent.marquee} />
        <ExperienceSection
          featuredRole={siteContent.featuredRole}
          trajectory={siteContent.trajectory}
        />
        <ProjectsSection projects={siteContent.projects} />
        <StrengthsSection strengths={siteContent.strengths} />
        <EducationSection education={siteContent.education} />
        <ContactSection contact={siteContent.contact} links={siteContent.links} />
      </main>
    </div>
  );
}

export default App;
