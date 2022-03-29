import logo from './logo.svg';
import './App.css';
import {useSelector, useDispatch} from 'react-redux';
import {useState} from 'react';
import ElementList from '../ElementList/ElementList';
import ElementForm from '../ElementForm/ElementForm';

function App() {
  // useSelector accepts a functio that tells it which part of the store you want
  // here we return the whole store
  // const reduxStore = useSelector(store => store)
  const count = useSelector(store => store.count); // how we grab one reduce state, return one part of store
  // const elementList = useSelector(store => store.elementList);

  // "dispatch" is how we talk to redux from react
  const dispatch = useDispatch();

  // track new element to add our "local" state
  // const [newElement, setNewElement] = useState('');

  // const handleSubmit = (event) => {
  //   event.preventDefault();

  //   dispatch({
  //     tpye: 'ADD_ELEMENT',
  //     payload: newElement
  //   });

  //   // clear the form field
  //   setNewElement('');
  // }

  return (
    <div className="App">
      <header className="App-header">
        {/* <pre>{JSON.stringify(reduxStore)}</pre> */}
        <p>Count is: {count}</p>
        <button onClick={() => dispatch ({type: 'INCREASE'})}>Increase</button><br></br>
        <button onClick={() => dispatch ({type: 'DECREASE'})}>Decrease</button><br></br>
        {/* <button onClick={() => dispatch ({type: 'ADD_ELEMENT', payload: 'hydrogen' })}>Add Element</button> */}
        {/* <form onSubmit={handleSubmit}>
          <input 
          type="text"
          placeholder="Element name!"
          value={newElement}
          onChange={event => setNewElement(event.target.value)}
          />
          <button type="submit">ADD</button>
        </form> */}
        <ElementForm />
    

        {/* <ul>
          {elementList.map((element,i) => (
            <li key={i}>{element}</li>
          ))}
        </ul> */}

        <img src={logo} className="App-logo" alt="logo" />
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
