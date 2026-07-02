import Link from "next/link";
import { masthead, gate } from "./content";
import { getLatestEdition } from "../lib/supabase";

export const dynamic = "force-dynamic";

function formatDate(dateStr: string) {
  return new Date(`${dateStr}T00:00:00`).toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function Gate() {
  const edition = await getLatestEdition();

  return (
    <main className="gate">
      <div className="gate-card">
        <span className="gate-stamp">♥</span>
        <p className="gate-eyebrow">{gate.eyebrow}</p>
        <h1 className="gate-title">{masthead.title}</h1>
        <p className="gate-motto">{masthead.motto}</p>
        <div className="gate-rule" />
        <p className="gate-tagline">{gate.tagline}</p>

        {edition ? (
          <>
            <p className="gate-edition-label">
              This week&rsquo;s edition &mdash; {formatDate(edition.edition_date)}
            </p>
            <Link href={`/post/${edition.edition_date}`} className="gate-button">
              {gate.openLabel}
            </Link>
          </>
        ) : (
          <p className="gate-edition-label">{gate.waitingLine}</p>
        )}

        <Link href="/archive" className="gate-archive-link">
          {gate.archiveLabel} &rarr;
        </Link>
      </div>
    </main>
  );
}
