interface ColorBallProps {
  idx: number;
  color: string;
  onChangeColor: (idx: number, color: string) => void;
}

export default function ColorBall({
  idx,
  color,
  onChangeColor,
}: ColorBallProps) {
  return (
    <div
      className={`w-8 h-8 rounded-full cursor-pointer`}
      style={{ backgroundColor: color }}
      aria-label={`color ball - ${color}`}
      onClick={() => onChangeColor(idx, color)}
    />
  );
}
