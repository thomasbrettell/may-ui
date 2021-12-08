import Button from './components/Button';
import ChevronDown from './components/Icons/ChevronDown';
import Select from './components/Select';

function App() {
  return (
    <div className='App'>
      <Button variant='secondary'>Default</Button>
      <ChevronDown size='lg' />
      <Select>
        <option value='volvo'>Volvo</option>
        <option value='saab'>Saab</option>
        <option value='mercedes'>Mercedes</option>
        <option value='audi'>Audi</option>
      </Select>
    </div>
  );
}

export default App;
