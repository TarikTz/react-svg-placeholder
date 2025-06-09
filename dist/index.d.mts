interface PlaceHolderProps {
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
declare function generateSvgDataUrl({ width, height, bgColor, fgColor, text, fontSize, borderRadius, }: PlaceHolderProps): string;
declare const PlaceHolder: React.FC<PlaceHolderProps>;

export { PlaceHolder, type PlaceHolderProps, generateSvgDataUrl };
