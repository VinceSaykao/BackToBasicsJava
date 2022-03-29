import logo from './logo.svg';
import './App.css';

import Header from '../Header/Header';
import Instructions from '../Instructions/Instructions';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <img src={logo} className="App-logo" alt="logo" />
        {/* <p>
          Make it Hot Baby and make it nasty.
        </p> */}
        <Instructions />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;


/* -
-HTML attributes: class, for
-JSX attributes: className,htmlfor
-JSX returns our function 
-React is functional programming
-components are to add stuff as HTML and do stuff with it


 */






