import { ResumeBoard } from "../components/ResumeBoard";

export function ResumePage({ siteContent }) {
  return (
    <ResumeBoard resumeBoard={siteContent.resumeBoard} />
  );
}
