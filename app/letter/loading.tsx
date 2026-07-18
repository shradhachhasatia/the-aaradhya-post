import { SiteNav } from "../../components/editorial/SiteNav";

export default function Loading() {
  return (
    <main className="paper">
      <article className="sheet">
        <SiteNav active="letter" />
        <p className="loading-line">Unsealing the letter...</p>
      </article>
    </main>
  );
}
