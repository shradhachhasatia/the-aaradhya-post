import Link from "next/link";
import { cover } from "./content";
import { getLatestEdition } from "../lib/supabase";
import { SiteNav } from "../components/editorial/SiteNav";

export const dynamic = "force-dynamic";

export default async function Home() {
  const edition = await getLatestEdition();
  const readHref = edition ? `/post/${edition.edition_date}` : "/archive";

  return (
    <main className="paper">
      <article className="sheet">
        <SiteNav active="cover" />

        <div className="cover-meta">
          <span>
            {cover.estYear} &middot; {cover.circulation}
          </span>
          <span>{cover.parAvion}</span>
        </div>

        <section className="cover-hero">
          <p className="cover-kicker">The</p>
          <h1 className="cover-logo">
            <span className="circled">{cover.logoWord}</span>
            <br />
            {cover.logoRest}
          </h1>
          <p className="cover-tagline">{cover.tagline}</p>
          <p className="cover-description">{cover.description}</p>

          <div className="cover-actions">
            <Link href={readHref} className="cover-cta">
              {cover.ctaLabel} &rarr;
            </Link>
            <Link href="/letter" className="cover-skip">
              {cover.skipLabel}
            </Link>
          </div>
        </section>

        <div className="cover-divider" />
        <p className="cover-inside">{cover.insideLine}</p>
        <p className="cover-printed">{cover.printedLine}</p>

        <footer className="paper-footer">
          <span className="heart">&hearts;</span>
          <p>The Aaradhya Post &middot; Circulation: One &middot; Par Avion</p>
          <p>Published every Friday with love by the editor.</p>
        </footer>
      </article>
    </main>
  );
}
