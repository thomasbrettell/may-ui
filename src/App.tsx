import './App.css';
import Button from './components/Button';
import ChevronDown from './components/Icons/ChevronDown';
import CaretDown from './components/Icons/CaretDown';

function App() {
  return (
    <div className="App">
      <Button variant='warning'>Default</Button>
      <ChevronDown size='lg' />
      <CaretDown />
    </div>
  );
}

export default App;
