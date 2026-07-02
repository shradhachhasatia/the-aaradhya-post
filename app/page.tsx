import { masthead, gate } from "./content";
import { getLatestEdition } from "../lib/supabase";
import { GateScene } from "../components/scrapbook/GateScene";

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
    <GateScene
      eyebrow={gate.eyebrow}
      title={masthead.title}
      motto={masthead.motto}
      tagline={gate.tagline}
      waitingLine={gate.waitingLine}
      openLabel={gate.openLabel}
      archiveLabel={gate.archiveLabel}
      editionDate={edition?.edition_date ?? null}
      editionLabel={edition ? formatDate(edition.edition_date) : null}
    />
  );
}
