import Timeline from './components/Timeline';
import './App.css';
import heroImage from './assets/chess-bg-color.jpg';

function App() {
  return (
    <main className="app">
      <section className="hero">
        <img className="hero-image" src={heroImage} alt="Chess board" />
        <div className="hero-overlay" />
        <div className="hero-content">
          <span className="hero-kicker">ABES EC · CHESS COMMUNITY</span>
          <h1>EN PASSANT</h1>
          <p>Vive L'EnPassant</p>
          <div className="hero-rule" />
          <blockquote>“Every move tells a story.”</blockquote>
        </div>
      </section>
      <Timeline />
      <footer className="footer">EN PASSANT · ABES EC</footer>
    </main>
  );
}

export default App;
