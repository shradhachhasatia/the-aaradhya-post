import { masthead, gate } from "./content";
import { getLatestEdition, getIssueNumber } from "../lib/supabase";
import { CoverScene } from "../components/editorial/CoverScene";

export const dynamic = "force-dynamic";

function formatDate(dateStr: string) {
  return new Date(`${dateStr}T00:00:00`).toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export default async function Gate() {
  const edition = await getLatestEdition();
  const issueNumber = edition ? await getIssueNumber(edition.edition_date) : 1;

  return (
    <CoverScene
      eyebrow={gate.eyebrow}
      title={masthead.title}
      motto={masthead.motto}
      waitingLine={gate.waitingLine}
      openLabel={gate.openLabel}
      archiveLabel={gate.archiveLabel}
      editionDate={edition?.edition_date ?? null}
      editionLabel={edition ? formatDate(edition.edition_date) : null}
      issueNumber={issueNumber}
      headline={edition?.headline ?? null}
      subhead={edition?.subhead || null}
      columns={edition?.columns ?? []}
      reasonsTitle={edition?.reasons_title ?? null}
      reasonsCount={edition?.reasons_items.length ?? 0}
      songTitle={edition?.song_title ?? null}
      songArtist={edition?.song_artist ?? null}
    />
  );
}
