import Link from "next/link";
import { masthead } from "./content";
import { getLatestEdition, getIssueNumber } from "../lib/supabase";
import { Masthead } from "../components/editorial/Masthead";
import { IssueSheet } from "../components/editorial/IssueSheet";
import { ArchiveMark } from "../components/editorial/Icons";

export const dynamic = "force-dynamic";

export default async function Home() {
  const edition = await getLatestEdition();

  if (!edition) {
    return (
      <main className="paper">
        <article className="sheet">
          <nav className="topnav">
            <span />
            <Link href="/archive" className="topnav-link">
              <ArchiveMark className="topnav-icon" />
              Archive
            </Link>
          </nav>
          <Masthead
            motto={masthead.motto}
            metaLeft="The presses are warming up"
            metaRight="No. 01"
          />
          <p className="cover-waiting">First edition drops soon.</p>
        </article>
      </main>
    );
  }

  const issueNumber = await getIssueNumber(edition.edition_date);

  return <IssueSheet edition={edition} issueNumber={issueNumber} />;
}
