import Button from './components/Button';
import ChevronDown from './components/Icons/ChevronDown';
import Select from './components/Select';
import Input from './components/Input';
import Textarea from './components/Textarea';
import { ChangeEvent, useState } from 'react';

function App() {
  const [inputValue, setInputValue] = useState('awesome!');
  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <div className='App'>
      <Button variant='secondary'>Default</Button>
      <ChevronDown size='sm' />
      <Select>
        <option value='volvo'>Volvo</option>
        <option value='saab'>Saab</option>
        <option value='mercedes'>Mercedes</option>
        <option value='audi'>Audi</option>
      </Select>
      <Input value={inputValue} onChange={changeHandler} />
      <Textarea />
    </div>
  );
}

export default App;
