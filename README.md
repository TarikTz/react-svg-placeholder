# React SVG Placeholder TS

A lightweight, typesafe React component and utility for generating SVG placeholder images.

## Installation

```bash
npm install react-svg-placeholder-ts
```

## Usage

### React Component

```tsx
import { PlaceHolder } from 'react-svg-placeholder-ts';

<PlaceHolder width={200} height={150} />
```

### As Data URL (for <img> or Next.js <Image>)

```tsx
import { generateSvgDataUrl } from 'react-svg-placeholder-ts';

<img src={generateSvgDataUrl({ width: 200, height: 150 })} alt="placeholder" />
```

## Props

- `width` (number, required)
- `height` (number, required)
- `bgColor` (string, optional, default: `#eee`)
- `fgColor` (string, optional, default: `#aaa`)
- `text` (string, optional, default: "{width}x{height}")
- `fontSize` (number, optional)
- `borderRadius` (number, optional, default: 0)
- `style` (React.CSSProperties, optional)
- `className` (string, optional)

## License

License MIT