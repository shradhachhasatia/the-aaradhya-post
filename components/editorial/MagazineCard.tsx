import { ReactNode } from "react";
import { motion } from "framer-motion";

type Props = {
  tag: string;
  title: string;
  teaser?: string;
  icon?: ReactNode;
  lead?: boolean;
  accent?: boolean;
};

export function MagazineCard({ tag, title, teaser, icon, lead, accent }: Props) {
  return (
    <motion.article
      className={`mag-row ${lead ? "mag-row-lead" : ""}`}
      whileHover={{ x: 4 }}
      transition={{ type: "spring", stiffness: 300, damping: 24 }}
    >
      <div className={`mag-row-tag ${accent ? "mag-row-tag-accent" : ""}`}>
        {icon && <span className="mag-row-icon">{icon}</span>}
        <span>{tag}</span>
      </div>
      <div className="mag-row-body">
        <h3 className="mag-row-title">{title}</h3>
        {teaser && <p className="mag-row-teaser">{teaser}</p>}
      </div>
    </motion.article>
  );
}
