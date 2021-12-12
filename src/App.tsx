import Button from './components/Button';
import ChevronDown from './components/Icons/ChevronDown';
import Select from './components/Select';
import Input from './components/Input';
import Textarea from './components/Textarea';

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
      <Input value='awesome' />
      <Textarea />
    </div>
  );
}

export default App;
