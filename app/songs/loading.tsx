import { SiteNav } from "../../components/editorial/SiteNav";

export default function Loading() {
  return (
    <main className="paper">
      <article className="sheet">
        <SiteNav active="songs" />
        <p className="loading-line">Cueing up the record...</p>
      </article>
    </main>
  );
}
