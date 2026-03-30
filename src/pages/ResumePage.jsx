import { EducationSection } from "../components/EducationSection";
import { ExperienceSection } from "../components/ExperienceSection";
import { PageHero } from "../components/PageHero";
import { StrengthsSection } from "../components/StrengthsSection";

export function ResumePage({ siteContent }) {
  return (
    <>
      <PageHero
        eyebrow="Resume"
        title="Experience with"
        accent="substance"
        description="This page is the sharper recruiter read: internships, strengths, education, and the context around the public profile details."
        meta={siteContent.resumeMeta}
      />
      <ExperienceSection
        featuredRole={siteContent.featuredRole}
        trajectory={siteContent.trajectory}
      />
      <StrengthsSection strengths={siteContent.strengths} />
      <EducationSection education={siteContent.education} />
    </>
  );
}
