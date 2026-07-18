import { SiteNav } from "../../components/editorial/SiteNav";

export default function Loading() {
  return (
    <main className="paper">
      <article className="sheet">
        <SiteNav active="archive" />
        <p className="loading-line">Pulling the back issues...</p>
      </article>
    </main>
  );
}
