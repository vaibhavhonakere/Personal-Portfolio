import { Hero } from "../components/Hero";
import { HomeStats } from "../components/HomeStats";

export function HomePage({ siteContent }) {
  return (
    <>
      <Hero
        identity={siteContent.identity}
        links={siteContent.links}
      />
      <HomeStats highlights={siteContent.homeMetrics} />
    </>
  );
}
