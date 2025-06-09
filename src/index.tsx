export interface PlaceHolderProps {
  width: number;
  height: number;
  bgColor?: string;
  fgColor?: string;
  text?: string;
  fontSize?: number;
  borderRadius?: number;
  style?: React.CSSProperties;
  className?: string;
}

export function generateSvgDataUrl({
  width,
  height,
  bgColor = '#eee',
  fgColor = '#aaa',
  text = '',
  fontSize,
  borderRadius = 0,
}: PlaceHolderProps): string {
  const font = fontSize || Math.round(Math.min(width, height) / 5);
  const displayText = text || `${width}x${height}`;
  const svg = `<svg width='${width}' height='${height}' xmlns='http://www.w3.org/2000/svg'><rect rx='${borderRadius}' width='100%' height='100%' fill='${bgColor}'/><text x='50%' y='50%' fill='${fgColor}' font-family='Arial,Helvetica,sans-serif' font-size='${font}' dominant-baseline='middle' text-anchor='middle'>${displayText}</text></svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

export const PlaceHolder: React.FC<PlaceHolderProps> = ({
  width,
  height,
  bgColor = '#eee',
  fgColor = '#aaa',
  text,
  fontSize,
  borderRadius = 0,
  style,
  className,
}) => {
  const font = fontSize || Math.round(Math.min(width, height) / 5);
  const displayText = text || `${width}x${height}`;
  return (
    <svg
      width={width}
      height={height}
      style={style}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        rx={borderRadius}
        width="100%"
        height="100%"
        fill={bgColor}
      />
      <text
        x="50%"
        y="50%"
        fill={fgColor}
        fontFamily="Arial,Helvetica,sans-serif"
        fontSize={font}
        dominantBaseline="middle"
        textAnchor="middle"
      >
        {displayText}
      </text>
    </svg>
  );
};
