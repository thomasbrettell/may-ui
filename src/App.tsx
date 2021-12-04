import './App.css';
import Button from './components/Button';
import ChevronDown from './components/Icons/ChevronDown';

function App() {
  return (
    <div className="App">
      <Button variant='secondary'>Default</Button>
      <ChevronDown size='lg' />
    </div>
  );
}

export default App;
