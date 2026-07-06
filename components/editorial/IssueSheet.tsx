import Link from "next/link";
import { masthead } from "../../app/content";
import type { Edition } from "../../lib/supabase";
import { Masthead } from "./Masthead";
import { SiteNav } from "./SiteNav";
import { StampSeal, SunLine, HeartLine, BookLine, StarLine } from "./Icons";

function iconFor(title: string) {
  const t = title.toLowerCase();
  if (t.includes("weather")) return <SunLine className="column-icon" />;
  if (t.includes("sport")) return <HeartLine className="column-icon" />;
  if (t.includes("cultur")) return <BookLine className="column-icon" />;
  return <StarLine className="column-icon" />;
}

function formatDate(dateStr: string) {
  return new Date(`${dateStr}T00:00:00`).toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

type Props = {
  edition: Edition;
  issueNumber: number;
  isArchived?: boolean;
};

export function IssueSheet({ edition, issueNumber, isArchived }: Props) {
  return (
    <main className="paper">
      <article className="sheet">
        <SiteNav active="archive" />

        {isArchived && (
          <Link href="/" className="topnav-link issue-back">
            &larr; Latest Issue
          </Link>
        )}

        <Masthead
          motto={masthead.motto}
          metaLeft={formatDate(edition.edition_date)}
          metaRight={`No. ${String(issueNumber).padStart(2, "0")}`}
        />

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
                <h3 className="column-title">
                  {iconFor(col.title)}
                  {col.title}
                </h3>
                <p>{col.body}</p>
              </div>
            ))}
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

        {/* Song of the week */}
        {edition.song_title && (
          <section className="song">
            <div className="song-card">
              <StampSeal className="song-stamp" />
              <div className="song-info">
                <span className="song-label">Song Of The Week</span>
                <p className="song-title">{edition.song_title}</p>
                {edition.song_artist && (
                  <p className="song-artist">{edition.song_artist}</p>
                )}
                {edition.song_url && (
                  <a
                    className="song-link"
                    href={edition.song_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Press Play &rarr;
                  </a>
                )}
              </div>
            </div>
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
          <span className="heart">&hearts;</span>
          <p>{edition.footer_line}</p>
        </footer>
      </article>
    </main>
  );
}
