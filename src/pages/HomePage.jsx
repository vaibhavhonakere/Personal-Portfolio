import { Hero } from "../components/Hero";
import { HomeStats } from "../components/HomeStats";

export function HomePage({ siteContent }) {
  const technologyCount = new Set(
    siteContent.resumeBoard.sections.skills.skillGroups.flatMap((group) =>
      group.items.map((item) => item.name),
    ),
  ).size;

  const homeMetrics = siteContent.homeMetrics.map((item) =>
    item.label === "Technologies applied"
      ? {
          ...item,
          value: String(technologyCount),
        }
      : item,
  );

  return (
    <>
      <Hero
        identity={siteContent.identity}
        links={siteContent.links}
      />
      <HomeStats highlights={homeMetrics} />
    </>
  );
}
