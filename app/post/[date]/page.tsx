import Link from "next/link";
import { notFound } from "next/navigation";
import { masthead } from "../../content";
import { getEditionByDate } from "../../../lib/supabase";

export const dynamic = "force-dynamic";

function formatDate(dateStr: string) {
  return new Date(`${dateStr}T00:00:00`).toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function EditionPage({
  params,
}: {
  params: Promise<{ date: string }>;
}) {
  const { date } = await params;
  const edition = await getEditionByDate(date);

  if (!edition) {
    notFound();
  }

  return (
    <main className="paper">
      <article className="sheet">
        <nav className="topnav">
          <Link href="/">&larr; Home</Link>
          <Link href="/archive">Archive</Link>
        </nav>

        {/* Masthead */}
        <header className="masthead">
          <div className="masthead-rule top">
            <span>{masthead.priceLine}</span>
            <span>{masthead.motto}</span>
            <span>Est. With Love</span>
          </div>
          <h1 className="title">{masthead.title}</h1>
          <div className="masthead-rule bottom">
            <span className="edition">{formatDate(edition.edition_date)}</span>
          </div>
        </header>

        {/* Lead story */}
        <section className="lead">
          <p className="kicker">{edition.kicker}</p>
          <h2 className="headline">{edition.headline}</h2>
          {edition.subhead && <p className="subhead">{edition.subhead}</p>}
          <p className="byline">{edition.byline}</p>
          <div className="lead-body">
            {edition.body.map((para, i) => (
              <p key={i} className={i === 0 ? "dropcap" : ""}>
                {para}
              </p>
            ))}
          </div>
        </section>

        {/* Columns */}
        {edition.columns.length > 0 && (
          <section className="columns">
            {edition.columns.map((col) => (
              <div key={col.title} className="column">
                <h3 className="column-title">{col.title}</h3>
                <p>{col.body}</p>
              </div>
            ))}
          </section>
        )}

        {/* Song of the week */}
        {edition.song_url && (
          <section className="song">
            <span className="song-label">Song Of The Week</span>
            <div className="song-card">
              {edition.song_cover_url && (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  className="song-cover"
                  src={edition.song_cover_url}
                  alt={
                    edition.song_title
                      ? `Cover art for ${edition.song_title}`
                      : "Song cover art"
                  }
                />
              )}
              <div className="song-info">
                {edition.song_title && (
                  <p className="song-title">{edition.song_title}</p>
                )}
                {edition.song_artist && (
                  <p className="song-artist">{edition.song_artist}</p>
                )}
                <a
                  className="song-link"
                  href={edition.song_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Press Play &rarr;
                </a>
              </div>
            </div>
          </section>
        )}

        {/* Featured quote */}
        {edition.quote_text && (
          <section className="pull-quote">
            <blockquote>&ldquo;{edition.quote_text}&rdquo;</blockquote>
            <cite>{edition.quote_attribution}</cite>
          </section>
        )}

        {/* Reasons / top headlines */}
        {edition.reasons_items.length > 0 && (
          <section className="reasons">
            <h3 className="section-title">{edition.reasons_title}</h3>
            <ul>
              {edition.reasons_items.map((item, i) => (
                <li key={i}>
                  <span className="num">{i + 1}.</span> {item}
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Coupon */}
        {edition.coupon_title && (
          <section className="coupon">
            <span className="coupon-label">{edition.coupon_label}</span>
            <h3 className="coupon-title">{edition.coupon_title}</h3>
            <p className="coupon-fine">{edition.coupon_fine}</p>
          </section>
        )}

        <footer className="paper-footer">
          <span className="heart">♥</span>
          <p>{edition.footer_line}</p>
        </footer>
      </article>
    </main>
  );
}
