import { ReactNode } from "react";
import { WashiTape } from "./WashiTape";

type Props = {
  rotate?: number;
  caption?: string;
  tapeColor?: "rose" | "mustard" | "sage" | "sky";
  children: ReactNode;
  className?: string;
};

export function Polaroid({
  rotate = -4,
  caption,
  tapeColor = "rose",
  children,
  className = "",
}: Props) {
  return (
    <div
      className={`polaroid ${className}`}
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      <WashiTape
        rotate={rotate < 0 ? 8 : -8}
        color={tapeColor}
        className="polaroid-tape"
      />
      <div className="polaroid-photo">{children}</div>
      {caption && <p className="polaroid-caption">{caption}</p>}
    </div>
  );
}
