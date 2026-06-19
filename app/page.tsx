import {
  masthead,
  leadStory,
  columns,
  reasons,
  quote,
  coupon,
  footer,
} from "./content";

function editionLine() {
  if (masthead.editionLabel) return masthead.editionLabel;
  const today = new Date();
  return today.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function Home() {
  return (
    <main className="paper">
      <article className="sheet">
        {/* Masthead */}
        <header className="masthead">
          <div className="masthead-rule top">
            <span>{masthead.priceLine}</span>
            <span>{masthead.motto}</span>
            <span>Est. With Love</span>
          </div>
          <h1 className="title">{masthead.title}</h1>
          <div className="masthead-rule bottom">
            <span className="edition">{editionLine()}</span>
          </div>
        </header>

        {/* Lead story */}
        <section className="lead">
          <p className="kicker">{leadStory.kicker}</p>
          <h2 className="headline">{leadStory.headline}</h2>
          <p className="subhead">{leadStory.subhead}</p>
          <p className="byline">{leadStory.byline}</p>
          <div className="lead-body">
            {leadStory.body.map((para, i) => (
              <p key={i} className={i === 0 ? "dropcap" : ""}>
                {para}
              </p>
            ))}
          </div>
        </section>

        {/* Columns */}
        <section className="columns">
          {columns.map((col) => (
            <div key={col.title} className="column">
              <h3 className="column-title">{col.title}</h3>
              <p>{col.body}</p>
            </div>
          ))}
        </section>

        {/* Featured quote */}
        <section className="pull-quote">
          <blockquote>“{quote.text}”</blockquote>
          <cite>{quote.attribution}</cite>
        </section>

        {/* Reasons / top headlines */}
        <section className="reasons">
          <h3 className="section-title">{reasons.title}</h3>
          <ul>
            {reasons.items.map((item, i) => (
              <li key={i}>
                <span className="num">{i + 1}.</span> {item}
              </li>
            ))}
          </ul>
        </section>

        {/* Coupon */}
        <section className="coupon">
          <span className="coupon-label">{coupon.label}</span>
          <h3 className="coupon-title">{coupon.title}</h3>
          <p className="coupon-fine">{coupon.fineText}</p>
        </section>

        <footer className="paper-footer">
          <span className="heart">♥</span>
          <p>{footer.line}</p>
        </footer>
      </article>
    </main>
  );
}
