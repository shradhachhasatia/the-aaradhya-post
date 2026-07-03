type Props = {
  motto: string;
  metaLeft: string;
  metaRight: string;
};

export function Masthead({ motto, metaLeft, metaRight }: Props) {
  return (
    <header className="masthead">
      <div className="masthead-rule" />
      <h1 className="masthead-logo">
        <span className="masthead-the">The</span>
        <span className="masthead-name">Aaradhya</span>
        <span className="masthead-post">Post</span>
      </h1>
      <p className="masthead-motto">{motto}</p>
      <div className="masthead-rule" />
      <div className="masthead-meta">
        <span>{metaLeft}</span>
        <span className="masthead-meta-dot">&middot;</span>
        <span>{metaRight}</span>
      </div>
    </header>
  );
}
