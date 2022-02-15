import logo from './logo.svg';
import './App.css';
import Header from './Header.jsx';
import Name from './Name.jsx';
import Okay from "./horse.mp4";

function App() {
  return (
    <div className="App">
      <video 
      autoPlay loop muted
      style={{
        position: "absolute",
        width: "100%",
        left: "50%",
        top: "50%",
        height: "100%",
        objectFit: "cover",
        transform: "translate(-50%, -50%)",
        zIndex: "0",
      }}>
        <source src={Okay} type="video/mp4"/>
      </video>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Header 
        style={{
          zIndex:"1",
        }}
        />

        <Name />

        <p
        style={{
          zIndex: "1",
        }}
        >
          C L I C K
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        
        </a>
      </header>
    </div>
  );
}

export default App;
