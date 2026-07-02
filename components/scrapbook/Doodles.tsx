export function HeartDoodle({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 28" className={className} fill="none">
      <path
        d="M16 26C16 26 2 17.5 2 8.8 2 4.3 5.4 1 9.6 1c2.6 0 4.9 1.4 6.4 3.6C17.5 2.4 19.8 1 22.4 1 26.6 1 30 4.3 30 8.8 30 17.5 16 26 16 26Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function StarDoodle({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} fill="none">
      <path
        d="M16 2 L19.5 12.5 L30 13 L21.5 19.5 L24.5 30 L16 23.5 L7.5 30 L10.5 19.5 L2 13 L12.5 12.5 Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function SquiggleDoodle({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 20" className={className} fill="none">
      <path
        d="M2 14C10 4 18 4 26 14C34 24 42 24 50 14C58 4 66 4 74 14C82 24 90 24 98 14C104 7 110 6 118 10"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function ArrowDoodle({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 90 60" className={className} fill="none">
      <path
        d="M4 6C34 2 66 14 78 40"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M62 34C68 38 74 42 79 42C79 47 76 53 74 58"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function SparkleDoodle({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} fill="currentColor">
      <path d="M20 0C20 10 24 16 30 20C24 24 20 30 20 40C20 30 16 24 10 20C16 16 20 10 20 0Z" />
    </svg>
  );
}
