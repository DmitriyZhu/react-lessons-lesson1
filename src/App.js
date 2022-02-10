import logo from './logo.svg';
import './App.css';
import Message from './Message';

function App(props) {
  console.log(props);

  return (
    <div className="App">
      <header 
          className={`App-header ${props.showRed?'header-red':'header-green'}`} 
          style={{ top: props?.topPosition || '10px' }}
        >
        <h3>Name: {props.myName}</h3>
        <h1><Message message={props.message} /></h1>
      </header>
    </div>
  );
}

export default App;
