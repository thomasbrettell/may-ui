import './App.css';
import Button from './components/Button';
import ChevronDown from './components/Icons/ChevronDown';

function App() {
  return (
    <div className="App">
      <Button variant='warning'>Default</Button>
      <ChevronDown size='lg' />
    </div>
  );
}

export default App;
