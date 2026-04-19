import { ProjectsSection } from "../components/ProjectsSection";

export function ProjectsPage({ siteContent }) {
  return <ProjectsSection projects={siteContent.projects} />;
}
