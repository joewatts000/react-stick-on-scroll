import React from 'react';
import { StickOnScroll } from 'react-stick-on-scroll';
import './App.css';

function App() {
  return (
    <div className="App">
      <StickOnScroll startScroll={100}>
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
          <p>A lightweight, customizable React component that smoothly animates elements based on scroll position.</p>
          <pre>npm install react-stick-on-scroll</pre>
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

        <section id="examples">
          <h2>Examples</h2>
          <div className="example-container">
            {/* Add more examples here */}
          </div>
        </section>

        <section id="installation">
          <h2>Installation</h2>
          <pre>npm install react-stick-on-scroll</pre>
          <h3>Usage</h3>
          <pre>{}</pre>
        </section>
      </main>

      <footer>
        <p>MIT License © {new Date().getFullYear()} Joe Watts</p>
      </footer>
    </div>
  );
}

export default App;
