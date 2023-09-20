import './App.css';
import { Body1 } from './components/Body1/Body1.js';
import { Body2 } from './components/Body2/Body2.js';
import { Body3 } from './components/Body3/Body3.js';
import { Foot } from './components/Foot/Foot';
import { Adding } from './components/Logic/Logic.js';
import { Naving } from './components/Nav/Nav.js';

function App() {
  return (
    <div className="App container">
      <Naving />
      <Body1 />
      <Adding />
      <Body2 />
      <Body3 />
      <Foot />
    </div>
  );
}

export default App;
