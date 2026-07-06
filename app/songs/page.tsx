import { getEditionsWithSongs } from "../../lib/supabase";
import { SiteNav } from "../../components/editorial/SiteNav";
import { songs } from "../content";

export const dynamic = "force-dynamic";

export default async function SongsPage() {
  const editions = await getEditionsWithSongs();
  const [current, ...rest] = editions;

  return (
    <main className="paper">
      <article className="sheet">
        <SiteNav active="songs" />

        <section className="songs-hero">
          <p className="songs-eyebrow">{songs.eyebrow}</p>
          <h1 className="songs-headline">{songs.headline}</h1>
          <p className="songs-tagline">{songs.tagline} &#9834;</p>
        </section>

        <div className="site-rule" />

        {current ? (
          <section className="song-feature">
            {current.song_cover_url && (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={current.song_cover_url} alt="" className="song-feature-art" />
            )}
            <div className="song-feature-info">
              <span className="song-label">{songs.trackOfWeekLabel}</span>
              <h2 className="song-feature-title">{current.song_title}</h2>
              {current.song_artist && (
                <p className="song-feature-artist">{current.song_artist}</p>
              )}
              {current.song_url && (
                <a
                  className="song-link"
                  href={current.song_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Press Play &rarr;
                </a>
              )}
            </div>
          </section>
        ) : (
          <p className="archive-empty">No song of the week yet.</p>
        )}

        {rest.length > 0 && (
          <section className="mixtape">
            <div className="mixtape-head">
              <h3 className="section-title">{songs.restLabel}</h3>
              <span className="mixtape-side">{songs.sideLabel}</span>
            </div>
            <ul className="mixtape-list">
              {rest.map((edition) => (
                <li key={edition.id}>
                  <span className="mixtape-title">{edition.song_title}</span>
                  {edition.song_artist && (
                    <span className="mixtape-artist">{edition.song_artist}</span>
                  )}
                </li>
              ))}
            </ul>
          </section>
        )}

        <footer className="paper-footer">
          <span className="heart">&hearts;</span>
          <p>Printed with love, exclusively for Aaradhya.</p>
        </footer>
      </article>
    </main>
  );
}
