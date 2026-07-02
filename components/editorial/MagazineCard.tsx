import { ReactNode } from "react";
import { motion } from "framer-motion";

type Tone = "rust" | "ink" | "sand" | "olive";

type Props = {
  tag: string;
  title: string;
  teaser?: string;
  tone?: Tone;
  icon?: ReactNode;
  lead?: boolean;
};

export function MagazineCard({ tag, title, teaser, tone = "sand", icon, lead }: Props) {
  return (
    <motion.article
      className={`mag-card mag-card-${tone} ${lead ? "mag-card-lead" : ""}`}
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <div className="mag-card-block">
        {icon && <span className="mag-card-icon">{icon}</span>}
      </div>
      <div className="mag-card-body">
        <span className="mag-card-tag">{tag}</span>
        <h3 className="mag-card-title">{title}</h3>
        {teaser && <p className="mag-card-teaser">{teaser}</p>}
      </div>
    </motion.article>
  );
}
