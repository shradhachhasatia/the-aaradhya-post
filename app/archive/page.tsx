import Link from "next/link";
import { masthead } from "../content";
import { getAllEditions } from "../../lib/supabase";

export const dynamic = "force-dynamic";

function formatDate(dateStr: string) {
  return new Date(`${dateStr}T00:00:00`).toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function ArchivePage() {
  const editions = await getAllEditions();

  return (
    <main className="paper">
      <article className="sheet">
        <nav className="topnav">
          <Link href="/">&larr; Home</Link>
        </nav>

        <header className="masthead">
          <h1 className="title archive-title">{masthead.title}</h1>
          <div className="masthead-rule bottom">
            <span className="edition">Back Issues</span>
          </div>
        </header>

        <section className="archive-list">
          {editions.length === 0 && (
            <p className="archive-empty">No editions have gone to print yet.</p>
          )}
          {editions.map((edition) => (
            <Link
              key={edition.id}
              href={`/post/${edition.edition_date}`}
              className="archive-item"
            >
              <span className="archive-date">
                {formatDate(edition.edition_date)}
              </span>
              <span className="archive-headline">{edition.headline}</span>
            </Link>
          ))}
        </section>

        <footer className="paper-footer">
          <span className="heart">♥</span>
          <p>Printed with love, exclusively for Aaradhya.</p>
        </footer>
      </article>
    </main>
  );
}
