import { PageHero } from "../components/PageHero";
import { ProjectsSection } from "../components/ProjectsSection";

export function ProjectsPage({ siteContent }) {
  return (
    <>
      <PageHero
        eyebrow="Projects"
        title="Proof through"
        accent="builds"
        description="Separate from the resume page so the work can stand on its own. These projects show React delivery, AI workflows, hardware integration, and product framing."
        meta={siteContent.projectsMeta}
      />
      <ProjectsSection projects={siteContent.projects} />
    </>
  );
}
