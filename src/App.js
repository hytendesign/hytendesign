import logo from './hyten-design-logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Web Design and Development</p>
        <button className="App-link" href="mailto:daniel@hytendesign.com">Get in Touch</button>
      </header>
      <footer>
        <div className="App-footer">
          <p>&#169;2023 Hyten Design</p>
          <p >Email: <a className="App-email" href="mailto:daniel@hytendesign.com">daniel@hytendesign.com</a></p>
          <p>Tel: +44 07854 970411</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
