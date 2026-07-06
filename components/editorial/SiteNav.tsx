import Link from "next/link";

type Tab = "cover" | "archive" | "letter" | "songs";

const TABS: { key: Tab; label: string; href: string }[] = [
  { key: "cover", label: "Cover", href: "/" },
  { key: "archive", label: "Archive", href: "/archive" },
  { key: "letter", label: "Letter", href: "/letter" },
  { key: "songs", label: "Songs", href: "/songs" },
];

export function SiteNav({ active }: { active: Tab }) {
  return (
    <header className="site-header">
      <p className="site-title">
        The Aaradhya Post <span className="site-spark">&#10022;</span>
      </p>
      <nav className="site-tabs">
        {TABS.map((tab) => (
          <Link
            key={tab.key}
            href={tab.href}
            className={`site-tab${tab.key === active ? " site-tab-active" : ""}`}
          >
            {tab.label}
          </Link>
        ))}
      </nav>
      <div className="site-rule" />
    </header>
  );
}
