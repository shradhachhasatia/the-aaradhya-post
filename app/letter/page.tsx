import { getLatestEdition, getIssueNumber } from "../../lib/supabase";
import { SiteNav } from "../../components/editorial/SiteNav";
import { letter } from "../content";

export const dynamic = "force-dynamic";

function formatDate(dateStr: string) {
  return new Date(`${dateStr}T00:00:00`).toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });
}

export default async function LetterPage() {
  const edition = await getLatestEdition();
  const issueNumber = edition ? await getIssueNumber(edition.edition_date) : null;

  return (
    <main className="paper">
      <article className="sheet">
        <SiteNav active="letter" />

        <section className="letter">
          <p className="letter-eyebrow">
            {letter.eyebrow}
            {issueNumber !== null && ` · No. ${issueNumber}`}
          </p>
          <h1 className="letter-headline">
            {letter.headline} <span className="ink-underline">{letter.headlineEmphasis}</span>{" "}
            {letter.headlineRest}
          </h1>
          <p className="letter-meta">
            For {letter.recipient} &middot; From {letter.from}
            {edition && ` · ${formatDate(edition.edition_date)}`}
          </p>

          <div className="letter-rule" />

          {edition?.editor_note ? (
            <div className="letter-body">
              {edition.editor_note.split("\n").map((para, i) =>
                para.trim() ? <p key={i}>{para}</p> : null
              )}
            </div>
          ) : (
            <p className="archive-empty">No letter has been written yet. Check back soon.</p>
          )}
        </section>

        <footer className="paper-footer">
          <span className="heart">&hearts;</span>
          <p>Printed with love, exclusively for Aaradhya.</p>
        </footer>
      </article>
    </main>
  );
}
