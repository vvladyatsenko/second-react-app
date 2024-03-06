import Stateless from './Components/Stateless';
import Stateful from './Components/Stateful';
import Class from './Components/ClassComp';
import './App.css';

function App() {
  return (
    <>
      <div className="container">
        <Stateless text="TEST">Stateless</Stateless>
        <Stateful>Stateful</Stateful>
        <Class>Class</Class>
      </div>
    </>
  );
}

export default App;
