import { StickOnScroll } from 'react-stick-on-scroll';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import './App.css';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/hljs';

function App() {
  return (
    <div className="App">
      <StickOnScroll>
        <header className="sticky-header">
          <h1>React Stick On Scroll</h1>
          <nav>
            <a href="#features">Features</a>
            <a href="#examples">Examples</a>
            <a href="#installation">Installation</a>
            <a href="https://github.com/joewatts000/react-stick-on-scroll">GitHub</a>
          </nav>
        </header>
      </StickOnScroll>

      <main>
        <section className="hero">
          <h1>React Stick On Scroll</h1>
          <p>A lightweight, customizable React component that smoothly animates elements into a sticky position based on scroll position.</p>
          <pre>npm install react-stick-on-scroll</pre>
          <p>or</p>
          <pre>yarn add react-stick-on-scroll</pre>
        </section>

        <section id="features">
          <h2>Features</h2>
          <ul>
            <li>🚀 Smooth scroll-based animations</li>
            <li>📦 Lightweight with minimal dependencies</li>
            <li>🔧 Highly customizable</li>
            <li>📱 Responsive and works with dynamic content</li>
          </ul>
        </section>

        <section id="examples" className='hero'>
          <h2>Examples</h2>
          <div className="example-container">
            <SyntaxHighlighter language="javascript" style={dracula} wrapLongLines>
              {`
  import { StickOnScroll } from 'react-stick-on-scroll';

  function App() {
    return (
      <div>
        <StickOnScroll>
          <header>
            Animates down from the top as you scroll
          </header>
        </StickOnScroll>
          {/* Your page content */}
      </div>
    );
  }
              `}
            </SyntaxHighlighter>
          </div>
          <div className="example-container">
            <p>If you need more control, you can use the useScrollPercentage hook directly:</p>
            <SyntaxHighlighter language='javascript' style={dracula} wrapLongLines>
              {`
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
          transform: \`translateY(\${currentTop}px)\`,
          position: 'fixed',
          width: '100%',
          zIndex: 9
        }}
      >
        Custom implementation
      </div>
    );
  }
              `}
            </SyntaxHighlighter>
          </div>
        </section>

        <section id="installation">
          <h2>Contributing</h2>
          <p>Contributions are welcome! Feel free to open an issue or submit a pull request.</p>
          <p>Github: <a href="https://github.com/joewatts000/react-stick-on-scroll?tab=readme-ov-file">joewatts000/react-stick-on-scroll</a></p>
        </section>
      </main>

      <footer>
        <p>MIT License © {new Date().getFullYear()} Joe Watts</p>
      </footer>
    </div>
  );
}

export default App;
