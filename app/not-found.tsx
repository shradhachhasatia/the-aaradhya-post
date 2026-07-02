import Link from "next/link";

export default function NotFound() {
  return (
    <main className="paper">
      <article className="sheet">
        <header className="masthead">
          <h1 className="title">Page Not Found</h1>
        </header>
        <section className="lead" style={{ textAlign: "center" }}>
          <p className="subhead">
            This edition never went to print. Maybe it hasn&rsquo;t been written
            yet.
          </p>
          <Link href="/" className="gate-button" style={{ display: "inline-block", marginTop: 20 }}>
            Back to the front page
          </Link>
        </section>
      </article>
    </main>
  );
}
