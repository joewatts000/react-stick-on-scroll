# react-stick-on-scroll

A lightweight, customizable React component that smoothly animates elements based on scroll position. Perfect for creating sticky headers, floating elements, or scroll-triggered animations based on current scroll position

## Features

- 🚀 Smooth scroll-based animations
- 📦 Lightweight
- 🔧 Highly customizable
- 📱 Responsive and works with dynamic content
- 🎣 Includes a useful `useScrollPercentage` hook for custom implementations

<br />
<p align="center">
<img src="https://github.com/user-attachments/assets/405c3bf6-5a12-4c94-89ad-0aad605d474b" alt="react-stick-on-scroll" title="react-stick-on-scroll" width="219" height="480" />
</p>
<br />

## Installation

```bash
npm install react-stick-on-scroll
```

or

```bash
yarn add react-stick-on-scroll
```

## Usage

### Basic Example

```jsx
import { StickOnScroll } from 'react-stick-on-scroll';

function App() {
  return (
    <div>
      <StickOnScroll>
        <header>
          This header will animate down from the top as you scroll
        </header>
      </StickOnScroll>
      
      {/* Your page content */}
    </div>
  );
}
```

Demo: <https://joewatts000.github.io/react-stick-on-scroll>

### Using the Hook Directly

If you need more control, you can use the `useScrollPercentage` hook directly:

```jsx
import { useScrollPercentage } from 'react-stick-on-scroll';

function CustomComponent() {
  const headerRef = useRef(null);
  const [headerHeight, setHeaderHeight] = useState(0);
  
  useEffect(() => {
    if (headerRef.current) {
      setHeaderHeight(headerRef.current.offsetHeight);
    }
  }, []);

  const scrollPercentage = useScrollPercentage(0, headerHeight);
  const currentTop = -headerHeight + (headerHeight * scrollPercentage) / 100;

  return (
    <div
      ref={headerRef}
      style={{
        transform: `translateY(${currentTop}px)`,
        position: 'fixed',
        width: '100%',
        zIndex: 9
      }}
    >
      Custom implementation
    </div>
  );
}
```

## API

### StickOnScroll Component

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `scrollTarget`| HTMLElement | window | current scrolling element |
| `startScroll` | number | 0 | The scroll position (in pixels) at which the animation begins |
| `className` | string | '' | Additional CSS classes to apply to the wrapper |
| `children` | ReactNode | - | The content to be animated |
| `zIndex`   | number | 1 | zindex for the element |
| `...props` | any | - | Any additional props are passed to the wrapper div |

### useScrollPercentage Hook

```typescript
function useScrollPercentage(scrollTarget: HTMLElement, startScroll: number): number
```

Returns a number between 0 and 100 representing the scroll progress between `startScroll` and `startScroll + element height` at which point the element will be fully in view

#### Parameters

- `scrollTarget`: The element that is currently responsible for scrolling, defaults to window
- `startScroll`: The scroll position (in pixels) at which to start calculating the percentage

#### Return Value

A number between 0 and 100 representing the current scroll percentage.

## Demo

Demo link: <https://joewatts000.github.io/react-stick-on-scroll>

## Troubleshooting

### Common Issues

1. **Component not animating**: Ensure there's enough content on the page to scroll
2. **Incorrect positioning**: Check if the parent container has any CSS that might interfere with positioning

## License

MIT

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request <https://github.com/joewatts000/react-stick-on-scroll>
