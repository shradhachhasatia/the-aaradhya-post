type Props = {
  rotate?: number;
  color?: "rose" | "mustard" | "sage" | "sky";
  width?: number;
  className?: string;
  style?: React.CSSProperties;
};

export function WashiTape({
  rotate = 0,
  color = "rose",
  width = 90,
  className = "",
  style = {},
}: Props) {
  return (
    <span
      className={`washi washi-${color} ${className}`}
      style={{
        width,
        transform: `rotate(${rotate}deg)`,
        ...style,
      }}
    />
  );
}
