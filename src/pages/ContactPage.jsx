import { ContactSection } from "../components/ContactSection";
import { PageHero } from "../components/PageHero";

export function ContactPage({ siteContent }) {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's work"
        accent="together"
        description="A dedicated contact page for software opportunities, recruiter outreach, and collaboration."
        meta={siteContent.contactMeta}
      />
      <ContactSection contact={siteContent.contact} links={siteContent.links} />
    </>
  );
}
