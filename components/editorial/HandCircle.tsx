type Props = { className?: string };

/**
 * A hand-drawn circling mark: an imperfect loop that overshoots its own
 * start, like a pen circling a word twice and lifting off mid-stroke.
 */
export function HandCircle({ className }: Props) {
  return (
    <svg
      className={className}
      viewBox="0 0 200 100"
      preserveAspectRatio="none"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M106,7 C48,4 11,28 13,51 C15,76 49,94 105,93 C160,92 191,74 188,50 C185,27 151,8 90,8 C66,8 51,12 40,19"
        stroke="currentColor"
        strokeWidth="5.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
