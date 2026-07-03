type Props = {
  motto: string;
  metaLeft: string;
  metaRight: string;
};

export function Masthead({ motto, metaLeft, metaRight }: Props) {
  return (
    <header className="masthead">
      <p className="masthead-eyebrow">
        <span>{metaRight}</span>
        <span className="masthead-eyebrow-dot">·</span>
        <span>{metaLeft}</span>
      </p>
      <h1 className="masthead-logo">The Aaradhya Post</h1>
      <p className="masthead-motto">{motto}</p>
    </header>
  );
}
