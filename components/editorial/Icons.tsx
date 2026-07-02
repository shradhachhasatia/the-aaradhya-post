type Props = { className?: string };

export function HeartLine({ className }: Props) {
  return (
    <svg viewBox="0 0 48 42" className={className} fill="none">
      <path
        d="M24 38C24 38 4 26 4 13.5C4 6.6 9.4 1.5 16 1.5C19.6 1.5 23 3.4 24 6.8C25 3.4 28.4 1.5 32 1.5C38.6 1.5 44 6.6 44 13.5C44 26 24 38 24 38Z"
        stroke="currentColor"
        strokeWidth="1.6"
      />
    </svg>
  );
}

export function SunLine({ className }: Props) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none">
      <circle cx="24" cy="24" r="10" stroke="currentColor" strokeWidth="1.6" />
      <g stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
        <path d="M24 2V8" />
        <path d="M24 40V46" />
        <path d="M2 24H8" />
        <path d="M40 24H46" />
        <path d="M8.5 8.5L12.5 12.5" />
        <path d="M35.5 35.5L39.5 39.5" />
        <path d="M39.5 8.5L35.5 12.5" />
        <path d="M12.5 35.5L8.5 39.5" />
      </g>
    </svg>
  );
}

export function BookLine({ className }: Props) {
  return (
    <svg viewBox="0 0 48 40" className={className} fill="none">
      <path
        d="M24 8C21 4 14 2 4 2V33C14 33 21 35 24 38C27 35 34 33 44 33V2C34 2 27 4 24 8Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path d="M24 8V38" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

export function MusicLine({ className }: Props) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none">
      <path d="M18 34V8L42 3V29" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <ellipse cx="12" cy="36" rx="6" ry="5" stroke="currentColor" strokeWidth="1.6" />
      <ellipse cx="36" cy="31" rx="6" ry="5" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

export function StarLine({ className }: Props) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none">
      <path
        d="M24 3L29.5 18.5L45 20L33 30L36.5 45L24 36.5L11.5 45L15 30L3 20L18.5 18.5Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ArrowLine({ className }: Props) {
  return (
    <svg viewBox="0 0 48 20" className={className} fill="none">
      <path d="M0 10H46" stroke="currentColor" strokeWidth="1.6" />
      <path d="M37 2L46 10L37 18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
