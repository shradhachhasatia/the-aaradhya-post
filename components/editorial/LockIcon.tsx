export function LockIcon({
  open,
  className,
}: {
  open?: boolean;
  className?: string;
}) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none">
      <rect
        x="14"
        y="28"
        width="36"
        height="28"
        rx="2"
        stroke="currentColor"
        strokeWidth="2.5"
      />
      <path
        d={
          open
            ? "M21 28V20C21 12.8 26.8 7 34 7C39.5 7 44.2 10.4 46.1 15.3"
            : "M21 28V20C21 12.8 26.3 7 33 7C39.7 7 45 12.8 45 20V28"
        }
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <circle cx="32" cy="40" r="3" fill="currentColor" />
      <path d="M32 43V49" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}
