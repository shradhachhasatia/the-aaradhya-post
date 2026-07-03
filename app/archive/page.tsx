import Link from "next/link";
import { getAllEditions } from "../../lib/supabase";

export const dynamic = "force-dynamic";

function formatDate(dateStr: string) {
  return new Date(`${dateStr}T00:00:00`).toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export default async function ArchivePage() {
  const editions = await getAllEditions();

  return (
    <main className="archive-page">
      <nav className="topnav">
        <Link href="/" className="topnav-link">
          &larr; Latest Issue
        </Link>
        <span className="topnav-count">
          {editions.length} {editions.length === 1 ? "issue" : "issues"}
        </span>
      </nav>

      <header className="archive-hero">
        <h1 className="archive-hero-title">Back Issues</h1>
        <p className="archive-hero-sub">Every letter, kept.</p>
      </header>

      <section className="archive-grid">
        {editions.length === 0 && (
          <p className="archive-empty">No editions have gone to print yet.</p>
        )}
        {editions.map((edition, i) => (
          <Link
            key={edition.id}
            href={`/post/${edition.edition_date}`}
            className="archive-card"
          >
            <span className="archive-card-tag">
              No. {String(editions.length - i).padStart(2, "0")}
            </span>
            <span className="archive-card-date">{formatDate(edition.edition_date)}</span>
            <h2 className="archive-card-title">{edition.headline}</h2>
            {edition.subhead && <p className="archive-card-teaser">{edition.subhead}</p>}
          </Link>
        ))}
      </section>

      <footer className="archive-footer">
        <p>Printed with love, exclusively for Aaradhya.</p>
      </footer>
    </main>
  );
}
