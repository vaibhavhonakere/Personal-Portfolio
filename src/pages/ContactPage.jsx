import { ContactSection } from "../components/ContactSection";

export function ContactPage({ siteContent }) {
  return <ContactSection contact={siteContent.contact} />;
}
